"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2500) // Duration of the preloader
        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="flex flex-col items-center gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-6xl md:text-8xl font-black tracking-tighter"
                        >
                            AGENCY.
                        </motion.div>
                        <motion.div
                            className="h-1 bg-white"
                            initial={{ width: 0 }}
                            animate={{ width: 100 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="text-sm uppercase tracking-[0.2em] text-gray-400"
                        >
                            Creative Studio
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
