// src/works/[slug]/page.js
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { getProjectBySlug } from '@/utlits/fackData/projectData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { RiExternalLinkLine, RiArrowLeftLine } from '@remixicon/react';

const SingleProjectPage = ({ params }) => {
    const { slug } = params;
    const project = getProjectBySlug(slug);
    const parallaxRef = useRef(null);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!project) {
        notFound();
    }

    const hasLinks = project.prototypeLink || project.prototypeLinks?.length > 0 || project.liveDemoLink;

    return (
        <div className="single-project-page-design">

            {/* Hero com Parallax */}
            <div className="project-parallax-hero" ref={parallaxRef}>
                {project.src && (
                    <div
                        className="project-parallax-bg"
                        style={{ transform: `translateY(${offsetY * 0.35}px)` }}
                    >
                        <Image
                            src={project.src}
                            alt={`Imagem principal do projeto ${project.title}`}
                            fill
                            sizes="100vw"
                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                            priority
                        />
                    </div>
                )}
                <div className="project-parallax-overlay" />
                <div className="project-parallax-content container">
                    <div className="row">
                        <div className="col-12">
                            <div className="parallax-title-box mb-4">
                                <p className="project-sub-title">{project.category} — {project.client || 'Projeto Pessoal'}</p>
                                <h1 className="project-main-title">{project.title}</h1>
                            </div>
                            <div className="project-parallax-info-row">
                                {project.year && (
                                    <div className="parallax-info-box">
                                        <p>Ano</p>
                                        <h3>{project.year}</h3>
                                    </div>
                                )}
                                {project.role && (
                                    <div className="parallax-info-box">
                                        <p>Papel</p>
                                        <h3>{project.role}</h3>
                                    </div>
                                )}
                                {project.timeline && (
                                    <div className="parallax-info-box">
                                        <p>Duração</p>
                                        <h3>{project.timeline}</h3>
                                    </div>
                                )}
                                {project.team && (
                                    <div className="parallax-info-box">
                                        <p>Equipe</p>
                                        <h3>{project.team}</h3>
                                    </div>
                                )}
                                {project.tools?.length > 0 && (
                                    <div className="parallax-info-box">
                                        <p>Ferramentas</p>
                                        <h3>{project.tools.join(' · ')}</h3>
                                    </div>
                                )}
                                {hasLinks && (
                                    <div className="parallax-info-box parallax-info-box--cta">
                                        <p>Ver Projeto</p>
                                        <div className="parallax-cta-links">
                                            {project.prototypeLinks?.length > 0 ? (
                                                project.prototypeLinks.map((link, i) => (
                                                    <Link key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="parallax-cta-link">
                                                        {link.label} <RiExternalLinkLine size={13} />
                                                    </Link>
                                                ))
                                            ) : project.prototypeLink ? (
                                                <Link href={project.prototypeLink} target="_blank" rel="noopener noreferrer" className="parallax-cta-link">
                                                    Ver Protótipo <RiExternalLinkLine size={13} />
                                                </Link>
                                            ) : null}
                                            {project.liveDemoLink && (
                                                <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="parallax-cta-link">
                                                    Ver ao Vivo <RiExternalLinkLine size={13} />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conteúdo principal */}
            <div className="container pt-30">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-2s">

                            {project.description && (
                                <div className="project-description-text">
                                    <h4>Visão Geral</h4>
                                    <p>{project.description}</p>
                                </div>
                            )}

                            {project.sections?.map((section, i) => (
                                <div key={i} className="project-section mt-8">
                                    <h3>{section.title}</h3>

                                    {section.type === 'research' && section.methods?.length > 0 && (
                                        <div className="cs-methods">
                                            {section.methods.map((m, j) => (
                                                <span key={j} className="cs-method-chip">{m}</span>
                                            ))}
                                        </div>
                                    )}

                                    {section.content && <p>{section.content}</p>}

                                    {section.highlights?.length > 0 && (
                                        <ul className="cs-highlights">
                                            {section.highlights.map((h, j) => (
                                                <li key={j}>{h}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {section.type === 'outcomes' && section.metrics?.length > 0 && (
                                        <div className="cs-metrics">
                                            {section.metrics.map((m, j) => (
                                                <div key={j} className="cs-metric">
                                                    <span className="cs-metric-value">{m.value}</span>
                                                    <span className="cs-metric-label">{m.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {!project.sections && (
                                <>
                                    {project.challenge && (
                                        <div className="project-section mt-8">
                                            <h3>O Desafio</h3>
                                            <p>{project.challenge}</p>
                                        </div>
                                    )}
                                    {project.solution && (
                                        <div className="project-section mt-8">
                                            <h3>A Solução</h3>
                                            <p>{project.solution}</p>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Galeria de imagens */}
                {project.sections?.some(s => s.images?.length > 0) && (
                    <div className="pt-20">
                        <h4 className="cs-gallery-title">Imagens do Projeto</h4>
                    </div>
                )}
                {[...(project.sections || [])].sort((a, b) => (b.imageLayout === 'screens') - (a.imageLayout === 'screens')).map((section, i) =>
                    section.images?.length > 0 ? (
                        <div key={i} className="project-gallery-section pt-12">
                            <div className="row">
                                {section.imageLayout === 'screens' ? (
                                    <div className="col-12">
                                        <div className="cs-screens-row">
                                            {section.images.map((img, j) => (
                                                <figure key={j} className="cs-screen-figure">
                                                    <div className="cs-phone-frame">
                                                        <div className="cs-phone-notch" />
                                                        <div className="cs-phone-screen">
                                                            <Image
                                                                src={img.src}
                                                                alt={img.caption || section.title}
                                                                width={img.width || 390}
                                                                height={img.height || 700}
                                                                sizes="(max-width: 768px) 50vw, 14vw"
                                                                style={{ width: '100%', height: 'auto', display: 'block' }}
                                                            />
                                                        </div>
                                                        <div className="cs-phone-bar" />
                                                    </div>
                                                    {img.caption && <figcaption>{img.caption}</figcaption>}
                                                </figure>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    section.images.map((img, j) => (
                                        <div key={j} className={img.fullWidth ? 'col-12' : 'col-lg-6'}>
                                            <figure className="single-image wow fadeInUp mb-4">
                                                <Image
                                                    src={img.src}
                                                    alt={img.caption || section.title}
                                                    width={img.width || 800}
                                                    height={img.height || 600}
                                                    sizes="100%"
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                                {img.caption && <figcaption className="cs-figcaption">{img.caption}</figcaption>}
                                            </figure>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    ) : null
                )}

                {project.fullImages?.length > 0 && (
                    <div className="row pt-30 project-gallery-section">
                        {project.fullImages.map((imgSrc, index) => (
                            <div key={index} className="col-lg-6 mb-4">
                                <div className={`single-image wow fadeInUp delay-0-${(index + 1) * 2}s`}>
                                    <Image
                                        width={633}
                                        height={679}
                                        sizes='100%'
                                        style={{ width: "100%", height: "auto" }}
                                        src={imgSrc}
                                        alt={`${project.title} - Imagem ${index + 1}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Botão Voltar */}
                <div className="mt-12 text-center pb-12">
                    <Link href="/works" className="theme-btn theme-btn--outline">
                        <i><RiArrowLeftLine size={16} /></i> Voltar para Projetos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProjectPage;
