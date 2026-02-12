"use client";

import { cn } from "@/lib/utils";

const logos = [
    "Quantum", "Acme Corp", "Echo Valley", "NextGen", "Pulse", "Vertex", "Horizon", "Nebula",
    "Quantum", "Acme Corp", "Echo Valley", "NextGen", "Pulse", "Vertex", "Horizon", "Nebula",
];

export function LogoMarquee() {
    return (
        <div className="w-full py-12 bg-black border-y border-white/10 overflow-hidden">
            <div className="relative w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {logos.map((logo, index) => (
                        <li key={index}>
                            <span className="text-xl md:text-2xl font-bold text-slate-700 uppercase tracking-tighter hover:text-white transition-colors cursor-default font-[family-name:var(--font-poppins)]">
                                {logo}
                            </span>
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {logos.map((logo, index) => (
                        <li key={index}>
                            <span className="text-xl md:text-2xl font-bold text-slate-700 uppercase tracking-tighter hover:text-white transition-colors cursor-default font-[family-name:var(--font-poppins)]">
                                {logo}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
