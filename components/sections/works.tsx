"use client"

import * as React from "react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const allWorks = [
    { id: 1, title: "Nexus FinTech", category: "App", image: "bg-blue-500/20" },
    { id: 2, title: "Elevate Brand", category: "Branding", image: "bg-purple-500/20" },
    { id: 3, title: "Urban Fashion", category: "Web", image: "bg-pink-500/20" },
    { id: 4, title: "Eco Smart Home", category: "App", image: "bg-green-500/20" },
    { id: 5, title: "Tech Summit 24", category: "Web", image: "bg-orange-500/20" },
    { id: 6, title: "Modern Living", category: "Branding", image: "bg-yellow-500/20" },
]

const categories = ["All", "Web", "App", "Branding"]

export function Works() {
    const [activeCategory, setActiveCategory] = React.useState("All")

    const filteredWorks = activeCategory === "All"
        ? allWorks
        : allWorks.filter(work => work.category === activeCategory)

    return (
        <div className="flex flex-col">
            <Section className="pt-20 pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl mb-6">Our Works</h1>
                    <p className="text-lg text-muted-foreground mb-8">
                        A selection of our finest work. We build products that solve problems and look good doing it.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeCategory === category
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>
            </Section>

            <Section id="works-grid" className="py-12">
                <motion.div
                    layout
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence>
                        {filteredWorks.map((work) => (
                            <motion.div
                                layout
                                key={work.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="overflow-hidden border-0 bg-transparent shadow-none group cursor-pointer">
                                    <div className={`aspect-[4/3] w-full rounded-xl ${work.image} overflow-hidden`}>
                                        <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 transition-transform duration-500 group-hover:scale-110 bg-muted">
                                            Project Thumbnail
                                        </div>
                                    </div>
                                    <CardHeader className="px-0 py-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-primary">{work.category}</span>
                                            <span className="text-xs text-muted-foreground">2024</span>
                                        </div>
                                        <CardTitle className="text-2xl mt-1 group-hover:underline decoration-1 underline-offset-4">{work.title}</CardTitle>
                                        <CardDescription>Click to view case study</CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </Section>
        </div>
    )
}
