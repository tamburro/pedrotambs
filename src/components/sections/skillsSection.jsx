'use client'
import React from 'react'
import OrbitingSkills from '@/components/ui/OrbitingSkills'
import SlideUp from '@/utlits/animations/slideUp'
import { useLanguage } from '@/context/LanguageContext'

const SkillsSection = () => {
    const { t } = useLanguage();
    return (
        <section className="projects-area">
            <div className="container">
                <SlideUp>
                    <div style={{
                        padding: '40px',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '20px',
                        background: 'rgba(20,20,32,1)',
                    }}>
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
                </SlideUp>
            </div>
        </section>
    )
}

export default SkillsSection
