export function openWhatsApp(message: string) {
  const phone = "6287788474655";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
