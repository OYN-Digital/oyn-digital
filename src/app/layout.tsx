import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://oyn.foreynd.space"),
  title: {
    template: "%s | OYN Digital",
    default: "OYN Digital - Nyediain semua kebutuhan digital lo",
  },
  description:
    "Kami adalah agensi digital kreatif yang membantu bisnis Anda tumbuh melalui desain web, pengembangan aplikasi, dan strategi pemasaran digital.",
  keywords: [
    "agensi digital",
    "agensi kreatif",
    "desain web",
    "pengembangan aplikasi",
    "pemasaran digital",
  ],
  openGraph: {
    title: "OYN Digital - Nyediain semua kebutuhan digital lo",
    description:
      "Kami adalah agensi digital kreatif yang membantu bisnis Anda tumbuh melalui desain web, pengembangan aplikasi, dan strategi pemasaran digital.",
    url: "https://oyn.foreynd.space",
    siteName: "OYN Digital",
    images: [
      {
        url: "https://oyn.foreynd.space/og-image.png",
        width: 1200,
        height: 630,
        alt: "OYN Digital",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OYN Digital - Nyediain semua kebutuhan digital lo",
    description:
      "Kami adalah agensi digital kreatif yang membantu bisnis Anda tumbuh melalui desain web, pengembangan aplikasi, dan strategi pemasaran digital.",
    creator: "@OYNDigital",
    images: ["https:/oyn.foreynd.space/og-image.png"],
  },
  authors: [{ name: "OYN Digital", url: "https://oyn.foreynd.space" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
        <SpeedInsights />
      </body>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ""}
        debugMode={process.env.NODE_ENV === "development"}
      />
    </html>
  );
}
