"use client"

import { Section } from "@/components/ui/section"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <Section className="relative min-h-screen flex flex-col justify-center overflow-hidden py-0">

            {/* Background Graphic (optional subtle effect) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.2 }} // Delay for preloader
                    className="flex flex-col gap-2"
                >
                    <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mix-blend-difference">
                        Digital
                    </h1>
                    <div className="flex items-center gap-6 md:gap-12 pl-2 md:pl-4">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100px" }}
                            transition={{ duration: 1, delay: 2.8 }}
                            className="h-2 md:h-4 bg-white hidden md:block"
                        />
                        <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase text-transparent stroke-white stroke-2" style={{ WebkitTextStroke: "1px white" }}>
                            Experience
                        </h1>
                    </div>
                    <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase text-right self-end">
                        Agency
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 3.2 }}
                    className="flex justify-between items-end mt-12 md:mt-24 border-t border-white/20 pt-6"
                >
                    <div className="text-sm md:text-base text-gray-400 max-w-sm">
                        We craft award-winning websites, applications, and brand experiences that define the future.
                    </div>

                    <motion.div
                        style={{ opacity }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ArrowDown className="w-6 h-6 md:w-8 md:h-8" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Parallax Background Text */}
            <motion.div
                style={{ y }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-bold opacity-[0.03] pointer-events-none whitespace-nowrap"
            >
                CREATIVE
            </motion.div>
        </Section>
    )
}
