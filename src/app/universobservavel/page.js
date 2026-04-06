'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useMotionTemplate, useMotionValue, useInView } from 'framer-motion'
import {
    RiArrowRightLine, RiCheckLine, RiStarFill,
    RiSmartphoneLine, RiCodeSSlashLine, RiPaletteLine,
    RiMailLine, RiWhatsappLine, RiArrowDownLine,
    RiBrainLine, RiFlashlightLine, RiTimeLine,
} from '@remixicon/react'

/* ─── Spotlight hook ─── */
function useSpotlight(size = 220, color = 'rgba(130, 0, 219, 0.18)') {
    const x = useMotionValue(-size)
    const y = useMotionValue(-size)
    const reset = useCallback(() => { x.set(-size); y.set(-size) }, [x, y, size])
    useEffect(() => { reset() }, [reset])
    const onPointerMove = useCallback((e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set(e.clientX - r.left); y.set(e.clientY - r.top)
    }, [x, y])
    const bg = useMotionTemplate`radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 100%)`
    return { onPointerMove, onPointerLeave: reset, bg }
}

/* ─── SpotlightCard ─── */
function SpotlightCard({ children, className = '', style = {}, color, size }) {
    const { onPointerMove, onPointerLeave, bg } = useSpotlight(size, color)
    return (
        <div
            className={className}
            style={{ position: 'relative', ...style }}
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
        >
            <motion.div style={{
                position: 'absolute', inset: 0, borderRadius: 'inherit',
                background: bg, pointerEvents: 'none', zIndex: 1,
            }} />
            <div style={{ position: 'relative', zIndex: 2 }}>{children}</div>
        </div>
    )
}

/* ─── FadeIn ─── */
function FadeIn({ children, delay = 0, y = 30 }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}

/* ─── Data ─── */
const SERVICES = [
    {
        icon: <RiSmartphoneLine size={32} />,
        title: 'Product Design',
        desc: 'Pesquisa com usuários, arquitetura da informação, UI e protótipo validado. Do insight à interface pronta para desenvolver.',
    },
    {
        icon: <RiCodeSSlashLine size={32} />,
        title: 'Design Engineering',
        desc: 'Componentes React, Next.js e design systems funcionais. Eu projeto e construo — sem perda de fidelidade entre Figma e produção.',
    },
    {
        icon: <RiBrainLine size={32} />,
        title: 'AI Engineering',
        desc: 'Produtos com IA integrada: automações, interfaces conversacionais e MVPs construídos com Claude API em dias, não meses.',
    },
]

const DIFFERENTIALS = [
    { icon: <RiFlashlightLine size={20} />, title: 'Full-stack de produto', desc: 'Pesquiso, projeto e implemento. Um profissional que cobre todo o ciclo.' },
    { icon: <RiTimeLine size={20} />, title: 'Velocidade real', desc: 'MVPs entregues em dias com AI coding. Sem burocracia, sem overhead de equipe.' },
    { icon: <RiPaletteLine size={20} />, title: 'Design com precisão', desc: 'Mais de 10 anos de experiência em design visual e UX para grandes empresas.' },
]

const PLANS = [
    {
        name: 'Sprint',
        price: 'R$ 2.500',
        period: '/ projeto',
        highlight: false,
        desc: 'Ideal para validar uma ideia ou resolver um problema específico rapidamente.',
        features: [
            'Até 2 semanas de trabalho',
            '1 entregável principal (UI, pesquisa ou MVP)',
            '2 rodadas de revisão',
            'Entrega em Figma ou código',
            'Suporte por e-mail',
        ],
        cta: 'Começar agora',
        href: '/contact',
    },
    {
        name: 'Produto',
        price: 'R$ 6.500',
        period: '/ projeto',
        highlight: true,
        desc: 'Para times que precisam de design e código trabalhando juntos de verdade.',
        features: [
            'Até 6 semanas de trabalho',
            'Pesquisa + UI + implementação',
            'Revisões ilimitadas',
            'Design system documentado',
            'Deploy em produção',
            'Suporte por 30 dias após entrega',
        ],
        cta: 'Projeto completo',
        href: '/contact',
    },
    {
        name: 'Retainer',
        price: 'R$ 3.500',
        period: '/ mês',
        highlight: false,
        desc: 'Para startups e empresas que precisam de capacidade de produto contínua.',
        features: [
            '40h mensais dedicadas',
            'Design + código + estratégia',
            'Prioridade de resposta',
            'Reuniões semanais de alinhamento',
            'Renovação mensal sem fidelidade',
        ],
        cta: 'Falar sobre retainer',
        href: '/contact',
    },
]

const TESTIMONIALS = [
    {
        name: 'Roberta M.',
        role: 'CEO · SaaS B2B',
        text: 'O Pedro entregou em 3 semanas o que nossa equipe estimava em 3 meses. E ainda é bonito.',
    },
    {
        name: 'Lucas F.',
        role: 'CTO · Fintech',
        text: 'Raro encontrar alguém que fale design e código na mesma frase sem mentir em nenhum dos dois.',
    },
    {
        name: 'Ana C.',
        role: 'Founder · EdTech',
        text: 'Entendeu o problema antes de abrir o Figma. Isso fez toda a diferença no resultado.',
    },
]

const PROJECTS = [
    { slug: 'sigil-saas-mvp', src: '/images/projects/sigil/sigil_full.jpg', title: 'Sigil', tag: 'SaaS · Product Design' },
    { slug: 'zapvida', src: '/images/projects/zapvida.png', title: 'ZapVida', tag: 'Product Design · AI' },
    { slug: 'veradice', src: '/images/projects/veradice_full.jpg', title: 'Veradice', tag: 'Game Design · AI Engineering' },
]

/* ═══════════════════════════════════════════════ */
export default function LandingPage() {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', h, { passive: true })
        return () => window.removeEventListener('scroll', h)
    }, [])

    return (
        <div style={{ background: 'var(--void)', minHeight: '100vh', overflowX: 'hidden' }}>

            {/* ── HERO ── */}
            <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 24px 80px', position: 'relative' }}>
                {/* Glow bg */}
                <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(130,0,219,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

                <FadeIn delay={0}>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--aurora)', marginBottom: '24px' }}>
                        Pedro Tamburro · Design Engineer
                    </p>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <h1 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(2.4rem, 6vw, 5rem)', lineHeight: 1.1, color: 'var(--moonlight)', maxWidth: '800px', marginBottom: '24px' }}>
                        Produtos digitais que existem<br />
                        <span style={{ color: 'var(--aurora)' }}>no mundo real.</span>
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--mist)', maxWidth: '520px', marginBottom: '40px' }}>
                        Pesquisa, design e código em um só profissional. Eu projeto interfaces que funcionam e construo os sistemas que as sustentam.
                    </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link href="/contact" className="theme-btn">
                            Iniciar um projeto <RiArrowRightLine size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '6px' }} />
                        </Link>
                        <Link href="#trabalhos" className="theme-btn theme-btn--outline">
                            Ver trabalhos
                        </Link>
                    </div>
                </FadeIn>

                <motion.div
                    style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', color: 'var(--mist)' }}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <RiArrowDownLine size={20} />
                </motion.div>
            </section>

            {/* ── SERVIÇOS ── */}
            <section style={{ padding: '80px 24px' }}>
                <div className="container">
                    <FadeIn>
                        <div className="section-title text-center" style={{ marginBottom: '48px' }}>
                            <p>O que eu faço</p>
                            <h2>Design. Código. Entrega.</h2>
                        </div>
                    </FadeIn>
                    <div className="row" style={{ gap: '0' }}>
                        {SERVICES.map((s, i) => (
                            <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px' }}>
                                <FadeIn delay={i * 0.1}>
                                    <SpotlightCard
                                        color="rgba(130, 0, 219, 0.2)"
                                        size={200}
                                        style={{
                                            height: '100%',
                                            padding: '36px',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            borderRadius: '20px',
                                            background: 'rgba(20, 20, 32, 1)',
                                        }}
                                    >
                                        <div style={{ color: 'var(--aurora)', marginBottom: '20px' }}>{s.icon}</div>
                                        <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: 'var(--moonlight)' }}>{s.title}</h4>
                                        <p style={{ fontSize: '15px', color: 'var(--mist)', lineHeight: 1.7 }}>{s.desc}</p>
                                    </SpotlightCard>
                                </FadeIn>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DIFERENCIAIS ── */}
            <section style={{ padding: '40px 24px 80px' }}>
                <div className="container">
                    <div style={{
                        padding: '48px',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '20px',
                        background: 'rgba(20, 20, 32, 1)',
                    }}>
                        <FadeIn>
                            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--aurora)', marginBottom: '8px' }}>Por que eu</p>
                            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: '40px', color: 'var(--moonlight)' }}>
                                O profissional que você busca<br />raramente existe em uma pessoa.
                            </h2>
                        </FadeIn>
                        <div className="row">
                            {DIFFERENTIALS.map((d, i) => (
                                <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '32px' }}>
                                    <FadeIn delay={i * 0.1}>
                                        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                            <div style={{
                                                width: '44px', height: '44px', borderRadius: '12px',
                                                background: 'rgba(130, 0, 219, 0.15)', border: '1px solid rgba(130, 0, 219, 0.3)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: 'var(--aurora)', flexShrink: 0,
                                            }}>{d.icon}</div>
                                            <div>
                                                <h5 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--moonlight)', marginBottom: '6px' }}>{d.title}</h5>
                                                <p style={{ fontSize: '14px', color: 'var(--mist)', lineHeight: 1.6 }}>{d.desc}</p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TRABALHOS SELECIONADOS ── */}
            <section id="trabalhos" style={{ padding: '40px 24px 80px' }}>
                <div className="container">
                    <FadeIn>
                        <div className="section-title text-center" style={{ marginBottom: '48px' }}>
                            <p>Portfólio</p>
                            <h2>Trabalhos selecionados</h2>
                        </div>
                    </FadeIn>
                    <div className="row">
                        {PROJECTS.map((p, i) => (
                            <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px' }}>
                                <FadeIn delay={i * 0.1}>
                                    <SpotlightCard
                                        color="rgba(130, 0, 219, 0.2)"
                                        size={220}
                                        style={{
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            borderRadius: '20px',
                                            background: 'rgba(20, 20, 32, 1)',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Link href={`/works/${p.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                                            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                                                <Image src={p.src} alt={p.title} fill style={{ objectFit: 'cover' }} sizes="400px" />
                                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(20,20,32,0.9) 100%)' }} />
                                            </div>
                                            <div style={{ padding: '24px' }}>
                                                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--aurora)', marginBottom: '6px' }}>{p.tag}</p>
                                                <h4 style={{ fontSize: '18px', color: 'var(--moonlight)', fontWeight: 600 }}>{p.title}</h4>
                                            </div>
                                        </Link>
                                    </SpotlightCard>
                                </FadeIn>
                            </div>
                        ))}
                    </div>
                    <FadeIn delay={0.3}>
                        <div style={{ textAlign: 'center', marginTop: '32px' }}>
                            <Link href="/works" className="theme-btn theme-btn--outline">
                                Ver todos os projetos
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ── PREÇOS ── */}
            <section style={{ padding: '40px 24px 80px' }}>
                <div className="container">
                    <FadeIn>
                        <div className="section-title text-center" style={{ marginBottom: '48px' }}>
                            <p>Investimento</p>
                            <h2>Claro. Justo. Sem surpresa.</h2>
                        </div>
                    </FadeIn>
                    <div className="row" style={{ alignItems: 'stretch' }}>
                        {PLANS.map((plan, i) => (
                            <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px', display: 'flex' }}>
                                <FadeIn delay={i * 0.1} y={20}>
                                    <SpotlightCard
                                        color={plan.highlight ? 'rgba(130, 0, 219, 0.28)' : 'rgba(130, 0, 219, 0.16)'}
                                        size={220}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            padding: '36px',
                                            border: plan.highlight ? '1px solid rgba(130, 0, 219, 0.5)' : '1px solid rgba(255,255,255,0.06)',
                                            borderRadius: '20px',
                                            background: plan.highlight ? 'rgba(130, 0, 219, 0.08)' : 'rgba(20, 20, 32, 1)',
                                        }}
                                    >
                                        {plan.highlight && (
                                            <div style={{
                                                display: 'inline-block', alignSelf: 'flex-start',
                                                background: 'rgba(130, 0, 219, 0.25)', border: '1px solid rgba(130, 0, 219, 0.5)',
                                                borderRadius: '999px', padding: '4px 14px', marginBottom: '20px',
                                                fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em',
                                                textTransform: 'uppercase', color: 'var(--aurora)',
                                            }}>Mais popular</div>
                                        )}
                                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--aurora)', marginBottom: '8px' }}>{plan.name}</p>
                                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                                            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', fontWeight: 700, color: 'var(--moonlight)' }}>{plan.price}</span>
                                            <span style={{ fontSize: '14px', color: 'var(--mist)' }}>{plan.period}</span>
                                        </div>
                                        <p style={{ fontSize: '14px', color: 'var(--mist)', lineHeight: 1.6, marginBottom: '28px' }}>{plan.desc}</p>
                                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: '10px', flexGrow: 1 }}>
                                            {plan.features.map((f, j) => (
                                                <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--moonlight)' }}>
                                                    <RiCheckLine size={16} style={{ color: 'var(--aurora)', flexShrink: 0, marginTop: '2px' }} />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href={plan.href}
                                            className={plan.highlight ? 'theme-btn' : 'theme-btn theme-btn--outline'}
                                            style={{ textAlign: 'center', display: 'block' }}
                                        >
                                            {plan.cta}
                                        </Link>
                                    </SpotlightCard>
                                </FadeIn>
                            </div>
                        ))}
                    </div>
                    <FadeIn delay={0.3}>
                        <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--mist)', marginTop: '16px' }}>
                            Precisa de algo diferente? <Link href="/contact" style={{ color: 'var(--aurora)', textDecoration: 'none' }}>Vamos conversar.</Link>
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ── DEPOIMENTOS ── */}
            <section style={{ padding: '40px 24px 80px' }}>
                <div className="container">
                    <FadeIn>
                        <div className="section-title text-center" style={{ marginBottom: '48px' }}>
                            <p>Clientes</p>
                            <h2>Quem já trabalhou sabe.</h2>
                        </div>
                    </FadeIn>
                    <div className="row">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i} className="col-lg-4 col-md-6" style={{ marginBottom: '24px' }}>
                                <FadeIn delay={i * 0.1}>
                                    <SpotlightCard
                                        color="rgba(130, 0, 219, 0.18)"
                                        size={180}
                                        style={{
                                            height: '100%',
                                            padding: '32px',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            borderRadius: '20px',
                                            background: 'rgba(20, 20, 32, 1)',
                                        }}
                                    >
                                        <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
                                            {[...Array(5)].map((_, j) => <RiStarFill key={j} size={14} style={{ color: 'var(--aurora)' }} />)}
                                        </div>
                                        <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--moonlight)', marginBottom: '24px', fontStyle: 'italic' }}>"{t.text}"</p>
                                        <div>
                                            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--moonlight)', marginBottom: '2px' }}>{t.name}</p>
                                            <p style={{ fontSize: '12px', color: 'var(--mist)' }}>{t.role}</p>
                                        </div>
                                    </SpotlightCard>
                                </FadeIn>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA FINAL ── */}
            <section style={{ padding: '40px 24px 100px' }}>
                <div className="container">
                    <FadeIn>
                        <SpotlightCard
                            color="rgba(130, 0, 219, 0.22)"
                            size={350}
                            style={{
                                textAlign: 'center',
                                padding: 'clamp(40px, 6vw, 80px) 40px',
                                border: '1px solid rgba(130, 0, 219, 0.2)',
                                borderRadius: '24px',
                                background: 'rgba(20, 20, 32, 1)',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Decorative glow */}
                            <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(130,0,219,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

                            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--aurora)', marginBottom: '16px' }}>
                                Próximos passos
                            </p>
                            <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--moonlight)', marginBottom: '16px', lineHeight: 1.2 }}>
                                Seu produto merece<br />ser bem feito.
                            </h2>
                            <p style={{ fontSize: '16px', color: 'var(--mist)', maxWidth: '460px', margin: '0 auto 36px', lineHeight: 1.7 }}>
                                Me conta o que você está construindo. Em 24h tenho uma proposta.
                            </p>
                            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link href="/contact" className="theme-btn">
                                    Enviar mensagem <RiMailLine size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '6px' }} />
                                </Link>
                                <a
                                    href="https://wa.me/5521969018110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="theme-btn theme-btn--outline"
                                >
                                    WhatsApp <RiWhatsappLine size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '6px' }} />
                                </a>
                            </div>
                        </SpotlightCard>
                    </FadeIn>
                </div>
            </section>
        </div>
    )
}
