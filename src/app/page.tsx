import React, { Component, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Code,
  PencilRuler,
  Camera,
  FileText,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  Sparkles,
  Link,
  Smartphone,
  MapPin,
} from "lucide-react";

type TProps = {
  children: ReactNode;
  className?: string;
} & React.JSX.Element;

const ShadcnCard = ({ children, className }: TProps) => (
  <div
    className={`bg-gray-800 text-gray-100 rounded-xl shadow-lg p-6 ${className}`}
  >
    {children}
  </div>
);

const ShadcnButton = ({ children, className }: TProps) => (
  <button
    className={`bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition-colors ${className}`}
  >
    {children}
  </button>
);

const ShadcnInput = (props: Record<string, unknown>) => (
  <input
    className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
    {...props}
  />
);

const ShadcnTextarea = (props: Record<string, unknown>) => (
  <textarea
    className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600 min-h-[100px]"
    {...props}
  />
);

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: unknown;
  title: string;
  description: string;
}) => {
  const Icon = icon;
  return (
    <ShadcnCard className="flex flex-col items-center text-center">
      <div className="bg-red-600 p-4 rounded-full mb-4">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </ShadcnCard>
  );
};

const App = () => {
  return (
    <div className="bg-[#1a202c] min-h-screen text-gray-100 font-sans">
      {/* Bagian Navigasi (Header) */}
      <header className="p-6 md:px-10 flex justify-between items-center bg-[#2d3748] shadow-md">
        <div className="flex items-center space-x-2">
          {/* Logo OYN-Digital */}
          <div className="bg-red-600 rounded-full h-10 w-10 flex items-center justify-center">
            <span className="text-white font-bold text-lg">OY</span>
          </div>
          <span className="text-2xl font-bold">OYN-Digital</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-red-400 transition-colors">
            Tentang Kami
          </a>
          <a href="#services" className="hover:text-red-400 transition-colors">
            Layanan
          </a>
          <a href="#contact" className="hover:text-red-400 transition-colors">
            Kontak
          </a>
        </nav>
        <ShadcnButton className="md:hidden">
          <Mail className="h-4 w-4" />
        </ShadcnButton>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-6 md:px-10">
        {/* Bagian Hero (Selamat Datang) */}
        <section className="text-center py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fadeIn">
            Membangun Kehadiran Digital Anda
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 animate-fadeIn delay-100">
            OYN-Digital adalah agensi kreatif Anda untuk solusi web yang
            inovatif, desain menawan, dan konten digital yang memukau.
          </p>
          <ShadcnButton className="animate-fadeIn delay-200">
            Mulai Proyek Anda <ArrowRight className="ml-2 h-4 w-4" />
          </ShadcnButton>
        </section>

        {/* Bagian Layanan */}
        <section id="services" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Code}
              title="Pengembangan Website"
              description="Membuat situs web responsif, berkinerja tinggi, dan aman untuk bisnis Anda."
            />
            <ServiceCard
              icon={PencilRuler}
              title="Desain Grafis"
              description="Menciptakan logo unik, identitas brand, dan elemen visual yang berkesan."
            />
            <ServiceCard
              icon={Camera}
              title="Editing Video & Foto"
              description="Menghasilkan konten visual yang menarik dan berkualitas profesional."
            />
            <ServiceCard
              icon={FileText}
              title="Dokumen & Konten"
              description="Menyusun dokumen profesional dan mengelola konten digital untuk brand Anda."
            />
          </div>
        </section>

        {/* Bagian Tentang Kami */}
        <section id="about" className="py-20 max-w-3xl mx-auto">
          <ShadcnCard>
            <h2 className="text-4xl font-bold text-center mb-6">
              Tentang OYN-Digital
            </h2>
            <p className="text-gray-400 text-center leading-relaxed">
              Didirikan dengan hasrat untuk inovasi, OYN-Digital adalah tim ahli
              yang berdedikasi untuk membantu klien kami berhasil di era
              digital. Kami menggabungkan kreativitas dengan keahlian teknis
              untuk menyediakan solusi yang tidak hanya fungsional tetapi juga
              indah. Kami percaya pada hubungan yang kuat dengan klien, bekerja
              sama untuk mengubah ide menjadi kenyataan.
            </p>
          </ShadcnCard>
        </section>

        {/* Bagian Kontak */}
        <section id="contact" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Hubungi Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Informasi Kontak */}
            <ShadcnCard>
              <h3 className="text-2xl font-semibold mb-4">Informasi Kontak</h3>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-red-600" />
                  <a
                    href="mailto:info@oyndigital.com"
                    className="hover:text-red-400"
                  >
                    info.oyndigital@foreynd.space
                  </a>
                </div>
                <div className="flex items-center">
                  <Smartphone className="h-5 w-5 mr-3 text-red-600" />
                  <span>+62 877 8847 4655</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-red-600 mt-1" />
                  <span>Jalan Digital No. 1, Jakarta, Indonesia</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-red-400"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" aria-label="GitHub" className="hover:text-red-400">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Website" className="hover:text-red-400">
                  <Link className="h-6 w-6" />
                </a>
              </div>
            </ShadcnCard>

            {/* Formulir Kontak */}
            <ShadcnCard>
              <h3 className="text-2xl font-semibold mb-4">Kirim Pesan</h3>
              <form className="space-y-4">
                <ShadcnInput type="text" placeholder="Nama Anda" />
                <ShadcnInput type="email" placeholder="Email Anda" />
                <ShadcnTextarea placeholder="Pesan Anda" />
                <ShadcnButton type="submit" className="w-full">
                  Kirim Pesan
                </ShadcnButton>
              </form>
            </ShadcnCard>
          </div>
        </section>
      </main>

      {/* Bagian Footer */}
      <footer className="bg-[#2d3748] text-center p-6 text-gray-500">
        &copy; {new Date().getFullYear()} OYN-Digital. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
