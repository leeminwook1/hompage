"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrambleText } from "@/components/ui/scramble-text";

export function ContactCreative() {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-neutral-500 text-sm tracking-widest uppercase mb-8 block">
                            GET IN TOUCH
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight font-[family-name:var(--font-poppins)]">
                            HAVE A VISION?<br />
                            <span className="text-neutral-600">LET'S BUILD IT.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/contact" className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-light hover:text-neutral-300 transition-colors">
                            <span className="border-b border-neutral-700 group-hover:border-neutral-300 pb-2">hello@agency.com</span>
                            <ArrowUpRight className="h-8 w-8 md:h-12 md:w-12 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </Link>
                    </motion.div>

                    <div className="mt-20 flex justify-center gap-8">
                        {["Instagram", "Twitter", "LinkedIn", "Dribbble"].map((social, i) => (
                            <a key={i} href="#" className="text-neutral-500 hover:text-white transition-colors text-sm uppercase tracking-widest">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-slate-950 to-slate-950 -z-10 pointer-events-none" />
        </section>
    );
}
