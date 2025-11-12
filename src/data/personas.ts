import {
  Shield,
  Users,
  Briefcase,
  FolderKanban,
  GitBranch,
  Wrench,
  Target,
  AlertCircle,
  TrendingUp,
  BarChart3,
  Clock,
  CheckCircle,
  FileText,
  MessageSquare,
  Calendar,
  Activity,
  Ticket,
  LayoutDashboard,
  Award,
  Zap,
  Bell,
  ArrowUpCircle,
} from 'lucide-react';
import { Persona, ModeType } from '@/types/persona';

// ========================================
// GOVERNMENT MODE PERSONAS (3)
// ========================================

export const governmentPersonas: Persona[] = [
  // ===========================
  // COR - Contracting Officer's Representative
  // ===========================
  {
    id: 'cor',
    mode: 'government',
    name: 'Alexa Johnson',
    email: 'alexa.johnson@agency.gov',
    role: 'Contracting Officer\'s Representative',
    badge: {
      label: 'COR',
      icon: Shield,
      color: 'text-blue-600',
    },
    theme: {
      primary: 'oklch(0.55 0.20 255)', // Government Blue
      accent: 'oklch(0.65 0.18 220)',
      badgeGradient: 'from-blue-600 via-blue-700 to-blue-600',
      badgeSolid: 'bg-blue-600',
      badgeRing: 'ring-blue-600/30',
    },
    quickActions: [
      {
        id: 'contract-status',
        icon: FileText,
        label: 'Contract Status',
        badge: 'Active',
        badgeColor: 'bg-green-600 text-white',
        query: 'Show me current contract status and deliverables',
      },
      {
        id: 'vendor-performance',
        icon: BarChart3,
        label: 'Vendor Performance',
        badge: '92%',
        badgeColor: 'bg-blue-500 text-white',
        query: 'Generate vendor performance metrics report',
      },
      {
        id: 'compliance-dashboard',
        icon: CheckCircle,
        label: 'Compliance Dashboard',
        badge: '✓',
        badgeColor: 'bg-green-600 text-white',
        query: 'Show compliance status for all active contracts',
      },
      {
        id: 'budget-tracking',
        icon: TrendingUp,
        label: 'Budget Tracking',
        badge: '$2.4M',
        badgeColor: 'bg-purple-500 text-white',
        query: 'Show budget utilization and projections',
      },
      {
        id: 'deliverables-review',
        icon: Ticket,
        label: 'Deliverables Review',
        badge: 8,
        badgeColor: 'bg-orange-500 text-white',
        query: 'Show pending deliverables requiring review',
      },
    ],
    demoScenarios: {
      'Daily Operations': [
        'Show me contract performance for active projects',
        'Which deliverables are due this month?',
        'Show today\'s pending approvals',
        'Contract status for NAVFAC project',
        'Budget remaining for current contracts',
        'What needs my attention today?',
        'Show overdue deliverables requiring escalation',
      ],
      'Contract Management': [
        'Generate compliance report for quarterly review',
        'Budget status for contract modifications',
        'Compare actual vs projected spending',
        'Show all contract modifications this quarter',
        'Risk analysis for contracts ending soon',
        'Payment schedule for active contracts',
      ],
      'Vendor Oversight': [
        'Vendor performance metrics for last quarter',
        'Show SLA compliance by vendor',
        'Risk assessment for current contracts',
        'Escalation trends by vendor',
        'Which vendors have quality issues?',
        'Vendor scorecard comparison',
        'Show security audit findings by vendor',
      ],
      'Reporting & Analysis': [
        'Executive summary for program review',
        'Trend analysis for deliverable delays',
        'Cost variance report by contract',
        'Generate monthly COR briefing',
        'Show improvement trends by vendor',
      ],
      'Escalations & Issues': [
        'Critical issues requiring COR attention',
        'Show contracts with SLA breaches',
        'Deliverables rejected for quality',
        'Vendor non-compliance incidents',
        'Emergency contract actions needed',
      ],
    },
    permissions: [
      'view_contract_status',
      'view_vendor_performance',
      'view_compliance_reports',
      'view_budget_data',
      'approve_deliverables',
    ],
  },

  // ===========================
  // PROGRAM MANAGER - Business Team Lead
  // ===========================
  {
    id: 'program-manager',
    mode: 'government',
    name: 'Jennifer Chen',
    email: 'jennifer.chen@agency.gov',
    role: 'Program Manager',
    badge: {
      label: 'PM',
      icon: FolderKanban,
      color: 'text-purple-600',
    },
    theme: {
      primary: 'oklch(0.58 0.22 290)', // Purple
      accent: 'oklch(0.62 0.18 270)',
      badgeGradient: 'from-purple-600 via-purple-700 to-purple-600',
      badgeSolid: 'bg-purple-600',
      badgeRing: 'ring-purple-600/30',
    },
    quickActions: [
      {
        id: 'program-overview',
        icon: LayoutDashboard,
        label: 'Program Overview',
        badge: '5 Projects',
        badgeColor: 'bg-purple-500 text-white',
        query: 'Show me comprehensive program status dashboard',
      },
      {
        id: 'milestone-tracker',
        icon: Target,
        label: 'Milestone Tracker',
        badge: 12,
        badgeColor: 'bg-blue-500 text-white',
        query: 'Show upcoming milestones and completion status',
      },
      {
        id: 'stakeholder-reports',
        icon: FileText,
        label: 'Stakeholder Reports',
        badge: 'Q4',
        badgeColor: 'bg-green-600 text-white',
        query: 'Generate stakeholder communication report',
      },
      {
        id: 'resource-allocation',
        icon: Users,
        label: 'Resource Allocation',
        badge: 'View',
        badgeColor: 'bg-teal-500 text-white',
        query: 'Show resource allocation across program initiatives',
      },
      {
        id: 'risk-register',
        icon: AlertCircle,
        label: 'Risk Register',
        badge: 3,
        badgeColor: 'bg-red-600 text-white',
        query: 'Show active risks and mitigation status',
      },
    ],
    demoScenarios: {
      'Daily Operations': [
        'Show me program health dashboard',
        'What needs my attention today?',
        'Critical path tasks for this week',
        'Program status for executive briefing',
        'Today\'s milestone deadlines',
        'Issues escalated to me',
        'Team capacity overview for planning',
      ],
      'Program Health': [
        'Which projects are behind schedule?',
        'Resource utilization by project',
        'Risk trends across portfolio',
        'Budget variance analysis',
        'Show projects at risk of missing deadlines',
        'Cross-project dependency status',
      ],
      'Stakeholder Management': [
        'Prepare executive briefing for program review',
        'Show stakeholder engagement metrics',
        'Generate monthly status report',
        'Dependencies blocking progress',
        'Schedule stakeholder review meeting',
        'Action items from last steering committee',
        'Stakeholder feedback summary',
      ],
      'Resource Planning': [
        'Resource allocation across all projects',
        'Skill gaps by project team',
        'Overtime trends analysis',
        'Contractor vs FTE utilization',
        'Resource forecasting for next quarter',
      ],
      'Risk & Issue Management': [
        'Top 5 program risks requiring mitigation',
        'Show critical blockers by project',
        'Risk register with mitigation plans',
        'Issues impacting multiple projects',
        'Escalation needed for budget approval',
      ],
    },
    permissions: [
      'view_program_status',
      'view_project_metrics',
      'view_resource_allocation',
      'view_risk_register',
      'generate_reports',
    ],
  },

  // ===========================
  // STAKEHOLDER LEAD - Department Group Lead
  // ===========================
  {
    id: 'stakeholder-lead',
    mode: 'government',
    name: 'Jessica Martinez',
    email: 'jessica.martinez@agency.gov',
    role: 'Department Stakeholder Lead',
    badge: {
      label: 'STAKEHOLDER',
      icon: Users,
      color: 'text-teal-600',
    },
    theme: {
      primary: 'oklch(0.60 0.15 200)', // Teal
      accent: 'oklch(0.70 0.14 180)',
      badgeGradient: 'from-teal-600 via-cyan-600 to-teal-600',
      badgeSolid: 'bg-teal-600',
      badgeRing: 'ring-teal-600/30',
    },
    quickActions: [
      {
        id: 'impact-analysis',
        icon: Activity,
        label: 'Impact Analysis',
        badge: 'New',
        badgeColor: 'bg-blue-500 text-white',
        query: 'Show impact analysis for department initiatives',
      },
      {
        id: 'change-requests',
        icon: GitBranch,
        label: 'Change Requests',
        badge: 7,
        badgeColor: 'bg-orange-500 text-white',
        query: 'Show pending change requests requiring approval',
      },
      {
        id: 'user-feedback',
        icon: MessageSquare,
        label: 'User Feedback',
        badge: '24',
        badgeColor: 'bg-green-600 text-white',
        query: 'Show latest user feedback and sentiment analysis',
      },
      {
        id: 'requirements-tracking',
        icon: CheckCircle,
        label: 'Requirements Tracking',
        badge: '89%',
        badgeColor: 'bg-purple-500 text-white',
        query: 'Show requirements completion status',
      },
      {
        id: 'communication-log',
        icon: Bell,
        label: 'Communication Log',
        badge: 'View',
        badgeColor: 'bg-cyan-500 text-white',
        query: 'Show stakeholder communication history',
      },
    ],
    demoScenarios: {
      'Daily Operations': [
        'What needs my attention today?',
        'Pending change requests requiring approval',
        'User feedback received today',
        'Upcoming stakeholder meetings this week',
        'Action items assigned to me',
        'Requirements status for current sprint',
      ],
      'Requirements Management': [
        'Show requirements status for current sprint',
        'Which requirements are at risk?',
        'User feedback on recent deployments',
        'Requirements traceability matrix',
        'Coverage gaps in requirement testing',
        'Prioritize backlog based on user needs',
        'Requirements dependency analysis',
      ],
      'Change Management': [
        'Show pending change requests by priority',
        'Impact analysis for proposed changes',
        'Stakeholder approval status',
        'Change implementation timeline',
        'Recent changes deployed to production',
        'Change request rejection reasons',
      ],
      'Stakeholder Communication': [
        'Draft communication for system downtime',
        'Stakeholder engagement summary',
        'Schedule review meeting with department heads',
        'Communication log for last 30 days',
        'Feedback trends from user surveys',
      ],
      'Impact Analysis': [
        'Impact of proposed UI redesign',
        'User adoption metrics for new features',
        'Cost-benefit analysis for change requests',
        'Risk assessment for breaking changes',
        'Department-specific impact report',
      ],
    },
    permissions: [
      'view_requirements',
      'approve_change_requests',
      'view_user_feedback',
      'view_impact_analysis',
      'view_communication_log',
    ],
  },
];

// ========================================
// PROJECT MODE PERSONAS (3)
// ========================================

export const projectPersonas: Persona[] = [
  // ===========================
  // PROJECT MANAGER
  // ===========================
  {
    id: 'project-manager',
    mode: 'project',
    name: 'Dale Thompson',
    email: 'dale.thompson@company.com',
    role: 'Project Manager',
    badge: {
      label: 'PM',
      icon: Briefcase,
      color: 'text-indigo-600',
    },
    theme: {
      primary: 'oklch(0.56 0.20 270)', // Indigo
      accent: 'oklch(0.64 0.18 250)',
      badgeGradient: 'from-indigo-600 via-indigo-700 to-indigo-600',
      badgeSolid: 'bg-indigo-600',
      badgeRing: 'ring-indigo-600/30',
    },
    quickActions: [
      {
        id: 'project-dashboard',
        icon: LayoutDashboard,
        label: 'Project Dashboard',
        badge: 'Live',
        badgeColor: 'bg-green-600 text-white',
        query: 'Show me real-time project dashboard',
      },
      {
        id: 'sprint-planning',
        icon: Calendar,
        label: 'Sprint Planning',
        badge: 'Sprint 12',
        badgeColor: 'bg-blue-500 text-white',
        query: 'Show current sprint status and upcoming planning',
      },
      {
        id: 'team-capacity',
        icon: Users,
        label: 'Team Capacity',
        badge: '78%',
        badgeColor: 'bg-purple-500 text-white',
        query: 'Show team capacity and resource utilization',
      },
      {
        id: 'blocker-resolution',
        icon: AlertCircle,
        label: 'Blocker Resolution',
        badge: 5,
        badgeColor: 'bg-red-600 text-white',
        query: 'Show active blockers and resolution status',
      },
      {
        id: 'client-meetings',
        icon: MessageSquare,
        label: 'Client Meetings',
        badge: '3',
        badgeColor: 'bg-orange-500 text-white',
        query: 'Show upcoming client meetings and action items',
      },
    ],
    demoScenarios: {
      'Daily Operations': [
        'What needs my attention today?',
        'Show current sprint progress',
        'Active blockers requiring resolution',
        'Team capacity for this week',
        'Today\'s standup summary',
        'Client meeting prep for today',
      ],
      'Sprint Management': [
        'Which stories are at risk?',
        'Team velocity trends',
        'Sprint burndown analysis',
        'Sprint goal progress',
        'Story point completion forecast',
        'Carry-over work from last sprint',
        'Sprint retrospective action items',
      ],
      'Resource Management': [
        'Team capacity for next sprint',
        'Resource allocation by task',
        'Skill gaps identification',
        'Overtime tracking by team member',
        'PTO impact on sprint capacity',
        'Cross-team dependency conflicts',
      ],
      'Client Communication': [
        'Prepare weekly client status update',
        'Client feedback from last review',
        'Schedule next client demo',
        'Client escalation tracking',
        'Feature request prioritization with client',
      ],
      'Risk & Planning': [
        'Sprint risk register',
        'Dependencies blocking next sprint',
        'Budget burn rate analysis',
        'Scope creep alerts',
        'Velocity vs plan variance',
      ],
    },
    permissions: [
      'view_project_status',
      'manage_sprints',
      'view_team_capacity',
      'resolve_blockers',
      'schedule_meetings',
    ],
  },

  // ===========================
  // SERVICE TEAM LEAD
  // ===========================
  {
    id: 'service-team-lead',
    mode: 'project',
    name: 'Herbert Roberts',
    email: 'herbert.roberts@company.com',
    role: 'Service Team Lead',
    badge: {
      label: 'LEAD',
      icon: Award,
      color: 'text-amber-600',
    },
    theme: {
      primary: 'oklch(0.62 0.18 50)', // Amber
      accent: 'oklch(0.70 0.16 40)',
      badgeGradient: 'from-amber-600 via-orange-600 to-amber-600',
      badgeSolid: 'bg-amber-600',
      badgeRing: 'ring-amber-600/30',
    },
    quickActions: [
      {
        id: 'team-workload',
        icon: Activity,
        label: 'Team Workload',
        badge: '12 Tasks',
        badgeColor: 'bg-blue-500 text-white',
        query: 'Show team workload distribution',
      },
      {
        id: 'quality-metrics',
        icon: BarChart3,
        label: 'Quality Metrics',
        badge: '94%',
        badgeColor: 'bg-green-600 text-white',
        query: 'Show team quality metrics and code coverage',
      },
      {
        id: 'code-reviews',
        icon: CheckCircle,
        label: 'Code Reviews',
        badge: 8,
        badgeColor: 'bg-purple-500 text-white',
        query: 'Show pending code reviews requiring attention',
      },
      {
        id: 'deployment-status',
        icon: Zap,
        label: 'Deployment Status',
        badge: '✓',
        badgeColor: 'bg-green-600 text-white',
        query: 'Show deployment pipeline status',
      },
      {
        id: 'team-performance',
        icon: TrendingUp,
        label: 'Team Performance',
        badge: 'View',
        badgeColor: 'bg-teal-500 text-white',
        query: 'Show team performance analytics',
      },
    ],
    demoScenarios: {
      'Daily Operations': [
        'What needs my attention today?',
        'Show team workload balance',
        'Pending code reviews requiring approval',
        'Today\'s deployment status',
        'Team standup summary',
        'Active incidents assigned to team',
      ],
      'Team Management': [
        'Which team members need support?',
        'Code review backlog status',
        'Team performance trends',
        'Work distribution across team',
        '1-on-1 preparation for team members',
        'Skill development progress tracking',
      ],
      'Quality Assurance': [
        'Quality metrics by sprint',
        'Code coverage trends',
        'Bug resolution times',
        'Technical debt tracking',
        'Critical vulnerabilities in codebase',
        'Code smell trends',
        'Test automation coverage',
      ],
      'Deployment & DevOps': [
        'Deployment pipeline health',
        'Failed builds analysis',
        'Deployment frequency trends',
        'Mean time to recovery (MTTR)',
        'Production incident postmortems',
      ],
      'Technical Leadership': [
        'Architecture decision records (ADRs)',
        'Technical spike recommendations',
        'Refactoring backlog prioritization',
        'Performance optimization opportunities',
        'Security scan findings review',
      ],
    },
    permissions: [
      'view_team_workload',
      'view_quality_metrics',
      'approve_code_reviews',
      'view_deployments',
      'view_team_performance',
    ],
  },

  // ===========================
  // SERVICE TEAM MEMBER
  // ===========================
  {
    id: 'service-team-member',
    mode: 'project',
    name: 'Molly Rivera',
    email: 'molly.rivera@company.com',
    role: 'Service Team Member',
    badge: {
      label: 'DEVELOPER',
      icon: Wrench,
      color: 'text-cyan-600',
    },
    theme: {
      primary: 'oklch(0.64 0.16 200)', // Cyan
      accent: 'oklch(0.72 0.14 180)',
      badgeGradient: 'from-cyan-600 via-blue-600 to-cyan-600',
      badgeSolid: 'bg-cyan-600',
      badgeRing: 'ring-cyan-600/30',
    },
    quickActions: [
      {
        id: 'my-tasks',
        icon: Ticket,
        label: 'My Tasks',
        badge: 7,
        badgeColor: 'bg-blue-500 text-white',
        query: 'Show my assigned tasks and priorities',
      },
      {
        id: 'active-tickets',
        icon: AlertCircle,
        label: 'Active Tickets',
        badge: 4,
        badgeColor: 'bg-orange-500 text-white',
        query: 'Show my active support tickets',
      },
      {
        id: 'knowledge-base',
        icon: FileText,
        label: 'Knowledge Base',
        badge: 'Search',
        badgeColor: 'bg-purple-500 text-white',
        query: 'Search knowledge base for solutions',
      },
      {
        id: 'standup-notes',
        icon: MessageSquare,
        label: 'Standup Notes',
        badge: 'Today',
        badgeColor: 'bg-green-600 text-white',
        query: 'Show today\'s standup notes and blockers',
      },
      {
        id: 'time-tracking',
        icon: Clock,
        label: 'Time Tracking',
        badge: '6.5h',
        badgeColor: 'bg-teal-500 text-white',
        query: 'Show time tracking for today',
      },
    ],
    demoScenarios: {
      'Daily Operations': [
        'What are my priorities today?',
        'Show my tasks for this sprint',
        'Time tracking summary for today',
        'Standup notes for today',
        'Code reviews assigned to me',
        'Pull requests waiting for review',
      ],
      'Task Management': [
        'What should I work on next?',
        'Time tracking summary for this week',
        'Blockers I reported',
        'Task dependencies for my work',
        'Sprint progress for my assigned stories',
        'Estimate remaining work for current task',
      ],
      'Technical Support': [
        'Search knowledge base for error solutions',
        'Similar tickets to my current work',
        'Code examples for current task',
        'Documentation for API integration',
        'How to set up local development environment',
        'Troubleshooting guide for common errors',
      ],
      'Code Quality': [
        'My code review feedback summary',
        'Test coverage for my recent commits',
        'Static analysis warnings for my code',
        'Performance benchmarks for my changes',
        'Security scan results for my branch',
      ],
      'Learning & Growth': [
        'Technical debt in areas I work on',
        'Best practices for current framework',
        'Team coding standards documentation',
        'Skill development resources',
        'Mentorship opportunities',
      ],
    },
    permissions: [
      'view_own_tasks',
      'update_task_status',
      'view_knowledge_base',
      'log_time',
      'report_blockers',
    ],
  },
];

// ========================================
// COMBINED EXPORT & HELPERS
// ========================================

// Combined personas (all 6) - for backward compatibility
export const personas: Persona[] = [
  ...governmentPersonas,
  ...projectPersonas,
];

// Helper: Get personas by mode
export const getPersonasByMode = (mode: ModeType): Persona[] => {
  return mode === 'government' ? governmentPersonas : projectPersonas;
};

// Helper: Get persona by ID
export const getPersonaById = (id: string): Persona | undefined => {
  return personas.find((p) => p.id === id);
};

// Helper: Get default persona for mode
export const getDefaultPersona = (mode: ModeType): Persona => {
  return mode === 'government' ? governmentPersonas[0] : projectPersonas[0];
};

// Export default for backward compatibility
export default personas;
