/**
 * Fonte única de verdade do funil de vendas.
 * Edite textos, preços, imagens e links de checkout AQUI — os componentes
 * apenas consomem estes dados, então nada de caçar string solta no JSX.
 */

/* ------------------------------------------------------------------ */
/* Links de checkout e rastreamento                                    */
/* ------------------------------------------------------------------ */

export const checkout = {
  /** Plano completo "Coleção Mestre" (CTA principal). */
  master: "https://ggcheckout.app/checkout/v5/oCtE74KEwFtvHEiWxULY",
  /** Upsell oferecido quando o usuário clica no plano básico. */
  upsell: "https://ggcheckout.app/checkout/v5/fo1NxX1ks8T6qBXtTvHy",
  /** Plano básico (quando o usuário recusa o upsell). */
  basic: "https://ggcheckout.app/checkout/v5/q2Z6itwEAb0nHVyVlykm",
} as const;

/** Para onde o navegador volta ao apertar "voltar" (back-redirect). */
export const backRedirectUrl = "https://mascaraspaperback.vercel.app/";

/** Pixel da UTMify usado no rastreamento de conversão. */
export const utmifyPixelId = "69db37c122a31821d842a567";

/* ------------------------------------------------------------------ */
/* Demonstração em vídeo ("Compre sem medo")                           */
/* ------------------------------------------------------------------ */

export const productDemo = {
  eyebrow: "VEJA NA PRÁTICA",
  titleLead: "Compre",
  titleHighlight: "Sem Medo",
  subtitle:
    "Aperte o play e veja o produto por dentro: como você recebe, como acessa e a qualidade dos moldes.",
  video: {
    playerId: "vid-6a4d0c6f38fbf93867be47df",
    script:
      "https://scripts.converteai.net/59fb2471-bbf9-48ae-ad59-009b3aba8bd1/players/6a4d0c6f38fbf93867be47df/v4/player.js",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Topo / Hero                                                         */
/* ------------------------------------------------------------------ */

export const hero = {
  badgeCount: "+500",
  badgeLabel: "MOLDES APROVADOS",
  titleLead: "Transforme papel em",
  titleHighlight: "Máscaras 3D",
  titleTail: "incríveis",
  subtitle:
    "Adquira mais de 500 moldes prontos para baixar, imprimir e montar máscaras impressionantes em casa",
  cta: "QUERO COMEÇAR AGORA",
  image: {
    src: "/images/hero.jpeg",
    alt: "Máscaras 3D de papel",
    width: 1024,
    height: 1024,
  },
} as const;

/* ------------------------------------------------------------------ */
/* Benefícios                                                          */
/* ------------------------------------------------------------------ */

export interface Benefit {
  image: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    image: "/images/beneficios/beneficio1.jpg",
    title: "Fantasias incríveis gastando pouco",
    description:
      "Monte fantasias de tirar o fôlego para festas à fantasia ou aniversários temáticos",
  },
  {
    image: "/images/beneficios/beneficio2.jpg",
    title: "Ótimo para eventos, fotos e decoração",
    description:
      "Crie máscaras únicas que chamam atenção em festas, aniversários, ensaios fotográficos e até na decoração da casa",
  },
  {
    image: "/images/beneficios/beneficio3.jpg",
    title: "Terapia Anti-Estresse",
    description:
      "Desconecte-se das telas e foque no momento presente. Recortar e montar papel é uma forma simples e eficaz de relaxar a mente.",
  },
  {
    image: "/images/beneficios/beneficio4.jpg",
    title: "Atividade perfeita em família",
    description:
      "Uma atividade criativa para fazer com filhos, sobrinhos ou netos. Menos tela, mais conversa, mais memórias criadas juntos.",
  },
];

/* ------------------------------------------------------------------ */
/* Galeria                                                             */
/* ------------------------------------------------------------------ */

export interface GalleryCategory {
  title: string;
  subtitle: string;
  images: string[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    title: "Animais",
    subtitle: "Do mais fofo ao mais selvagem",
    images: [
      "/images/galeria/animais/carrossel-animal1.jpeg",
      "/images/galeria/animais/carrossel-animal2.jpeg",
      "/images/galeria/animais/carrossel-animal3.jpeg",
      "/images/galeria/animais/carrossel-animal4.jpeg",
      "/images/galeria/animais/carrossel-animal5.jpeg",
      "/images/galeria/animais/carrossel-animal6.jpeg",
      "/images/galeria/animais/carrossel-animal7.jpeg",
      "/images/galeria/animais/carrossel-animal8.jpeg",
      "/images/galeria/animais/carrossel-animal9.jpeg",
      "/images/galeria/animais/carrossel-animal10.jpeg",
    ],
  },
  {
    title: "Desenhos & Nostalgia",
    subtitle: "Personagens que marcaram gerações",
    images: [
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos1.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos2.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos3.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos4.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos5.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos6.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos7.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos9.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos10.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos11.jpeg",
      "/images/galeria/desenhos-nostalgia/carrossel-desenhos12.jpeg",
    ],
  },
  {
    title: "Universo dos Heróis",
    subtitle: "Os defensores mais amados das telas",
    images: [
      "/images/galeria/herois/carrossel-heroi1.jpeg",
      "/images/galeria/herois/carrossel-heroi2.jpeg",
      "/images/galeria/herois/carrossel-heroi3.jpeg",
      "/images/galeria/herois/carrossel-heroi4.jpeg",
      "/images/galeria/herois/carrossel-heroi5.jpeg",
      "/images/galeria/herois/carrossel-heroi6.jpeg",
      "/images/galeria/herois/carrossel-heroi7.jpeg",
      "/images/galeria/herois/carrossel-heroi8.jpeg",
      "/images/galeria/herois/carrossel-heroi9.jpeg",
      "/images/galeria/herois/carrossel-heroi10.jpeg",
    ],
  },
  {
    title: "Vilões & Terror",
    subtitle: "Dos vilões mais temidos aos maiores monstros",
    images: [
      "/images/galeria/viloes-terror/carrossel-vilao1.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao2.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao3.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao4.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao5.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao6.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao7.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao8.jpeg",
      "/images/galeria/viloes-terror/carrossel-vilao9.jpeg",
    ],
  },
  {
    title: "Mundo Gamer",
    subtitle: "Do fliperama ao Fortnite para quem ama jogar",
    images: [
      "/images/galeria/mundo-gamer/carrossel-gamer1.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer2.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer3.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer4.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer5.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer6.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer7.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer8.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer9.jpeg",
      "/images/galeria/mundo-gamer/carrossel-gamer10.jpeg",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Equipamento necessário                                              */
/* ------------------------------------------------------------------ */

import {
  Printer,
  FileText,
  Scissors,
  type LucideIcon,
} from "lucide-react";

export interface EquipmentItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const equipment: EquipmentItem[] = [
  {
    icon: Printer,
    title: "1. Impressora Comum",
    description:
      "Funciona em qualquer impressora doméstica A4 (Jato de tinta ou Laser).",
  },
  {
    icon: FileText,
    title: "2. Papel Acessível",
    description:
      "Use sulfite 75g para treinar ou papel 180g (encontrado em qualquer papelaria) para maior durabilidade.",
  },
  {
    icon: Scissors,
    title: "3. Cola e Tesoura",
    description:
      "Cola branca escolar, tesoura sem ponta e régua. Materiais simples que você já tem em casa.",
  },
];

/* ------------------------------------------------------------------ */
/* Depoimentos                                                         */
/* ------------------------------------------------------------------ */

/** Prints de conversas de WhatsApp (carrossel). */
export const testimonialImages: string[] = [
  "/images/depoimentos/1.png",
  "/images/depoimentos/2.png",
  "/images/depoimentos/3.png",
  "/images/depoimentos/4.png",
  "/images/depoimentos/5.png",
  "/images/depoimentos/6.png",
  "/images/depoimentos/7.png",
];

/* ------------------------------------------------------------------ */
/* Bônus                                                               */
/* ------------------------------------------------------------------ */

export interface Bonus {
  image: string;
  title: string;
  subtitle: string;
  originalPrice: string;
}

export const bonuses: Bonus[] = [
  {
    image: "/images/bonus/bonus1.png",
    title: "BÔNUS 1: Moldes de Monumentos",
    subtitle:
      "+50 Moldes de Monumentos Históricos como Torre Eiffel, Muralha da China, etc.",
    originalPrice: "R$ 65,00",
  },
  {
    image: "/images/bonus/bonus2.png",
    title: "BÔNUS 2: Moldes de Animais 3D",
    subtitle: "+250 moldes com animais selvagens e domésticos para montar.",
    originalPrice: "R$ 47,00",
  },
  {
    image: "/images/bonus/bonus3.png",
    title: "BÔNUS 3: Animes e Mangás 3D",
    subtitle: "+200 Moldes de Personagens Icônicos de Animes famosos",
    originalPrice: "R$ 55,00",
  },
];

/* ------------------------------------------------------------------ */
/* Preços / Kits                                                       */
/* ------------------------------------------------------------------ */

export const pricing = {
  basic: {
    name: "Kit Iniciante",
    tagline: "QUERO SÓ O BÁSICO",
    price: "R$ 5,90",
    features: [
      "Acesso a 100 moldes de Máscaras",
      "Acesso Vitalício e Downloads Ilimitados",
    ],
    cta: "Quero só o básico",
  },
  master: {
    name: "Coleção Mestre",
    badge: "Mais popular",
    originalPrice: "De R$ 149,90",
    price: "R$ 15,90",
    savings: "Economize R$ 125,00",
    features: [
      "Acesso a +500 moldes",
      "Suporte Prioritário",
      "Acesso Vitalício e Downloads Ilimitados",
      "Entrega imediata no Email e WhatsApp",
    ],
    bonuses: [
      "BÔNUS 1: Moldes de Monumentos",
      "BÔNUS 2: Moldes de Animais 3D",
      "BÔNUS 3: Animes e Mangás 3D",
    ],
    cta: "SIM! EU QUERO TUDO",
    socialProof: "648 pessoas já compraram",
  },
  trustBadges: [
    "Compra 100% segura",
    "Download imediato",
    "Garantia de satisfação",
  ],
  guarantee: {
    kicker: "RISCO ZERO",
    title: "Garantia de 7 dias",
    text: "Temos tanta certeza que você vai amar os moldes que oferecemos uma garantia incondicional. Se você não conseguir montar, não gostar dos modelos ou simplesmente mudar de ideia, nós devolvemos 100% do seu dinheiro. Sem perguntas, sem letras miúdas. Basta um e-mail.",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Upsell (modal)                                                      */
/* ------------------------------------------------------------------ */

export const upsell = {
  header: "ESPERE! NÃO VÁ EMBORA AINDA",
  titleLead: "Desbloqueamos um",
  titleHighlight: "Desconto Secreto",
  titleTail: "pra você!",
  description:
    "Você se interessou no Plano Básico, mas que tal adquirir o Plano Completo com mais de 500 moldes por um preço exclusivo?",
  offerLabel: "OFERTA RELÂMPAGO",
  originalPrice: "R$ 16,90",
  price: "R$ 10,90",
  /** Tempo do contador regressivo, em segundos (1:45). */
  countdownSeconds: 105,
  acceptCta: "Quero aproveitar agora",
  declineCta: "Continuar com Plano Básico",
} as const;

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Como vou receber os moldes depois da compra?",
    answer:
      "Assim que o pagamento for aprovado, você recebe o acesso imediatamente para baixar os arquivos. Os moldes são enviados no WhatsApp e também no e-mail.",
  },
  {
    question: "Posso imprimir quantas vezes eu quiser?",
    answer:
      "Sim! Depois de comprar, você pode imprimir os moldes quantas vezes quiser.",
  },
  {
    question: "É difícil montar as máscaras?",
    answer:
      "Não. Basta recortar, dobrar e colar. Com o primeiro modelo você já pega o jeito.",
  },
  {
    question: "Qual papel devo usar nos moldes? Posso usar sulfite normal?",
    answer:
      'Sim! O papel sulfite normal já funciona muito bem e dá pra montar tranquilamente. Porém, se você quiser um resultado mais resistente e com acabamento mais "premium", o ideal é usar papel mais firme, como 180g a 230g.',
  },
  {
    question: "Qual cola é melhor para montar?",
    answer:
      "Cola branca escolar funciona perfeitamente. Cola bastão também pode ajudar em peças menores.",
  },
  {
    question: "Os moldes são coloridos ou preciso pintar?",
    answer:
      "A maioria já vem colorida e pronta. Alguns modelos podem ser personalizados se você quiser pintar.",
  },
  {
    question: "Preciso ter impressora em casa? Funciona em impressora comum?",
    answer:
      "Não precisa ter impressora em casa. Você pode imprimir em qualquer gráfica rápida da sua cidade. E se tiver impressora, funciona perfeitamente em qualquer impressora doméstica A4.",
  },
  {
    question: "Tem tutorial ensinando a montar?",
    answer:
      "Sim. A montagem é simples e alguns moldes incluem instruções passo a passo.",
  },
  {
    question: "O acesso expira?",
    answer: "Não. O acesso é vitalício.",
  },
  {
    question: "Se eu perder os arquivos, posso baixar de novo?",
    answer: "Sim. Você pode acessar novamente e baixar quando quiser.",
  },
  {
    question: "Tem garantia?",
    answer:
      "Sim. Você tem 7 dias de garantia para pedir reembolso se não gostar.",
  },
  {
    question: "Como funciona o reembolso?",
    answer:
      "Basta solicitar dentro do prazo de 7 dias e você recebe o dinheiro de volta.",
  },
  {
    question: "O pagamento é seguro?",
    answer: "Sim. O pagamento é feito por plataforma segura com Pix e cartão.",
  },
];
