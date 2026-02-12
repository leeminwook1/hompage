"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroNew() {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
            {/* Background Image - Placeholder for now until generation works/assigned */}
            <div className="absolute inset-0 z-0">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-black/40 z-10" />

                {/* We will add an image here later. For now, a CSS pattern or placeholder div */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
            </div>

            <div className="relative z-20 container mx-auto px-4">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                            Reinventing Digital <br />
                            <span className="text-slate-300">Excellence.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            We help ambitious brands define their future through strategy, design, and technology.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-slate-900 hover:bg-slate-100 border-none">
                                    Start a Project
                                </Button>
                            </Link>
                            <Link href="/works">
                                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full text-white border-white/30 hover:bg-white/10 hover:text-white backdrop-blur-sm">
                                    View Our Work <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
