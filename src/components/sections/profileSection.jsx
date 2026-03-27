'use client'
import React from 'react'
import Link from 'next/link';
import { RiFacebookCircleFill, RiLinkedinFill, RiGithubLine, RiCircleFill, RiDownloadLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';

const ProfileSection = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row about-row-stretch">
                    <div className="col-lg-4 d-flex flex-column">
                        <SlideUp style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div className="about-image-part about-image-part--stretch">
                                <img src={"/images/about/profile3.png"} alt="About Me" />
                                <h2>Pedro Tamburro</h2>
                                <p>UX/UI Designer & Visual Designer based in Rio de Janeiro</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link href=""><RiFacebookCircleFill size={20} /></Link></li>
                                        <li><Link href=""><RiLinkedinFill size={20} /></Link></li>
                                        <li><Link href=""><RiGithubLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>

                    <div className="col-lg-8 d-flex flex-column">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    UX/UI Designer<br/>& Visual Designer
                                </h2>
                                <div className="adress-field">
                                    <ul>
                                        <li className='d-flex align-items-center'>
                                            <i><RiCircleFill size={14} /></i> Available for Freelancing
                                        </li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn">
                                        Download CV <i><RiDownloadLine size={16} /></i>
                                    </Link>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="about-content-part-bottom about-marquee-stretch">
                                <PartnersMarquee />
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileSection
