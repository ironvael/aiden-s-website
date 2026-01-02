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
    slug: "aurora-finance",
    title: "Aurora Finance",
    description: "A next-generation fintech platform reimagining personal wealth management for the modern investor.",
    longDescription: "Aurora Finance is a comprehensive wealth management platform that combines AI-driven insights with intuitive design. Built for a new generation of investors who demand transparency, speed, and control over their financial future.",
    category: "Fintech",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
    ],
    featured: true,
    link: "https://aurora.finance",
    challenge: "Traditional wealth management platforms are outdated, complex, and designed for financial professionals rather than everyday investors. Users struggled with opaque fee structures and unintuitive interfaces.",
    solution: "We designed a mobile-first platform with real-time portfolio tracking, AI-powered recommendations, and transparent fee breakdowns. Every interaction was optimized for clarity and speed.",
    result: "Launched to 50,000+ beta users with a 4.8 App Store rating. Assets under management reached $120M in the first quarter. User engagement increased 340% compared to competitor apps.",
  },
  {
    id: "2",
    slug: "nomad-workspace",
    title: "Nomad Workspace",
    description: "The definitive platform for remote workers to discover and book creative workspaces worldwide.",
    longDescription: "Nomad Workspace connects digital nomads and remote professionals with curated coworking spaces, cafés, and private offices across 80+ countries. More than just a booking platform — it's a community.",
    category: "SaaS Platform",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
    ],
    featured: true,
    link: "https://nomadworkspace.co",
    challenge: "Remote workers waste hours researching workspaces in unfamiliar cities. Reviews are scattered, availability is unclear, and there's no way to verify WiFi quality or amenities.",
    solution: "Built a comprehensive platform with verified reviews, real-time availability, WiFi speed tests, and a community rating system. Integrated with calendar apps for seamless booking.",
    result: "12,000+ verified workspaces across 80 countries. 45,000 monthly active users. Featured in Fast Company and TechCrunch as a 'must-have tool for remote work.'",
  },
  {
    id: "3",
    slug: "echo-health",
    title: "Echo Health",
    description: "AI-powered mental wellness companion providing personalized support and insights.",
    longDescription: "Echo Health is a mental wellness platform that combines cognitive behavioral therapy techniques with AI to provide accessible, personalized mental health support. Designed in collaboration with clinical psychologists.",
    category: "HealthTech",
    year: "2023",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    ],
    featured: false,
    link: "https://echo.health",
    challenge: "Mental health support is expensive and inaccessible for many. Traditional apps feel impersonal and lack the nuance needed for effective support.",
    solution: "Developed an AI companion trained on CBT principles, offering 24/7 support through conversational interfaces. Added mood tracking, guided exercises, and crisis intervention pathways.",
    result: "500,000+ conversations facilitated. 78% of users reported improved mental wellbeing after 30 days. Partnered with 15 enterprises for employee wellness programs.",
  },
  {
    id: "4",
    slug: "carbon-zero",
    title: "Carbon Zero",
    description: "Enterprise sustainability platform helping companies track and reduce their carbon footprint.",
    longDescription: "Carbon Zero empowers businesses to measure, analyze, and reduce their environmental impact. From supply chain emissions to office energy use, we make sustainability actionable and measurable.",
    category: "CleanTech",
    year: "2023",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80",
      "https://images.unsplash.com/photo-1569163139599-0f4517e36f31?w=800&q=80",
    ],
    featured: false,
    challenge: "Companies want to reduce emissions but lack visibility into their carbon footprint. Existing solutions are expensive, complex, and designed for sustainability experts.",
    solution: "Created an intuitive dashboard that automatically tracks emissions across operations. Integrated with accounting software, energy providers, and logistics platforms for real-time data.",
    result: "Helped 200+ companies reduce emissions by an average of 23%. Processing $2B+ in supply chain data monthly. Certified B-Corp partner.",
  },
  {
    id: "5",
    slug: "artisan-collective",
    title: "Artisan Collective",
    description: "E-commerce marketplace connecting independent craftspeople with conscious consumers globally.",
    longDescription: "Artisan Collective is a curated marketplace celebrating handmade goods and the stories behind them. We partner directly with artisans, ensuring fair wages and sustainable practices.",
    category: "E-commerce",
    year: "2022",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    ],
    featured: false,
    link: "https://artisancollective.shop",
    challenge: "Independent artisans struggle to reach global audiences while maintaining fair pricing. Mass-market platforms prioritize volume over craftsmanship.",
    solution: "Built a marketplace with storytelling at its core. Each product page features the artisan's story, production process, and impact metrics. Implemented fair-trade pricing models.",
    result: "8,000+ artisans from 45 countries. $15M in sales with 70% going directly to creators. Average order value 3x higher than comparable platforms.",
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
