export interface ComingUpItem {
  id: string;
  type: "event" | "focus" | "goal";
  title: string;
  description?: string;
  date?: string; // For events with specific dates
  status?: "in-progress" | "upcoming" | "completed";
  progress?: number; // 0-100 for goals
}

export const comingUpItems: ComingUpItem[] = [
  {
    id: "1",
    type: "event",
    title: "Operations University Launch",
    description: "Launching the first cohort of the ops program",
    date: "Q1 2026",
    status: "upcoming",
  },
  {
    id: "2",
    type: "focus",
    title: "Building Ironvael Portfolio",
    description: "Expanding the holding company with new acquisitions",
    status: "in-progress",
    progress: 40,
  },
  {
    id: "3",
    type: "goal",
    title: "10 Essays Published",
    description: "Writing and publishing thoughts on operations and systems",
    status: "in-progress",
    progress: 30,
  },
];
