import type { LucideIcon } from "lucide-react";
import { BarChart3, Target, ThumbsUp } from "lucide-react";

export type PricingTier = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  icon: LucideIcon;
  ctaLabel: string;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "startup",
    title: "Startup website package",
    subtitle: "Ideal for static marketing sites",
    price: "$199",
    icon: Target,
    features: [
      "5 stock images",
      "1 internal pages",
      "Managed hosting",
      "SSL security",
    ],
    ctaLabel: "Get in touch",
  },
  {
    id: "professional",
    title: "Professional website package",
    subtitle: "Built to grow with your business",
    price: "$299",
    icon: ThumbsUp,
    features: [
      "7 stock images",
      "5 internal pages",
      "1 image slider",
      "Managed hosting",
      "Content management (CMS)",
      "SSL security",
      "SEO optimization",
    ],
    ctaLabel: "Get in touch",
  },
  {
    id: "commercial",
    title: "Custom website package",
    subtitle:
      "Ideal for e-commerce—stores, hotels, bookings, and appointment payments",
    price: "$500+",
    icon: BarChart3,
    features: [
      "Have a specific website or web app in mind? Get in touch with us and we’ll discuss your goals, features, and the best solution for your business. Built around your brand, your needs, and your vision.",
    ],
    ctaLabel: "Get in touch",
  },
];

export const pricingSection = {
  eyebrow: "",
  title: "Website packages",
  description: "Clear starting points you can ship with and scale.",
};
