'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const skillsData = [
  { name: 'JavaScript', proficiency: 90, fill: "hsl(var(--chart-1))" },
  { name: 'TypeScript', proficiency: 85, fill: "hsl(var(--chart-2))" },
  { name: 'React/Next.js', proficiency: 90, fill: "hsl(var(--chart-1))" },
  { name: 'Node.js', proficiency: 80, fill: "hsl(var(--chart-2))" },
  { name: 'Python', proficiency: 75, fill: "hsl(var(--chart-3))" },
  { name: 'SQL/NoSQL', proficiency: 80, fill: "hsl(var(--chart-4))" },
  { name: 'Cloud (AWS/GCP)', proficiency: 70, fill: "hsl(var(--chart-5))" },
  { name: 'Docker/K8s', proficiency: 65, fill: "hsl(var(--chart-3))" },
];

const chartConfig = {
  proficiency: {
    label: "Proficiency (%)",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

export function SkillsShowcase() {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <ChartContainer config={chartConfig} className="h-full w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={skillsData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border)/0.5)" />
            <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--foreground)/0.7)" tickFormatter={(value) => `${value}%`} />
            <YAxis dataKey="name" type="category" stroke="hsl(var(--foreground)/0.7)" width={120} interval={0} />
            <Tooltip
              cursor={{ fill: 'hsl(var(--muted)/0.3)' }}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Legend wrapperStyle={{ color: 'hsl(var(--foreground)/0.7)' }}/>
            <Bar dataKey="proficiency" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
}
