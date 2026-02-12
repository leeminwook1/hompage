"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useRef } from "react";

const featuredWorks = [
    {
        id: 1,
        title: "QUANTUM LABS",
        category: "Brand Identity",
        year: "2024",
        description: "Complete brand overhaul for a cutting-edge AI research laboratory",
    },
    {
        id: 2,
        title: "NEXUS PLATFORM",
        category: "Product Design",
        year: "2024",
        description: "Enterprise SaaS platform reimagined for modern workflows",
    },
    {
        id: 3,
        title: "AURORA STUDIOS",
        category: "Web Experience",
        year: "2023",
        description: "Immersive portfolio for award-winning creative studio",
    },
    {
        id: 4,
        title: "VELOCITY APP",
        category: "Mobile Design",
        year: "2023",
        description: "Fitness tracking app with AI-powered insights",
    },
];

export function FeaturedWorks() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const headerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: headerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    const title = "Recent Work";
    const subtitle = "FEATURED PROJECTS";

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header with Scroll Animation */}
                <motion.div
                    ref={headerRef}
                    style={{ opacity }}
                    className="mb-20 relative"
                >
                    {/* Subtitle with character reveal */}
                    <div className="overflow-hidden mb-4">
                        <motion.div className="flex gap-1">
                            {subtitle.split('').map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.03,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    viewport={{ once: true }}
                                    className="text-neutral-500 text-sm tracking-widest uppercase"
                                >
                                    {char === ' ' ? '\u00A0' : char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Main title with parallax and scale */}
                    <motion.div style={{ y, scale }} className="overflow-hidden">
                        <h2 className="text-5xl md:text-7xl font-bold text-white font-[family-name:var(--font-poppins)]">
                            {title.split(' ').map((word, wordIndex) => (
                                <span key={wordIndex} className="inline-block mr-4">
                                    {word.split('').map((char, charIndex) => (
                                        <motion.span
                                            key={charIndex}
                                            initial={{ opacity: 0, rotateX: -90 }}
                                            whileInView={{ opacity: 1, rotateX: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: (wordIndex * word.length + charIndex) * 0.05,
                                                ease: [0.22, 1, 0.36, 1]
                                            }}
                                            viewport={{ once: true }}
                                            className="inline-block"
                                            style={{ transformOrigin: 'bottom' }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </h2>
                    </motion.div>
                </motion.div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredWorks.map((work, index) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredId(work.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-neutral-900 border border-white/10 rounded-lg">
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 transition-transform duration-700 group-hover:scale-110" />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={hoveredId === work.id ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white text-black px-6 py-3 rounded-full font-medium flex items-center gap-2"
                                    >
                                        View Project
                                        <ArrowUpRight className="w-4 h-4" />
                                    </motion.div>
                                </div>

                                {/* Number Badge */}
                                <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white font-bold">
                                    {String(work.id).padStart(2, '0')}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-3">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-neutral-300 transition-colors font-[family-name:var(--font-poppins)]">
                                            {work.title}
                                        </h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed">
                                            {work.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <span className="text-neutral-500 text-sm uppercase tracking-wider">
                                        {work.category}
                                    </span>
                                    <span className="text-neutral-600 text-sm">
                                        {work.year}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="/works"
                        className="inline-flex items-center gap-2 text-white hover:text-neutral-300 transition-colors group"
                    >
                        <span className="text-lg font-medium border-b border-white/20 group-hover:border-white/60 pb-1">
                            View All Projects
                        </span>
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
