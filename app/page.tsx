"use client"

import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Preloader } from "@/components/ui/preloader";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden">
      <Preloader />

      <Hero />

      <Marquee text="CREATIVE • STRATEGY • DESIGN • TECHNOLOGY • " />

      {/* About Teaser */}
      <Section className="py-24 md:py-32 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[0.9]">
              WE REDEFINE<br />
              <span className="text-muted-foreground">DIGITAL BRANDS.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We are a team of visionaries, designers, and developers.
              We don't just build websites; we create immersive digital ecosystems that captivate audiences and drive growth.
            </p>
            <div>
              <Link href="/about">
                <Button variant="outline" size="lg" className="rounded-full px-8">
                  About Studio <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Selected Works Teaser */}
      <Section className="py-24 bg-black border-t border-white/10">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">SELECTED WORKS</h2>
          <Link href="/works">
            <Button variant="link" className="text-white text-lg underline decoration-2 underline-offset-4 decoration-white/50 hover:decoration-white">
              View All Projects
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <Card className="border-none shadow-none bg-transparent">
                <div className="aspect-[4/3] bg-neutral-100 rounded-none mb-4 overflow-hidden group relative">
                  {/* Image Placeholder */}
                  <div className="w-full h-full bg-neutral-200 transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black text-white px-6 py-3 rounded-full font-medium">View Case</div>
                  </div>
                </div>
                <CardContent className="px-0">
                  <div className="text-sm font-bold uppercase tracking-wider mb-1 opacity-50">Branding / Web</div>
                  <h3 className="text-3xl font-bold tracking-tighter">Project Name {i}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Marquee text="LET'S WORK TOGETHER • START A PROJECT • " reverse className="opacity-50" />

      {/* CTA Section */}
      <Section className="py-32 text-center">
        <h2 className="text-5xl md:text-[8vw] font-black tracking-tighter leading-none mb-10">
          HAVE AN IDEA?
        </h2>
        <Link href="/contact">
          <Button size="lg" className="h-20 px-12 text-2xl rounded-full bg-white text-black hover:bg-gray-200">
            Let's Talk <ArrowRight className="ml-4 w-8 h-8" />
          </Button>
        </Link>
      </Section>
    </div>
  );
}
