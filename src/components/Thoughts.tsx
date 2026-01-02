import { ArrowRight } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Why I Build in Public",
    excerpt: "Sharing the journey is just as important as the destination. Here's what I've learned...",
    date: "Dec 2025",
    readTime: "4 min",
  },
  {
    id: 2,
    title: "The Art of Starting Over",
    excerpt: "Every failure is a setup for something greater. Let me tell you about my biggest pivot...",
    date: "Nov 2025",
    readTime: "6 min",
  },
  {
    id: 3,
    title: "Creativity vs. Productivity",
    excerpt: "Finding the balance between doing more and doing what matters...",
    date: "Oct 2025",
    readTime: "3 min",
  },
];

const Thoughts = () => {
  return (
    <section id="thoughts" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm text-muted-foreground font-body">03</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Thoughts</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Posts list */}
        <div className="space-y-0 divide-y divide-border">
          {posts.map((post, index) => (
            <article 
              key={post.id}
              className="group py-8 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Meta */}
                <div className="flex items-center gap-4 md:w-40 shrink-0">
                  <span className="text-sm text-muted-foreground font-body">
                    {post.date}
                  </span>
                  <span className="text-xs text-muted-foreground/60 font-body">
                    {post.readTime}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-display font-bold mb-1 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {post.excerpt}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-2 transition-all hidden md:block" />
              </div>
            </article>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-16 overflow-hidden py-4 -mx-6 md:-mx-12 lg:-mx-24">
          <div className="marquee whitespace-nowrap">
            <span className="inline-block text-6xl md:text-8xl font-display font-extrabold text-border/50 mx-8">
              IDEAS • STORIES • LESSONS • IDEAS • STORIES • LESSONS • IDEAS • STORIES • LESSONS •
            </span>
            <span className="inline-block text-6xl md:text-8xl font-display font-extrabold text-border/50 mx-8">
              IDEAS • STORIES • LESSONS • IDEAS • STORIES • LESSONS • IDEAS • STORIES • LESSONS •
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thoughts;
