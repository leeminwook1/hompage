import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScrolling } from "@/components/providers/smooth-scrolling";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { CursorInteraction } from "@/components/ui/cursor-interaction";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ClientOnlyPreloader } from "@/components/providers/client-only-preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Creative Marketing Agency",
  description: "A premium marketing agency template built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth no-scrollbar">
      <body
        className={`${inter.variable} ${poppins.variable} min-h-screen bg-background text-foreground antialiased flex flex-col`}
      >
        <SmoothScrolling>
          <ClientOnlyPreloader />
          <NoiseOverlay />
          <CursorInteraction />
          <ScrollToTop />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
