"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout, Palette, Code, Smartphone, BarChart, PenTool } from "lucide-react";

const SERVICES = [
    {
        icon: Layout,
        title: "Brand Strategy",
        description: "We help businesses define their unique voice and position in the market."
    },
    {
        icon: Palette,
        title: "UX/UI Design",
        description: "Creating intuitive and visually stunning interfaces that users love."
    },
    {
        icon: Code,
        title: "Web Development",
        description: "Robust and scalable web solutions built with cutting-edge technologies."
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
        icon: BarChart,
        title: "Digital Marketing",
        description: "Data-driven strategies to increase visibility and drive conversion."
    },
    {
        icon: PenTool,
        title: "Content Creation",
        description: "Engaging content that tells your story and connects with your audience."
    }
];

export function ServicesGrid() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Our Expertise</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to your business goals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800">
                            <CardHeader>
                                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                                    <service.icon className="w-6 h-6 text-slate-900 dark:text-white" />
                                </div>
                                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
