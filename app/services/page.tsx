"use client";

import { ServicesGrid } from "@/components/sections/services-grid";
import { Section } from "@/components/ui/section";

export default function ServicesPage() {
    return (
        <div className="pt-20 bg-black min-h-screen">
            <Section className="pb-0 pt-10">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white font-[family-name:var(--font-poppins)]">SERVICES.</h1>
            </Section>

            <ServicesGrid />

            <Section className="bg-neutral-900 text-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 font-[family-name:var(--font-poppins)]">Our Process</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "We dive deep into your business goals, target audience, and market landscape." },
                            { step: "02", title: "Strategy", desc: "We develop a comprehensive roadmap to guide the design and development process." },
                            { step: "03", title: "Execution", desc: "Our designers and developers bring the vision to life with precision and creativity." },
                            { step: "04", title: "Launch", desc: "We test, optimize, and deploy your project, ensuring a smooth takeoff." },
                        ].map((s, i) => (
                            <div key={i} className="relative pt-8 border-t border-white/20">
                                <div className="text-sm text-neutral-400 mb-4">{s.step}</div>
                                <h3 className="text-xl font-bold mb-4 font-[family-name:var(--font-poppins)]">{s.title}</h3>
                                <p className="text-neutral-400">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section>
                <h2 className="text-3xl font-bold mb-12 text-center text-white font-[family-name:var(--font-poppins)]">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {[
                        { q: "What is your typical timeline?", a: "Timelines vary by project scope, but a typical branding and web project takes 6-10 weeks." },
                        { q: "Do you work with startups?", a: "Yes, we love working with ambitious startups that are ready to scale." },
                        { q: "What technologies do you use?", a: "We specialize in modern stacks like React, Next.js, and Tailwind CSS." },
                    ].map((faq, i) => (
                        <details key={i} className="group border-b border-white/10 pb-4">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-lg text-white">
                                <span>{faq.q}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-neutral-400 mt-3 group-open:animate-fadeIn">
                                {faq.a}
                            </p>
                        </details>
                    ))}
                </div>
            </Section>
        </div>
    );
}
