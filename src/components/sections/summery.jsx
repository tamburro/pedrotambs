'use client'
import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import { useLanguage } from '@/context/LanguageContext'

const Summery = () => {
    const { t } = useLanguage();
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile3.png"} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>{t.about.title}</h2>
                                <p>{t.about.p1}</p>
                                <p>{t.about.p2}</p>
                                <p>{t.about.p3}</p>
                                <div className="hero-btns">
                                    <a href="/contact" className="theme-btn">{t.about.btn} <i><RiMailSendLine size={16} /></i></a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Summery
