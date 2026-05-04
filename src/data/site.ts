import type { Site } from "./types";

const site: Site = {
  lang: "pt-BR",
  domain: "murai.com.br",
  businessName: "Murai Odontologia",
  tagline: "Há 42 anos reinventando a experiência dentista em São Paulo.",
  metaDescription:
    "Murai Odontologia. Há 42 anos, clínica referência em odontologia digital em São Paulo. Atendimento, tecnologia e equipe própria pensados para transformar a sua consulta.",
  primaryCta: { label: "Falar no WhatsApp", href: "https://wa.me/5511914680031" },
  secondaryCta: { label: "Conhecer a clínica", href: "#about" },
  hero: {
    eyebrow: "Há 42 anos, em São Paulo",
    headline: "Reinventar a experiência dentista.",
    sub: "Tecnologia, equipe própria e a clareza que você não esperava encontrar em uma clínica odontológica.",
    imageUrl: "https://murai.com.br/wp-content/themes/murai/images/paulo-murai.png",
    badges: ["42 anos", "Odontologia digital", "Equipe própria", "São Paulo, SP"],
  },
  navLinks: [
    { label: "Diferenciais", href: "#features" },
    { label: "Sobre", href: "#about" },
    { label: "Contato", href: "#contact" },
  ],
  features: {
    eyebrow: "O que muda na Murai",
    title: "Quatro detalhes que reescrevem a consulta.",
    intro: "Mapeamos cada incômodo da jornada do paciente e refizemos o protocolo até a consulta sair do jeito que ela deveria ter sido sempre.",
    items: [
      {
        title: "Sem medo da anestesia.",
        body: "Cada momento de desconforto foi estudado e refeito. Você sai da consulta sem ter sentido o que costuma lembrar.",
      },
      {
        title: "Etapas claras, sempre.",
        body: "Você sabe o que vai acontecer antes de acontecer. Plano individualizado, com prazo, valor e o porquê de cada passo.",
      },
      {
        title: "Equipe própria, três gerações.",
        body: "Dr. Paulo, Dr. Breno e Dra. Jana Murai assinam pessoalmente. O time clínico é fixo, treinado dentro de casa, em atualização constante.",
      },
      {
        title: "Pós-tratamento que continua.",
        body: "O acompanhamento depois da entrega é parte do trabalho. Você recebe um número direto, não um cartão de visita.",
      },
    ],
  },
  about: {
    eyebrow: "Sobre a Murai",
    title: "Quatro décadas reescrevendo a consulta odontológica.",
    paragraphs: [
      "Começamos em 1984. Quatro décadas depois, a Murai é referência em odontologia digital em São Paulo, e a forma como tratamos cada paciente é o que mais mudou.",
      "Fizemos um levantamento de todas as dores na jornada: o medo da anestesia, o tempo de espera, a falta de clareza nas etapas, o pós-tratamento esquecido. Cada item virou protocolo.",
      "Investimos em tecnologia, inovação e equipe para entregar uma experiência nova. A gestão é completamente focada no paciente, e tudo que fazemos é desenhado para isso.",
    ],
    stats: [
      { value: "42", label: "anos no mercado" },
      { value: "3", label: "gerações na clínica" },
      { value: "100%", label: "equipe própria" },
      { value: "1", label: "número direto pós-tratamento" },
    ],
    timeline: [
      { year: "1984", title: "Fundação", body: "Dr. Paulo Murai abre a primeira clínica em São Paulo." },
      { year: "2005", title: "Odontologia digital", body: "Scanner intraoral, planejamento 3D, fluxo digital ponta a ponta." },
      { year: "2018", title: "Família clínica", body: "Dr. Breno e Dra. Jana se juntam ao corpo clínico." },
      { year: "2026", title: "Você", body: "É aqui que a sua história com a Murai começa." },
    ],
  },
  ctaSection: {
    eyebrow: "Nossa missão",
    headline: "Reinventar a experiência dentista.",
    sub: "Vamos conversar sobre o seu sorriso. Resposta no mesmo dia, no WhatsApp.",
  },
  contact: {
    whatsappHref: "https://wa.me/5511914680031",
    whatsappLabel: "(11) 91468-0031",
    phone: "+55 11 91468-0031",
    email: undefined,
    address: undefined,
    hours: "Seg a Sex, 9h às 19h",
    mapsUrl: undefined,
  },
  social: {
    instagram: "https://www.instagram.com/murai_odontologia/",
    facebook: null,
    linkedin: null,
    twitter: null,
    youtube: null,
    tiktok: null,
  },
  logo: {
    src: "https://murai.com.br/wp-content/themes/murai/images/logo-murai-top-2.jpg",
    alt: "Murai Odontologia",
  },
  favicons: [
    { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    { rel: "icon", href: "/favicon.png", type: "image/png" },
  ],
  variants: {
    nav: "split",
    hero: "editorial",
    features: "numbered",
    about: "timeline",
    cta: "quote",
    contact: "split",
    footer: "columns",
  },
  palette: {
    surface: "#FAF7F2",
    ink: "#0F1B14",
    muted: "#5C6B62",
    primary: "#208F37",
    primaryFg: "#FAF7F2",
    accent: "#B89456",
    soft: "#EFE9DD",
    line: "rgb(15 27 20 / 0.1)",
  },
  typography: {
    headingFamily: "Fraunces",
    bodyFamily: "Inter",
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap",
    scaleRatio: 1.333,
  },
  density: "medium",
  copy: {
    learnMore: "Saiba mais",
    contactUs: "Falar com a clínica",
    sectionFeatures: "Diferenciais",
    sectionAbout: "Sobre",
    sectionContact: "Contato",
  },
};

export default site;
