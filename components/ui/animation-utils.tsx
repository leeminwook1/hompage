"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxText({ children, baseVelocity = 100 }: { children: React.ReactNode; baseVelocity?: number }) {
    const baseX = useRef(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useTransform(scrollY, [0, 1000], [0, baseVelocity]);
    const x = useTransform(scrollVelocity, (v) => `${baseX.current + v}px`);

    return (
        <div className="overflow-hidden whitespace-nowrap flex">
            <motion.div style={{ x }} className="flex gap-4">
                {children}
            </motion.div>
        </div>
    );
}

export function RevealOnScroll({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
        >
            {children}
        </motion.div>
    );
}

export function ParallaxSection({ children, offset = 50 }: { children: React.ReactNode; offset?: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

    return (
        <div ref={ref}>
            <motion.div style={{ y }}>{children}</motion.div>
        </div>
    );
}

export function ScaleOnScroll({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

    return (
        <div ref={ref}>
            <motion.div style={{ scale, opacity }}>{children}</motion.div>
        </div>
    );
}
