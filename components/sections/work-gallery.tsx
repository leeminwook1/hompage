"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const works = [
    {
        id: 1,
        title: "NEBULA FINANCE",
        category: "Fintech / WebGL",
        image: "/placeholder-1.jpg",
        color: "bg-blue-900",
    },
    {
        id: 2,
        title: "AETHER LABS",
        category: "AI Research / Branding",
        image: "/placeholder-2.jpg",
        color: "bg-purple-900",
    },
    {
        id: 3,
        title: "QUANTUM REALTY",
        category: "Real Estate / 3D",
        image: "/placeholder-3.jpg",
        color: "bg-emerald-900",
    },
    {
        id: 4,
        title: "VOYAGER SYSTEMS",
        category: "Aerospace / Interface",
        image: "/placeholder-4.jpg",
        color: "bg-orange-900",
    },
];

export function WorkGallery() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-10 px-10 md:px-20">

                    <div className="flex flex-col justify-center min-w-[30vw] md:min-w-[20vw] shrink-0">
                        <span className="text-neutral-500 text-sm tracking-widest uppercase mb-4 block">
                            SELECTED WORKS
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-[family-name:var(--font-poppins)]">
                            FEATURED<br />PROJECTS
                        </h2>
                        <p className="text-neutral-400 max-w-sm">
                            Scroll to explore our diverse portfolio of award-winning digital experiences.
                        </p>
                    </div>

                    {works.map((work) => (
                        <div key={work.id} className="relative h-[60vh] w-[80vw] md:w-[50vw] shrink-0 group overflow-hidden rounded-2xl bg-neutral-900 border border-white/10">
                            {/* Placeholder until real images are added */}
                            <div className={`absolute inset-0 ${work.color} opacity-20 transition-opacity duration-500 group-hover:opacity-40`} />

                            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
                                <div className="flex justify-between items-start">
                                    <span className="text-xs font-mono border border-white/20 px-2 py-1 rounded-full text-white/70">
                                        {work.category}
                                    </span>
                                    <button className="bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-sm transition-colors">
                                        <ArrowUpRight className="text-white h-6 w-6" />
                                    </button>
                                </div>

                                <div>
                                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-2">{work.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
}
