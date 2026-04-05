import { TRUST_NAME } from '@/lib/constants'

export default function DonationPolicy() {
  return (
    <div className="min-h-screen bg-warm-beige py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-earth-brown mb-6">Donation Policy</h1>

        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Thank you for considering a donation to <strong>{TRUST_NAME}</strong>.
          </p>

          <h2 className="text-xl font-semibold text-earth-brown mt-6 mb-3">Use of Donations</h2>
          <p>All donations are used for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Daily food and fodder for cows</li>
            <li>Medical care and veterinary services</li>
            <li>Shelter maintenance and improvement</li>
            <li>Staff salaries for caretakers</li>
            <li>Emergency rescue operations</li>
          </ul>

          <h2 className="text-xl font-semibold text-earth-brown mt-6 mb-3">Tax Benefits</h2>
          <p>
            Donations are eligible for tax deduction under Section 80G of the Income Tax Act.
            You will receive a tax receipt for donations of ₹500 or more.
          </p>
          <p className="mt-2">
            <strong>Note:</strong> PAN is mandatory for claiming tax benefits on donations
            exceeding ₹50,000.
          </p>

          <h2 className="text-xl font-semibold text-earth-brown mt-6 mb-3">Refund Policy</h2>
          <p>
            Donations once made are non-refundable. In case of accidental double payment
            or technical error, please contact us within 7 days at{' '}
            <a href="mailto:kamdhenuseva@dayadevraha.com" className="text-terracotta hover:underline">
              kamdhenuseva@dayadevraha.com
            </a>.
          </p>

          <h2 className="text-xl font-semibold text-earth-brown mt-6 mb-3">Payment Methods</h2>
          <p>We accept donations through:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>UPI (Google Pay, PhonePe, Paytm, etc.)</li>
            <li>Credit/Debit Cards (Visa, Mastercard, RuPay)</li>
            <li>Net Banking</li>
            <li>Wallets</li>
          </ul>

          <h2 className="text-xl font-semibold text-earth-brown mt-6 mb-3">International Donations</h2>
          <p>
            For donations from outside India, please contact us directly via WhatsApp or
            Telegram for alternative payment arrangements.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t">
          <a href="/" className="text-terracotta hover:underline">&larr; Back to Home</a>
        </div>
      </div>
    </div>
  )
}
