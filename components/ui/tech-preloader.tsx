"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TechPreloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const duration = 2500;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);

            setProgress(newProgress);
            setCounter(Math.floor(newProgress));

            if (newProgress < 100) {
                requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.overflow = "";
                }, 500);
            }
        };

        requestAnimationFrame(animate);

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black overflow-hidden"
                >
                    {/* Gradient orbs background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
                            animate={{
                                scale: [1, 1.2, 1],
                                x: [0, 50, 0],
                                y: [0, -30, 0],
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
                            animate={{
                                scale: [1.2, 1, 1.2],
                                x: [0, -50, 0],
                                y: [0, 30, 0],
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </div>

                    {/* Grid pattern */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                            backgroundSize: '50px 50px'
                        }} />
                    </div>

                    {/* Main content */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Animated logo with 3D effect */}
                        <div className="relative mb-16">
                            {/* Outer rotating rings */}
                            <motion.div
                                className="absolute inset-0 w-48 h-48 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <svg className="w-full h-full" viewBox="0 0 200 200">
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="95"
                                        stroke="url(#gradient1)"
                                        strokeWidth="0.5"
                                        fill="none"
                                        strokeDasharray="10 5"
                                    />
                                    <defs>
                                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
                                            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </motion.div>

                            <motion.div
                                className="absolute inset-0 w-48 h-48 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            >
                                <svg className="w-full h-full" viewBox="0 0 200 200">
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r="85"
                                        stroke="rgba(255,255,255,0.1)"
                                        strokeWidth="0.5"
                                        fill="none"
                                        strokeDasharray="5 10"
                                    />
                                </svg>
                            </motion.div>

                            {/* Center animated logo */}
                            <div className="relative w-48 h-48 flex items-center justify-center">
                                {/* Pulsing glow effect */}
                                <motion.div
                                    className="absolute w-32 h-32 bg-white/5 rounded-full blur-xl"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />

                                {/* Morphing shape */}
                                <motion.div
                                    className="relative w-24 h-24"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                >
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#ffffff" />
                                                <stop offset="100%" stopColor="#a0a0a0" />
                                            </linearGradient>
                                        </defs>
                                        <motion.path
                                            d="M50,15 L85,50 L50,85 L15,50 Z"
                                            fill="none"
                                            stroke="url(#shapeGradient)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            animate={{
                                                d: [
                                                    "M50,15 L85,50 L50,85 L15,50 Z",
                                                    "M50,25 L75,50 L50,75 L25,50 Z",
                                                    "M50,15 L85,50 L50,85 L15,50 Z",
                                                ],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        />
                                        <motion.circle
                                            cx="50"
                                            cy="50"
                                            r="8"
                                            fill="white"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.8, 1, 0.8],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    </svg>
                                </motion.div>
                            </div>
                        </div>

                        {/* Brand name with stagger animation */}
                        <div className="flex gap-1 mb-12">
                            {"LOOPLEE".split("").map((letter, i) => (
                                <motion.span
                                    key={i}
                                    className="text-5xl md:text-6xl font-bold text-white font-[family-name:var(--font-poppins)] tracking-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.08,
                                        ease: [0.76, 0, 0.24, 1],
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>

                        {/* Progress section */}
                        <div className="flex flex-col items-center gap-4 w-80">
                            {/* Progress bar with gradient */}
                            <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-500 via-white to-blue-500"
                                    style={{
                                        width: `${progress}%`,
                                    }}
                                    transition={{ duration: 0.1 }}
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                                    style={{
                                        width: '30%',
                                        left: `${progress - 15}%`,
                                    }}
                                    animate={{
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </div>

                            {/* Counter and status */}
                            <div className="flex items-center justify-between w-full">
                                <motion.div
                                    className="text-2xl font-bold text-white font-mono"
                                    key={counter}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {counter.toString().padStart(2, '0')}%
                                </motion.div>
                                <motion.div
                                    className="text-sm text-white/40 tracking-[0.3em] uppercase"
                                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    Loading
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(30)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white/30 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -30, 0],
                                    opacity: [0, 0.8, 0],
                                    scale: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 3,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
