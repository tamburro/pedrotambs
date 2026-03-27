'use client'
import React from 'react'
import Link from 'next/link'
import { RiArrowRightLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'
import { useLanguage } from '@/context/LanguageContext'

const CallToAction = () => {
    const { t } = useLanguage();
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part call-to-action-part text-center">
                                <h2>{t.cta.title}</h2>
                                <p>{t.cta.sub}</p>
                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn">{t.cta.btn} <i><RiArrowRightLine size={16} /></i></Link>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
