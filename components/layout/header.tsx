"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [mobileSubmenu, setMobileSubmenu] = React.useState<string | null>(null)

    const toggleSubmenu = (name: string) => {
        setMobileSubmenu(mobileSubmenu === name ? null : name)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-16 items-center px-4">
                <div className="container max-w-screen-2xl flex items-center justify-between w-full mx-auto">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold tracking-tighter text-foreground font-[family-name:var(--font-poppins)]">LOOPLEE.</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {/* Work Dropdown */}
                        <div className="relative group h-16 flex items-center">
                            <Link
                                href="/works"
                                className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary cursor-pointer"
                            >
                                Work
                            </Link>
                            {/* <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="bg-popover border border-border p-4 rounded-xl min-w-[200px] flex flex-col gap-2 shadow-2xl">
                                    <Link href="/works" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-2 hover:bg-accent rounded-lg">Selected Works</Link>
                                    <Link href="/works" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-2 hover:bg-accent rounded-lg">Archive</Link>
                                </div>
                            </div> */}
                        </div>

                        {/* Studio Dropdown */}
                        <div className="relative group h-16 flex items-center">
                            <Link
                                href="/about"
                                className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary cursor-pointer"
                            >
                                About
                            </Link>
                            {/* <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="bg-popover border border-border p-4 rounded-xl min-w-[200px] flex flex-col gap-2 shadow-2xl">
                                    <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-2 hover:bg-accent rounded-lg">About Us</Link>
                                    <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-2 hover:bg-accent rounded-lg">Core Values</Link>
                                    <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-2 hover:bg-accent rounded-lg">Our Team</Link>
                                </div>
                            </div> */}
                        </div>

                        {/* Expertise Dropdown */}
                        <div className="relative group h-16 flex items-center">
                            <Link
                                href="/services"
                                className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary cursor-pointer"
                            >
                                services
                            </Link>
                            {/* <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="bg-popover border border-border p-4 rounded-xl min-w-[200px] flex flex-col gap-2 shadow-2xl">
                                    <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-2 hover:bg-accent rounded-lg">Capabilities</Link>
                                    <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-2 hover:bg-accent rounded-lg">Process</Link>
                                    <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-2 hover:bg-accent rounded-lg">FAQ</Link>
                                </div>
                            </div> */}
                        </div>

                        <Link
                            href="/contact"
                            className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="flex items-center p-2 md:hidden text-foreground ml-auto"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-border bg-background h-[calc(100vh-4rem)] overflow-y-auto">
                    <nav className="flex flex-col p-6 gap-6">
                        {/* Work Mobile */}
                        <div>
                            <button
                                onClick={() => toggleSubmenu('work')}
                                className="flex items-center justify-between w-full text-lg font-medium transition-colors hover:text-primary text-foreground"
                            >
                                Work
                                <span className={`text-xs transition-transform ${mobileSubmenu === 'work' ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            {mobileSubmenu === 'work' && (
                                <div className="flex flex-col gap-3 mt-4 ml-4 pl-4 border-l border-border">
                                    <Link href="/works" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">Works</Link>
                                    {/* <Link href="/works" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">Archive</Link> */}
                                </div>
                            )}
                        </div>

                        {/* Studio Mobile */}
                        <div>
                            <button
                                onClick={() => toggleSubmenu('studio')}
                                className="flex items-center justify-between w-full text-lg font-medium transition-colors hover:text-primary text-foreground"
                            >
                                About
                                <span className={`text-xs transition-transform ${mobileSubmenu === 'studio' ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            {mobileSubmenu === 'studio' && (
                                <div className="flex flex-col gap-3 mt-4 ml-4 pl-4 border-l border-border">
                                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">About Us</Link>
                                    {/* <Link href="/about" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">Core Values</Link>
                                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">Our Team</Link> */}
                                </div>
                            )}
                        </div>

                        {/* Expertise Mobile */}
                        <div>
                            <button
                                onClick={() => toggleSubmenu('expertise')}
                                className="flex items-center justify-between w-full text-lg font-medium transition-colors hover:text-primary text-foreground"
                            >
                                services
                                <span className={`text-xs transition-transform ${mobileSubmenu === 'expertise' ? 'rotate-180' : ''}`}>▼</span>
                            </button>
                            {mobileSubmenu === 'expertise' && (
                                <div className="flex flex-col gap-3 mt-4 ml-4 pl-4 border-l border-border">
                                    <Link href="/services" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">services</Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/contact"
                            className="text-lg font-medium transition-colors hover:text-primary text-foreground"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>

                        <div className="pt-8 mt-4 border-t border-border">
                            <Button className="w-full h-12 text-lg rounded-full" onClick={() => setIsOpen(false)}>
                                Start a Project
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}
