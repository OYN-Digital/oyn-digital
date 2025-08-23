import Container from "../ui/Container";
import { MonitorSmartphone, Palette, PenTool, LineChart } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export default function Services() {
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
