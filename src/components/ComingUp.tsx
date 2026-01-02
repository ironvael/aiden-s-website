import { Calendar, Target, Zap } from "lucide-react";
import { comingUpItems, type ComingUpItem } from "@/data/comingUp";

const typeConfig = {
  event: {
    icon: Calendar,
    label: "Event",
  },
  focus: {
    icon: Zap,
    label: "Focus",
  },
  goal: {
    icon: Target,
    label: "Goal",
  },
};

const statusColors = {
  "in-progress": "bg-primary/10 text-primary",
  upcoming: "bg-muted text-muted-foreground",
  completed: "bg-green-500/10 text-green-600 dark:text-green-400",
};

const ComingUpCard = ({ item, index }: { item: ComingUpItem; index: number }) => {
  const config = typeConfig[item.type];
  const Icon = config.icon;

  return (
    <div
      className="group relative p-6 rounded-lg border border-border/50 bg-card/50 hover:border-border hover:bg-card transition-all duration-300 opacity-0 animate-fade-in"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
          <Icon className="w-5 h-5 text-muted-foreground" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              {config.label}
            </span>
            {item.status && (
              <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[item.status]}`}>
                {item.status === "in-progress" ? "In Progress" : item.status === "upcoming" ? "Upcoming" : "Done"}
              </span>
            )}
          </div>
          
          <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          
          {item.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {item.description}
            </p>
          )}
          
          {item.date && (
            <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {item.date}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const ComingUp = () => {
  if (comingUpItems.length === 0) return null;

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p 
            className="text-muted-foreground text-sm tracking-wide uppercase mb-3 opacity-0 animate-fade-in"
            style={{ animationDelay: "0s" }}
          >
            What's Next
          </p>
          <h2 
            className="text-2xl md:text-3xl font-display font-medium opacity-0 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            Coming Up
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {comingUpItems.map((item, index) => (
            <ComingUpCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingUp;
