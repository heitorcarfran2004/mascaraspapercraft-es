/** Rola suavemente até a seção de preços (id="pricing"). */
export function scrollToPricing() {
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
}
