import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Code2,
  Gauge,
  Layout,
  PenTool,
  Server,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

import aiImg from "@/assets/services/ai.jpg";
import brandingImg from "@/assets/services/branding.jpg";
import ecommerceImg from "@/assets/services/ecommerce.jpg";
import hostingImg from "@/assets/services/hosting.jpg";
import mobileImg from "@/assets/services/mobile.jpg";
import seoImg from "@/assets/services/seo.jpg";
import webAppsImg from "@/assets/services/web-apps.jpg";
import webDesignImg from "@/assets/services/web-design.jpg";

export type ServiceId =
  | "webDesign"
  | "webApps"
  | "ecommerce"
  | "mobile"
  | "branding"
  | "ai"
  | "seo"
  | "hosting";

export type ServiceMeta = {
  id: ServiceId;
  icon: LucideIcon;
  image: string;
};

export const servicesMeta: ServiceMeta[] = [
  { id: "webDesign", icon: Layout, image: webDesignImg },
  { id: "webApps", icon: Code2, image: webAppsImg },
  { id: "ecommerce", icon: ShoppingCart, image: ecommerceImg },
  { id: "mobile", icon: Smartphone, image: mobileImg },
  { id: "branding", icon: PenTool, image: brandingImg },
  { id: "ai", icon: Bot, image: aiImg },
  { id: "seo", icon: Gauge, image: seoImg },
  { id: "hosting", icon: Server, image: hostingImg },
];
