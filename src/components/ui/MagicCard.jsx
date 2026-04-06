'use client'
import { useCallback, useEffect } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

export function useSpotlight(gradientSize = 100, gradientColor = 'rgba(130, 0, 219, 0.25)') {
    const mouseX = useMotionValue(-gradientSize)
    const mouseY = useMotionValue(-gradientSize)

    const reset = useCallback(() => {
        mouseX.set(-gradientSize)
        mouseY.set(-gradientSize)
    }, [mouseX, mouseY, gradientSize])

    useEffect(() => { reset() }, [reset])

    const onPointerMove = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
    }, [mouseX, mouseY])

    const spotlightBg = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)`

    const overlay = (
        <motion.span
            style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 'inherit',
                background: spotlightBg,
                pointerEvents: 'none',
                zIndex: 0,
            }}
        />
    )

    return { onPointerMove, onPointerLeave: reset, overlay }
}

export function MagicCard({
    children,
    className = '',
    style = {},
    gradientColor = 'rgba(130, 0, 219, 0.18)',
    gradientSize = 220,
}) {
    const mouseX = useMotionValue(-gradientSize)
    const mouseY = useMotionValue(-gradientSize)

    const reset = useCallback(() => {
        mouseX.set(-gradientSize)
        mouseY.set(-gradientSize)
    }, [mouseX, mouseY, gradientSize])

    useEffect(() => { reset() }, [reset])

    const handlePointerMove = useCallback((e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
    }, [mouseX, mouseY])

    const spotlightBg = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)`

    return (
        <div
            className={className}
            style={{ position: 'relative', ...style }}
            onPointerMove={handlePointerMove}
            onPointerLeave={reset}
        >
            <motion.div
                style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 'inherit',
                    background: spotlightBg,
                    pointerEvents: 'none',
                    zIndex: 1,
                }}
            />
            <div style={{ position: 'relative', zIndex: 2 }}>
                {children}
            </div>
        </div>
    )
}
