"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)

    const navItems = [
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Works", href: "/works" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold tracking-tighter">AGENCY.</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex ml-auto items-center gap-10">
                    {/* Work Dropdown */}
                    <div className="relative group h-16 flex items-center">
                        <Link
                            href="/works"
                            className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary cursor-pointer"
                        >
                            Work
                        </Link>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div className="bg-black border border-white/10 p-4 rounded-xl min-w-[200px] flex flex-col gap-2 shadow-2xl">
                                <Link href="/works" className="text-sm text-muted-foreground hover:text-white transition-colors py-2 px-2 hover:bg-white/5 rounded-lg">Selected Works</Link>
                                <Link href="/works" className="text-sm text-muted-foreground hover:text-white transition-colors py-2 px-2 hover:bg-white/5 rounded-lg">Archive</Link>
                            </div>
                        </div>
                    </div>

                    {/* Studio Dropdown */}
                    <div className="relative group h-16 flex items-center">
                        <Link
                            href="/about"
                            className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary cursor-pointer"
                        >
                            Studio
                        </Link>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div className="bg-black border border-white/10 p-4 rounded-xl min-w-[200px] flex flex-col gap-2 shadow-2xl">
                                <Link href="/about" className="text-sm text-muted-foreground hover:text-white transition-colors py-2 px-2 hover:bg-white/5 rounded-lg">About Us</Link>
                                <Link href="/about" className="text-sm text-muted-foreground hover:text-white transition-colors py-2 px-2 hover:bg-white/5 rounded-lg">Core Values</Link>
                                <Link href="/about" className="text-sm text-muted-foreground hover:text-white transition-colors py-2 px-2 hover:bg-white/5 rounded-lg">Our Team</Link>
                            </div>
                        </div>
                    </div>

                    {/* Expertise Dropdown */}
                    <div className="relative group h-16 flex items-center">
                        <Link
                            href="/services"
                            className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary cursor-pointer"
                        >
                            Expertise
                        </Link>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                            <div className="bg-black border border-white/10 p-4 rounded-xl min-w-[200px] flex flex-col gap-2 shadow-2xl">
                                <Link href="/services" className="text-sm text-muted-foreground hover:text-white transition-colors py-2 px-2 hover:bg-white/5 rounded-lg">Capabilities</Link>
                                <Link href="/services" className="text-sm text-muted-foreground hover:text-white transition-colors py-2 px-2 hover:bg-white/5 rounded-lg">Process</Link>
                                <Link href="/services" className="text-sm text-muted-foreground hover:text-white transition-colors py-2 px-2 hover:bg-white/5 rounded-lg">FAQ</Link>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="flex items-center p-2 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t p-4 bg-background">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium transition-colors hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button className="w-full" onClick={() => setIsOpen(false)}>
                            Get Started
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    )
}
