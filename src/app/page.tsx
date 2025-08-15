import React, { ReactNode } from "react";
import {
  SiInstagram,
  SiWhatsapp,
  SiX,
  SiGithub,
} from "@icons-pack/react-simple-icons";
import OYNOutline from "@/../public/OYN-Outline.png";
import Image from "next/image";
import NextLink from "next/link";
import { type LucideIcon } from "lucide-react";
import {
  Code,
  PencilRuler,
  Camera,
  FileText,
  Mail,
  Linkedin,
  Link,
  Smartphone,
  MapPin,
} from "lucide-react";

type TProps = {
  children: ReactNode;
  className?: string;
  type?: string;
};

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
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) => {
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
      <header className="md:px-10 flex justify-between items-center bg-[#2d3748] shadow-md">
        <div className="hidden px-4 py-6 lg:container lg:mx-auto lg:flex lg:items-center">
          <div className="flex items-center space-x-2 grow">
            {/* Logo OYN-Digital */}
            <NextLink href="/">
              <Image
                src={OYNOutline}
                alt="OYN Digital Logo"
                width={128}
                draggable={false}
              />
            </NextLink>
          </div>
          <nav className="hidden md:flex gap-12 font-medium lg:text-xl">
            <NextLink
              href="#about"
              className="hover:text-red-400 transition-colors"
            >
              Tentang Kami
            </NextLink>
            <a
              href="#services"
              className="hover:text-red-400 transition-colors"
            >
              Layanan
            </a>
            <a href="#contact" className="hover:text-red-400 transition-colors">
              Kontak
            </a>
          </nav>
        </div>
        <ShadcnButton className="md:hidden">
          <Mail className="h-4 w-4" />
        </ShadcnButton>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-6 md:px-10">
        {/* Bagian Hero (Selamat Datang) */}
        <section className="text-center py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fadeIn">
            Ribet sama Tugas & Proyek Digital? Sini, Biar OYN yang Urus!
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 animate-fadeIn delay-100">
            OYN Digital siap jadi partner kreatifmu. Kami bantu bikin website
            impian, visual branding lewat logo dan komik, edit video
            profesional, plus asistensi penulisan dokumen biar kamu bisa fokus
            ke hal lain.
          </p>
          <ShadcnButton className="animate-fadeIn delay-200 flex gap-2 items-center justify-center mx-auto">
            Hubungi Kami
          </ShadcnButton>
        </section>

        {/* Bagian Layanan */}
        <section id="services" className="py-20 relative">
          <h2 className="text-4xl font-bold text-center mb-12">
            Apa Aja yang Kita Kerjain?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Code}
              title="Bikin & Rawat Website Anti Ribet"
              description="Pengen punya website buat portofolio, toko online, atau blog pribadi? Kita siap wujudin ide-ide gila kamu! Desainnya keren, responsif di semua device, dan kita yang urus maintenance-nya. Jadi, kamu tinggal terima beres aja."
            />
            <ServiceCard
              icon={PencilRuler}
              title="Asistensi Tugas & Dokumen"
              description="Sering pusing sama deadline skripsi atau tugas numpuk? Nggak perlu khawatir lagi! Kita bantu proses pembuatan dan penataan dokumen, biar tugas-tugas kamu rapi, terstruktur, dan siap dikumpul. Sekarang ngerjain tugas bisa lebih chill."
            />
            <ServiceCard
              icon={Camera}
              title="Logo & Komik Estetik"
              description="Menghasilkan konten visual yang menarik dan berkualitas profesional.Biar brand kamu punya identitas yang kuat, kita desainin logo yang otentik dan eye-catching. Mau bikin komik digital buat cerita brand atau konten, juga bisa! Kita ubah ide-idemu jadi visual yang super estetik."
            />
            <ServiceCard
              icon={FileText}
              title="Edit Video Sat-Set"
              description="Punya footage mentah tapi bingung ngeditnya? Serahkan pada kita! Dari video promosi, konten YouTube, sampai TikTok yang viral, kita editin dengan transisi halus dan efek cinematic. Hasilnya dijamin bikin mata betah!"
            />
          </div>
          <div className="bg-white mt-20 py-12 w-screen relative left-1/2 -translate-x-1/2 flex flex-col items-center justify-between gap-8">
            <p className="text-2xl text-gray-900 font-semibold">
              Tertarik? Langsung aja kepoin portofolio kita atau tanya-tanya
              lebih lanjut!
            </p>
            <ShadcnButton>Order Jasa</ShadcnButton>
          </div>
        </section>

        {/* Bagian Tentang Kami */}
        <section id="about" className="py-20 max-w-3xl mx-auto">
          <ShadcnCard>
            <h2 className="text-4xl font-bold text-center mb-6">
              Tentang OYN Digital
            </h2>
            <p className="text-gray-400 text-center leading-relaxed">
              Didirikan dengan hasrat untuk inovasi, OYN Digital adalah tim ahli
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
                  <SiGithub className="h-6 w-6" />
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
        <div className="grid grid-cols-3 container mx-auto py-8">
          <div className="grid grid-cols-1 text-left gap-2">
            <Image src={OYNOutline} alt="OYN Digital Logo" width={128} />
            <div>
              <h4 className="font-bold text-xl mt-3">OYN Digital</h4>
              <p>Tanah Abang, Jakarta Pusat, Indonesia</p>
              <div className="flex items-center gap-2 mt-4">
                <SiWhatsapp /> +62 877-8847-4655
              </div>
              <NextLink
                href="https://x.com/OYNDigital"
                target="_blank"
                className="flex items-center gap-2 mt-4"
              >
                <SiX /> OYNDigital
              </NextLink>
              <NextLink
                href="https://instagram.com/oyn.digital"
                target="_blank"
                className="flex items-center gap-2 mt-4"
              >
                <SiInstagram /> oyn.digital
              </NextLink>
            </div>
          </div>
          <div className="grid grid-cols-1 text-left gap-2">
            <h4 className="font-semibold text-xl">Links</h4>
            <ul>
              <li>
                <NextLink href="/services">Services</NextLink>
              </li>
              <li>
                <NextLink href="/about">About</NextLink>
              </li>
              <li>
                <NextLink href="/terms-of-service">Terms of Service</NextLink>
              </li>
              <li>
                <NextLink href="/privacy-policies">Privacy Policies</NextLink>
              </li>
              <li>
                <NextLink href="/faq">FAQ</NextLink>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 text-left gap-2">
            <h4 className="font-semibold text-xl">Subscribe</h4>
          </div>
        </div>
        <p>
          &copy; {new Date().getFullYear()} OYN Digital. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
