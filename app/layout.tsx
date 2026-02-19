import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScrolling } from "@/components/providers/smooth-scrolling";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { CursorInteraction } from "@/components/ui/cursor-interaction";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ClientOnlyPreloader } from "@/components/providers/client-only-preloader";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
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
        className={`${notoSansKR.variable} font-sans min-h-screen bg-background text-foreground antialiased flex flex-col`}
      >
        <SmoothScrolling>
          <ClientOnlyPreloader />
          <NoiseOverlay />
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
