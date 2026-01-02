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
  excerpt: "The tools I rely on to move fast, stay lean, and avoid burning time and money early.",
  content: `Bootstrapping a business forces clarity. You don’t have excess capital to hide inefficiencies, and you don’t get to solve problems by throwing money at them. Every tool you choose either compounds your momentum or quietly taxes it.

Over time, I’ve learned that the “best” software isn’t the most powerful or the most popular. It’s the software that reduces cognitive load, integrates cleanly with the rest of your stack, and keeps you shipping instead of configuring.

This isn’t a list of everything you *could* use. It’s a list of what actually holds up when you’re building lean.

## The Bootstrapping Rule of Software

Before talking tools, there’s a rule worth stating plainly:

If a tool costs more time to manage than the problem it solves, it’s the wrong tool.

Early-stage founders tend to over-stack. Too many dashboards. Too many subscriptions. Too many systems that promise leverage but deliver friction. Bootstrapping demands the opposite approach: fewer tools, chosen deliberately.

## Knowledge, Docs, and Internal Systems

Notion has become the default operating system for many small teams, and for good reason. It replaces documents, internal wikis, lightweight databases, and project notes in a single place. When bootstrapping, the ability to consolidate information matters more than feature depth.

The value isn’t that Notion does everything perfectly — it’s that it does *enough* of many things without forcing context switching.

## Project and Task Management

For most bootstrapped businesses, simple visual systems outperform complex planning software.

Kanban-style tools like Trello keep work visible without introducing process overhead. When work becomes more interdependent, tools like Asana or ClickUp can help — but only if you’re disciplined about keeping them lightweight.

A task manager should answer one question quickly: “What should I be working on right now?”

If it can’t do that, it’s noise.

## Websites and Product Delivery

Your website does not need a massive custom stack on day one.

Tools like Webflow allow you to ship high-quality marketing sites quickly without deep engineering investment. For more technical products, platforms like Vercel and Netlify make deployment and iteration almost frictionless.

The goal is speed with stability — not architectural perfection.

## Payments and Revenue Collection

Revenue systems should be boring. Predictable. Reliable.

Stripe remains the gold standard for payment processing, especially for subscriptions and digital products. For solo founders or early-stage businesses, tools like Gumroad can handle payments and delivery with almost no setup.

The best payment system is the one you never think about after it’s set up.

## Accounting and Financial Visibility

Ignoring finances doesn’t make them simpler — it just makes surprises more expensive.

Wave is an excellent starting point for invoicing and basic accounting when budgets are tight. As complexity grows, migrating to QuickBooks or a similar platform becomes inevitable.

What matters early is not perfection, but visibility. You should always know where money is coming from and where it’s going.

## Communication and Coordination

Slack has become synonymous with modern team communication, but it’s easy to let it turn into a distraction engine. Used intentionally, it replaces messy email chains and keeps decisions documented.

For meetings, simple and reliable video tools like Google Meet or Zoom are more than sufficient. If a meeting requires complex tooling, it’s usually a sign the problem isn’t well-defined yet.

## Automation Without Overengineering

Automation is powerful — but premature automation is a trap.

Tools like Zapier and Make are valuable when a process is stable and repetitive. Automating chaos just produces faster chaos.

Document the process first. Automate second.

## Choosing Tools Like a Systems Builder

Every tool you adopt becomes part of your business’s nervous system. It shapes how decisions are made, how work flows, and how stress propagates through the organization.

When evaluating software, I look for three things:
clarity, integration, and exit cost.

You should understand how it works, it should play well with other tools, and you should be able to leave without pain if needed.

## Final Thought

Bootstrapping isn’t about doing more with less. It’s about doing *the right things* with less.

The best software doesn’t make you feel productive — it quietly removes friction so real work can happen. Choose tools that respect your time, reinforce good systems, and stay out of the way.

Everything else is decoration.`,
  date: "Jan 2026",
  readTime: "7 min read",
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
