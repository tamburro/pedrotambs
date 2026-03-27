'use client'
import React from 'react'
import ContactOption from '../../components/sections/contact/contactOption'
import ContactForm from '../../components/sections/contact/contactForm'
import { useLanguage } from '@/context/LanguageContext'

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="contact-area innerpage-single-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <p>{t.contact.label}</p>
                <h2>{t.contact.title}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <ContactOption />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact