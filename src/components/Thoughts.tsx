const posts = [
  {
    title: "Why I Build in Public",
    date: "Dec 2025",
  },
  {
    title: "The Art of Starting Over",
    date: "Nov 2025",
  },
  {
    title: "Creativity vs. Productivity",
    date: "Oct 2025",
  },
];

const Thoughts = () => {
  return (
    <section id="thoughts" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <p className="text-sm text-muted-foreground tracking-wide uppercase">Thoughts</p>
          </div>
          <div className="md:col-span-8">
            <p className="text-xl md:text-2xl leading-relaxed">
              Ideas, lessons, and stories from the journey.
            </p>
          </div>
        </div>

        <div className="space-y-0 divide-y divide-border">
          {posts.map((post) => (
            <article 
              key={post.title}
              className="group py-6 cursor-pointer flex items-center justify-between gap-8"
            >
              <h3 className="text-base md:text-lg font-display font-medium group-hover:opacity-60 transition-opacity">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground shrink-0">
                {post.date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Thoughts;
