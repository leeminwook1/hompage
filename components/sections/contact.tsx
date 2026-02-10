"use client"

import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
    return (
        <div className="flex flex-col">
            <Section className="pt-20 pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl mb-6">Contact Us</h1>
                    <p className="text-lg text-muted-foreground">
                        Start a conversation. We are ready to listen to your needs and bring your ideas to life.
                    </p>
                </motion.div>
            </Section>

            <Section id="contact-form" className="py-12">
                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
                            <p className="text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-secondary">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-medium">Email</div>
                                    <div className="text-muted-foreground text-sm">hello@antigravity.agency</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-secondary">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-medium">Phone</div>
                                    <div className="text-muted-foreground text-sm">+82 10-1234-5678</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-secondary">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-medium">Office</div>
                                    <div className="text-muted-foreground text-sm">Gangnam-gu, Seoul, South Korea</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                        <form className="space-y-8">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2 group">
                                    <label htmlFor="first-name" className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors">First name</label>
                                    <input id="first-name" className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-2 group">
                                    <label htmlFor="last-name" className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors">Last name</label>
                                    <input id="last-name" className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2 group">
                                <label htmlFor="email" className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors">Email</label>
                                <input id="email" type="email" className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2 group">
                                <label htmlFor="message" className="text-sm font-medium text-muted-foreground group-focus-within:text-foreground transition-colors">Message</label>
                                <textarea id="message" className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors min-h-[100px] resize-none" placeholder="Tell us about your project..." />
                            </div>
                            <Button type="submit" size="lg" className="w-full md:w-auto rounded-full px-8 py-6 text-lg">
                                Submit Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </Section>
        </div>
    )
}
