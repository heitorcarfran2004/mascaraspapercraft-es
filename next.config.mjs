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
