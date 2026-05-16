import type { LucideIcon } from "lucide-react";
import { BarChart3, Target, ThumbsUp } from "lucide-react";

export type PricingTierId = "startup" | "professional" | "commercial";

export type PricingTierMeta = {
  id: PricingTierId;
  price: string;
  icon: LucideIcon;
};

export const pricingTierMeta: PricingTierMeta[] = [
  { id: "startup", price: "$199", icon: Target },
  { id: "professional", price: "$399", icon: ThumbsUp },
  { id: "commercial", price: "$500+", icon: BarChart3 },
];
