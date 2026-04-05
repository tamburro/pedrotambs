'use client'
import React from 'react'
import { RiMailSendLine, RiLinkedinFill, RiGithubLine, RiBehanceFill, RiInstagramLine } from '@remixicon/react'
import Link from 'next/link'
import SlideUp from '@/utlits/animations/slideUp'
import { useLanguage } from '@/context/LanguageContext'

const Summery = () => {
    const { t } = useLanguage();
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row about-row-stretch">
                    <div className="col-lg-4">
                        <SlideUp style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div className="about-image-part about-image-part--stretch" style={{ flex: 1 }}>
                                <img src={"/images/about/profile3.png"} alt="About Me" />
                                <div className="about-social">
                                    <ul>
                                        <li><Link href="https://www.linkedin.com/in/pedrotamburro/" target="_blank" rel="noopener noreferrer"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link href="https://github.com/tamburro" target="_blank" rel="noopener noreferrer"><RiGithubLine size={20} /></Link></li>
                                        <li><Link href="https://www.behance.net/pedrotamburro" target="_blank" rel="noopener noreferrer"><RiBehanceFill size={20} /></Link></li>
                                        <li><Link href="https://www.instagram.com/universobservavel/" target="_blank" rel="noopener noreferrer"><RiInstagramLine size={20} /></Link></li>
                                    </ul>
                                </div>
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
