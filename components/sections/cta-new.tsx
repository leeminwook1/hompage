"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaNew() {
    return (
        <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                    Ready to elevate your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital Presence?</span>
                </h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                    Let's discuss how we can help you achieve your business goals with design and technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/contact">
                        <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold">
                            Let's Talk <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                    </Link>
                    <Link href="/works">
                        <Button variant="outline" size="lg" className="h-16 px-10 text-xl rounded-full border-slate-700 text-white hover:bg-slate-800 hover:text-white">
                            View Portoflio
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
