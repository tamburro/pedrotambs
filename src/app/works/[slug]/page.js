// src/works/[slug]/page.js
'use client';

import React, { useRef, useEffect, useState } from 'react';
import { getProjectBySlug } from '@/utlits/fackData/projectData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { RiExternalLinkLine } from '@remixicon/react';

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

    return (
        <div className="single-project-page-design">

            {/* Hero com Parallax */}
            <div className="project-parallax-hero" ref={parallaxRef}>
                {/* Imagem de fundo com efeito parallax */}
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

                {/* Overlay escuro */}
                <div className="project-parallax-overlay" />

                {/* Conteúdo sobre o parallax */}
                <div className="project-parallax-content container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="parallax-title-box mb-4 text-center">
                                <p className="project-sub-title">{project.category} - {project.client || 'Cliente Indefinido'}</p>
                                <h1 className="project-main-title">{project.title}</h1>
                            </div>
                            <div className="project-parallax-info-row">
                                {project.year && (
                                    <div className="parallax-info-box">
                                        <p>Ano</p>
                                        <h3>{project.year}</h3>
                                    </div>
                                )}
                                {project.client && (
                                    <div className="parallax-info-box">
                                        <p>Cliente</p>
                                        <h3>{project.client}</h3>
                                    </div>
                                )}
                                {(project.services || project.category) && (
                                    <div className="parallax-info-box">
                                        <p>Serviços</p>
                                        <h3>{project.services || project.category}</h3>
                                    </div>
                                )}
                                {project.projectType && (
                                    <div className="parallax-info-box">
                                        <p>Tipo de Projeto</p>
                                        <h3>{project.projectType}</h3>
                                    </div>
                                )}
                                {project.tools?.length > 0 && (
                                    <div className="parallax-info-box">
                                        <p>Ferramentas</p>
                                        <h3>{project.tools.join(', ')}</h3>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conteúdo principal */}
            <div className="container pt-30">
                <div className="row">
                    {/* Links */}
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="project-links mt-8">
                                {project.prototypeLinks?.length > 0 ? (
                                    <div className="flex flex-col gap-2">
                                        {project.prototypeLinks.map((link, index) => (
                                            <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                                {link.label} <RiExternalLinkLine className="icon" />
                                            </Link>
                                        ))}
                                    </div>
                                ) : project.prototypeLink ? (
                                    <Link href={project.prototypeLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                        Ver Protótipo <RiExternalLinkLine className="icon" />
                                    </Link>
                                ) : null}

                                {project.liveDemoLink && (
                                    <Link href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                        Ver Projeto Ao Vivo
                                    </Link>
                                )}
                                {project.behanceLink && (
                                    <Link href={project.behanceLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                        Behance
                                    </Link>
                                )}
                                {project.dribbbleLink && (
                                    <Link href={project.dribbbleLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                        Dribbble
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Descrição, Desafio, Solução, Resultados */}
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            {project.description && (
                                <div className="project-description-text">
                                    <h3>Descrição do Projeto</h3>
                                    <p>{project.description}</p>
                                </div>
                            )}
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
                            {project.results && (
                                <div className="project-section mt-8">
                                    <h3>Resultados Alcançados</h3>
                                    <p>{project.results}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Galeria */}
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
                                        alt={`${project.title} - Imagem de Galeria ${index + 1}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Botão Voltar */}
                <div className="mt-12 text-center pb-12">
                    <Link href="/works" className="back-button px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                        Voltar para Projetos
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProjectPage;
