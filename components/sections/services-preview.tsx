"use client";

import { motion } from "framer-motion";
import { Code, Palette, Rocket, Users } from "lucide-react";

const services = [
    {
        icon: Code,
        title: "Web Development",
        description: "Custom websites and web applications built with cutting-edge technologies.",
    },
    {
        icon: Palette,
        title: "Brand Design",
        description: "Comprehensive brand identity design that captures your unique essence.",
    },
    {
        icon: Rocket,
        title: "Digital Strategy",
        description: "Data-driven strategies to accelerate your digital transformation.",
    },
    {
        icon: Users,
        title: "Consulting",
        description: "Expert guidance to navigate the complex digital landscape.",
    },
];

export function ServicesPreview() {
    return (
        <section className="py-32 bg-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-poppins)]">
                        What We Do Best
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to your needs
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group p-8 border border-white/10 hover:border-white/30 transition-all duration-300 bg-white/5 hover:bg-white/10 cursor-pointer"
                            >
                                <Icon className="w-12 h-12 text-white mb-6" />
                                <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-poppins)]">
                                    {service.title}
                                </h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
