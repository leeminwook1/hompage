"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrolling({ children }: { children: ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            root: window,
            content: document.documentElement,
            // duration: 1.2,
            // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            // direction: "vertical",
            // gestureDirection: "vertical",
            // smooth: true,
            // smoothTouch: false,
            // touchMultiplier: 2,
        });

        const RAF = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(RAF);
        };

        requestAnimationFrame(RAF);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
