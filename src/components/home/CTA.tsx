import Container from "../ui/Container";
import { Button } from "../ui/button";
import { openWhatsApp } from "@/actions";

export default function CTA() {
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
