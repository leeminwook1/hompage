"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        quote: "Working with this agency was a game-changer for our brand. The level of detail and creativity they brought to the table was unmatched.",
        author: "Sarah Johnson",
        role: "CMO, TechFlow",
    },
    {
        quote: "They didn't just build a website; they built a digital experience that perfectly captures our vision. Highly recommended.",
        author: "Michael Chen",
        role: "Founder, StartUp Inc",
    },
    {
        quote: "Professional, timely, and incredibly talented. The new design has significantly increased our conversion rates.",
        author: "Emma Davis",
        role: "Director, Retail Solutions",
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">What Our Clients Say</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((item, index) => (
                        <Card key={index} className="border-none shadow-md bg-white dark:bg-slate-800">
                            <CardContent className="pt-8">
                                <Quote className="w-10 h-10 text-slate-200 dark:text-slate-700 mb-6" />
                                <p className="text-lg text-slate-700 dark:text-slate-300 italic mb-6">"{item.quote}"</p>
                                <div>
                                    <div className="font-bold text-slate-900 dark:text-white">{item.author}</div>
                                    <div className="text-sm text-slate-500">{item.role}</div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
