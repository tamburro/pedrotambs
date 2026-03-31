'use client'
import { createContext, useContext, useState, useEffect, useCallback } from 'react'

// ─── Translations ──────────────────────────────────────────────────────────────
export const translations = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', works: 'Works', contact: 'Contact' },
    hireMe: 'Hire Me',
    hero: {
      tagline: 'Product Designer · Design Engineer',
      headline: ['Design that speaks', 'before words.'],
      sub: 'I design and build complete digital products — from user research and interface design to fully functional applications.',
      cta1: 'View Projects',
      cta2: 'Hire Me',
    },
    profile: {
      subtitle: 'Based in Rio de Janeiro',
      heading: 'Product Designer\n& Design Engineer',
      bio: "Product Designer & Design Engineer bridging the gap between great design and working product. I don't just design screens — I ship them.",
      available: 'Open to Freelance',
      downloadCV: 'Download CV',
      viewProjects: 'View Projects',
    },
    partners: "Brands I've Been Part Of",
    resume: {
      experience: 'Experience',
      education: 'Education',
      exp1: 'Visual solutions for marketing campaigns, UI design, video editing, landing pages and email marketing for the company\'s brands.',
      exp2: 'UI design and visual identity for Estácio EAD courses. Infographic illustration and Front End development.',
      exp3: 'Interface design, infographic redesign and Front End programming for distance learning courses.',
      exp4: 'Photo and video editing at an independent audiovisual production company.',
      title4: 'Web Design Intern',
      exp5: 'Support in the development of web projects and digital assets in collaboration with the design team.',
      title5: 'Web Design Intern',
      showMoreExp: 'View more experience',
      showLessExp: 'Show less',
      edu1: 'Postgraduate degree in Innovation focused on Artificial Intelligence and User Experience.',
      edu2: 'UX Design, Information Architecture and Usability.',
      edu3: "Bachelor's degree in Graphic Design.",
    },
    portfolio: {
      title: 'Works & Projects',
      sub: 'From user research to production code. Complete projects, not just screens.',
      showMore: 'View more projects',
      showLess: 'Show less',
    },
    cta: {
      title: "Got a product idea? Let's design and build it together.",
      sub: "I work with companies and founders to turn ideas into real, functional products. From wireframe to deployed app — I handle the full journey.",
      btn: "Let's Talk",
    },
    contact: {
      label: 'contact',
      title: "Let's build something great.",
      locationLabel: 'Location:',
      locationValue: 'Rio de Janeiro, Brazil',
      locationNote: 'Available for remote work and freelance',
      phoneLabel: 'Phone:',
      emailLabel: 'Email:',
      nameLabel: 'Full Name',
      emailFieldLabel: 'Email Address',
      messageLabel: 'Your Message',
      sendBtn: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending. Please try again.',
    },
    about: {
      title: "I'm Pedro Tamburro — Product Designer & Design Engineer.",
      p1: "I design and build complete digital products. My work spans the full stack of product design: user research, information architecture, UI design, prototyping, usability testing — and then I take it further by implementing in code.",
      p2: "Currently a Visual Designer at Editora Globo. I hold a degree in Graphic Design from Senac RJ, an MBA in UX Design from Instituto Infnet, and I'm currently pursuing an MBA in AI-Driven Innovation & UX.",
      p3: "I believe the best designer today is one who can also build. That's the standard I hold myself to.",
      btn: 'Get In Touch',
    },
    services: {
      label: 'What I do',
      title: 'Design. Build. Ship.',
      items: [
        { title: 'Product Design', description: 'End-to-end product design: research, information architecture, UI, prototype and validation. From the first insight to a tested interface.' },
        { title: 'Brand Identity', description: 'From logo to full design system — visual identity that scales across every digital and physical touchpoint.' },
        { title: 'Design Engineering', description: 'I turn Figma into production-ready code. React, Next.js and modern front-end that actually ships.' },
      ],
    },
    project: {
      overview: 'Overview',
      year: 'Year',
      role: 'Role',
      duration: 'Duration',
      team: 'Team',
      tools: 'Tools',
      viewProject: 'View Project',
      liveDemo: 'Live Demo',
      prototype: 'Prototype',
      gallery: 'Visual Artifacts',
      showGallery: 'Show Images',
      hideGallery: 'Hide Images',
      backToProjects: 'Back to Projects',
    },
    testimonials: { label: 'Testimonials', title: 'What clients say!' },
    footer: 'All Rights Reserved.',
    footerCrafted: 'Crafted with ❤️ in Rio de Janeiro',
  },
  pt: {
    nav: { home: 'Início', about: 'Sobre', services: 'Serviços', works: 'Trabalhos', contact: 'Contato' },
    hireMe: 'Me Contrate',
    hero: {
      tagline: 'Designer de Produto · Design Engineer',
      headline: ['Design que fala', 'antes das palavras.'],
      sub: 'Projeto e construo produtos digitais completos — da pesquisa com usuários e design de interface até aplicações totalmente funcionais.',
      cta1: 'Ver Projetos',
      cta2: 'Me Contrate',
    },
    profile: {
      subtitle: 'Atuando a partir do Rio de Janeiro',
      heading: 'Designer de Produto\n& Design Engineer',
      bio: 'Designer de Produto & Design Engineer que une design de qualidade com código funcional. Não apenas projeto telas — eu as entrego funcionando.',
      available: 'Aberto a Freelance',
      downloadCV: 'Baixar CV',
      viewProjects: 'Ver Projetos',
    },
    partners: 'Marcas em que atuei',
    resume: {
      experience: 'Experiência',
      education: 'Formação',
      exp1: 'Soluções visuais para campanhas de marketing, design de UI, edição de vídeo, landing pages e email marketing para as marcas da empresa.',
      exp2: 'Design de UI e identidade visual para cursos EAD da Estácio. Ilustração de infográficos e desenvolvimento Front End.',
      exp3: 'Design de interfaces, redesign de infográficos e programação Front End para cursos de ensino a distância.',
      exp4: 'Edição de foto e vídeo em produtora audiovisual independente.',
      title4: 'Estagiário de Web Design',
      exp5: 'Apoio no desenvolvimento de projetos web e peças digitais em colaboração com o time de design.',
      title5: 'Estagiário de Web Design',
      showMoreExp: 'Ver mais experiências',
      showLessExp: 'Ver menos',
      edu1: 'Pós-graduação em Inovação com foco em Inteligência Artificial e Experiência do Usuário.',
      edu2: 'UX Design, Arquitetura da Informação e Usabilidade.',
      edu3: 'Bacharelado em Design Gráfico.',
    },
    portfolio: {
      title: 'Trabalhos & Projetos',
      sub: 'Da pesquisa com usuários ao código em produção. Projetos completos, não só telas.',
      showMore: 'Ver mais projetos',
      showLess: 'Ver menos',
    },
    cta: {
      title: 'Tem uma ideia de produto? Vamos projetar e construir juntos.',
      sub: 'Trabalho com empresas e founders para transformar ideias em produtos reais e funcionais. Do wireframe ao app em produção — cuido de todo o processo.',
      btn: 'Vamos Conversar',
    },
    contact: {
      label: 'contato',
      title: 'Vamos construir algo incrível.',
      locationLabel: 'Localização:',
      locationValue: 'Rio de Janeiro, Brasil',
      locationNote: 'Disponível para trabalho remoto e freelance',
      phoneLabel: 'Telefone:',
      emailLabel: 'E-mail:',
      nameLabel: 'Nome Completo',
      emailFieldLabel: 'Endereço de E-mail',
      messageLabel: 'Sua Mensagem',
      sendBtn: 'Enviar Mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Erro ao enviar. Tente novamente.',
    },
    about: {
      title: 'Sou Pedro Tamburro — Product Designer & Design Engineer.',
      p1: 'Projeto e construo produtos digitais completos. Meu trabalho abrange todo o ciclo de design de produto: pesquisa com usuários, arquitetura da informação, design de UI, prototipagem, testes de usabilidade — e vai além, com implementação em código.',
      p2: 'Atualmente Designer Visual na Editora Globo. Sou graduado em Design Gráfico pelo Senac RJ, tenho MBA em UX Design pelo Instituto Infnet e estou cursando MBA em Inovação Orientada à IA e UX.',
      p3: 'Acredito que o melhor designer hoje é aquele que também sabe construir. É esse o padrão que busco.',
      btn: 'Entre em Contato',
    },
    services: {
      label: 'O que eu faço',
      title: 'Design. Código. Entrega.',
      items: [
        { title: 'Product Design', description: 'Design de produto do início ao fim: pesquisa, arquitetura da informação, UI, protótipo e validação. Do primeiro insight à interface testada.' },
        { title: 'Identidade Visual', description: 'Do logo ao design system — identidade visual que escala em todos os pontos de contato digitais e físicos.' },
        { title: 'Design Engineering', description: 'Transformo Figma em código. React, Next.js e front-end moderno que vai para produção de verdade.' },
      ],
    },
    project: {
      overview: 'Visão Geral',
      year: 'Ano',
      role: 'Papel',
      duration: 'Duração',
      team: 'Equipe',
      tools: 'Ferramentas',
      viewProject: 'Ver Projeto',
      liveDemo: 'Ver ao Vivo',
      prototype: 'Ver Protótipo',
      gallery: 'Artefatos Visuais',
      showGallery: 'Ver Imagens',
      hideGallery: 'Ocultar Imagens',
      backToProjects: 'Voltar para Projetos',
    },
    testimonials: { label: 'Depoimentos', title: 'O que os clientes dizem!' },
    footer: 'Todos os Direitos Reservados.',
    footerCrafted: 'Feito com ❤️ no Rio de Janeiro',
  },
}

// ─── Context ───────────────────────────────────────────────────────────────────
const LanguageContext = createContext({
  lang: 'en',
  toggle: () => { },
  t: translations['en'],
})

// ─── Provider ─────────────────────────────────────────────────────────────────
export function LanguageProvider({ children }) {
  // Start with null to avoid hydration mismatch — resolved after mount
  const [lang, setLang] = useState(null)

  useEffect(() => {
    setLang('en')
  }, [])

  const toggle = useCallback((newLang) => {
    setLang(newLang)
  }, [])

  // Use 'en' while not yet mounted (avoids SSR/hydration mismatch)
  const activeLang = lang ?? 'en'

  return (
    <LanguageContext.Provider value={{ lang: activeLang, toggle, t: translations[activeLang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
