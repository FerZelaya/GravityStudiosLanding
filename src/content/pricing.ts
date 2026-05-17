import type { LucideIcon } from "lucide-react";
import { BarChart3, Target, ThumbsUp } from "lucide-react";

export type PricingTierId = "startup" | "professional" | "custom";

export type PricingTierMeta = {
  id: PricingTierId;
  price: string;
  icon: LucideIcon;
  maintenance: string;
};

export const pricingTierMeta: PricingTierMeta[] = [
  { id: "startup", price: "$299", icon: Target, maintenance: "$25/month" },
  {
    id: "professional",
    price: "$699",
    icon: ThumbsUp,
    maintenance: "$50/month",
  },
  {
    id: "custom",
    price: "$1,500+",
    icon: BarChart3,
    maintenance: "$100/month",
  },
];
