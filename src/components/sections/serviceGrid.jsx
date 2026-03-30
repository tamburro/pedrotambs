'use client'
import React from 'react'
import { RiPaletteLine, RiSmartphoneLine, RiCodeSSlashLine } from '@remixicon/react'
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
                        <Card id={1} icon={<RiSmartphoneLine size={60} />} title={t.services.items[0].title} description={t.services.items[0].description} />
                        <Card id={2} icon={<RiPaletteLine size={60} />} title={t.services.items[1].title} description={t.services.items[1].description} />
                        <Card id={3} icon={<RiCodeSSlashLine size={60} />} title={t.services.items[2].title} description={t.services.items[2].description} />
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
