import { NextResponse } from 'next/server'

export const runtime = 'edge'

// Campaign configuration
const CAMPAIGN_GOAL = 30000000 // ₹3 Crore = 3,00,00,000
const CAMPAIGN_END_DATE = '2026-05-01T23:59:59+05:30' // 30 days from April 1

export interface CampaignData {
  total: number
  donors: number
  goal: number
  daysLeft: number
  percentFunded: number
  lastDonation?: {
    amount: number
    name: string
    timestamp: string
  }
}

export async function GET() {
  try {
    // Get KV binding
    // @ts-expect-error - KV binding from Cloudflare
    const kv = process.env.CAMPAIGN_DATA as KVNamespace | undefined

    let total = 0
    let donors = 0
    let lastDonation = undefined

    if (kv) {
      const data = await kv.get('campaign', 'json') as {
        total: number
        donors: number
        lastDonation?: { amount: number; name: string; timestamp: string }
      } | null

      if (data) {
        total = data.total
        donors = data.donors
        lastDonation = data.lastDonation
      }
    }

    // Calculate days left
    const endDate = new Date(CAMPAIGN_END_DATE)
    const now = new Date()
    const daysLeft = Math.max(0, Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)))

    // Calculate percent
    const percentFunded = Math.min(100, (total / CAMPAIGN_GOAL) * 100)

    const response: CampaignData = {
      total,
      donors,
      goal: CAMPAIGN_GOAL,
      daysLeft,
      percentFunded: Math.round(percentFunded * 10) / 10, // 1 decimal place
      lastDonation
    }

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
      }
    })

  } catch (error) {
    console.error('Campaign data error:', error)

    // Return defaults on error
    return NextResponse.json({
      total: 0,
      donors: 0,
      goal: CAMPAIGN_GOAL,
      daysLeft: 30,
      percentFunded: 0
    })
  }
}
