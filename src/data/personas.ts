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
      'Contract Management': [
        'Show me contract performance for active projects',
        'Which deliverables are due this month?',
        'Generate compliance report for quarterly review',
        'Budget status for contract modifications',
      ],
      'Vendor Oversight': [
        'Vendor performance metrics for last quarter',
        'Show SLA compliance by vendor',
        'Risk assessment for current contracts',
        'Escalation trends by vendor',
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
      'Program Health': [
        'Show me program health dashboard',
        'Which projects are behind schedule?',
        'Resource utilization by project',
        'Risk trends across portfolio',
      ],
      'Stakeholder Management': [
        'Prepare executive briefing for program review',
        'Show stakeholder engagement metrics',
        'Generate monthly status report',
        'Dependencies blocking progress',
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
      'Requirements Management': [
        'Show requirements status for current sprint',
        'Which requirements are at risk?',
        'User feedback on recent deployments',
        'Requirements traceability matrix',
      ],
      'Change Management': [
        'Show pending change requests by priority',
        'Impact analysis for proposed changes',
        'Stakeholder approval status',
        'Change implementation timeline',
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
      'Sprint Management': [
        'Show current sprint progress',
        'Which stories are at risk?',
        'Team velocity trends',
        'Sprint burndown analysis',
      ],
      'Resource Management': [
        'Team capacity for next sprint',
        'Resource allocation by task',
        'Skill gaps identification',
        'Overtime tracking by team member',
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
      'Team Management': [
        'Show team workload balance',
        'Which team members need support?',
        'Code review backlog status',
        'Team performance trends',
      ],
      'Quality Assurance': [
        'Quality metrics by sprint',
        'Code coverage trends',
        'Bug resolution times',
        'Technical debt tracking',
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
      'Task Management': [
        'Show my tasks for this sprint',
        'What are my priorities today?',
        'Time tracking summary for this week',
        'Blockers I reported',
      ],
      'Technical Support': [
        'Search knowledge base for error solutions',
        'Similar tickets to my current work',
        'Code examples for current task',
        'Documentation for API integration',
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
