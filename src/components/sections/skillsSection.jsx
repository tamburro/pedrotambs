'use client'
import React from 'react'
import Link from 'next/link'
import OrbitingSkills from '@/components/ui/OrbitingSkills'
import SlideUp from '@/utlits/animations/slideUp'
import { useLanguage } from '@/context/LanguageContext'
import { RiLinkedinFill, RiGithubLine, RiBehanceFill } from '@remixicon/react'

const socialLinks = [
    { href: 'https://www.linkedin.com/in/pedrotamburro/', icon: <RiLinkedinFill size={18} /> },
    { href: 'https://github.com/tamburro',               icon: <RiGithubLine size={18} /> },
    { href: 'https://www.behance.net/pedrotamburro',     icon: <RiBehanceFill size={18} /> },
]

const SkillsSection = ({ showLinks = false }) => {
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
                                    marginBottom: showLinks ? '28px' : 0,
                                }}>
                                    {t.skills.sub}
                                </p>
                                {showLinks && (
                                    <div style={{ display: 'flex', gap: '12px' }}>
                                        {socialLinks.map(({ href, icon }) => (
                                            <Link
                                                key={href}
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    width: '44px',
                                                    height: '44px',
                                                    borderRadius: '10px',
                                                    border: '1px solid rgba(240,240,250,0.08)',
                                                    background: 'rgba(240,240,250,0.04)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'rgba(240,240,250,0.5)',
                                                    transition: 'all 0.2s',
                                                }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.borderColor = 'rgba(192,112,255,0.4)'
                                                    e.currentTarget.style.color = '#C070FF'
                                                    e.currentTarget.style.background = 'rgba(130,0,219,0.1)'
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.borderColor = 'rgba(240,240,250,0.08)'
                                                    e.currentTarget.style.color = 'rgba(240,240,250,0.5)'
                                                    e.currentTarget.style.background = 'rgba(240,240,250,0.04)'
                                                }}
                                            >
                                                {icon}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </SlideUp>
            </div>
        </section>
    )
}

export default SkillsSection
