import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ ok: true, service: 'agentic-cdf3fc3a', time: new Date().toISOString() });
}
