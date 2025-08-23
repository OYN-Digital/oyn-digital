"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
// images
import OYNDigitalOutline from "@/../public/OYN-Outline.png";
import HeroImage from "@/../public/undraw_web-app_141a.svg";
// components
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Container from "@/components/ui/Container";
// icons
import { ArrowRight, Rocket, ShieldCheck } from "lucide-react";
// actions
import { openWhatsApp } from "@/actions";

const Services = dynamic(() => import("@/components/home/Services"), {
  ssr: false,
});
const Portfolio = dynamic(() => import("@/components/home/Portfolio"), {
  ssr: false,
});
const Pricing = dynamic(() => import("@/components/home/Pricing"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/components/home/Testimonials"), {
  ssr: false,
});
const CTA = dynamic(() => import("@/components/home/CTA"), { ssr: false });
const Footer = dynamic(() => import("@/components/home/Footer"), {
  ssr: false,
});

// Smooth scroll to an element id
function scrollToId(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Map pretty paths to section ids (no # in URL)
const PATH_TO_ID: Record<string, string> = {
  "/services": "services",
  "/portfolio": "portfolio",
  "/pricing": "pricing",
  "/contact": "contact",
};

// Push a pretty path to URL (no reload) and scroll to its section
function scrollToPath(path: keyof typeof PATH_TO_ID) {
  const id = PATH_TO_ID[path];
  if (!id) return;
  scrollToId(id);
  window.history.pushState({}, "", path);
}

export default function OYNHomepage() {
  const pathname = usePathname();

  // On first render, if the URL is a pretty path like "/services",
  // auto-scroll to the matching section. Works with middleware rewrite.
  useEffect(() => {
    const id = PATH_TO_ID[pathname as keyof typeof PATH_TO_ID];
    if (id) {
      // Delay a tick so layout is ready before scrolling
      const t = setTimeout(() => scrollToId(id), 0);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  // Handle back/forward navigation to keep scroll in sync with URL
  useEffect(() => {
    const onPop = () => {
      const id =
        PATH_TO_ID[window.location.pathname as keyof typeof PATH_TO_ID];
      if (id) scrollToId(id);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 border-b border-gray-200">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={OYNDigitalOutline}
            alt="Logo OYN Digital"
            className="h-12 w-fit"
            onClick={() => {
              window.history.pushState({}, "", "/");
              scrollToId("hero");
            }}
          />
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Button
            onClick={() => scrollToPath("/services")}
            variant="ghost"
            className="hover:text-brand transition-colors"
          >
            Layanan
          </Button>
          <Button
            onClick={() => scrollToPath("/portfolio")}
            variant="ghost"
            className="hover:text-brand transition-colors"
          >
            Portfolio
          </Button>
          <Button
            onClick={() => scrollToPath("/pricing")}
            variant="ghost"
            className="hover:text-brand transition-colors"
          >
            Pricing
          </Button>
          <Button
            onClick={() => scrollToPath("/contact")}
            variant="ghost"
            className="hover:text-brand transition-colors"
          >
            Kontak
          </Button>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            className="hidden sm:inline-flex bg-brand hover:bg-brand-dark"
            onClick={() =>
              openWhatsApp(
                "Halo OYN Digital, saya tertarik untuk order sekarang."
              )
            }
          >
            Order Sekarang
          </Button>
        </div>
      </Container>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Decorative blobs (bisa tetap motion biar dinamis) */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 py-20 md:py-28 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Text content (langsung visible, no motion) */}
        <div className="z-10">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 text-brand border border-brand bg-white"
          >
            Agency • OYN Digital
          </Badge>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Bangun Brand & Website <span className="text-brand">Keren</span>{" "}
            Tanpa Ribet
          </h1>

          <p className="mt-4 text-lg text-[var(--color-ink-2)]">
            Dari ide sampai live—kita urus desain logo, website
            WordPress/Next.js, konten visual, sampai maintenance. Simple, cepat,
            hasil maksimal.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="bg-brand hover:bg-brand-dark"
              onClick={() =>
                openWhatsApp(
                  "Halo OYN Digital, saya tertarik untuk order sekarang."
                )
              }
            >
              Mulai Proyek <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-brand text-brand hover:bg-brand/10"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Lihat Layanan
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-[var(--color-ink-2)]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" /> Garansi revisi
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="h-4 w-4 text-brand" /> Pengerjaan cepat
            </div>
          </div>
        </div>

        {/* Hero image → pakai next/image priority */}
        <div className="relative">
          <Image
            src={HeroImage}
            alt="Preview Website"
            width={800}
            height={600}
            priority
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="border-y border-gray-200 bg-[var(--color-soft)]">
      <Container className="py-6 flex flex-wrap items-center justify-center gap-8">
        {[
          "Cepat",
          "Transparan",
          "Mobile-first",
          "SEO-friendly",
          "Support 30 hari",
        ].map((txt) => (
          <div key={txt} className="text-sm text-[var(--color-ink-2)]">
            {txt}
          </div>
        ))}
      </Container>
    </div>
  );
}
