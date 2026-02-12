"use client";

import dynamic from "next/dynamic";

const TechPreloader = dynamic(() => import("@/components/ui/tech-preloader").then(mod => ({ default: mod.TechPreloader })), {
  ssr: false,
});

export function ClientOnlyPreloader() {
  return <TechPreloader />;
}
