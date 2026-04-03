import { NextRequest, NextResponse } from 'next/server'

// Razorpay webhook handler
// Receives payment.captured events and updates KV store

export const runtime = 'edge'

interface RazorpayPayment {
  entity: {
    id: string
    amount: number // in paise
    currency: string
    status: string
    method: string
    email: string
    contact: string
    notes: Record<string, string>
  }
}

interface RazorpayWebhookPayload {
  event: string
  payload: {
    payment: RazorpayPayment
  }
}

// HMAC-SHA256 using Web Crypto API
async function verifySignature(body: string, signature: string, secret: string): Promise<boolean> {
  const encoder = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )

  const signatureBytes = await crypto.subtle.sign('HMAC', key, encoder.encode(body))
  const expectedSignature = Array.from(new Uint8Array(signatureBytes))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')

  return signature === expectedSignature
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-razorpay-signature')

    // Verify webhook signature
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET
    if (!webhookSecret) {
      console.error('RAZORPAY_WEBHOOK_SECRET not configured')
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    if (!signature || !(await verifySignature(body, signature, webhookSecret))) {
      console.error('Invalid webhook signature')
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    const payload: RazorpayWebhookPayload = JSON.parse(body)

    // Only process successful payments
    if (payload.event !== 'payment.captured') {
      return NextResponse.json({ message: 'Event ignored' }, { status: 200 })
    }

    const payment = payload.payload.payment.entity
    const amountInRupees = payment.amount / 100

    // Get KV binding (Cloudflare Pages)
    // @ts-expect-error - KV binding from Cloudflare
    const kv = process.env.CAMPAIGN_DATA as KVNamespace | undefined

    if (!kv) {
      console.error('KV namespace not bound')
      return NextResponse.json({ error: 'KV not configured' }, { status: 500 })
    }

    // Get current totals
    const currentData = await kv.get('campaign', 'json') as {
      total: number
      donors: number
      lastDonation?: { amount: number; name: string; timestamp: string }
    } | null

    const newTotal = (currentData?.total || 0) + amountInRupees
    const newDonors = (currentData?.donors || 0) + 1

    // Update KV
    await kv.put('campaign', JSON.stringify({
      total: newTotal,
      donors: newDonors,
      lastDonation: {
        amount: amountInRupees,
        name: payment.notes?.donor_name || 'Anonymous',
        timestamp: new Date().toISOString()
      },
      lastUpdated: new Date().toISOString()
    }))

    console.log(`Payment processed: ₹${amountInRupees}, Total: ₹${newTotal}, Donors: ${newDonors}`)

    return NextResponse.json({
      success: true,
      total: newTotal,
      donors: newDonors
    })

  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

// Health check
export async function GET() {
  return NextResponse.json({ status: 'Webhook endpoint ready' })
}
