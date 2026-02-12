"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function HeroInnovative() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            </div>

            <motion.div
                style={{ y, opacity }}
                className="container mx-auto px-4 text-center z-10"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-8"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-neutral-300 text-sm tracking-wider mb-6"
                    >
                        DIGITAL EXCELLENCE
                    </motion.span>
                </motion.div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] font-[family-name:var(--font-poppins)]">
                    <span className="block overflow-hidden">
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="block text-white"
                        >
                            DIGITAL
                        </motion.span>
                    </span>
                    <span className="block overflow-hidden">
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="block text-white"
                        >
                            EXCELLENCE
                        </motion.span>
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="text-lg md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light"
                >
                    Crafting exceptional digital experiences with precision, creativity, and innovation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button size="lg" className="rounded-full text-base h-12 px-8 bg-white text-black hover:bg-neutral-200 transition-all">
                            Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button variant="outline" size="lg" className="rounded-full text-base h-12 px-8 border-white/20 hover:bg-white/10 hover:text-white transition-all">
                            View Our Work
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-10 hidden md:block"
            >
                <div className="flex flex-col gap-2 font-mono text-xs text-slate-600">
                    <span>SCROLL TO EXPLORE</span>
                    <div className="h-10 w-[1px] bg-slate-800 ml-5 relative overflow-hidden">
                        <motion.div
                            animate={{ top: ["0%", "100%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-1/2 bg-slate-400"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
