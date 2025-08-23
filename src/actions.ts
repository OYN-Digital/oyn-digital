export function openWhatsApp(message: string) {
  const phone = "6287765872869";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
