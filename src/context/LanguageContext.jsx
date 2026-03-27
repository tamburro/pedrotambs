'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const translations = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', works: 'Works', contact: 'Contact' },
    hireMe: 'Hire Me',
    hero: {
      tagline: 'UX/UI Designer · Visual Designer · Developer',
      headline: ['Design that speaks', 'before words do.'],
      sub: 'Transforming complex ideas into intuitive digital experiences. From UX research to the final product.',
      cta1: 'View Projects',
      cta2: 'Hire Me',
    },
    profile: {
      bio: 'Visual Designer at Editora Globo. Passionate about design, technology and innovation — turning complex ideas into intuitive digital experiences.',
      available: 'Available for Freelancing',
      downloadCV: 'Download CV',
    },
    partners: 'Companies I Worked With',
    resume: {
      experience: 'Experience',
      education: 'Education',
    },
    portfolio: {
      title: 'Works & Projects',
      sub: 'Check out some of my design projects, meticulously crafted with love and dedication, each one reflecting the passion and soul I poured into every detail.',
    },
    cta: {
      title: 'Are you ready to kickstart your project with a touch of magic?',
      sub: "Reach out and let's make it happen. I'm also available for full-time or part-time opportunities to push the boundaries of design.",
      btn: "Let's Talk",
    },
    contact: {
      label: 'contact',
      title: 'Get in Touch!',
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
      title: "I'm Pedro Tamburro, a Visual & UX/UI Designer.",
      p1: "Visual Designer at Editora Globo, crafting solutions for marketing campaigns, UI design, video production, landing pages and email marketing for the company's brands.",
      p2: "Experienced in visual design, prototyping, HTML, CSS, JS and Figma. Bachelor's in Graphic Design from Senac RJ and MBA in UX Design from Instituto Infnet. Currently pursuing an MBA in AI-Driven Innovation and UX.",
      p3: 'Passionate about design, technology and innovation.',
      btn: 'Get In Touch',
    },
    services: { label: 'Services', title: 'Quality Services' },
    testimonials: { label: 'Testimonials', title: 'What clients say!' },
    footer: 'All Rights Reserved.',
  },
  pt: {
    nav: { home: 'Início', about: 'Sobre', services: 'Serviços', works: 'Trabalhos', contact: 'Contato' },
    hireMe: 'Me Contrate',
    hero: {
      tagline: 'Designer UX/UI · Designer Visual · Desenvolvedor',
      headline: ['Design que fala', 'antes das palavras.'],
      sub: 'Transformando ideias complexas em experiências digitais intuitivas. Da pesquisa UX ao produto final.',
      cta1: 'Ver Projetos',
      cta2: 'Me Contrate',
    },
    profile: {
      bio: 'Designer Visual na Editora Globo. Apaixonado por design, tecnologia e inovação — transformando ideias complexas em experiências digitais intuitivas.',
      available: 'Disponível para Freelance',
      downloadCV: 'Baixar CV',
    },
    partners: 'Empresas que Trabalhei',
    resume: {
      experience: 'Experiência',
      education: 'Formação',
    },
    portfolio: {
      title: 'Trabalhos & Projetos',
      sub: 'Confira alguns dos meus projetos de design, criados com amor e dedicação, refletindo a paixão que coloquei em cada detalhe.',
    },
    cta: {
      title: 'Pronto para dar vida ao seu projeto com um toque especial?',
      sub: 'Entre em contato e vamos tornar isso realidade. Também estou disponível para oportunidades de tempo integral ou parcial.',
      btn: 'Vamos Conversar',
    },
    contact: {
      label: 'contato',
      title: 'Vamos trabalhar juntos?',
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
      title: 'Sou Pedro Tamburro, Designer Visual & UX/UI.',
      p1: 'Designer Visual na Editora Globo, criando soluções visuais para campanhas de marketing, design de interface, edição de vídeos, landing pages e e-mail marketing para as marcas da empresa.',
      p2: 'Com experiência em design visual, prototipagem, HTML, CSS, JS e Figma. Graduado em Design Gráfico pelo Senac RJ e MBA em UX Design pelo Instituto Infnet. Atualmente cursando MBA em Inovação Orientada à IA e UX.',
      p3: 'Apaixonado por design, tecnologia e inovação.',
      btn: 'Entre em Contato',
    },
    services: { label: 'Serviços', title: 'Serviços de Qualidade' },
    testimonials: { label: 'Depoimentos', title: 'O que os clientes dizem!' },
    footer: 'Todos os Direitos Reservados.',
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang')
    if (saved === 'en' || saved === 'pt') setLang(saved)
  }, [])

  const toggle = (newLang) => {
    setLang(newLang)
    localStorage.setItem('portfolio-lang', newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
