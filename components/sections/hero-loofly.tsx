"use client"

import Image from "next/image"

export function HeroLoofly() {
    return (
        <section className="relative h-[40vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Full screen image */}
            <div className="absolute inset-0">
                <Image
                    src="/main.png"
                    alt="Loofly Main"
                    fill
                    priority
                    className="object-cover"
                    style={{ objectPosition: 'center 40%' }}
                />
            </div>
        </section>
    )
}
