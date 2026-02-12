"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-20 bg-black min-h-screen">
            <Section className="pb-0 pt-10">
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-white font-[family-name:var(--font-poppins)]">CONTACT.</h1>
            </Section>

            <Section>
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-white font-[family-name:var(--font-poppins)]">Let's Start a Conversation</h2>
                        <p className="text-lg text-neutral-400 mb-12">
                            Interested in working together? We should talk. Fill out the form or email us directly.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 mt-1 text-white" />
                                <div>
                                    <div className="font-bold text-white">Email</div>
                                    <div className="text-neutral-500">hello@agency.com</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 mt-1 text-white" />
                                <div>
                                    <div className="font-bold text-white">Phone</div>
                                    <div className="text-neutral-500">+1 (555) 000-0000</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 mt-1 text-white" />
                                <div>
                                    <div className="font-bold text-white">Office</div>
                                    <div className="text-neutral-500">123 Design St, Creative City, NY 10012</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-neutral-900 p-8 rounded-2xl border border-white/10">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">First Name</label>
                                    <input className="w-full p-3 rounded-lg border border-white/10 bg-black text-white" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Last Name</label>
                                    <input className="w-full p-3 rounded-lg border border-white/10 bg-black text-white" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">Email</label>
                                <input type="email" className="w-full p-3 rounded-lg border border-white/10 bg-black text-white" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white">Message</label>
                                <textarea className="w-full p-3 rounded-lg border border-white/10 bg-black text-white min-h-[150px]" placeholder="Tell us about your project..." />
                            </div>
                            <Button size="lg" className="w-full bg-white text-black hover:bg-neutral-200">Send Message</Button>
                        </form>
                    </div>
                </div>
            </Section>
        </div>
    );
}
