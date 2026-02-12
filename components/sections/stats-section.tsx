"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Happy Clients", value: "80+" },
    { label: "Awards Won", value: "25+" },
    { label: "Team Members", value: "40+" },
];

export function StatsSection() {
    return (
        <section className="py-24 bg-black border-y border-white/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-6xl font-bold text-white mb-2 font-[family-name:var(--font-poppins)]">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-neutral-400 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
