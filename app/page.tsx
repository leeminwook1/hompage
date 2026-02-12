"use client";

import { HeroInnovative } from "@/components/sections/hero-innovative";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { WorkGallery } from "@/components/sections/work-gallery";
import { LogoMarquee } from "@/components/sections/logo-marquee";
import { ContactCreative } from "@/components/sections/contact-creative";
import { StatsSection } from "@/components/sections/stats-section";
import { ServicesPreview } from "@/components/sections/services-preview";
import { FeaturedWorks } from "@/components/sections/featured-works";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 bg-black min-h-screen selection:bg-white/10">
      <HeroInnovative />
      <LogoMarquee />
      <StatsSection />
      <PhilosophySection />
      <ServicesPreview />
      <FeaturedWorks />
      <WorkGallery />
      <ContactCreative />
    </div>
  );
}
