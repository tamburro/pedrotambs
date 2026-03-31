'use client'
import React, { useState } from 'react'
import { RiBriefcaseLine, RiGraduationCapLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import { useLanguage } from '@/context/LanguageContext'

const Resume = () => {
    const { t } = useLanguage();
    const [expanded, setExpanded] = useState(false);

    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>{t.resume.experience}</h2>
                                <div className="experience-list">
                                    <Card icon={<RiBriefcaseLine />} year="Nov 2022 – Present" title="Designer Visual Pleno" institution="Editora Globo" description={t.resume.exp1} />
                                    <Card icon={<RiBriefcaseLine />} year="Jun 2020 – Nov 2021" title="Designer Visual Junior" institution="YDUQS" description={t.resume.exp2} />
                                    <Card icon={<RiBriefcaseLine />} year="Jul 2019 – Jun 2020" title="Designer Visual PJ" institution="Estácio" description={t.resume.exp3} />
                                    {expanded && (
                                        <Card icon={<RiBriefcaseLine />} year="Feb 2011 – Jan 2012" title="Design Intern" institution="Conspiração Filmes" description={t.resume.exp4} />
                                    )}
                                </div>
                                <div className="portfolio-show-more" style={{ marginTop: '16px' }}>
                                    <button
                                        className="theme-btn theme-btn--outline"
                                        onClick={() => setExpanded(v => !v)}
                                    >
                                        {expanded ? t.portfolio.showLess : t.portfolio.showMore}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>{t.resume.education}</h2>
                                <div className="experience-list">
                                    <Card icon={<RiGraduationCapLine />} year="Jul 2025 – Set 2026" title="MBA em Inovação Orientada à IA e UX" institution="UX Unicórnio" description={t.resume.edu1} />
                                    <Card icon={<RiGraduationCapLine />} year="Abr 2023 – Abr 2024" title="MBA em UX Design & Arquitetura da Informação" institution="Instituto Infnet – ECDD" description={t.resume.edu2} />
                                    <Card icon={<RiGraduationCapLine />} year="2013 – 2018" title="Graduação em Design Gráfico" institution="Senac RJ" description={t.resume.edu3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume

const Card = ({ icon, year, title, institution, description }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">{icon}</div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company">{institution}</span>
                    {description && <p style={{ marginTop: '8px', fontSize: '14px', color: 'rgba(240,240,250,0.55)', lineHeight: 1.6 }}>{description}</p>}
                </div>
            </div>
        </SlideUp>
    )
}
