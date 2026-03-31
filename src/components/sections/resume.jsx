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
                                    <Card logo="/images/companies/globo.jpeg" year="Nov 2022 – Present" title="Designer Visual Pleno" institution="Editora Globo" description={t.resume.exp1} />
                                    <Card logo="/images/companies/yduqs.jpeg" year="Jun 2020 – Nov 2021" title="Designer Visual Junior" institution="YDUQS" description={t.resume.exp2} />
                                    <Card logo="/images/companies/estacio.jpeg" year="Jul 2019 – Jun 2020" title="Designer Visual PJ" institution="Estácio" description={t.resume.exp3} />
                                    {expanded && (
                                        <>
                                            <Card logo="/images/companies/conspiracao.jpeg" year="Feb 11 – Jan 12" title={t.resume.title4} institution="Conspiração Filmes" description={t.resume.exp4} />
                                            <Card logo="/images/companies/brq.jpeg" year="Jun 2010 – Dez 2010" title={t.resume.title5} institution="BRQ Digital Solutions" description={t.resume.exp5} />
                                        </>
                                    )}
                                </div>
                                <div style={{ marginTop: '16px' }}>
                                    <button
                                        className="resume-show-more-btn"
                                        onClick={() => setExpanded(v => !v)}
                                    >
                                        {expanded ? t.resume.showLessExp : t.resume.showMoreExp}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>{t.resume.education}</h2>
                                <div className="experience-list">
                                    <Card logo="/images/education/uxunicornio.jpeg" year="Jul 2025 – Set 2026" title="MBA em Inovação Orientada à IA e UX" institution="UX Unicórnio" description={t.resume.edu1} />
                                    <Card logo="/images/education/infnet.jpeg" year="Abr 2023 – Abr 2024" title="MBA em UX Design & Arquitetura da Informação" institution="Instituto Infnet – ECDD" description={t.resume.edu2} />
                                    <Card logo="/images/education/senac.jpeg" year="2013 – 2018" title="Graduação em Design Gráfico" institution="Senac RJ" description={t.resume.edu3} />
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

const Card = ({ icon, logo, year, title, institution, description }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    {logo ? <img src={logo} alt={institution} /> : icon}
                </div>
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
