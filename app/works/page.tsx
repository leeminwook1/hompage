"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function WorksPage() {
    const projects = [1, 2, 3, 4, 5, 6];
    const categories = ["All", "Branding", "Web Design", "Development", "Mobile"];

    return (
        <div className="pt-20 bg-black min-h-screen">
            <Section className="pb-0 pt-10">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white font-[family-name:var(--font-poppins)]">WORK.</h1>
            </Section>

            <Section className="pt-8">
                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {categories.map((cat, i) => (
                        <button
                            key={i}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-white text-black' : 'bg-white/10 text-neutral-400 hover:bg-white/20 hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className="border-none shadow-none bg-transparent">
                                <div className="aspect-[4/3] bg-neutral-900 rounded-xl mb-4 overflow-hidden group relative border border-white/10">
                                    <div className="w-full h-full bg-neutral-800 transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                        <div className="bg-white text-black px-6 py-3 rounded-full font-medium">View Project</div>
                                    </div>
                                </div>
                                <CardContent className="px-0">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-2xl font-bold tracking-tight text-white font-[family-name:var(--font-poppins)]">Project Name {i}</h3>
                                            <div className="text-sm font-medium text-neutral-500 uppercase tracking-wider mt-1">Branding / Strategy</div>
                                        </div>
                                        <span className="text-neutral-400">2024</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
