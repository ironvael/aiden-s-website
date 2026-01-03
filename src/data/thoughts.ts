export interface Thought {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
}

export const thoughts: Thought[] = [
{
  id: "1",
  slug: "why-i-started-ironvael",
  title: "Why I Started Ironvael",
  excerpt: "Ironvael wasn’t built to chase hype or scale fast. It was built to create durable systems that survive contact with reality.",
  content: `Ironvael didn’t start as a company idea. It started as a response to a pattern I kept seeing across different environments: capable people trapped inside fragile systems.

I watched organizations that looked impressive on the surface fall apart under even modest pressure. Not because the people were bad, but because the systems they relied on were brittle, opaque, and allergic to feedback. Titles multiplied. Processes calcified. Responsibility blurred.

At some point, it became clear that my frustration wasn’t with individuals. It was with systems that made failure inevitable and then blamed the humans caught inside them.

## The Problem With Fragile Systems

Most organizations work only under ideal conditions. They rely on heroics, institutional memory, or unspoken rules to function. The moment stress appears—growth, turnover, uncertainty—they begin to crack.

Fragile systems reward appearances over outcomes. They confuse motion with progress and complexity with competence. Over time, they become impossible to reason about, let alone improve.

Ironvael exists as a rejection of that model.

## Why Build a Holding Structure

Ironvael is not a startup studio, a brand agency, or a growth experiment. It’s a holding structure designed to support projects that prioritize clarity, durability, and leverage.

Each project under Ironvael is treated as a system first and a product second. If it can’t be explained simply, maintained sanely, or operated without constant intervention, it doesn’t belong here.

The goal isn’t speed. It’s survivability.

## What the Name Means

Ironvael sits at the boundary between reality and abstraction.

Iron represents constraint, weight, and the real-world forces every system eventually encounters. The veil represents interfaces, models, and the abstractions we use to make complexity manageable.

Most failures happen when abstraction drifts too far from reality. Ironvael is an attempt to keep those layers aligned.

## What I’m Optimizing For

Ironvael isn’t optimized for virality, valuation, or rapid expansion. It’s optimized for systems that don’t collapse when attention moves elsewhere.

Durability matters more than momentum.
Clarity matters more than cleverness.
Design matters more than decoration.

If Ironvael succeeds, it won’t be because it moved fast. It will be because it didn’t break.

Ironvael is still small. That’s intentional. Systems should earn their complexity.`,
  date: "Dec 2025",
  readTime: "5 min read",
  category: "Philosophy",
  featured: true,
},
{
  id: "2",
  slug: "best-softwares-for-bootstrapping-your-business-in-2026",
  title: "Best Software for Bootstrapping Your Business in 2026",
  excerpt: "A free-first, no-nonsense software stack to launch a real business without wasting money or time.",
  content: `Bootstrapping isn’t about suffering. It’s about restraint.

Most founders don’t fail because they lack tools — they fail because they adopt too many, too early. Expensive servers, bloated SaaS stacks, and “enterprise-grade” systems before there’s even revenue to justify them.

Here’s the simplest, most practical software stack I recommend if your goal is to launch fast, look legitimate, and stay lean. Almost all of it is free.

## Step 1: Buy a Domain

Every business needs a domain. This is your identity layer.

Buy one for about $10–$15 per year from [Namecheap](https://www.namecheap.com). It’s inexpensive, reliable, and gets out of your way.

Your domain becomes the foundation for email, your website, and your credibility.

## Step 2: Set Up Professional Email

Before building anything else, set up email.

Use [Zoho Workspaces](https://www.zoho.com/workplace/) for roughly $4 per user per month. You get professional email on your custom domain without paying enterprise prices.

This single step makes your business feel real.

## Step 3: Open a Business Bank Account

Separate business and personal finances immediately.

[Mercury](https://mercury.com) is ideal for bootstrapped founders:
- No monthly fees
- Clean, modern interface
- Virtual and physical cards
- Easy accounting integrations

This becomes the financial backbone of your operation.

## Step 4: Website Hosting (Without Servers)

You do not need a $50 AWS server to launch a website.

Use [Vercel](https://vercel.com). It’s free to start, globally fast, and removes the entire burden of server management.

You get automatic deployments, SSL by default, and scaling without thinking about it.

This is exactly what early-stage businesses need.

## Step 5: Authentication and Database (Without Overengineering)

For user authentication and a simple database, use [Firebase](https://firebase.google.com).

Firebase handles:
- User authentication
- Hosted databases
- Security rules
- Automatic scaling

All without paying $25/month for storage buckets and databases you don’t yet need.

The Vercel + Firebase combo is more than enough for most early products.

## Step 6: Email Newsletters (Free and Clean)

For newsletters and transactional emails, use [Resend](https://resend.com).

It’s developer-friendly, generous on the free tier, and avoids the bloat of traditional email marketing platforms. Perfect for early audiences, product updates, and simple newsletters.

You don’t need complex automations on day one. You need deliverability.

## Step 7: CRM (Yes, You Already Have One)

Early on, a CRM doesn’t need to be fancy — it needs to exist.

Use [HubSpot](https://www.hubspot.com/products/crm)’s free tier if you want structured pipelines and contact tracking. Or use Excel or Google Sheets if your volume is low.

Both are valid. Both are free.

The important thing is tracking relationships, not the tool itself.

## Step 8: Invoicing and Accounting

You need to get paid and understand where your money is going.

Use [Wave](https://www.waveapps.com) for invoicing and basic accounting. It’s free, straightforward, and more than enough until revenue and complexity increase.

Clarity beats sophistication at this stage.

## Step 9: Internal Management and Planning

Use [Notion](https://www.notion.so) as your internal operating system.

One place for:
- Notes
- Tasks
- Planning
- Lightweight documentation

One source of truth beats five half-used tools.

## What You’re Intentionally Not Using

No AWS servers  
No paid databases  
No automation platforms  
No bloated SaaS subscriptions  

Those are upgrades — not starting requirements.

## The Cost Breakdown

This entire stack costs roughly:
- $10–15/year for a domain
- $4/month for email
- $0/month for banking
- $0/month for hosting
- $0/month for auth, database, newsletters, CRM, and accounting

That’s a real, functioning business for essentially free.

## Final Thought

Bootstrapping is about earning complexity, not assuming it.

Start with tools that remove friction, not ones that create it. Let revenue justify upgrades. Until then, keep your stack boring, cheap, and effective.

Most businesses don’t need better software.
They need better judgment.`,
  date: "Jan 2026",
  readTime: "6 min read",
  category: "Systems & Tools",
  featured: true,
},
];

export const getThoughtBySlug = (slug: string): Thought | undefined => {
  return thoughts.find((t) => t.slug === slug);
};

export const getAdjacentThoughts = (currentSlug: string): { prev: Thought | null; next: Thought | null } => {
  const currentIndex = thoughts.findIndex((t) => t.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? thoughts[currentIndex - 1] : null,
    next: currentIndex < thoughts.length - 1 ? thoughts[currentIndex + 1] : null,
  };
};
