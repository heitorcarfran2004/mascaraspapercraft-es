/**
 * Fuente única de verdad del embudo de ventas (versión ES).
 * Edita textos, precios, imágenes y enlaces de checkout AQUÍ — los componentes
 * solo consumen estos datos.
 */

/* ------------------------------------------------------------------ */
/* Enlaces de checkout y rastreo                                       */
/* ------------------------------------------------------------------ */

// TODO (migración EU): estos checkouts son de la oferta brasileña (BRL).
// Sustituir por el checkout europeo en EUR antes de publicar.
export const checkout = {
  /** Plan completo "Colección Maestra" (CTA principal). */
  master: "https://ggcheckout.app/checkout/v5/oCtE74KEwFtvHEiWxULY",
  /** Upsell que aparece cuando el usuario elige el plan básico. */
  upsell: "https://ggcheckout.app/checkout/v5/fo1NxX1ks8T6qBXtTvHy",
  /** Plan básico (cuando el usuario rechaza el upsell). */
  basic: "https://ggcheckout.app/checkout/v5/q2Z6itwEAb0nHVyVlykm",
} as const;

/** A dónde vuelve el navegador al pulsar "atrás" (back-redirect). */
export const backRedirectUrl = "https://mascaraspaperback.vercel.app/";

/** Pixel de UTMify usado en el rastreo de conversión. */
export const utmifyPixelId = "69db37c122a31821d842a567";

/* ------------------------------------------------------------------ */
/* Demostración en vídeo ("Compra sin miedo")                          */
/* ------------------------------------------------------------------ */

export const productDemo = {
  eyebrow: "VELO EN LA PRÁCTICA",
  titleLead: "Compra",
  titleHighlight: "Sin Miedo",
  subtitle:
    "Dale al play y mira el producto por dentro: cómo lo recibes, cómo accedes y la calidad de las plantillas.",
  video: {
    playerId: "vid-6a4d0c6f38fbf93867be47df",
    script:
      "https://scripts.converteai.net/59fb2471-bbf9-48ae-ad59-009b3aba8bd1/players/6a4d0c6f38fbf93867be47df/v4/player.js",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Cabecera / Hero                                                     */
/* ------------------------------------------------------------------ */

export const hero = {
  badgeCount: "+500",
  badgeLabel: "PLANTILLAS APROBADAS",
  titleLead: "Transforma papel en",
  titleHighlight: "Máscaras 3D",
  titleTail: "increíbles",
  subtitle:
    "Consigue más de 500 plantillas listas para descargar, imprimir y montar máscaras impresionantes en casa",
  cta: "QUIERO EMPEZAR AHORA",
  image: {
    src: "/images/hero.jpeg",
    alt: "Máscaras 3D de papel",
    width: 1024,
    height: 1024,
  },
} as const;

/* ------------------------------------------------------------------ */
/* Beneficios                                                          */
/* ------------------------------------------------------------------ */

export interface Benefit {
  image: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    image: "/images/beneficios/beneficio1.jpg",
    title: "Disfraces increíbles gastando poco",
    description:
      "Monta disfraces espectaculares para fiestas de disfraces o cumpleaños temáticos",
  },
  {
    image: "/images/beneficios/beneficio2.jpg",
    title: "Ideal para eventos, fotos y decoración",
    description:
      "Crea máscaras únicas que llaman la atención en fiestas, cumpleaños, sesiones de fotos e incluso en la decoración de casa",
  },
  {
    image: "/images/beneficios/beneficio3.jpg",
    title: "Terapia antiestrés",
    description:
      "Desconecta de las pantallas y céntrate en el momento presente. Recortar y montar papel es una forma sencilla y eficaz de relajar la mente.",
  },
  {
    image: "/images/beneficios/beneficio4.jpg",
    title: "La actividad perfecta en familia",
    description:
      "Una actividad creativa para hacer con hijos, sobrinos o nietos. Menos pantalla, más conversación, más recuerdos creados juntos.",
  },
];

/* ------------------------------------------------------------------ */
/* Galería                                                             */
/* ------------------------------------------------------------------ */

export interface GalleryCategory {
  title: string;
  subtitle: string;
  images: string[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    title: "Animales",
    subtitle: "Del más tierno al más salvaje",
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
    title: "Dibujos & Nostalgia",
    subtitle: "Personajes que marcaron generaciones",
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
    title: "Universo de los Héroes",
    subtitle: "Los defensores más queridos de la pantalla",
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
    title: "Villanos & Terror",
    subtitle: "De los villanos más temidos a los mayores monstruos",
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
    subtitle: "De los arcades a Fortnite, para quien ama jugar",
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
/* Material necesario                                                  */
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
    title: "1. Impresora corriente",
    description:
      "Funciona en cualquier impresora doméstica A4 (de tinta o láser).",
  },
  {
    icon: FileText,
    title: "2. Papel asequible",
    description:
      "Usa folio normal de 75g para practicar o papel de 180g (lo encuentras en cualquier papelería) para más durabilidad.",
  },
  {
    icon: Scissors,
    title: "3. Pegamento y tijeras",
    description:
      "Pegamento blanco escolar, tijeras sin punta y regla. Materiales sencillos que ya tienes en casa.",
  },
];

/* ------------------------------------------------------------------ */
/* Testimonios                                                         */
/* ------------------------------------------------------------------ */

/**
 * PROVISIONAL: traducción de los testimonios reales de la oferta brasileña.
 * Sustituir por testimonios reales del mercado europeo antes de publicar
 * (en la UE los testimonios deben ser verificables — Directiva 2019/2161).
 */
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mis hijos las adoraron y ahora cada día quieren una máscara nueva 🤣",
    author: "Aline Freire",
    role: "Madre de 2",
  },
  {
    quote:
      "Las usé con mi clase de 4º y les encantaron. Lo mejor es que las plantillas gustaron tanto a las niñas como a los niños.",
    author: "Clara Mendes",
    role: "Profesora",
  },
  {
    quote:
      "Las compré para mis cosplays y las máscaras quedaron perfectas. El soporte me ayudó mucho con una máscara personalizada que pedí 👍",
    author: "Ricardo Gomes",
    role: "Cosplayer",
  },
];

/* ------------------------------------------------------------------ */
/* Bonos                                                               */
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
    title: "BONO 1: Plantillas de Monumentos",
    subtitle:
      "+50 plantillas de monumentos históricos como la Torre Eiffel, la Muralla China, etc.",
    originalPrice: "19,90 €",
  },
  {
    image: "/images/bonus/bonus2.png",
    title: "BONO 2: Plantillas de Animales 3D",
    subtitle: "+250 plantillas con animales salvajes y domésticos para montar.",
    originalPrice: "14,90 €",
  },
  {
    image: "/images/bonus/bonus3.png",
    title: "BONO 3: Animes y Mangas 3D",
    subtitle: "+200 plantillas de personajes icónicos de animes famosos",
    originalPrice: "16,90 €",
  },
];

/* ------------------------------------------------------------------ */
/* Precios / Kits                                                      */
/* ------------------------------------------------------------------ */

export const pricing = {
  basic: {
    name: "Kit Inicial",
    tagline: "SOLO QUIERO LO BÁSICO",
    price: "6,90 €",
    features: [
      "Acceso a 100 plantillas de máscaras",
      "Acceso de por vida y descargas ilimitadas",
    ],
    cta: "Solo quiero lo básico",
  },
  master: {
    name: "Colección Maestra",
    badge: "Más popular",
    originalPrice: "Antes 49,90 €",
    price: "17,90 €",
    savings: "Ahorra 32,00 €",
    features: [
      "Acceso a +500 plantillas",
      "Soporte prioritario",
      "Acceso de por vida y descargas ilimitadas",
      "Entrega inmediata por email y WhatsApp",
    ],
    bonuses: [
      "BONO 1: Plantillas de Monumentos",
      "BONO 2: Plantillas de Animales 3D",
      "BONO 3: Animes y Mangas 3D",
    ],
    cta: "¡SÍ! LO QUIERO TODO",
    socialProof: "648 personas ya lo han comprado",
  },
  trustBadges: [
    "Compra 100% segura",
    "Descarga inmediata",
    "Garantía de satisfacción",
  ],
  guarantee: {
    kicker: "RIESGO CERO",
    title: "Garantía de 7 días",
    text: "Estamos tan seguros de que vas a adorar las plantillas que te ofrecemos una garantía incondicional. Si no consigues montarlas, no te gustan los modelos o simplemente cambias de opinión, te devolvemos el 100% de tu dinero. Sin preguntas, sin letra pequeña. Basta con un email.",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Upsell (modal)                                                      */
/* ------------------------------------------------------------------ */

export const upsell = {
  header: "¡ESPERA! NO TE VAYAS TODAVÍA",
  titleLead: "Hemos desbloqueado un",
  titleHighlight: "Descuento Secreto",
  titleTail: "para ti",
  description:
    "Te ha interesado el Plan Básico, pero ¿qué tal llevarte el Plan Completo con más de 500 plantillas por un precio exclusivo?",
  offerLabel: "OFERTA RELÁMPAGO",
  originalPrice: "17,90 €",
  price: "11,90 €",
  /** Tiempo de la cuenta atrás, en segundos (1:45). */
  countdownSeconds: 105,
  acceptCta: "Quiero aprovecharlo ahora",
  declineCta: "Continuar con el Plan Básico",
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
    question: "¿Cómo recibiré las plantillas después de la compra?",
    answer:
      "En cuanto se apruebe el pago, recibes el acceso inmediatamente para descargar los archivos. Las plantillas se envían por WhatsApp y también por email.",
  },
  {
    question: "¿Puedo imprimirlas todas las veces que quiera?",
    answer:
      "¡Sí! Después de comprar, puedes imprimir las plantillas tantas veces como quieras.",
  },
  {
    question: "¿Es difícil montar las máscaras?",
    answer:
      "No. Solo hay que recortar, doblar y pegar. Con el primer modelo ya le coges el truco.",
  },
  {
    question: "¿Qué papel debo usar? ¿Puedo usar folio normal?",
    answer:
      '¡Sí! El folio normal funciona muy bien y se monta sin problema. Aun así, si quieres un resultado más resistente y con un acabado más "premium", lo ideal es usar papel más firme, de 180g a 230g.',
  },
  {
    question: "¿Qué pegamento es mejor para montar?",
    answer:
      "El pegamento blanco escolar funciona perfectamente. El pegamento de barra también ayuda en las piezas más pequeñas.",
  },
  {
    question: "¿Las plantillas vienen en color o tengo que pintarlas?",
    answer:
      "La mayoría ya viene en color y lista. Algunos modelos se pueden personalizar si quieres pintarlos.",
  },
  {
    question: "¿Necesito impresora en casa? ¿Funciona en una impresora normal?",
    answer:
      "No necesitas impresora en casa. Puedes imprimir en cualquier copistería de tu ciudad. Y si tienes impresora, funciona perfectamente en cualquier impresora doméstica A4.",
  },
  {
    question: "¿Hay tutorial para montarlas?",
    answer:
      "Sí. El montaje es sencillo y algunas plantillas incluyen instrucciones paso a paso.",
  },
  {
    question: "¿El acceso caduca?",
    answer: "No. El acceso es de por vida.",
  },
  {
    question: "Si pierdo los archivos, ¿puedo volver a descargarlos?",
    answer: "Sí. Puedes acceder de nuevo y descargarlos cuando quieras.",
  },
  {
    question: "¿Hay garantía?",
    answer:
      "Sí. Tienes 7 días de garantía para pedir el reembolso si no te gusta.",
  },
  {
    question: "¿Cómo funciona el reembolso?",
    answer:
      "Solo tienes que solicitarlo dentro del plazo de 7 días y recibes tu dinero de vuelta.",
  },
  {
    question: "¿El pago es seguro?",
    answer:
      "Sí. El pago se realiza a través de una plataforma segura con tarjeta y otros métodos.",
  },
];
