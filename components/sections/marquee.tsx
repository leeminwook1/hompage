"use client"

import { motion } from "framer-motion"

interface MarqueeProps {
    text: string
    repeat?: number
    className?: string
    reverse?: boolean
}

export function Marquee({ text, repeat = 4, className = "", reverse = false }: MarqueeProps) {
    return (
        <div className={`overflow-hidden whitespace-nowrap py-4 ${className}`}>
            <motion.div
                className="flex gap-8"
                initial={{ x: reverse ? "-20%" : "0%" }}
                animate={{ x: reverse ? "0%" : "-20%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 10, // Adjust speed here
                }}
            >
                {Array.from({ length: repeat }).map((_, i) => (
                    <span key={i} className="text-6xl md:text-9xl font-black tracking-tighter opacity-20 hover:opacity-100 transition-opacity cursor-default">
                        {text}
                    </span>
                ))}
            </motion.div>
        </div>
    )
}
