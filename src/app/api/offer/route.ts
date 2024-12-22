import { Offer } from '@/types/api';
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_API_KEY!,
      'x-api-secret': process.env.NEXT_PUBLIC_API_SECRET!,
    },
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data.offers as Offer);
}
