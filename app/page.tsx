"use client";

import { HeroLoofly } from "@/components/sections/hero-loofly";
import { MissionSection } from "@/components/sections/mission-section";
import { CTASection } from "@/components/sections/cta-section";
import { CommunitySection } from "@/components/sections/community-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroLoofly />
      <MissionSection />
      <CTASection />
      <CommunitySection />
    </div>
  );
}
