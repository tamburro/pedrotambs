'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RiShakeHandsLine } from '@remixicon/react'
import { menuList } from '@/utlits/fackData/menuList'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const LangToggle = ({ lang, toggle, mobile }) => (
  <div className={mobile ? 'lang-toggle-mobile d-lg-none' : 'lang-toggle d-none d-lg-flex'}>
    <button onClick={() => toggle('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
    <span>/</span>
    <button onClick={() => toggle('pt')} className={lang === 'pt' ? 'active' : ''}>PT</button>
  </div>
)

const Header = () => {
  const pathName = usePathname()
  const [isSticky, setisSticky] = useState(false)
  const { lang, toggle, t } = useLanguage()

  useEffect(() => {
    const navbar_collapse = document.querySelector(".navbar-collapse")
    navbar_collapse.classList.remove("show")
  }, [pathName])

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader)
    return () => window.removeEventListener("scroll", stickyHeader)
  }, [])

  const stickyHeader = () => {
    setisSticky(window.scrollY > 85)
  }

  const navLabels = [t.nav.home, t.nav.about, t.nav.works, t.nav.services, t.nav.contact]

  return (
    <header className={`main-header ${isSticky ? "fixed-header" : ""}`}>
      <div className="header-upper">
        <div className="container">
          <div className="header-inner d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <Image width={120} height={40} sizes='100vw' src={"/images/logo.png"} alt="Logo" title="Logo" />
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix mx-auto">
              <nav className="main-menu navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo">
                    <Link href="/">
                      <Image width={75} height={25} sizes='100vw' src={"/images/logo.png"} alt="Logo" title="Logo" />
                    </Link>
                  </div>
                  <div className="mobile-header-actions">
                    <div className="lang-toggle-header">
                      <button onClick={() => toggle('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
                      <span>/</span>
                      <button onClick={() => toggle('pt')} className={lang === 'pt' ? 'active' : ''}>PT</button>
                    </div>
                    <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                </div>
                <div className="navbar-collapse collapse">
                  <ul className="navigation onepage clearfix">
                    {menuList.map(({ id, path }, i) => (
                      <li key={id}><Link href={path} className="nav-link-click">{navLabels[i]}</Link></li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
            <div className="menu-btns">
              {/* Language toggle — desktop only */}
              <LangToggle lang={lang} toggle={toggle} mobile={false} />
              <Link href="/contact" className="theme-btn">{t.hireMe} <RiShakeHandsLine size={15} /></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
