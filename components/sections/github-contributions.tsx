import { Section } from "@/components/shared/section";
import { cn } from "@/lib/utils";

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionData {
  contributions: Contribution[];
  total: Record<string, number>;
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Row index 0 = Sun, 1 = Mon, ..., 6 = Sat
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

function levelClass(level: 0 | 1 | 2 | 3 | 4): string {
  switch (level) {
    case 1:
      return "bg-green-200 dark:bg-green-900";
    case 2:
      return "bg-green-300 dark:bg-green-700";
    case 3:
      return "bg-green-500 dark:bg-green-600";
    case 4:
      return "bg-green-700 dark:bg-green-400";
    default:
      return "bg-muted";
  }
}

async function fetchContributions(): Promise<ContributionData | null> {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/bhuiyan0?y=last",
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) return null;
    return res.json() as Promise<ContributionData>;
  } catch {
    return null;
  }
}

export async function GitHubContributions() {
  const data = await fetchContributions();
  if (!data || data.contributions.length === 0) return null;

  const { contributions } = data;
  const totalCount = Object.values(data.total).reduce((a, b) => a + b, 0);

  // Group contributions into week columns (Sunday-first)
  const weeks: (Contribution | null)[][] = [];
  let week: (Contribution | null)[] = [];

  const firstDayOfWeek = new Date(contributions[0].date + "T00:00:00").getDay();
  for (let i = 0; i < firstDayOfWeek; i++) week.push(null);

  for (const contribution of contributions) {
    week.push(contribution);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(null);
    weeks.push(week);
  }

  // One label per month — records which week column that month first appears in
  const monthByCol = new Map<number, string>();
  let lastMonth = -1;
  weeks.forEach((w, colIndex) => {
    const firstReal = w.find((d) => d !== null);
    if (firstReal) {
      const month = new Date(firstReal.date + "T00:00:00").getMonth();
      if (month !== lastMonth) {
        monthByCol.set(colIndex, MONTHS[month]);
        lastMonth = month;
      }
    }
  });

  return (
    <Section id="contributions" eyebrow="Activity" title="GitHub Contributions">
      <p className="mb-6 text-sm text-muted-foreground">
        {totalCount.toLocaleString()} contributions in the last year
      </p>

      {/*
        Outer wrapper is relative so the right-fade gradient can be
        absolutely positioned over the scrollable area. The fade is
        hidden at lg+ where the full graph fits inside the 5xl container.
      */}
      <div className="relative">
        <div
          className="overflow-x-auto pb-1"
          role="img"
          aria-label="GitHub contribution graph"
        >
          <div className="inline-flex flex-col gap-1">
            {/*
              Month label row: a spacer matching the day-label column,
              then one cell per week column. Labels are wider than a
              single cell but adjacent cells are empty so they don't
              collide. This mirrors the flex structure below so the
              labels stay pixel-aligned without absolute positioning.
            */}
            <div className="flex gap-1" aria-hidden>
              <div className="w-7 shrink-0" />
              <div className="flex gap-0.5">
                {weeks.map((_, colIndex) => (
                  <div
                    key={colIndex}
                    className="w-3.5 shrink-0 overflow-visible text-xs text-muted-foreground"
                  >
                    {monthByCol.get(colIndex) ?? ""}
                  </div>
                ))}
              </div>
            </div>

            {/* Day labels + contribution cells */}
            <div className="flex gap-1">
              {/* Day label column */}
              <div className="flex w-7 shrink-0 flex-col gap-0.5" aria-hidden>
                {DAY_LABELS.map((label, i) => (
                  <div
                    key={i}
                    className="flex h-3.5 items-center justify-end pr-1 text-xs text-muted-foreground"
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Week columns */}
              <div className="flex gap-0.5">
                {weeks.map((w, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-0.5">
                    {w.map((day, rowIndex) =>
                      day ? (
                        <div
                          key={rowIndex}
                          className={cn(
                            "size-3.5 rounded-xs transition-opacity duration-150 hover:opacity-80",
                            levelClass(day.level),
                          )}
                          title={`${day.count} contribution${day.count !== 1 ? "s" : ""} on ${day.date}`}
                        />
                      ) : (
                        // Invisible spacer — same size as a real cell
                        <div key={rowIndex} className="size-3.5" />
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll-fade indicator — signals hidden content on small screens */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent lg:hidden"
        />
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-1.5" aria-hidden>
        <span className="text-xs text-muted-foreground">Less</span>
        {([0, 1, 2, 3, 4] as const).map((level) => (
          <div
            key={level}
            className={cn("size-3 rounded-xs", levelClass(level))}
          />
        ))}
        <span className="text-xs text-muted-foreground">More</span>
      </div>
    </Section>
  );
}
