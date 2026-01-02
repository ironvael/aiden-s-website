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

Buy one for about $10–$15 per year from **:contentReference[oaicite:0]{index=0}**. It’s inexpensive, reliable, and gets out of your way.

Your domain becomes the foundation for email, your website, and your credibility.

## Step 2: Set Up Professional Email

Before building anything else, set up email.

Use **:contentReference[oaicite:1]{index=1} Mail** for roughly $4 per user per month. You get professional email on your custom domain without paying enterprise prices.

This single step makes your business feel real.

## Step 3: Open a Business Bank Account

Separate business and personal finances immediately.

**:contentReference[oaicite:2]{index=2}** is ideal for bootstrapped founders:
- No monthly fees
- Clean, modern interface
- Virtual and physical cards
- Easy accounting integrations

This becomes the financial backbone of your operation.

## Step 4: Website Hosting (Without Servers)

You do not need a $50 AWS server to launch a website.

Use **:contentReference[oaicite:3]{index=3}**. It’s free to start, globally fast, and removes the entire burden of server management.

You get automatic deployments, SSL by default, and scaling without thinking about it.

This is exactly what early-stage businesses need.

## Step 5: Authentication and Database (Without Overengineering)

For user authentication and a simple database, use **:contentReference[oaicite:4]{index=4}**.

Firebase handles:
- User authentication
- Hosted databases
- Security rules
- Automatic scaling

All without paying $25/month for storage buckets and databases you don’t yet need.

The Vercel + Firebase combo is more than enough for most early products.

## Step 6: Email Newsletters (Free and Clean)

For newsletters and transactional emails, use **:contentReference[oaicite:5]{index=5}**.

It’s developer-friendly, generous on the free tier, and avoids the bloat of traditional email marketing platforms. Perfect for early audiences, product updates, and simple newsletters.

You don’t need complex automations on day one. You need deliverability.

## Step 7: CRM (Yes, You Already Have One)

Early on, a CRM doesn’t need to be fancy — it needs to exist.

Use **:contentReference[oaicite:6]{index=6}**’s free tier if you want structured pipelines and contact tracking. Or use Excel or Google Sheets if your volume is low.

Both are valid. Both are free.

The important thing is tracking relationships, not the tool itself.

## Step 8: Invoicing and Accounting

You need to get paid and understand where your money is going.

Use **:contentReference[oaicite:7]{index=7}** for invoicing and basic accounting. It’s free, straightforward, and more than enough until revenue and complexity increase.

Clarity beats sophistication at this stage.

## Step 9: Internal Management and Planning

Use **:contentReference[oaicite:8]{index=8}** as your internal operating system.

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
  {
    id: "3",
    slug: "creativity-vs-productivity",
    title: "Creativity vs. Productivity",
    excerpt: "Why optimizing for output might be killing your best ideas.",
    content: `We live in the age of productivity porn. Every app, every system, every guru promises to help you do more. Output is the metric. Efficiency is the goal.

But here's what I've learned: creativity and productivity are often at odds. The habits that make you productive might be the same habits that make your work forgettable.

## The Efficiency Trap

Productivity is about optimization—finding the fastest path from A to B. But creative work doesn't work that way. Creative work is about exploration, dead ends, and unexpected discoveries.

When you optimize for efficiency, you cut out the wandering. You eliminate the detours. But those detours are often where the interesting ideas live.

## The Value of Slack

In systems thinking, "slack" refers to unused capacity. It's inefficient by design. But slack is what allows systems to respond to unexpected challenges.

Creative work needs slack too. You need time that's not scheduled, space that's not filled, mental bandwidth that's not allocated. That's where new ideas breathe.

## Rethinking Metrics

What if we measured differently? Not by tasks completed or hours worked, but by ideas explored? Not by output quantity, but by output quality?

The best work I've ever done came from periods of apparent unproductivity. Days spent reading, walking, thinking—with nothing tangible to show for it. Until suddenly, there was.

## Finding Balance

I'm not advocating for abandoning productivity entirely. There's a time for execution, for shipping, for getting things done. But there's also a time for meandering, for questioning, for being genuinely uncertain.

The trick is knowing which mode you're in, and giving yourself permission to fully inhabit it.`,
    date: "Oct 2025",
    readTime: "5 min read",
    category: "Ideas",
    featured: false,
  },
  {
    id: "4",
    slug: "lessons-from-failed-launches",
    title: "Lessons from Failed Launches",
    excerpt: "Three projects that flopped and what they taught me.",
    content: `Everyone talks about their successes. The wins. The growth. The metrics that went up and to the right.

I want to talk about the flops.

Over the past five years, I've launched a lot of projects. Some worked. Many didn't. Here are three failures that taught me more than any success ever could.

## Failure #1: The Perfect Product No One Needed

I spent six months building an app that solved a problem I had. The mistake? Assuming others had the same problem.

I built in isolation. I didn't talk to potential users. I didn't validate the need. I just built what I thought would be useful and assumed the market would agree.

It didn't.

**Lesson**: Your problems aren't universal. Validate before you build.

## Failure #2: The Copycat That Couldn't Compete

I saw a successful product in a space I understood. I thought I could build something better. So I did—or tried to.

The problem was, I was playing someone else's game. I was competing on their terms, in their territory, against their advantages. I had no unique angle, no differentiated value proposition.

I built a slightly different version of something that already existed. Nobody cared.

**Lesson**: Competition is fine, but you need a genuine reason to exist.

## Failure #3: The Right Product at the Wrong Time

This one hurts the most because the product was good. Users loved it. The concept was sound.

But my timing was off. I launched just as the market shifted. What seemed like a growing opportunity was actually a shrinking one. By the time I realized, I'd already invested months.

**Lesson**: External factors matter. Pay attention to the landscape, not just the product.

## The Meta-Lesson

Failure isn't the opposite of success—it's part of the path to it. Every flop taught me something I couldn't have learned any other way. The tuition was painful, but the education was invaluable.`,
    date: "Sep 2025",
    readTime: "7 min read",
    category: "Lessons",
    featured: false,
  },
  {
    id: "5",
    slug: "the-myth-of-overnight-success",
    title: "The Myth of Overnight Success",
    excerpt: "What ten years of 'sudden' success actually looks like.",
    content: `"How did you grow so fast?"

I get this question a lot. People see the current state and assume it happened quickly. They see the highlight reel and miss the years of invisible work.

Let me tell you about the decade that preceded this "overnight" success.

## Year 1-3: The Wilderness Years

I started with no audience, no skills, no idea what I was doing. I made things that were objectively bad. I shared them anyway. The silence was deafening.

These years felt like shouting into a void. Looking back, they were essential. I was developing taste, building skills, figuring out what I cared about.

## Year 4-6: Small Wins

Things started to work. Not in dramatic ways—in tiny, almost imperceptible ways. A project got noticed. Someone shared my work. A few people started paying attention.

These small wins compounded. Each one opened a door to another opportunity. But it was slow. Frustratingly slow.

## Year 7-9: The Tipping Point Approaches

Momentum built. The skills I'd developed, the relationships I'd formed, the reputation I'd earned—they started working together. Growth accelerated, but it still felt incremental from the inside.

What looked like sudden growth was actually the delayed result of years of compounding effort.

## Year 10: "Overnight" Success

Now things seem to happen quickly. But they only seem that way because of everything that came before. The foundation was already built. The audience was already primed. The skills were already honed.

## The Uncomfortable Truth

There are no shortcuts. The people you admire for their "sudden" success have their own version of this story. Years of invisible work. Failures nobody saw. Persistence when it seemed pointless.

If you're in the wilderness years, keep going. The compound effect is real. It just takes longer than anyone wants to admit.`,
    date: "Aug 2025",
    readTime: "6 min read",
    category: "Reflection",
    featured: false,
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
