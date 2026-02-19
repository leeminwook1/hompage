"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TechPreloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);

            setProgress(newProgress);

            if (newProgress < 100) {
                requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.overflow = "";
                }, 300);
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
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 via-purple-300 to-purple-400 overflow-hidden"
                >
                    {/* Animated Background Circles */}
                    <motion.div
                        className="absolute w-96 h-96 bg-white/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            x: [0, 50, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        style={{ top: "20%", left: "10%" }}
                    />
                    <motion.div
                        className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            x: [0, -40, 0],
                            y: [0, 40, 0],
                        }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        style={{ bottom: "20%", right: "10%" }}
                    />

                    {/* Main content */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Subtitle */}
                        <motion.h2 
                            className="text-2xl md:text-3xl font-bold text-black mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            자극의 시대, 루플리
                        </motion.h2>

                        {/* LOOFLY Logo with letter animation */}
                        <div className="flex gap-1 mb-12">
                            {"LOOFLY".split("").map((letter, i) => (
                                <motion.span
                                    key={i}
                                    className="text-7xl md:text-9xl font-black text-black tracking-tight"
                                    initial={{ opacity: 0, y: 50, scale: 0.5 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.1,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>

                        {/* Progress bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="w-64 md:w-80"
                        >
                            <div className="w-full h-1 bg-black/20 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-black rounded-full"
                                    style={{
                                        width: `${progress}%`,
                                    }}
                                    transition={{ duration: 0.1 }}
                                />
                            </div>
                        </motion.div>

                        {/* Loading dots */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="flex justify-center gap-2 mt-8"
                        >
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 bg-black/60 rounded-full"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.6, 1, 0.6],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </motion.div>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-white/40 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -40, 0],
                                    opacity: [0, 0.8, 0],
                                    scale: [0, 1.5, 0],
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
