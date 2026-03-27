'use client';
import { useEffect, useRef } from 'react';

// Snaps between fold 1 (hero, 100vh) and fold 2 (profile section)
// on mousewheel / trackpad. Beyond fold 2 = free scroll.
export default function ScrollSnap() {
    const isSnapping = useRef(false);

    useEffect(() => {
        const HERO_HEIGHT = () => window.innerHeight;
        const SNAP_ZONE = () => window.innerHeight * 1.5; // stop snapping after 1.5x vh

        const easeInOutCubic = (t) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const smoothScrollTo = (target, duration = 700) => {
            const start = window.scrollY;
            const distance = target - start;
            let startTime = null;

            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                window.scrollTo(0, start + distance * easeInOutCubic(progress));
                if (elapsed < duration) requestAnimationFrame(step);
                else isSnapping.current = false;
            };

            requestAnimationFrame(step);
        };

        const handleWheel = (e) => {
            const scrollY = window.scrollY;
            const heroH = HERO_HEIGHT();
            const snapZone = SNAP_ZONE();

            // Only snap within the first two folds
            if (scrollY > snapZone) return;
            if (isSnapping.current) { e.preventDefault(); return; }

            if (e.deltaY > 0 && scrollY < heroH * 0.5) {
                // Scrolling DOWN from hero → snap to fold 2
                e.preventDefault();
                isSnapping.current = true;
                smoothScrollTo(heroH);
            } else if (e.deltaY < 0 && scrollY >= heroH * 0.4 && scrollY <= snapZone) {
                // Scrolling UP in fold 2 → snap back to top
                e.preventDefault();
                isSnapping.current = true;
                smoothScrollTo(0);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    return null;
}
