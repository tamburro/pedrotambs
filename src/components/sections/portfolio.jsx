// src/components/sections/portfolio.jsx
'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { RiArrowRightUpLine, RiExternalLinkLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp';
import { projectsData } from '@/utlits/fackData/projectData';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const DISPLAY_ORDER = [1, 2, 6, 7, 3, 4, 5];
const VISIBLE_COUNT = 6;

const Portfolio = ({ className }) => {
    const { t, lang } = useLanguage();
    const [expanded, setExpanded] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');

    const ordered = DISPLAY_ORDER
        .map(id => projectsData.find(p => p.id === id))
        .filter(Boolean);

    const categories = [...new Set(ordered.map(p => p.category))];

    const filtered = activeFilter === 'all'
        ? ordered
        : ordered.filter(p => p.category === activeFilter);

    const visible = expanded ? filtered : filtered.slice(0, VISIBLE_COUNT);
    const hasMore = filtered.length > VISIBLE_COUNT;

    const handleFilter = (filter) => {
        setActiveFilter(filter);
        setExpanded(false);
    };

    return (
        <section id="portfolio" className={`projects-area ${className}`}>
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <h2>{t.portfolio.title}</h2>
                                    <p>{t.portfolio.sub}</p>
                                </div>
                            </SlideUp>
                        </div>
                    </div>

                    <div className="portfolio-filters">
                        <button
                            className={`portfolio-filter-btn${activeFilter === 'all' ? ' active' : ''}`}
                            onClick={() => handleFilter('all')}
                        >
                            {t.portfolio.filterAll}
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`portfolio-filter-btn${activeFilter === cat ? ' active' : ''}`}
                                onClick={() => handleFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="row project-masonry-active">
                        {visible.map(({ id, category, src, title, slug, tagline, tagline_en, externalLink }) => (
                            <Card
                                key={id}
                                id={id}
                                category={category}
                                src={src}
                                title={title}
                                slug={slug}
                                externalLink={externalLink}
                                tagline={lang === 'en' && tagline_en ? tagline_en : tagline}
                            />
                        ))}
                    </div>
                    {hasMore && (
                        <div className="portfolio-show-more">
                            <button
                                className="theme-btn theme-btn--outline"
                                onClick={() => setExpanded(v => !v)}
                            >
                                {expanded ? t.portfolio.showLess : t.portfolio.showMore}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Portfolio


const Card = ({ category, title, src, id, slug, tagline, externalLink }) => {
    const href = externalLink || `/works/${slug}`;
    const isExternal = !!externalLink;

    return (
        <div className="col-lg-4 col-md-6 item branding game">
            <SlideUp delay={id}>
                <div className="project-item style-two" style={{ position: 'relative' }}>
                    <Link
                        href={href}
                        className="project-card-link"
                        aria-label={title}
                        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    />

                    <div className="project-image">
                        <Image width={383} height={249} sizes='100vw' style={{width:"100%", height:"auto"}} src={src} alt="Project" />
                        <span className="details-btn" aria-hidden="true">
                            {isExternal
                                ? <RiExternalLinkLine size={20} />
                                : <RiArrowRightUpLine size={20} />
                            }
                        </span>
                    </div>
                    <div className="project-content">
                        <span className="sub-title">{category}</span>
                        <h3>{title}</h3>
                        {tagline && <p className="project-tagline">{tagline}</p>}
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}
