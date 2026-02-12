"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AboutPreview() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            {/* Placeholder until image generation works */}
                            <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
                                    alt="Team working"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Decoration */}
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-slate-100 dark:bg-slate-800 rounded-2xl -z-10" />
                        <div className="absolute -top-8 -left-8 w-48 h-48 bg-slate-50 dark:bg-slate-900 rounded-full -z-10" />
                    </div>

                    {/* Text Side */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
                            We Craft Digital <br />
                            <span className="text-slate-500">Experiences.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>
                                Founded in 2020, we started with a simple belief: that technology should serve human needs, not the other way around.
                            </p>
                            <p>
                                Today, we are a diverse team of strategists, designers, and engineers working together to build brands that matter in a digital-first world.
                            </p>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">50+</span>
                                <span className="text-sm text-slate-500">Projects Delivered</span>
                            </div>
                            <div className="w-px h-12 bg-slate-200 dark:bg-slate-700" />
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">15+</span>
                                <span className="text-sm text-slate-500">Awards Won</span>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Link href="/about">
                                <Button variant="default" size="lg" className="rounded-full px-8 bg-slate-900 text-white hover:bg-slate-800">
                                    More About Us <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
