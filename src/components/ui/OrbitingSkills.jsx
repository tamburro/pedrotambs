'use client'
import React, { useEffect, useState, memo, useCallback } from 'react';

const ICONS = {
    figma: {
        label: 'Figma',
        color: '#A259FF',
        render: () => (
            <svg viewBox="0 0 38 57" fill="none" style={{ width: '70%', height: '70%' }}>
                <path d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE"/>
                <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83"/>
                <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262"/>
                <path d="M0 9.5a9.5 9.5 0 0 0 9.5 9.5H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
                <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#FF7262"/>
            </svg>
        ),
    },
    react: {
        label: 'React',
        color: '#61DAFB',
        render: () => (
            <svg viewBox="0 0 24 24" fill="none" style={{ width: '70%', height: '70%' }}>
                <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
            </svg>
        ),
    },
    nextjs: {
        label: 'Next.js',
        color: '#FFFFFF',
        render: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '70%', height: '70%', color: '#fff' }}>
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a65060.842 65060.842 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747C23.391 5.28 20.18 1.494 15.83.097a13.397 13.397 0 0 0-2.498-.488c-.308-.032-1.525-.05-1.76-.01zm4.987 7.307a.474.474 0 0 1 .24.277c.018.061.023 1.365.018 4.304l-.006 4.218-.744-1.14-.748-1.14V10.69c0-2.274.008-3.498.023-3.55a.475.475 0 0 1 .232-.296c.096-.05.133-.055.5-.055.35 0 .408.006.485.518z"/>
            </svg>
        ),
    },
    claude: {
        label: 'Claude API',
        color: '#CC9B7A',
        render: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '70%', height: '70%', color: '#CC9B7A' }}>
                <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-1.8-.097L.501 12.56l-.501-.427.21-.703.473-.177.948.097 1.784.225 2.954.354 1.946.225h.564l.016-.193-.193-.129-1.978-1.317-2.485-1.735-1.769-1.27-.853-.692-.547-.934.096-.91.853-.562.95.177.79.579 1.703 1.446 2.228 1.897 1.656 1.382.402.354.225-.064.048-.193-.354-.563-1.3-2.292-1.366-2.454-.772-1.462-.354-.998-.016-.708.5-.773.918-.096.724.354.547.724 1.09 2.034 1.43 2.664.708 1.3.37.773h.24l.128-.193.016-2.405.064-2.826.048-1.914.08-.95.467-.853.708-.338.772.338.434.772-.016 1.027-.128 2.325-.193 2.826-.064 1.735v.5h.177l.37-.547 1.156-1.752 1.542-2.293.982-1.317.708-.805.627-.498h1.075l.595.982-.354.949-.724.853-1.525 2.034-1.48 2.099-.708 1.107-.29.708.048.128.241.048.708-.306 2.147-.708 2.034-.612 1.559-.37 1.155-.113.708.37.354.724-.209.708-.853.387-1.946.531-1.978.434-2.034.305-.837.096h-.725l-.096.338.804.692 1.494 1.413 1.913 1.784.982 1.01.434.708-.016.982-.853.547-.95-.048-.853-.724-1.3-1.42-1.59-1.832-.724-.853-.434-.531-.241.016-.048.338.096 1.494.193 2.697.08 1.914-.16.95-.467.708-.772.225-.708-.451-.354-.9.096-1.768.242-2.374.145-1.559v-.708l-.193-.016-.37.451-1.558 2.002-1.01 1.252-1.43 1.607-.708.547-.998.048-.708-.708.048-.85 4.303-5.19.031-.177z"/>
            </svg>
        ),
    },
    vercel: {
        label: 'Vercel',
        color: '#FFFFFF',
        render: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '65%', height: '65%', color: '#fff' }}>
                <path d="M24 22.525H0l12-21.05 12 21.05z"/>
            </svg>
        ),
    },
    prisma: {
        label: 'Prisma',
        color: '#5A67D8',
        render: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '70%', height: '70%', color: '#5A67D8' }}>
                <path d="M21.807 18.285L13.553.756a1.324 1.324 0 0 0-1.129-.754 1.31 1.31 0 0 0-1.206.636L2.205 15.803a1.307 1.307 0 0 0 .112 1.468l4.24 5.316a1.316 1.316 0 0 0 1.433.45l13.287-3.99a1.31 1.31 0 0 0 .532-2.762zm-1.499 1.57l-11.593 3.48L5.01 17.513l8.24-14.289 7.08 15.63h-.022z"/>
            </svg>
        ),
    },
};

const skillsConfig = [
    { id: 'figma',   orbitRadius: 95,  size: 44, speed: 0.5,  iconType: 'figma',   phaseShift: 0,                       glowColor: 'teal' },
    { id: 'react',   orbitRadius: 95,  size: 44, speed: 0.5,  iconType: 'react',   phaseShift: (2 * Math.PI) / 3,       glowColor: 'teal' },
    { id: 'nextjs',  orbitRadius: 95,  size: 44, speed: 0.5,  iconType: 'nextjs',  phaseShift: (4 * Math.PI) / 3,       glowColor: 'teal' },
    { id: 'claude',  orbitRadius: 170, size: 48, speed: -0.3, iconType: 'claude',  phaseShift: 0,                       glowColor: 'purple' },
    { id: 'vercel',  orbitRadius: 170, size: 44, speed: -0.3, iconType: 'vercel',  phaseShift: (2 * Math.PI) / 3,       glowColor: 'purple' },
    { id: 'prisma',  orbitRadius: 170, size: 44, speed: -0.3, iconType: 'prisma',  phaseShift: (4 * Math.PI) / 3,       glowColor: 'purple' },
];

const OrbitPath = memo(({ radius, glowColor, animationDelay = 0 }) => {
    const colors = glowColor === 'purple'
        ? { ring: 'rgba(130,0,219,0.25)', glow: 'rgba(130,0,219,0.12)' }
        : { ring: 'rgba(6,182,212,0.25)', glow: 'rgba(6,182,212,0.12)' };

    return (
        <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            width: `${radius * 2}px`,
            height: `${radius * 2}px`,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            border: `1px solid ${colors.ring}`,
            boxShadow: `0 0 40px ${colors.glow}, inset 0 0 40px ${colors.glow}`,
            pointerEvents: 'none',
        }} />
    );
});
OrbitPath.displayName = 'OrbitPath';

const SkillNode = memo(({ config, angle }) => {
    const [hovered, setHovered] = useState(false);
    const { orbitRadius, size, iconType } = config;
    const icon = ICONS[iconType];
    const x = Math.cos(angle) * orbitRadius;
    const y = Math.sin(angle) * orbitRadius;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                zIndex: hovered ? 20 : 10,
                cursor: 'pointer',
            }}
        >
            <div style={{
                width: '100%', height: '100%',
                borderRadius: '50%',
                background: 'rgba(13,13,24,0.92)',
                border: `1px solid rgba(240,240,250,0.1)`,
                backdropFilter: 'blur(8px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                transform: hovered ? 'scale(1.3)' : 'scale(1)',
                boxShadow: hovered
                    ? `0 0 24px ${icon.color}60, 0 0 48px ${icon.color}20`
                    : `0 4px 16px rgba(0,0,0,0.4)`,
            }}>
                {icon.render()}
            </div>
            {hovered && (
                <div style={{
                    position: 'absolute',
                    bottom: '-28px', left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(8,8,16,0.95)',
                    border: '1px solid rgba(240,240,250,0.1)',
                    borderRadius: '6px',
                    padding: '3px 8px',
                    fontSize: '11px',
                    fontFamily: '"Space Mono", monospace',
                    letterSpacing: '0.05em',
                    color: '#F0F0FA',
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                    zIndex: 30,
                }}>
                    {icon.label}
                </div>
            )}
        </div>
    );
});
SkillNode.displayName = 'SkillNode';

export default function OrbitingSkills() {
    const [time, setTime] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;
        let id;
        let last = performance.now();
        const tick = (now) => {
            setTime(t => t + (now - last) / 1000);
            last = now;
            id = requestAnimationFrame(tick);
        };
        id = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(id);
    }, [paused]);

    return (
        <div
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div style={{
                position: 'relative',
                width: '400px',
                height: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
            }}>
                <OrbitPath radius={95} glowColor="teal" />
                <OrbitPath radius={170} glowColor="purple" animationDelay={1.5} />

                {/* Center node */}
                <div style={{
                    width: '72px', height: '72px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1A1A2E 0%, #0D0D18 100%)',
                    border: '1px solid rgba(130,0,219,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 10,
                    position: 'relative',
                    boxShadow: '0 0 40px rgba(130,0,219,0.3), 0 0 80px rgba(130,0,219,0.1)',
                }}>
                    <div style={{
                        position: 'absolute', inset: 0, borderRadius: '50%',
                        background: 'rgba(192,112,255,0.15)',
                        filter: 'blur(12px)',
                        animation: 'pulse 3s ease-in-out infinite',
                    }} />
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'relative', zIndex: 1 }}>
                        <defs>
                            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#06B6D4"/>
                                <stop offset="100%" stopColor="#C070FF"/>
                            </linearGradient>
                        </defs>
                        <polyline points="16 18 22 12 16 6"/>
                        <polyline points="8 6 2 12 8 18"/>
                    </svg>
                </div>

                {skillsConfig.map(config => (
                    <SkillNode
                        key={config.id}
                        config={config}
                        angle={time * config.speed + config.phaseShift}
                    />
                ))}
            </div>
        </div>
    );
}
