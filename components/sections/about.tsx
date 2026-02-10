"use client"

import { Section } from "@/components/ui/section"
import { motion } from "framer-motion"
import { CheckCircle2, Users, Trophy, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
    const stats = [
        { label: "Years Experience", value: "10+" },
        { label: "Projects Completed", value: "200+" },
        { label: "Awards Won", value: "15" },
        { label: "Happy Clients", value: "98%" },
    ]

    return (
        <div className="flex flex-col">
            {/* Intro Section */}
            <Section id="about-intro" className="pt-20 pb-0">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">
                            We Are <span className="text-muted-foreground">Creatives.</span><br />
                            We Are <span className="text-muted-foreground">Strategists.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Founded in 2014, our agency has been at the forefront of digital innovation.
                            We believe in the power of design to transform businesses and connect with audiences on a deeper level.
                            Our mission is simple: to create exceptional digital experiences that drive results.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square bg-accent rounded-2xl overflow-hidden border border-border flex items-center justify-center">
                            <span className="text-muted-foreground">Team Photo Placeholder</span>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Stats Section */}
            <Section className="py-20 border-y border-border">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className="text-5xl md:text-6xl font-light mb-4 group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Team Section */}
            <Section className="py-24 border-t border-border">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
                    <p className="text-muted-foreground">The minds behind the magic.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="group">
                            <div className="aspect-[3/4] bg-muted border border-border mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <h3 className="text-xl font-bold">Team Member {i}</h3>
                            <p className="text-sm text-muted-foreground">Position</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Values Section */}
            <Section className="py-24 border-t border-border">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                    <p className="text-muted-foreground">The principles that guide every project we undertake.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-0 border border-border">
                    {[
                        { title: "Innovation", icon: Target, desc: "We push boundaries and explore new technologies." },
                        { title: "Collaboration", icon: Users, desc: "We work closely with our clients as partners." },
                        { title: "Excellence", icon: Trophy, desc: "We strive for perfection in every pixel." }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="border-b md:border-b-0 md:border-r border-border last:border-0 p-8 hover:bg-accent transition-colors"
                        >
                            <div className="flex flex-col items-center gap-6 text-center h-full justify-center">
                                <div className="p-4 rounded-full border border-border">
                                    <item.icon className="w-8 h-8 font-light" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    )
}
