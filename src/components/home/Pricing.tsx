import Container from "../ui/Container";
import { Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function Pricing() {
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
