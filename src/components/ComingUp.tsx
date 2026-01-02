import { Calendar, Target, Zap } from "lucide-react";
import { comingUpItems, type ComingUpItem } from "@/data/comingUp";
import { Progress } from "@/components/ui/progress";

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
  const showProgress = item.progress !== undefined && item.progress >= 0;

  return (
    <div
      className="group relative p-4 sm:p-5 md:p-6 rounded-lg border border-border/50 bg-card/50 hover:border-border hover:bg-card transition-all duration-300 opacity-0 animate-fade-in"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
            <span className="text-[10px] sm:text-xs uppercase tracking-wide text-muted-foreground">
              {config.label}
            </span>
            {item.status && (
              <span className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${statusColors[item.status]}`}>
                {item.status === "in-progress" ? "In Progress" : item.status === "upcoming" ? "Upcoming" : "Done"}
              </span>
            )}
          </div>
          
          <h3 className="font-medium text-sm sm:text-base text-foreground mb-1 group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          
          {item.description && (
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
              {item.description}
            </p>
          )}
          
          {showProgress && (
            <div className="mt-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] sm:text-xs text-muted-foreground">Progress</span>
                <span className="text-[10px] sm:text-xs font-medium text-foreground">{item.progress}%</span>
              </div>
              <Progress value={item.progress} className="h-1.5 sm:h-2" />
            </div>
          )}
          
          {item.date && !showProgress && (
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-2 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {item.date}
            </p>
          )}
        </div>
      </div>
      
      {item.date && showProgress && (
        <p className="text-[10px] sm:text-xs text-muted-foreground mt-3 flex items-center gap-1 pl-11 sm:pl-14">
          <Calendar className="w-3 h-3" />
          {item.date}
        </p>
      )}
    </div>
  );
};

const ComingUp = () => {
  if (comingUpItems.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 sm:mb-8 md:mb-10">
          <p 
            className="text-muted-foreground text-xs sm:text-sm tracking-wide uppercase mb-2 sm:mb-3 opacity-0 animate-fade-in"
            style={{ animationDelay: "0s" }}
          >
            What's Next
          </p>
          <h2 
            className="text-xl sm:text-2xl md:text-3xl font-display font-medium opacity-0 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            Coming Up
          </h2>
        </div>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {comingUpItems.map((item, index) => (
            <ComingUpCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingUp;
