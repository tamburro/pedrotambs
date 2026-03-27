'use client'
import React, { useState } from 'react'
import { RiMailLine, RiCheckLine, RiErrorWarningLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form className="contactForm" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text" id="name" name="name"
                                        className="form-control"
                                        placeholder="Pedro Tamburro"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email" id="email" name="email"
                                        className="form-control"
                                        placeholder="hello@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        name="message" id="message"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Escreva sua mensagem..."
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button
                                        type="submit"
                                        className="theme-btn"
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? 'Enviando...' : 'Send Me Message'}
                                        <i><RiMailLine size={15} /></i>
                                    </button>

                                    {status === 'success' && (
                                        <p style={{ marginTop: '16px', color: '#C070FF', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: '"Space Mono"', fontSize: '13px' }}>
                                            <RiCheckLine size={16} /> Mensagem enviada com sucesso!
                                        </p>
                                    )}
                                    {status === 'error' && (
                                        <p style={{ marginTop: '16px', color: '#ff6b6b', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: '"Space Mono"', fontSize: '13px' }}>
                                            <RiErrorWarningLine size={16} /> Erro ao enviar. Tente novamente.
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactForm
