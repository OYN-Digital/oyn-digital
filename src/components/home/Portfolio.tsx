import Container from "../ui/Container";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function Portfolio() {
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
