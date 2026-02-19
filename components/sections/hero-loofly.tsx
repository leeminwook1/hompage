"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroLoofly() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-pink-200 via-purple-300 to-purple-400">
            {/* Animated Background Circles */}
            <motion.div
                className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"
                animate={{
                    x: mousePosition.x * 0.02,
                    y: mousePosition.y * 0.02,
                }}
                transition={{ type: "spring", stiffness: 50 }}
                style={{ top: "20%", left: "10%" }}
            />

            {/* Floating Elements */}
            <motion.div
                className="absolute top-20 left-20 w-4 h-4 bg-white/40 rounded-full"
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
                className="absolute top-40 right-32 w-3 h-3 bg-white/30 rounded-full"
                animate={{
                    y: [0, 15, 0],
                    opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
                className="absolute bottom-40 left-40 w-5 h-5 bg-white/35 rounded-full"
                animate={{
                    y: [0, -25, 0],
                    opacity: [0.35, 0.75, 0.35],
                }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            />
            <motion.div
                className="absolute top-1/3 right-20 w-2 h-2 bg-white/50 rounded-full"
                animate={{
                    y: [0, 20, 0],
                    x: [0, 10, 0],
                    opacity: [0.5, 0.9, 0.5],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-white/40 rounded-full"
                animate={{
                    y: [0, -15, 0],
                    x: [0, -10, 0],
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 2 }}
            />
            <motion.div
                className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/30 rounded-full"
                animate={{
                    y: [0, 18, 0],
                    opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 3.8, repeat: Infinity, delay: 0.8 }}
            />
            <motion.div
                className="absolute bottom-32 left-1/3 w-2 h-2 bg-white/45 rounded-full"
                animate={{
                    y: [0, -22, 0],
                    x: [0, 8, 0],
                    opacity: [0.45, 0.85, 0.45],
                }}
                transition={{ duration: 4.2, repeat: Infinity, delay: 1.2 }}
            />
            <motion.div
                className="absolute top-1/4 left-1/2 w-3 h-3 bg-white/35 rounded-full"
                animate={{
                    y: [0, 12, 0],
                    opacity: [0.35, 0.75, 0.35],
                }}
                transition={{ duration: 3.3, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-white/25 rounded-full"
                animate={{
                    y: [0, -18, 0],
                    x: [0, -12, 0],
                    opacity: [0.25, 0.65, 0.25],
                }}
                transition={{ duration: 5.5, repeat: Infinity, delay: 2.5 }}
            />
            <motion.div
                className="absolute top-2/3 left-20 w-4 h-4 bg-white/40 rounded-full"
                animate={{
                    y: [0, 20, 0],
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 4.8, repeat: Infinity, delay: 1.8 }}
            />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <motion.h2 
                        className="text-3xl md:text-5xl font-bold text-black"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        자극의 시대, 루플리
                    </motion.h2>
                    
                    <motion.h1 
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] font-black text-black tracking-tight"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            duration: 1.2, 
                            delay: 0.4, 
                            ease: [0.16, 1, 0.3, 1]
                        }}
                    >
                        {"LOOFLY".split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.6 + index * 0.1,
                                    ease: "easeOut"
                                }}
                                className="inline-block"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.h1>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    )
}
