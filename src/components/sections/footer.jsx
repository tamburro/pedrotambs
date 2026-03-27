'use client'
import Link from 'next/link'
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'

const Footer = () => {
    const year = new Date().getFullYear()
    const { t } = useLanguage();
    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-50 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="copyright-text">
                                <p>Copyright @{year}, <Link href="/">Pedro Tamburro</Link>. {t.footer}</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="copyright-text extra-copyright">
                                <p>Crafted with ❤️ in Rio de Janeiro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
