/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Compressão gzip das respostas (HTML/JS/CSS) — não-bloqueante, sem mudar conteúdo
  compress: true,

  // Remove o header X-Powered-By (resposta um pouco mais leve)
  poweredByHeader: false,

  images: {
    // Formatos modernos (menores), com fallback automático do navegador.
    // AVIF só em produção: no dev ele é lentíssimo de codificar e trava as imagens.
    formats:
      process.env.NODE_ENV === "development"
        ? ["image/webp"]
        : ["image/avif", "image/webp"],
    // Mantém as imagens otimizadas em cache por 30 dias
    minimumCacheTTL: 2592000,

    // Larguras candidatas do srcset. O padrão do Next gera 16 entradas por
    // imagem (até 3840px); com ~110 <img> na página isso vira centenas de KB
    // de HTML/payload RSC sem nenhum ganho visual — a maior imagem do site é
    // o hero, exibido a 600px CSS (1200px cobre telas retina 2x).
    // Nada muda na aparência: o navegador só escolhe dentro desta lista.
    deviceSizes: [640, 828, 1080, 1200],
    imageSizes: [128, 256, 384, 512],
  },

  // Cache de longa duração para os assets estáticos de imagem
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
