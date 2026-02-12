"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function PhilosophySection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.5"],
    });

    return (
        <section ref={containerRef} className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <span className="text-neutral-500 text-sm tracking-widest uppercase mb-4 block">
                            OUR PHILOSOPHY
                        </span>
                    </motion.div>

                    <div className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-400 space-y-12 font-[family-name:var(--font-poppins)]">
                        <Paragraph
                            text="We believe in the power of digital alchemy. Transforming static pixels into living, breathing experiences."
                            progress={scrollYProgress}
                            range={[0, 0.3]}
                        />
                        <Paragraph
                            text="Code is our canvas, and motion is our brush. We don't just build websites; we construct digital realities."
                            progress={scrollYProgress}
                            range={[0.3, 0.6]}
                        />
                        <Paragraph
                            text="In a world of noise, we create the signal. Clarity, precision, and impact are the pillars of our craft."
                            progress={scrollYProgress}
                            range={[0.6, 0.9]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Paragraph({ text, progress, range }: { text: string; progress: any; range: [number, number] }) {
    const opacity = useTransform(progress, range, [0.2, 1]);
    // A subtle highlighting effect could be added here

    return (
        <motion.p style={{ opacity }} className="transition-all duration-500">
            {text}
        </motion.p>
    );
}
