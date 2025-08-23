import Image from "next/image";
import OYNDigitalOutline from "@/../public/OYN-Outline.png";
import Container from "../ui/Container";

export default function Footer() {
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
