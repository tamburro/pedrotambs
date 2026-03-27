'use client'
import React from 'react'
import Marquee from "react-fast-marquee";
import { useLanguage } from '@/context/LanguageContext';

const PartnersMarquee = () => {
    const { t } = useLanguage();
    return (
        <div className="about-content-part-bottom">
            <h2>{t.partners}</h2>
            <div className="company-list">
                <div className="scroller">
                    <div className="scroller__inner">
                        <Marquee>
                            <img src={"/images/client-logos/partner1.png"} alt="" />
                            <img src={"/images/client-logos/partner2.png"} alt="" />
                            <img src={"/images/client-logos/partner3.png"} alt="" />
                            <img src={"/images/client-logos/partner4.png"} alt="" />
                            <img src={"/images/client-logos/partner5.png"} alt="" />
                            <img src={"/images/client-logos/partner6.png"} alt="" />
                            <img src={"/images/client-logos/partner7.png"} alt="" />
                            <img src={"/images/client-logos/partner8.png"} alt="" />
                            <img src={"/images/client-logos/partner9.png"} alt="" />
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnersMarquee
