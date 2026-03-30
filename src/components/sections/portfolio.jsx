// src/components/sections/portfolio.jsx
'use client'
import React from 'react'
import Link from 'next/link';
import { RiArrowRightUpLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp';
import { projectsData } from '@/utlits/fackData/projectData';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const PROJECTS = projectsData.filter(p => p.id <= 4);

const Portfolio = ({ className }) => {
    const { t } = useLanguage();

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
                    <div className="row project-masonry-active">
                        {PROJECTS.map(({ category, id, src, title, slug }) => (
                            <Card
                                key={id}
                                id={id}
                                category={category}
                                src={src}
                                title={title}
                                slug={slug}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio


// Componente Card ajustado para receber e usar o 'slug'
const Card = ({ category, title, src, id, slug }) => {
    return (
        <div className="col-lg-4 col-md-6 item branding game">
            <SlideUp delay={id}>
                <div className="project-item style-two" style={{ position: 'relative' }}>
                    {/* Overlay link covers entire card */}
                    <Link href={`/works/${slug}`} className="project-card-link" aria-label={title} />

                    <div className="project-image">
                        <Image width={383} height={249} sizes='100vw' style={{width:"100%", height:"auto"}} src={src} alt="Project" />
                        <span className="details-btn" aria-hidden="true">
                            <RiArrowRightUpLine size={20} />
                        </span>
                    </div>
                    <div className="project-content">
                        <span className="sub-title">{category}</span>
                        <h3>{title}</h3>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}