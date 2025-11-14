// ATC Manager (David Miller - CS Manager) Conversation Patterns
// Multi-turn conversation flows for ATC CS Manager persona

import type { WidgetData } from '@/types/widget';
import {
  teamWorkloadDashboardDemo,
  customerRiskListDemo,
  agentPerformanceComparisonDemo,
  ticketListDemo,
  slaPerformanceChartDemo,
} from '@/data/demo-widget-data';

export interface ConversationEntry {
  id: string;
  triggers: string[];
  userQuery: string;
  aiResponse: string;
  widgetType?: string;
  widgetData?: WidgetData;
}

// Helper to get tomorrow's date in ISO format
function getTomorrow(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0]; // Returns YYYY-MM-DD
}

const conversationEntries: ConversationEntry[] = [
  // Q1: Team Workload Dashboard
  {
    id: 'q1-team-workload',
    triggers: ['team workload', 'workload balance', 'team capacity', 'workload dashboard', 'team distribution'],
    userQuery: 'Show me the current team workload distribution.',
    aiResponse: "Here's the real-time team workload dashboard. I can identify any capacity issues and recommend redistributions:",
    widgetType: 'team-workload-dashboard',
    widgetData: teamWorkloadDashboardDemo,
  },

  // Q2: Agent Performance Comparison
  {
    id: 'q2-agent-performance',
    triggers: ['agent performance', 'performance comparison', 'compare agents', 'top performers', 'agent stats'],
    userQuery: 'Show me agent performance comparison.',
    aiResponse: "Here's the agent performance comparison for this week, showing top and bottom performers:",
    widgetType: 'agent-performance-comparison',
    widgetData: agentPerformanceComparisonDemo,
  },

  // Q3: SLA Performance & Breaches
  {
    id: 'q3-sla-breach',
    triggers: ['sla breach', 'sla alerts', 'sla performance', 'sla violations', 'sla compliance'],
    userQuery: 'Show me SLA performance and breaches.',
    aiResponse: "Here's the SLA performance breakdown with breaches highlighted:",
    widgetType: 'sla-performance-chart',
    widgetData: slaPerformanceChartDemo,
  },

  // Q4: Escalation Queue
  {
    id: 'q4-escalation-queue',
    triggers: ['escalation queue', 'escalated tickets', 'escalations', 'show escalations'],
    userQuery: 'Show me the escalation queue.',
    aiResponse: "Here are all escalated tickets requiring manager attention:",
    widgetType: 'ticket-list',
    widgetData: {
      ...ticketListDemo,
      title: 'Escalation Queue',
    },
  },

  // Q5: Priority Customers / High-Risk Customers
  {
    id: 'q5-priority-customers',
    triggers: ['priority customers', 'high-risk customers', 'at-risk accounts', 'customer risk'],
    userQuery: 'Show me priority customers requiring attention.',
    aiResponse: "Here are your high-priority customers with risk scores:",
    widgetType: 'customer-risk-list',
    widgetData: customerRiskListDemo,
  },

  // Q6: Team Capacity
  {
    id: 'q6-team-capacity',
    triggers: ['team capacity', 'capacity metrics', 'team availability', 'capacity planning'],
    userQuery: 'Show me team capacity metrics.',
    aiResponse: "Here's the team capacity analysis showing availability and utilization:",
    widgetType: 'team-workload-dashboard',
    widgetData: teamWorkloadDashboardDemo,
  },

  // Q7: Ticket List (Manager View)
  {
    id: 'q7-ticket-list',
    triggers: ['my tickets', 'all tickets', 'ticket list', 'show tickets'],
    userQuery: 'Show me all current tickets.',
    aiResponse: "Here are all tickets across your team:",
    widgetType: 'ticket-list',
    widgetData: ticketListDemo,
  },

  // Q8: Schedule 1-on-1 (Initial Request - AI Response Only)
  {
    id: 'q8-schedule-1on1',
    triggers: ['schedule 1-on-1', 'schedule a 1-on-1', 'coaching session with'],
    userQuery: 'Schedule a 1-on-1 coaching session with an agent.',
    aiResponse:
      "I can help you schedule a 1-on-1 coaching session. The session will be 30 minutes.\n\nWould you like me to check calendars for availability?",
  },

  // Q9: Check availability (Show Calendar)
  {
    id: 'q9-check-availability',
    triggers: [
      'yes', 'yeah', 'yep', 'sure', 'ok', 'okay', 'please', 'go ahead', 'proceed',
      'find time', 'availability', 'check calendar',
    ],
    userQuery: 'Yes, check availability.',
    aiResponse: "I've checked both calendars. Here are the available time slots:",
    widgetType: 'meeting-scheduler',
    widgetData: {
      title: 'Schedule 1-on-1 Coaching Session',
      type: '1-on-1 Coaching Session',
      duration: '30 minutes',
      availableSlots: [
        {
          date: getTomorrow(),
          time: '10:00 - 10:30',
          timezone: 'PST',
          status: 'available',
          conflicts: [],
        },
        {
          date: getTomorrow(),
          time: '14:00 - 14:30',
          timezone: 'PST',
          status: 'preferred',
          conflicts: [],
          note: 'Both attendees available',
        },
      ],
      attendees: [
        { name: 'David Miller (You)', status: 'organizer', required: true },
        { name: 'Agent', status: 'available', required: true },
      ],
    },
  },

  // Q10: Book Meeting (Confirmation)
  {
    id: 'q10-book-meeting',
    triggers: ['book', 'confirm', 'schedule', 'tomorrow', '2pm', '14:00', '10am'],
    userQuery: 'Book the tomorrow at 2pm slot.',
    aiResponse: 'Perfect! 1-on-1 session confirmed and calendar invite sent.',
    widgetType: 'meeting-confirmation',
    widgetData: {
      meetingDate: getTomorrow(),
      meetingTime: '2:00 PM',
      timezone: 'PST',
      duration: '30 minutes',
      location: 'Video Conference',
      invitesSent: [
        { name: 'Agent', email: 'agent@atc.com', role: 'Support Agent' },
      ],
      briefingCreated: true,
      briefingItems: [
        'Performance metrics for last 30 days',
        'Recent tickets handled',
        'Customer feedback summary',
        'Development goals discussion',
      ],
    },
  },

  // Q11: Capacity Planning
  {
    id: 'q11-capacity-planning',
    triggers: ['capacity planning', 'resource planning', 'team planning', 'forecast capacity'],
    userQuery: 'Show me capacity planning for next quarter.',
    aiResponse: "Here's the team capacity planning analysis for Q1 resource allocation:",
    widgetType: 'team-workload-dashboard',
    widgetData: teamWorkloadDashboardDemo,
  },

  // Q12: Escalation Trends
  {
    id: 'q12-escalation-trends',
    triggers: ['escalation trends', 'escalation analysis', 'escalation root cause'],
    userQuery: 'Show me escalation trends and root cause analysis.',
    aiResponse: "Here's the escalation trend analysis with root cause identification:",
    widgetType: 'analytics-dashboard',
    widgetData: {
      ticketVolume: [
        { date: 'Dec 13', tickets: 45 },
        { date: 'Dec 14', tickets: 52 },
        { date: 'Dec 15', tickets: 48 },
        { date: 'Dec 16', tickets: 55 },
        { date: 'Dec 17', tickets: 50 },
        { date: 'Dec 18', tickets: 47 },
        { date: 'Dec 19', tickets: 49 },
      ],
      responseTime: [
        { hour: '9am', avgMinutes: 12 },
        { hour: '11am', avgMinutes: 15 },
        { hour: '1pm', avgMinutes: 20 },
        { hour: '3pm', avgMinutes: 18 },
        { hour: '5pm', avgMinutes: 14 },
      ],
      resolution: {
        resolved: 156,
        pending: 32,
        escalated: 15,
      },
    },
  },
];

/**
 * Find best matching conversation entry for ATC Manager queries using scoring algorithm
 */
export function findBestMatch(userInput: string): ConversationEntry | null {
  const normalizedInput = userInput.toLowerCase().trim();

  const scoredMatches = conversationEntries
    .map((entry) => {
      const matchedTriggers = entry.triggers.filter((trigger) =>
        normalizedInput.includes(trigger.toLowerCase())
      );

      if (matchedTriggers.length === 0) return null;

      // Score calculation:
      // - Longer trigger phrases score higher (more specific)
      // - Multiple matches boost score by 10 per match
      const score =
        matchedTriggers.reduce((sum, trigger) => sum + trigger.length, 0) +
        matchedTriggers.length * 10;

      return { entry, score, matchCount: matchedTriggers.length };
    })
    .filter((match) => match !== null);

  if (scoredMatches.length === 0) return null;

  // Sort by score descending and return highest match
  scoredMatches.sort((a, b) => b!.score - a!.score);
  return scoredMatches[0]!.entry;
}
