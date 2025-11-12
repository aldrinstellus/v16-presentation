import {
  TrendingDown,
  Calendar,
  Activity,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { SprintBurndownData } from '@/types/widget';

export function SprintBurndownChartWidget({ data }: { data: SprintBurndownData }) {
  // Defensive check
  if (!data || typeof data !== 'object') {
    return (
      <div className="my-4 rounded-lg border border-destructive/30 bg-destructive/5 p-4">
        <p className="text-sm text-destructive">Unable to load sprint burndown data</p>
      </div>
    );
  }

  const statusColors = {
    'on-track': 'border-success/30 bg-success/5 text-success',
    'at-risk': 'border-chart-4/30 bg-chart-4/5 text-chart-4',
    'critical': 'border-destructive/30 bg-destructive/5 text-destructive',
  };

  const velocityTrendIcon = {
    increasing: <TrendingDown className="h-4 w-4 text-success rotate-180" />,
    stable: <Activity className="h-4 w-4 text-chart-3" />,
    decreasing: <TrendingDown className="h-4 w-4 text-destructive" />,
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6 my-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">{data.title}</h3>
          </div>
          <p className="text-sm text-foreground font-medium">{data.sprint.name}</p>
          <p className="text-xs text-muted-foreground">
            {data.sprint.startDate} - {data.sprint.endDate}
          </p>
        </div>
        <div className={`px-4 py-2 rounded-lg border ${statusColors[data.status]}`}>
          <span className="text-sm font-semibold uppercase tracking-wide">{data.status}</span>
        </div>
      </div>

      {/* Sprint Progress */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="rounded-lg border border-border bg-card/50 p-3">
          <div className="text-2xl font-bold text-foreground mb-1">{data.sprint.totalStoryPoints}</div>
          <p className="text-xs text-muted-foreground">Total Story Points</p>
        </div>
        <div className="rounded-lg border border-border bg-card/50 p-3">
          <div className="text-2xl font-bold text-success mb-1">{data.sprint.completedStoryPoints}</div>
          <p className="text-xs text-muted-foreground">Completed Points</p>
        </div>
        <div className="rounded-lg border border-border bg-card/50 p-3">
          <div className="text-2xl font-bold text-primary mb-1">{data.velocity.current}</div>
          <p className="text-xs text-muted-foreground">Current Velocity</p>
        </div>
        <div className="rounded-lg border border-border bg-card/50 p-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold text-foreground">{data.velocity.average}</span>
            {velocityTrendIcon[data.velocity.trend]}
          </div>
          <p className="text-xs text-muted-foreground">Avg Velocity</p>
        </div>
      </div>

      {/* Burndown Chart */}
      {data.burndown && data.burndown.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 text-foreground">Burndown Chart</h4>
          <div className="rounded-lg border border-border bg-card/50 p-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data.burndown}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="date"
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  label={{ value: 'Story Points', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="idealRemaining"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Ideal Burndown"
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="actualRemaining"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  name="Actual Burndown"
                  dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Risks */}
      {data.risks && data.risks.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground">
            <AlertTriangle className="h-4 w-4 text-chart-4" />
            Sprint Risks
          </h4>
          <div className="space-y-2">
            {data.risks.map((risk, idx) => (
              <div key={idx} className="rounded-lg border border-chart-4/30 bg-chart-4/5 p-3 flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-chart-4 mt-0.5" />
                <span className="text-sm text-foreground">{risk}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
