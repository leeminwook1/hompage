"use client"

import { Section } from "@/components/ui/section"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
    { number: "01", title: "Discovery", description: "We dive deep into your brand, understanding your goals, audience, and market position." },
    { number: "02", title: "Strategy", description: "Crafting a tailored roadmap that aligns with your business objectives and digital needs." },
    { number: "03", title: "Design", description: "Visualizing the concept with high-fidelity mockups, ensuring aesthetic excellence and usability." },
    { number: "04", title: "Development", description: "Turning designs into pixel-perfect, performant code using cutting-edge technologies." },
    { number: "05", title: "Launch", description: "Deploying your digital asset with rigorous testing and optimization for a smooth takeoff." },
]

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

    return (
        <Section className="py-32 overflow-hidden border-t border-border">
            <div className="mb-20 px-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">OUR PROCESS</h2>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    A proven methodology to deliver exceptional results.
                </p>
            </div>

            <div ref={containerRef} className="relative">
                <motion.div style={{ x }} className="flex gap-8 pl-4">
                    {steps.map((step, i) => (
                        <div key={i} className="min-w-[300px] md:min-w-[400px] flex flex-col gap-6 p-8 border border-border hover:bg-accent transition-colors duration-500 group">
                            <div className="text-6xl font-black tracking-tighter text-muted/20 group-hover:text-primary transition-colors duration-500">
                                {step.number}
                            </div>
                            <h3 className="text-2xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </Section>
    )
}
