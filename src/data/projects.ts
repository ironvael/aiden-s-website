export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  year: string;
  image: string;
  gallery?: string[];
  featured: boolean;
  link?: string;
  challenge?: string;
  solution?: string;
  result?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "ironvael",
    title: "Ironvael",
    description:
      "Ironvael builds and operates high-leverage businesses with a focus on strength, precision, and long-term advantage.",
    longDescription:
      "Ironvael is a systems-driven holding company that builds, operates, and invests in resilient businesses. We focus on disciplined execution, long-term value creation, and infrastructure that compounds over time. Our work prioritizes strength, clarity, and results over noise.",
    category: "Investment Company",
    year: "2025",
    image: "/ironvael.png",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
    ],
    featured: true,
    link: "https://ironvael.com",
    challenge:
      "Most early-stage businesses fail not from bad ideas, but from weak systems, scattered execution, and short-term thinking. Founders are forced to juggle strategy, operations, and infrastructure without a cohesive framework.",
    solution:
      "Ironvael applies disciplined, systems-first thinking to how businesses are built and operated. We design durable structures, streamline execution, and align strategy with long-term objectives from day one.",
    result:
      "Companies that operate with clarity, resilience, and compounding advantage. Fewer firefights, stronger foundations, and progress that holds under pressure.",
  },
  {
    id: "2",
    slug: "self-rescue-co",
    title: "Self Rescue Co.",
    description:
      "Self Rescue Co. is an apparel brand built around self-reliance, preparedness, and calm under pressure. The designs reflect a mindset: take responsibility and be ready.",
    longDescription:
      "Self Rescue Co. is an apparel brand inspired by preparedness, resilience, and personal responsibility. Our designs draw from rescue culture, hard lessons, and real-world experience—made for people who value capability over comfort. Self Rescue isn’t about fear; it’s about readiness and owning the outcome.",
    category: "E-commerce",
    year: "2025",
    image: "/856937-O-DRG18-359.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
    ],
    featured: true,
    link: "https://selfrescue.shop",
    challenge:
      "Preparedness and self-reliance are often reduced to fear-based marketing or performative “tacticool” aesthetics. The message gets lost, and the mindset gets diluted.",
    solution:
      "Self Rescue Co. uses apparel as a signal, not a costume. Each piece is designed to reflect calm under pressure, personal responsibility, and the belief that your outcome is ultimately yours to own.",
    result:
      "Clothing that represents a way of thinking, not a trend. A brand worn by people who value readiness, resilience, and quiet competence—on ordinary days and difficult ones alike.",
  },
  {
    id: "3",
    slug: "kaploosh-energy",
    title: "Kaploosh Energy",
    description:
      "Kaploosh Energy is a lifestyle-driven energy drink brand built around bold flavor, clean energy, and expressive design. It’s made for creators, night-owls, and people who move fast.",
    longDescription:
      "Kaploosh Energy is a culture-first energy brand blending clean energy, bold flavors, and high-impact visuals. Built for creators, gamers, and late-night builders, it’s designed to fuel focus and momentum without the corporate feel. Kaploosh turns energy into identity, not just stimulation.",
    category: "Consumer Goods",
    year: "2025",
    image: "/kaploosh-energy.png",
    gallery: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    ],
    featured: false,
    link: "https://kaploosh.com",
    challenge:
      "The energy drink market is crowded with copy-paste formulas, artificial hype, and brands that burn bright and disappear. Most products focus on stimulation, not experience or identity.",
    solution:
      "Kaploosh Energy is built as a lifestyle-first energy brand that blends flavor, performance, and culture. We prioritize clean energy, strong branding, and community-driven momentum over empty buzz.",
    result:
      "An energy drink that feels fun, expressive, and repeatable—fuel that people actually want to reach for. Kaploosh isn’t just consumed; it’s worn, shared, and built into a lifestyle.",
  },
  {
    id: "4",
    slug: "use-origin",
    title: "Use Origin",
    description: "Use Origin is a simple, affordable link-in-bio tool for creators who want something that just works.",
    longDescription:
      "Use Origin is a modern link-in-bio tool designed around simplicity and ownership. We remove bloat, lower the barrier to entry, and focus on speed, customization, and reliability. At a fair, accessible price, Use Origin lets users publish once and move on to what actually matters—building their work and audience.",
    category: "SaaS",
    year: "2025",
    image: "/use-origin-logo.png",
    gallery: [
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80",
      "https://images.unsplash.com/photo-1569163139599-0f4517e36f31?w=800&q=80",
    ],
    featured: false,
    challenge:
      "Link-in-bio tools are bloated, overpriced, and packed with features most people never use. Creators and small brands are forced to overpay for complexity when they just need something fast, reliable, and clean.",
    solution:
      "Use Origin strips link-in-bio software down to what actually matters: speed, customization, and ownership. We offer a simple, modern platform at a price that removes friction instead of creating it.",
    result:
      "A lightweight link-in-bio tool that anyone can use without thinking about it. Less setup, less cost, and a page that just works—so users can focus on building, not configuring.",
  },
  {
    id: "5",
    slug: "artisan-collective",
    title: "Artisan Collective",
    description: "E-commerce marketplace connecting independent craftspeople with conscious consumers globally.",
    longDescription:
      "Artisan Collective is a curated marketplace celebrating handmade goods and the stories behind them. We partner directly with artisans, ensuring fair wages and sustainable practices.",
    category: "E-commerce",
    year: "2022",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    ],
    featured: false,
    link: "https://artisancollective.shop",
    challenge:
      "Independent artisans struggle to reach global audiences while maintaining fair pricing. Mass-market platforms prioritize volume over craftsmanship.",
    solution:
      "Built a marketplace with storytelling at its core. Each product page features the artisan's story, production process, and impact metrics. Implemented fair-trade pricing models.",
    result:
      "8,000+ artisans from 45 countries. $15M in sales with 70% going directly to creators. Average order value 3x higher than comparable platforms.",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};
