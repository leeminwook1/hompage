"use client"

import { Section } from "@/components/ui/section"
import { motion } from "framer-motion"

const clients = [
    "Acme Corp", "Global Tech", "NextGen", "Starlight",
    "Umbrella", "Cyberdyne", "Massive", "Hooli",
    "Initech", "Soylent", "Stark Ind", "Wayne Ent"
]

export function Clients() {
    return (
        <Section className="py-24 border-t border-border">
            <div className="text-center mb-16">
                <h2 className="text-2xl font-bold tracking-widest text-muted-foreground uppercase mb-4">Trusted By Industry Leaders</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 border-t border-l border-border">
                {clients.map((client, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="aspect-[3/2] flex items-center justify-center border-r border-b border-border hover:bg-primary hover:text-primary-foreground transition-colors duration-500 cursor-default group"
                    >
                        <span className="font-bold text-lg opacity-50 group-hover:opacity-100">{client}</span>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}
