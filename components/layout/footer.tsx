import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left font-[family-name:var(--font-poppins)]">
                        Built by{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4 font-[family-name:var(--font-poppins)]"
                        >
                            Antigravity
                        </a>
                        . The source code is available on{" "}
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4 font-[family-name:var(--font-poppins)]"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link href="#" className="text-sm text-muted-foreground hover:underline font-[family-name:var(--font-poppins)]">
                        Terms
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:underline font-[family-name:var(--font-poppins)]">
                        Privacy
                    </Link>
                </div>
            </div>
        </footer>
    )
}
