'use client'
import React from 'react'
import Hero from '../components/sections/hero'
import ProfileSection from '../components/sections/profileSection'
import Portfolio from '../components/sections/portfolio'
import Resume from '../components/sections/resume'
import ScrollSnap from '../components/ui/ScrollSnap'
import OrbitingSkills from '../components/ui/OrbitingSkills'
import { useLanguage } from '@/context/LanguageContext'

const SkillsSection = () => {
    const { t } = useLanguage();
    return (
        <section style={{ padding: '80px 0', background: '#0D0D18' }}>
            <div className="container">
                <div className="row align-items-center" style={{ gap: '40px 0' }}>
                    <div className="col-lg-6">
                        <OrbitingSkills />
                    </div>
                    <div className="col-lg-6">
                        <p style={{
                            fontFamily: '"Space Mono", monospace',
                            fontSize: '11px',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'rgba(240,240,250,0.4)',
                            marginBottom: '16px',
                        }}>
                            Stack
                        </p>
                        <h2 style={{
                            fontFamily: '"Playfair Display", serif',
                            fontStyle: 'italic',
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 500,
                            color: '#F0F0FA',
                            lineHeight: 1.2,
                            marginBottom: '20px',
                        }}>
                            {t.skills.headline}
                        </h2>
                        <p style={{
                            fontFamily: '"Poppins", sans-serif',
                            fontSize: '15px',
                            lineHeight: 1.8,
                            color: 'rgba(240,240,250,0.55)',
                            maxWidth: '440px',
                        }}>
                            {t.skills.sub}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Home = () => {
    return (
        <>
            <ScrollSnap />
            <Hero />
            <ProfileSection />
            <Resume />
            <Portfolio />
            <SkillsSection />
        </>
    )
}

export default Home