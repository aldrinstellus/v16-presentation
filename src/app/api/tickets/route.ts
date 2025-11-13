/**
 * API Route: Fetch Tickets from Supabase Database
 * Provides ticket data formatted for dashboard consumption
 * NO JOINS - Uses only the tickets table as per requirement
 *
 * NOTE: This route is currently disabled as the app uses mock data.
 * The Prisma schema uses 'Task' model, not 'Ticket' model.
 */

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/tickets
 * Returns mock data message - actual implementation disabled
 */
export async function GET(req: NextRequest) {
  return NextResponse.json({
    message: 'This API route is currently disabled. The app uses mock data for demo purposes.',
    tickets: []
  });
}
