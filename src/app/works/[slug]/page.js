// src/works/[slug]/page.js
'use client';

import Image from 'next/image';
import React from 'react';
import { getProjectBySlug } from '@/utlits/fackData/projectData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Importe ícones se for usar para links ou ferramentas (ex: Remixicon para links externos)
import { RiExternalLinkLine } from '@remixicon/react'; // Adicione este import se quiser o ícone!

const SingleProjectPage = ({ params }) => {
    const { slug } = params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="single-project-page-design">
            {/* Seção de Título e Breve Descrição */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        {/* Categoria e Cliente */}
                        <p className="project-sub-title">{project.category} - {project.client || 'Cliente Indefinido'}</p>
                        {/* Título do Projeto */}
                        <h1 className="project-main-title">{project.title}</h1>
                    </div>
                </div>
            </div>

            {/* Imagem Principal do Projeto */}
            <div className="single-project-image">
                {project.src && (
                    <Image
                        width={1095}
                        height={1072}
                        sizes='100vw'
                        style={{ width: "100%", height: "auto" }}
                        src={project.src}
                        alt={`Imagem principal do projeto ${project.title}`}
                        priority // Carrega a imagem mais rapidamente, pois é a principal
                    />
                )}
            </div>

            <div className="container pt-30">
                <div className="row">
                    {/* Coluna da Esquerda: Informações do Projeto */}
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Ano</p>
                                <h3>{project.year || 'N/A'}</h3>
                            </div>
                            <div className="single-info">
                                <p>Cliente</p>
                                <h3>{project.client || 'N/A'}</h3>
                            </div>
                            <div className="single-info">
                                <p>Serviços</p>
                                {/* Se 'services' for uma string, ou você pode mapear uma array se preferir */}
                                <h3>{project.services || project.category || 'N/A'}</h3>
                            </div>
                            <div className="single-info">
                                <p>Tipo de Projeto</p>
                                <h3>{project.projectType || 'Creative'}</h3>
                            </div>

                            {/* Seções Adicionais (Ex: Ferramentas) */}
                            {project.tools && project.tools.length > 0 && (
                                <div className="single-info">
                                    <p>Ferramentas</p>
                                    <h3>{project.tools.join(', ')}</h3> {/* Junta as ferramentas com vírgula */}
                                </div>
                            )}

                            {/* Links Externos (Ex: Live Demo, Behance, Dribbble, e AGORA Protótipo) */}
                            <div className="project-links mt-8">
                                {/* Protótipos (um ou mais) */}
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
                                        Ver Projeto Ao Vivo {/* <RiExternalLinkLine className="icon" /> */}
                                    </Link>
                                )}
                                {project.behanceLink && (
                                    <Link href={project.behanceLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                        Behance {/* <RiBehanceFill className="icon" /> */}
                                    </Link>
                                )}
                                {project.dribbbleLink && (
                                    <Link href={project.dribbbleLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                                        Dribbble {/* <RiDribbbleFill className="icon" /> */}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Coluna da Direita: Descrição Detalhada, Desafio, Solução, Resultados */}
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

                {/* Seção da Galeria de Imagens */}
                {project.fullImages && project.fullImages.length > 0 && (
                    <div className="row pt-30 project-gallery-section">
                        {project.fullImages.map((imgSrc, index) => (
                            <div key={index} className="col-lg-6 mb-4"> {/* Adicione mb-4 para espaçamento entre as imagens */}
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
                {/* / END SINGLE PAGE GALLERY DESIGN AREA */}

                {/* Botão de Voltar */}
                <div className="mt-12 text-center pb-12"> {/* Adicione um padding bottom para espaçamento */}
                    <Link href="/works" className="back-button px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                        Voltar para Projetos
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleProjectPage