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
    slug: "venture-one",
    title: "Venture One",
    description: "A creative studio focused on crafting bold digital experiences that challenge the status quo.",
    longDescription: "Venture One started as a simple idea: what if we built a studio that prioritized creativity over convention? Today, it's a full-service creative studio helping brands tell their stories in ways that actually resonate.",
    category: "Startup",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1634017839464-5c339bbe3c3c?w=800&q=80",
      "https://images.unsplash.com/photo-1618556450994-a163b4e48aba?w=800&q=80",
      "https://images.unsplash.com/photo-1633158829875-e5316a358c6f?w=800&q=80",
    ],
    featured: true,
    challenge: "The creative industry was saturated with agencies that played it safe. Brands were getting cookie-cutter solutions that failed to differentiate them in crowded markets.",
    solution: "We built a studio from the ground up with experimentation at its core. Every project starts with a blank slate and ends with something we've never made before.",
    result: "In our first year, we've partnered with 12 brands, delivered 30+ projects, and built a team of 8 creatives who share our vision for bold, unconventional work.",
  },
  {
    id: "2",
    slug: "creators-toolkit",
    title: "The Creator's Toolkit",
    description: "Resources and tools designed for entrepreneurs who refuse to settle for ordinary.",
    longDescription: "A comprehensive suite of templates, guides, and tools built for creators who want to launch faster and build smarter. No fluff, just practical resources that work.",
    category: "Product",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    ],
    featured: true,
    challenge: "New creators spend too much time reinventing the wheel. They need proven frameworks, not more generic advice.",
    solution: "We packaged years of entrepreneurial experience into actionable templates and tools that creators can implement immediately.",
    result: "Over 2,000 creators have used the toolkit to launch their projects faster. Average time-to-launch decreased by 60%.",
  },
  {
    id: "3",
    slug: "community-hub",
    title: "Community Hub",
    description: "A platform connecting ambitious creators across the globe.",
    longDescription: "Community Hub is where creators come to find their people. It's a curated space for collaboration, feedback, and genuine connection in an increasingly noisy digital world.",
    category: "Platform",
    year: "2023",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    ],
    featured: false,
    challenge: "Online communities often devolve into noise. Creators needed a space focused on quality over quantity.",
    solution: "We built an invite-only community with intentional design choices that encourage meaningful interaction over engagement metrics.",
    result: "500+ active members with a 78% monthly engagement rate. Members report finding collaborators and launching joint projects regularly.",
  },
  {
    id: "4",
    slug: "side-project-x",
    title: "Side Project X",
    description: "Experimental ideas that evolved into something unexpected.",
    longDescription: "What started as a weekend experiment became a lesson in following curiosity. Side Project X is proof that sometimes the best ideas come from play, not planning.",
    category: "Experiment",
    year: "2022",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80",
    ],
    featured: false,
    challenge: "Sometimes you don't know what you're building until you build it. This project was born from pure experimentation.",
    solution: "We gave ourselves permission to explore without a clear destination. The constraints were simple: build something interesting in 48 hours.",
    result: "The experiment generated unexpected interest and became a case study in creative freedom. It reminded us why we started building in the first place.",
  },
  {
    id: "5",
    slug: "brand-studio",
    title: "Brand Studio",
    description: "Visual identity work for startups ready to make their mark.",
    longDescription: "Brand Studio emerged from a belief that early-stage startups deserve world-class branding. We partner with founders to create identities that grow with their vision.",
    category: "Agency",
    year: "2022",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    ],
    featured: false,
    challenge: "Startups often compromise on branding due to budget constraints, settling for generic identities that fail to capture their unique value.",
    solution: "We created a streamlined branding process specifically for startups — high quality, fast turnaround, founder-friendly pricing.",
    result: "25+ startups branded. Several have gone on to raise significant funding, with investors noting their professional presentation as a differentiator.",
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
