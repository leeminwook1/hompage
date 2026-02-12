"use client";

import { AboutPreview } from "@/components/sections/about-preview";
import { Stats } from "@/components/sections/stats";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Zap } from "lucide-react";

export default function AboutPage() {
    const values = [
        { icon: Target, title: "Vision First", desc: "We start with the 'why' before building the 'what'." },
        { icon: Users, title: "Human Centric", desc: "Technology should serve people, not the other way around." },
        { icon: Heart, title: "Passion Led", desc: "We love what we do, and it shows in our work." },
        { icon: Zap, title: "Innovation", desc: "Always pushing the boundaries of what's possible." },
    ];

    const team = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="pt-20 bg-black min-h-screen">
            <Section className="pb-0 pt-10">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white font-[family-name:var(--font-poppins)]">STUDIO.</h1>
            </Section>

            <AboutPreview />

            <Section className="bg-neutral-900">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-white font-[family-name:var(--font-poppins)]">Core Values</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <Card key={i} className="border border-white/10 shadow-none bg-black">
                                <CardContent className="pt-6">
                                    <v.icon className="w-10 h-10 mb-4 text-white" />
                                    <h3 className="font-bold text-lg mb-2 text-white">{v.title}</h3>
                                    <p className="text-sm text-neutral-400">{v.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            <Stats />

            <Section>
                <h2 className="text-3xl font-bold mb-12 text-white font-[family-name:var(--font-poppins)]">Our Team</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                    {team.map((i) => (
                        <div key={i} className="group">
                            <div className="aspect-[3/4] bg-neutral-900 rounded-lg mb-4 overflow-hidden border border-white/10">
                                <div className="w-full h-full bg-neutral-800 transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="font-bold text-lg text-white">Team Member {i}</div>
                            <div className="text-sm text-neutral-500">Position Title</div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
