import React from 'react'
import { RiBriefcaseLine, RiGraduationCapLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card
                                        icon={<RiBriefcaseLine />}
                                        year="Nov 2022 – Present"
                                        title="Designer Visual Pleno"
                                        institution="Editora Globo"
                                        description="Visual solutions for marketing campaigns, UI design, video editing, landing pages and email marketing for the company's brands."
                                    />
                                    <Card
                                        icon={<RiBriefcaseLine />}
                                        year="Jun 2020 – Nov 2021"
                                        title="Designer Visual Junior"
                                        institution="YDUQS"
                                        description="UI design and visual identity for Estácio EAD courses. Infographic illustration and Front End development."
                                    />
                                    <Card
                                        icon={<RiBriefcaseLine />}
                                        year="Jul 2019 – Jun 2020"
                                        title="Designer Visual PJ"
                                        institution="Estácio"
                                        description="Interface design, infographic redesign and Front End programming for distance learning courses."
                                    />
                                    <Card
                                        icon={<RiBriefcaseLine />}
                                        year="Feb 2011 – Jan 2012"
                                        title="Design Intern"
                                        institution="Conspiração Filmes"
                                        description="Photo and video editing at an independent audiovisual production company."
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Education</h2>
                                <div className="experience-list">
                                    <Card
                                        icon={<RiGraduationCapLine />}
                                        year="Jul 2025 – Set 2026"
                                        title="MBA em Inovação Orientada à IA e UX"
                                        institution="UX Unicórnio"
                                        description="Postgraduate degree in Innovation focused on Artificial Intelligence and User Experience."
                                    />
                                    <Card
                                        icon={<RiGraduationCapLine />}
                                        year="Abr 2023 – Abr 2024"
                                        title="MBA em UX Design & Arquitetura da Informação"
                                        institution="Instituto Infnet – ECDD"
                                        description="UX Design, Information Architecture and Usability."
                                    />
                                    <Card
                                        icon={<RiGraduationCapLine />}
                                        year="2013 – 2018"
                                        title="Graduação em Design Gráfico"
                                        institution="Senac RJ"
                                        description="Bachelor's degree in Graphic Design."
                                    />
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
                <div className="icon">
                    {icon}
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
