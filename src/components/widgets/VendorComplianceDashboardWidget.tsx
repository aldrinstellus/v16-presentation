import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  AlertCircle
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { VendorComplianceData } from '@/types/widget';

export function VendorComplianceDashboardWidget({ data }: { data: VendorComplianceData }) {
  // Defensive check
  if (!data || typeof data !== 'object') {
    return (
      <div className="my-4 rounded-lg border border-destructive/30 bg-destructive/5 p-4">
        <p className="text-sm text-destructive">Unable to load vendor compliance data</p>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-success';
    if (score >= 75) return 'text-chart-4';
    return 'text-destructive';
  };

  const getScoreStatus = (score: number) => {
    if (score >= 90) return 'success';
    if (score >= 75) return 'warning';
    return 'critical';
  };

  const violationColors = {
    critical: 'border-l-destructive bg-destructive/5',
    high: 'border-l-chart-4 bg-chart-4/5',
    medium: 'border-l-chart-3 bg-chart-3/5',
    low: 'border-l-muted-foreground/50 bg-muted/20',
  };

  const statusBadges = {
    open: 'bg-destructive/10 text-destructive border-destructive/30',
    remediated: 'bg-success/10 text-success border-success/30',
    waived: 'bg-muted text-muted-foreground border-muted-foreground/30',
  };

  return (
    <div className="rounded-lg border border-border bg-card p-6 my-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">{data.title}</h3>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-foreground font-medium">{data.vendor.name}</p>
            <p className="text-xs text-muted-foreground">
              {data.vendor.tier === 'prime' ? 'Prime Contractor' : 'Subcontractor'} •
              Contract Value: ${(data.vendor.contractValue / 1000000).toFixed(1)}M
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-3xl font-bold ${getScoreColor(data.compliance.overallScore)}`}>
            {data.compliance.overallScore}%
          </div>
          <p className="text-xs text-muted-foreground mt-1">Overall Compliance</p>
        </div>
      </div>

      {/* Compliance Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'SLA Compliance', value: data.compliance.slaCompliance },
          { label: 'Security', value: data.compliance.securityCompliance },
          { label: 'Reporting', value: data.compliance.reportingCompliance },
          { label: 'Quality', value: data.compliance.qualityCompliance },
        ].map((metric, idx) => (
          <div key={idx} className="rounded-lg border border-border bg-card/50 p-3">
            <div className={`text-xl font-bold mb-1 ${getScoreColor(metric.value)}`}>
              {metric.value}%
            </div>
            <p className="text-xs text-muted-foreground">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Compliance Trend Chart */}
      {data.trends && data.trends.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 text-foreground">Compliance Trend</h4>
          <div className="rounded-lg border border-border bg-card/50 p-4">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data.trends}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis
                  dataKey="month"
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  domain={[0, 100]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '6px'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Violations */}
      {data.violations && data.violations.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground">
            <AlertTriangle className="h-4 w-4 text-chart-4" />
            Compliance Violations ({data.violations.length})
          </h4>
          <div className="space-y-2">
            {data.violations.map((violation, idx) => (
              <div
                key={idx}
                className={`border-l-4 ${violationColors[violation.severity]} rounded-r p-3 transition-all duration-200 hover:shadow-sm`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {violation.type}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded border ${statusBadges[violation.status]}`}>
                      {violation.status}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">{violation.date}</span>
                </div>
                <p className="text-sm text-foreground mb-1">{violation.description}</p>
                {violation.remediationDue && violation.status === 'open' && (
                  <p className="text-xs text-chart-4 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Remediation due: {violation.remediationDue}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      {data.recommendations && data.recommendations.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-foreground">
            <CheckCircle2 className="h-4 w-4 text-success" />
            Recommendations
          </h4>
          <ul className="space-y-2">
            {data.recommendations.map((rec, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-foreground/90">
                <span className="text-primary mt-1">•</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
