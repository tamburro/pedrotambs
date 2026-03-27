'use client';
import React from 'react';

const tokens = [
  { name: '--cosmos',    hex: '#080810', label: 'Cosmos',    role: 'Fundo mais profundo' },
  { name: '--void',      hex: '#0D0D18', label: 'Void',      role: 'Background principal' },
  { name: '--nebula',    hex: '#1A1A2E', label: 'Nebula',    role: 'Cards / superfícies elevadas' },
  { name: '--stardust',  hex: '#2D2540', label: 'Stardust',  role: 'Bordas e divisores' },
  { name: '--plasma',    hex: '#8200DB', label: 'Plasma',    role: 'CTA & hover (electric purple)' },
  { name: '--aurora',    hex: '#C070FF', label: 'Aurora',    role: 'Accent suave' },
  { name: '--moonlight', hex: '#F0F0FA', label: 'Moonlight', role: 'Texto primário' },
];

const typeTokens = [
  { label: 'Body',  family: '"Poppins", sans-serif',          sample: 'The quick brown fox' },
  { label: 'Mono',  family: '"Space Mono", monospace',        sample: 'NAVIGATION / LABELS' },
  { label: 'Serif', family: '"Playfair Display", serif',      sample: 'Project Titles' },
];

export default function DesignSystemPage() {
  return (
    <div style={{ background: '#0D0D18', minHeight: '100vh', padding: '120px 40px 80px', color: '#F0F0FA' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <p style={{ fontFamily: '"Space Mono"', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,240,250,0.4)', marginBottom: '8px' }}>
          Pedro Tambs · Design System
        </p>
        <h1 style={{ fontFamily: '"Poppins"', fontWeight: 700, fontSize: '2.5rem', marginBottom: '60px' }}>
          Tokens & Storybook
        </h1>

        {/* Colors */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontFamily: '"Space Mono"', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,240,250,0.4)', marginBottom: '24px' }}>
            Color Palette
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
            {tokens.map(t => (
              <div key={t.name} style={{ background: '#1A1A2E', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(130,0,219,0.15)' }}>
                <div style={{ background: t.hex, height: '80px' }} />
                <div style={{ padding: '16px' }}>
                  <p style={{ fontFamily: '"Space Mono"', fontSize: '11px', color: '#8200DB', letterSpacing: '0.05em', marginBottom: '4px' }}>{t.name}</p>
                  <p style={{ fontWeight: 600, fontSize: '15px', marginBottom: '2px' }}>{t.label}</p>
                  <p style={{ fontSize: '12px', color: 'rgba(240,240,250,0.45)', marginBottom: '4px' }}>{t.hex}</p>
                  <p style={{ fontSize: '11px', color: 'rgba(240,240,250,0.35)' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontFamily: '"Space Mono"', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,240,250,0.4)', marginBottom: '24px' }}>
            Typography
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {typeTokens.map(t => (
              <div key={t.label} style={{ background: '#1A1A2E', borderRadius: '12px', padding: '28px 32px', border: '1px solid rgba(130,0,219,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <p style={{ fontFamily: '"Space Mono"', fontSize: '11px', color: '#8200DB', letterSpacing: '0.05em', marginBottom: '8px' }}>{t.label}</p>
                  <p style={{ fontFamily: t.family, fontSize: '1.6rem', margin: 0 }}>{t.sample}</p>
                </div>
                <p style={{ fontFamily: '"Space Mono"', fontSize: '11px', color: 'rgba(240,240,250,0.3)' }}>{t.family}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section style={{ marginBottom: '64px' }}>
          <h2 style={{ fontFamily: '"Space Mono"', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,240,250,0.4)', marginBottom: '24px' }}>
            Components
          </h2>
          <div style={{ background: '#1A1A2E', borderRadius: '12px', padding: '32px', border: '1px solid rgba(130,0,219,0.15)', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
            <button style={{ background: 'rgba(130,0,219,0.18)', border: '1px solid #2D2540', color: '#F0F0FA', fontFamily: '"Space Mono"', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 28px', borderRadius: '999px', cursor: 'pointer' }}>
              Primary CTA
            </button>
            <button style={{ background: '#8200DB', border: '1px solid #8200DB', color: '#F0F0FA', fontFamily: '"Space Mono"', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 28px', borderRadius: '999px', cursor: 'pointer' }}>
              Hover State
            </button>
            <button style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(240,240,250,0.15)', color: 'rgba(240,240,250,0.75)', fontFamily: '"Space Mono"', fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '12px 28px', borderRadius: '999px', cursor: 'pointer' }}>
              Secondary
            </button>
            <div style={{ background: '#1A1A2E', border: '1px solid rgba(130,0,219,0.15)', backdropFilter: 'blur(8px)', borderRadius: '12px', padding: '16px 20px' }}>
              <p style={{ fontFamily: '"Space Mono"', fontSize: '10px', color: 'rgba(240,240,250,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Info Box</p>
              <p style={{ fontWeight: 600, fontSize: '15px', margin: 0 }}>Glass Card</p>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section>
          <h2 style={{ fontFamily: '"Space Mono"', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,240,250,0.4)', marginBottom: '24px' }}>
            Spacing Scale
          </h2>
          <div style={{ background: '#1A1A2E', borderRadius: '12px', padding: '32px', border: '1px solid rgba(130,0,219,0.15)', display: 'flex', alignItems: 'flex-end', gap: '12px', flexWrap: 'wrap' }}>
            {[4, 8, 12, 16, 24, 32, 40, 48, 64, 80].map(s => (
              <div key={s} style={{ textAlign: 'center' }}>
                <div style={{ width: `${Math.min(s, 80)}px`, height: `${Math.min(s, 80)}px`, background: 'rgba(130,0,219,0.3)', borderRadius: '4px', marginBottom: '8px' }} />
                <p style={{ fontFamily: '"Space Mono"', fontSize: '10px', color: 'rgba(240,240,250,0.4)' }}>{s}px</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
