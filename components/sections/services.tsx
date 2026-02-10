"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Rocket, Palette, Globe, BarChart3, Megaphone, Code, Smartphone, Video, PenTool } from "lucide-react"

const services = [
    {
        title: "Brand Strategy",
        description: "Build a strong foundation for your brand with our comprehensive strategy sessions and identity design.",
        icon: Rocket,
    },
    {
        title: "UI/UX Design",
        description: "Create intuitive and visually stunning interfaces that provide seamless user experiences across all devices.",
        icon: Palette,
    },
    {
        title: "Web Development",
        description: "From simple landing pages to complex web applications, we build robust and scalable solutions.",
        icon: Code,
    },
    {
        title: "Digital Marketing",
        description: "Reach your target audience effectively with data-driven marketing campaigns and SEO optimization.",
        icon: Megaphone,
    },
    {
        title: "Content Creation",
        description: "Engage your audience with compelling storytelling, copywriting, and high-quality visual content.",
        icon: Globe,
    },
    {
        title: "Analytics & Growth",
        description: "Track performance and optimize your digital presence with advanced analytics and growth hacking.",
        icon: BarChart3,
    },
    {
        title: "Mobile App Dev",
        description: "Native and cross-platform mobile application development for iOS and Android.",
        icon: Smartphone,
    },
    {
        title: "Video Production",
        description: "High-quality video production and motion graphics to bring your brand story to life.",
        icon: Video,
    },
    {
        title: "Illustration",
        description: "Custom illustrations and graphic assets that add a unique touch to your brand.",
        icon: PenTool,
    },
]

export function Services() {
    return (
        <div className="flex flex-col">
            <Section className="pt-20 pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl mb-6">Our Services</h1>
                    <p className="text-lg text-muted-foreground">
                        We offer a full suite of digital services to help your business thrive.
                        From strategy to execution, we've got you covered.
                    </p>
                </motion.div>
            </Section>

            <Section id="process" className="py-24 border-t border-border">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4">Our Methodology</h2>
                    <p className="text-muted-foreground">How we bring ideas to life.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {["Research", "Design", "Development", "Launch"].map((step, i) => (
                        <div key={step} className="relative pt-8 border-t border-border">
                            <span className="absolute top-0 left-0 -translate-y-1/2 bg-primary text-primary-foreground px-2 text-sm">0{i + 1}</span>
                            <h3 className="text-xl font-bold mb-2">{step}</h3>
                            <p className="text-sm text-muted-foreground">Rigorous and refined process to ensure quality.</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="services-list" className="py-20 border-t border-border">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-border">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group border-r border-b border-border p-8 md:p-12 hover:bg-accent transition-colors duration-500"
                        >
                            <div className="w-12 h-12 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                                <service.icon className="h-8 w-8 stroke-1" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <div className="w-full h-px bg-border group-hover:bg-primary transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    )
}
