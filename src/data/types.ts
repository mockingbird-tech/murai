export type NavVariant = "simple" | "centered" | "split";
export type HeroVariant = "split" | "fullbleed" | "editorial" | "brutalist" | "productmock";
export type FeaturesVariant = "grid" | "numbered" | "alternating" | "bento";
export type AboutVariant = "split" | "timeline" | "stats";
export type CTAVariant = "banner" | "quote";
export type ContactVariant = "split" | "centered" | "cards";
export type FooterVariant = "minimal" | "columns";

export type Density = "low" | "low-medium" | "medium" | "medium-high";

export interface Variants {
  nav: NavVariant;
  hero: HeroVariant;
  features: FeaturesVariant;
  about: AboutVariant;
  cta: CTAVariant;
  contact: ContactVariant;
  footer: FooterVariant;
}

export interface Palette {
  surface: string;
  ink: string;
  muted: string;
  primary: string;
  primaryFg: string;
  accent: string;
  soft: string;
  line?: string;
}

export interface Typography {
  headingFamily: string;
  bodyFamily: string;
  googleFontsHref?: string;
  scaleRatio: 1.2 | 1.25 | 1.333 | 1.414 | 1.5;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  body: string;
  icon?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  body: string;
}

export interface Favicon {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
}

export interface SocialLinks {
  instagram?: string | null;
  facebook?: string | null;
  linkedin?: string | null;
  twitter?: string | null;
  youtube?: string | null;
  tiktok?: string | null;
}

export interface Contact {
  whatsappHref?: string;
  whatsappLabel?: string;
  email?: string;
  phone?: string;
  address?: string;
  hours?: string;
  mapsUrl?: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface Site {
  lang: "en" | "pt-BR" | string;
  domain: string;
  businessName: string;
  tagline: string;
  metaDescription?: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
  hero: {
    eyebrow?: string;
    headline: string;
    sub: string;
    imageUrl?: string;
    backgroundUrl?: string;
    badges?: string[];
  };
  navLinks: NavLink[];
  features: {
    eyebrow?: string;
    title?: string;
    intro?: string;
    items: FeatureItem[];
  };
  about: {
    eyebrow?: string;
    title?: string;
    paragraphs: string[];
    imageUrl?: string;
    stats?: StatItem[];
    timeline?: TimelineItem[];
  };
  ctaSection: {
    eyebrow?: string;
    headline: string;
    sub?: string;
  };
  contact: Contact;
  social: SocialLinks;
  logo?: { src?: string; alt: string };
  favicons: Favicon[];
  variants: Variants;
  palette: Palette;
  typography: Typography;
  density: Density;
  copy: {
    learnMore: string;
    contactUs: string;
    sectionFeatures: string;
    sectionAbout: string;
    sectionContact: string;
  };
}
