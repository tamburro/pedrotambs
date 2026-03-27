'use client'
import React from 'react'
import { RiGlobalFill, RiPantoneFill, RiQuillPenLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import { useLanguage } from '@/context/LanguageContext'

const ServiceGrid = () => {
    const { t } = useLanguage();
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>{t.services.label}</p>
                                    <h2>{t.services.title}</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiGlobalFill size={60} />} title={"Brand Identity Design"} description={"Visual identity systems that communicate your brand's essence across every touchpoint."} />
                        <Card id={2} icon={<RiQuillPenLine size={60} />} title={"UX/UI Design"} description={"User-centred interfaces crafted from research and validated through testing."} />
                        <Card id={3} icon={<RiPantoneFill size={60} />} title={"Design Engineering"} description={"Bridging design and development — from Figma to fully functional applications."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}
