"use client";

import { Button } from "@/components/ui/button";

const CLIENTS = [
    "Acme Corp", "Global Tech", "Nebula Systems", "Vertex Inc", "Horizon Group", "Elevate", "Apex Dynamic"
];

export function Clients() {
    return (
        <section className="py-12 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4 mb-6">
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest text-center">Trusted By Industry Leaders</p>
            </div>
            <div className="overflow-hidden opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simulating a logo marquee with text for now */}
                <div className="flex gap-16 animate-infinite-scroll whitespace-nowrap py-4 justify-center items-center">
                    {CLIENTS.map((client, i) => (
                        <span key={i} className="text-2xl font-bold text-slate-300">{client}</span>
                    ))}
                    {CLIENTS.map((client, i) => (
                        <span key={`dup-${i}`} className="text-2xl font-bold text-slate-300">{client}</span>
                    ))}
                    {CLIENTS.map((client, i) => (
                        <span key={`dup2-${i}`} className="text-2xl font-bold text-slate-300">{client}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
