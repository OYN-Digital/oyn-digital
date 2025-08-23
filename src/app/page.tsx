"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import OYNDigitalOutline from "@/../public/OYN-Outline.png";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Rocket,
  Palette,
  PenTool,
  MonitorSmartphone,
  LineChart,
  ShieldCheck,
  Star,
  Quote,
} from "lucide-react";
import { openWhatsApp } from "@/actions";

function scrollToPath(path: string, id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth" });

  window.history.pushState({}, "", path);
}

export default function OYNHomepage() {
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

function Container({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 border-b border-gray-200">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src={OYNDigitalOutline}
              alt="Logo OYN Digital"
              className="h-12 w-fit"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Button
            onClick={() => scrollToPath("/services", "services")}
            variant="ghost"
            className="hover:text-brand transition-colors"
          >
            Layanan
          </Button>
          <Button
            onClick={() => scrollToPath("/portfolio", "portfolio")}
            variant="ghost"
            className="hover:text-brand transition-colors"
          >
            Portfolio
          </Button>
          <Button
            onClick={() => scrollToPath("/pricing", "pricing")}
            variant="ghost"
            className="hover:text-brand transition-colors"
          >
            Pricing
          </Button>
          <Button
            onClick={() => scrollToPath("/contact", "contact")}
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
    <section className="relative overflow-hidden">
      {/* Decorative blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand/10 blur-3xl"
      />

      <Container className="relative grid grid-cols-1 md:grid-cols-2 gap-10 py-20 md:py-28">
        <div className="z-10">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 text-brand border border-brand bg-white"
          >
            Agency • OYN Digital
          </Badge>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            Bangun Brand & Website <span className="text-brand">Keren</span>{" "}
            Tanpa Ribet
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-[var(--color-ink-2)]"
          >
            Dari ide sampai live—kita urus desain logo, website
            WordPress/Next.js, konten visual, sampai maintenance. Simple, cepat,
            hasil maksimal.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
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
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Lihat Layanan
            </Button>
          </motion.div>
          <div className="mt-6 flex items-center gap-6 text-sm text-[var(--color-ink-2)]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" /> Garansi revisi
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="h-4 w-4 text-brand" /> Pengerjaan cepat
            </div>
          </div>
        </div>

        {/* Mock visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl border border-gray-200 bg-white shadow-lg">
            <div className="h-10 rounded-t-2xl bg-gray-100 flex items-center gap-1 px-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-gray-500">
                Preview Website
              </span>
            </div>
            <div className="p-6">
              <div className="h-8 w-40 rounded bg-brand/10" />
              <div className="mt-6 h-12 w-3/4 rounded bg-brand/20" />
              <div className="mt-3 h-4 w-2/3 rounded bg-gray-100" />
              <div className="mt-8 grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-20 rounded-xl bg-gray-100" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
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

function Services() {
  const items = [
    {
      icon: <MonitorSmartphone className="h-5 w-5" />,
      title: "Website Dev & Maintenance",
      desc: "WordPress / Next.js, cepat, aman, dan scalable.",
      sku: "OYN-WEB01",
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "UI/UX & Web Design",
      desc: "Desain estetik dan ramah pengguna.",
      sku: "OYN-WEB02",
    },
    {
      icon: <PenTool className="h-5 w-5" />,
      title: "Logo & Brand Identity",
      desc: "Logo unik + guideline sederhana.",
      sku: "OYN-DES01",
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Graphic Design",
      desc: "Konten sosmed, poster, banner, pitch deck.",
      sku: "OYN-DES02",
    },
    {
      icon: <LineChart className="h-5 w-5" />,
      title: "Digital Marketing Support",
      desc: "Landing page + SEO dasar + asset iklan.",
      sku: "OYN-MKT01",
    },
  ];

  return (
    <section id="services" className="py-20">
      <Container>
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">Layanan Kami</h2>
            <p className="mt-2 text-[var(--color-ink-2)]">
              Paket jelas, hasil terasa. Tinggal pilih sesuai kebutuhanmu.
            </p>
          </div>
          <Button
            variant="outline"
            className="hidden md:inline-flex border-brand text-brand hover:bg-brand/10"
          >
            Lihat Semua
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <motion.div
              key={s.title}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="h-full border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-brand/10 p-2 text-brand">
                      {s.icon}
                    </div>
                    <h3 className="font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-[var(--color-ink-2)]">
                    {s.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <Badge className="bg-brand/10 text-brand hover:bg-brand/20">
                      SKU: {s.sku}
                    </Badge>
                    <Button size="sm" className="bg-brand hover:bg-brand-dark">
                      Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-[var(--color-soft)] py-20">
      <Container>
        <h2 className="text-3xl font-bold">Portfolio Pilihan</h2>
        <p className="mt-2 text-[var(--color-ink-2)]">
          Cuplikan pekerjaan yang relevan buat kamu.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card className="overflow-hidden border-gray-200">
                <div className="aspect-[4/3] bg-gray-200" />
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Project #{i + 1}</p>
                      <p className="text-xs text-[var(--color-ink-2)]">
                        Web Design • Dev
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-brand text-brand hover:bg-brand/10"
                    >
                      Detail
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Basic",
      price: "Rp3.5jt",
      features: [
        "Landing page / company profile",
        "Responsive & SEO dasar",
        "1x round revisi",
      ],
      cta: "Pilih Basic",
    },
    {
      name: "Standard",
      price: "Rp7.5jt",
      features: ["5–7 halaman", "Form & integrasi dasar", "2x round revisi"],
      cta: "Pilih Standard",
      popular: true,
    },
    {
      name: "Premium",
      price: "Rp15jt+",
      features: [
        "Custom Next.js",
        "Performance & maintenance 3 bulan",
        "Prioritas support",
      ],
      cta: "Pilih Premium",
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Paket Website</h2>
          <p className="mt-2 text-[var(--color-ink-2)]">
            Transparan dan fleksibel. Butuh custom? Hubungi kami.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <Card
                className={`h-full border-gray-200 ${
                  t.popular ? "ring-2 ring-brand" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{t.name}</h3>
                    {t.popular && (
                      <Badge className="bg-brand text-white">
                        Paling Laris
                      </Badge>
                    )}
                  </div>
                  <p className="mt-2 text-3xl font-extrabold">{t.price}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <Star className="mt-0.5 h-4 w-4 text-brand" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full bg-brand hover:bg-brand-dark">
                    {t.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      name: "Raka – Founder UMKM",
      text: "Website-nya cepat jadi dan hasilnya sesuai ekspektasi. Komunikasi enak, revisi juga cepat.",
    },
    {
      name: "Nadia – Marketing Lead",
      text: "Desainnya clean dan rapi, performa web oke buat campaign. Recommended.",
    },
    {
      name: "Kevin – Startup CTO",
      text: "Mereka ngerti kebutuhan teknis kami dan bisa eksekusi Next.js dengan baik.",
    },
  ];

  return (
    <section className="bg-[var(--color-soft)] py-20">
      <Container>
        <h2 className="text-3xl font-bold">Apa Kata Klien</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <Card key={q.name} className="border-gray-200">
              <CardContent className="p-6">
                <Quote className="h-6 w-6 text-brand" />
                <p className="mt-4 text-[var(--color-ink-2)]">{q.text}</p>
                <p className="mt-4 font-medium">{q.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <Container className="relative z-10">
        <div className="rounded-3xl border border-brand bg-brand text-white p-10 shadow-xl">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-bold">
                Siap mulai? Kita bantu dari ide sampai live.
              </h3>
              <p className="mt-2 text-white/90">
                Klik order sekarang atau chat dulu untuk custom kebutuhan.
              </p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-brand hover:bg-gray-100"
                onClick={() =>
                  openWhatsApp(
                    "Halo OYN Digital, saya tertarik untuk order sekarang."
                  )
                }
              >
                Order Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
                onClick={() => openWhatsApp("")}
              >
                Chat Kami
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <div className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-tr from-brand/10 via-transparent to-brand/10" />
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src={OYNDigitalOutline}
            alt="Logo OYN Digital"
            className="h-12 w-fit"
          />
          <span className="font-semibold">OYN Digital</span>
        </div>
        <p className="text-sm text-[var(--color-ink-2)]">
          © {new Date().getFullYear()} OYN Digital. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-brand">
            Terms
          </a>
          <a href="#" className="hover:text-brand">
            Privacy
          </a>
        </div>
      </Container>
    </footer>
  );
}
