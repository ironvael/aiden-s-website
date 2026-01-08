import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />

        {/* soft gradients */}
        <motion.div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(124,92,255,1), transparent 55%)",
          }}
          animate={reduce ? undefined : { x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -bottom-28 -right-28 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(0,210,255,1), transparent 58%)",
          }}
          animate={reduce ? undefined : { x: [0, -16, 0], y: [0, 12, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(closest-side at 50% 40%, rgba(0,0,0,0.95), transparent 85%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground bg-background/60 backdrop-blur"
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
            >
              ⚡ Systems thinking, in public
            </motion.div>

            <motion.h1
              className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.05 }}
            >
              Building{" "}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                resilient ventures
              </span>{" "}
              with disciplined ops.
            </motion.h1>

            <motion.p
              className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Former Navy Rescue Swimmer turned entrepreneur. Lean Six Sigma mindset.
              Building Ironvael + Operations University.
            </motion.p>

            <motion.div
              className="mt-7 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <Button asChild>
                <a href="#projects">See projects</a>
              </Button>

              <Button variant="outline" asChild>
                <a href="#thoughts">Read thoughts</a>
              </Button>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <span className="rounded-lg border px-3 py-2 bg-background/50 backdrop-blur">
                A11y: respects reduced motion
              </span>
              <span className="rounded-lg border px-3 py-2 bg-background/50 backdrop-blur">
                Clean + fast + responsive
              </span>
              <span className="rounded-lg border px-3 py-2 bg-background/50 backdrop-blur">
                Vite + React + shadcn
              </span>
            </motion.div>
          </div>

          {/* Right “preview card” */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 18, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <motion.div
              className="rounded-2xl border bg-background/60 p-5 shadow-xl backdrop-blur"
              animate={
                reduce
                  ? undefined
                  : { y: [0, -10, 0], rotate: [0, 1.2, 0] }
              }
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted" />
                </div>
                <span className="text-xs text-muted-foreground rounded-full border px-2 py-1">
                  Live preview
                </span>
              </div>

              <div className="mt-4">
                <div className="text-sm font-semibold">Motion ≠ noise</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Subtle animations guide attention. Overdone ones summon rage.
                </p>

                <div className="mt-4">
                  <div className="text-xs text-muted-foreground">Delight</div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted/40">
                    <motion.div
                      className="h-full bg-gradient-to-r from-violet-500 to-cyan-400"
                      initial={{ width: "0%" }}
                      animate={{ width: "78%" }}
                      transition={{ duration: 1.1, delay: 0.45 }}
                    />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Framer Motion", "Responsive", "Theme-aware", "Fast"].map((t, i) => (
                    <motion.span
                      key={t}
                      className="rounded-full border px-2 py-1 text-xs text-muted-foreground"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
