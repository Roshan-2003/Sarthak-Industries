import {
  ShieldCheck,
  Factory,
  Truck,
  Award,
  Users,
} from "lucide-react";

export const navLinks = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "product",
    label: "Product",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "quality",
    label: "Quality",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export const products = [
  {
    id: 1,
    name: "Acidic Sylric",
    category: "Industrial Chemical",
    description:
      "A professionally manufactured industrial chemical designed for reliable performance in industrial applications.",
    image: "/images/acidPhoto.webp",
  },
];

export const benefits = [
  {
    icon: ShieldCheck,
    title: "Consistent Quality",
    description:
      "Focused manufacturing and quality-control practices for consistent product output.",
  },
  {
    icon: Factory,
    title: "Reliable Manufacturing",
    description:
      "Manufacturing-focused operations designed to support regular industrial requirements.",
  },
  {
    icon: Award,
    title: "Quality Focused",
    description:
      "Every production stage is approached with quality, consistency and reliability in mind.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description:
      "Flexible packaging and supply support for industrial and bulk requirements.",
  },
];

export const applications = [
  "Industrial Manufacturing",
  "Chemical Processing",
  "Surface Treatment",
  "Textile Applications",
  "Industrial Processing",
  "Specialized Applications",
];

export const trustItems = [
  {
    title: "Quality",
    icon: ShieldCheck,
  },
  {
    title: "Manufacturing",
    icon: Factory,
  },
  {
    title: "Industrial Supply",
    icon: Truck,
  },
  {
    title: "Customer Support",
    icon: Users,
  },
];

export const qualitySteps = [
  ["01", "Raw Material", "Material inspection"],
  ["02", "Processing", "Controlled production"],
  ["03", "Testing", "Quality verification"],
  ["04", "Packaging", "Secure packaging"],
  ["05", "Dispatch", "Reliable supply"],
];