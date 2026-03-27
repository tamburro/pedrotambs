// src/components/sections/portfolio.jsx
'use client'
import React, { useState } from 'react'
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

const Portfolio = ({ className }) => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');
    const { t } = useLanguage();

    const handleCategoryClick = (item) => {
        setCategory(item)
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
    }

    // ------ filter unique category
    const filteredCategory = ["All"]
    projectsData.forEach(({ category }) => {
        if (!filteredCategory.includes(category)) {
            filteredCategory.push(category)
        }
    })
    // ------ filter unique category

    const filteredProjects = category === 'All' ? projectsData : projectsData.filter(image => image.category === category);


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
                    <SlideUp>
                        <ul className="project-filter filter-btns-one justify-content-left pb-15">
                            {filteredCategory.map((item, id) => <li key={id} onClick={() => handleCategoryClick(item)} className={item === category ? "current" : ""}>{item}</li>)}
                        </ul>
                    </SlideUp>
                    <div className="row project-masonry-active overflow-hidden">
                        {/* AQUI ESTÁ A CORREÇÃO: Passando o 'slug' para o Card */}
                        {filteredProjects.map(({ category, id, src, title, slug }) => (
                            <Card
                                key={id}
                                id={id}
                                category={category}
                                src={src}
                                title={title}
                                slug={slug} // <--- CAMPO SLUG PASSADO PARA O COMPONENTE CARD
                                animationClass={animationClass}
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
const Card = ({ category, title, src, animationClass, id, slug }) => {
    return (
        <div className={`col-lg-4 col-md-6 item branding game ${animationClass}`}>
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