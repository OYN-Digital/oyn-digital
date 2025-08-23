import Container from "../ui/Container";
import { Quote } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function Testimonials() {
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
