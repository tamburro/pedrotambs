'use client'
import React from 'react'
import Link from 'next/link';
import { RiBehanceFill, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine, RiArrowDownLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';
import { useLanguage } from '@/context/LanguageContext';

const ProfileSection = () => {
    const { t } = useLanguage();
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row about-row-stretch">
                    <div className="col-lg-4 d-flex flex-column">
                        <SlideUp style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div className="about-image-part about-image-part--stretch">
                                <img src={"/images/about/profile3.png"} alt="About Me" />
                                <h2>Pedro Tamburro</h2>
                                <p>{t.profile.subtitle}</p>
                                <div className="about-social">
                                    <ul>
                                        <li><Link href="https://www.behance.net/pedrotamburro" target="_blank" rel="noopener noreferrer"><RiBehanceFill size={20} /></Link></li>
                                        <li><Link href="https://www.linkedin.com/in/pedrotamburro/" target="_blank" rel="noopener noreferrer"><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link href="https://github.com/tamburro" target="_blank" rel="noopener noreferrer"><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>

                    <div className="col-lg-8 d-flex flex-column">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2 style={{ whiteSpace: 'pre-line' }}>
                                    {t.profile.heading}
                                </h2>
                                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(240,240,250,0.65)', marginBottom: '20px' }}>
                                    {t.profile.bio}
                                </p>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'>
                                            <i><RiCircleFill size={14} /></i> {t.profile.available}
                                        </li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <a href="/files/Pedro_Tamburro_Portfolio.pdf" download="Pedro_Tamburro_CV.pdf" className="theme-btn">
                                        {t.profile.downloadCV} <i><RiDownloadLine size={16} /></i>
                                    </a>
                                    <Link href="#portfolio" className="theme-btn theme-btn--outline">
                                        {t.profile.viewProjects}
                                    </Link>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <PartnersMarquee />
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileSection
