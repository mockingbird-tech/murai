import NavSimple from "./nav/NavSimple.astro";
import NavCentered from "./nav/NavCentered.astro";
import NavSplit from "./nav/NavSplit.astro";

import HeroSplit from "./hero/HeroSplit.astro";
import HeroFullbleed from "./hero/HeroFullbleed.astro";
import HeroEditorial from "./hero/HeroEditorial.astro";
import HeroBrutalist from "./hero/HeroBrutalist.astro";
import HeroProductmock from "./hero/HeroProductmock.astro";

import FeaturesGrid from "./features/FeaturesGrid.astro";
import FeaturesNumbered from "./features/FeaturesNumbered.astro";
import FeaturesAlternating from "./features/FeaturesAlternating.astro";
import FeaturesBento from "./features/FeaturesBento.astro";

import AboutSplit from "./about/AboutSplit.astro";
import AboutTimeline from "./about/AboutTimeline.astro";
import AboutStats from "./about/AboutStats.astro";

import CTABanner from "./cta/CTABanner.astro";
import CTAQuote from "./cta/CTAQuote.astro";

import ContactSplit from "./contact/ContactSplit.astro";
import ContactCentered from "./contact/ContactCentered.astro";
import ContactCards from "./contact/ContactCards.astro";

import FooterMinimal from "./footer/FooterMinimal.astro";
import FooterColumns from "./footer/FooterColumns.astro";

export const navVariants = {
  simple: NavSimple,
  centered: NavCentered,
  split: NavSplit,
};

export const heroVariants = {
  split: HeroSplit,
  fullbleed: HeroFullbleed,
  editorial: HeroEditorial,
  brutalist: HeroBrutalist,
  productmock: HeroProductmock,
};

export const featuresVariants = {
  grid: FeaturesGrid,
  numbered: FeaturesNumbered,
  alternating: FeaturesAlternating,
  bento: FeaturesBento,
};

export const aboutVariants = {
  split: AboutSplit,
  timeline: AboutTimeline,
  stats: AboutStats,
};

export const ctaVariants = {
  banner: CTABanner,
  quote: CTAQuote,
};

export const contactVariants = {
  split: ContactSplit,
  centered: ContactCentered,
  cards: ContactCards,
};

export const footerVariants = {
  minimal: FooterMinimal,
  columns: FooterColumns,
};
