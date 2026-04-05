import { TRUST_NAME } from '@/lib/constants'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-warm-beige py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-earth-brown mb-6">Privacy Policy</h1>

        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            <strong>{TRUST_NAME}</strong> is committed to protecting your privacy.
          </p>

          <h2 className="text-xl font-semibold text-earth-brown mt-6 mb-3">Information We Collect</h2>
          <p>When you make a donation, we collect:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>PAN Number (for tax receipts)</li>
            <li>Aadhaar Number (optional)</li>
          </ul>

          <h2 className="text-xl font-semibold text-earth-brown mt-6 mb-3">How We Use Your Information</h2>
          <p>Your information is used to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process your donation</li>
            <li>Send you donation receipts</li>
            <li>Provide tax-related documentation (80G certificates)</li>
            <li>Keep you updated about our work (with your consent)</li>
          </ul>

          <h2 className="text-xl font-semibold text-earth-brown mt-6 mb-3">Data Security</h2>
          <p>
            Your payment information is processed securely by Razorpay. We do not store
            your card or bank details on our servers.
          </p>

          <h2 className="text-xl font-semibold text-earth-brown mt-6 mb-3">Contact Us</h2>
          <p>
            For any privacy-related questions, please contact us at:{' '}
            <a href="mailto:kamdhenuseva@dayadevraha.com" className="text-terracotta hover:underline">
              kamdhenuseva@dayadevraha.com
            </a>
          </p>
        </div>

        <div className="mt-8 pt-6 border-t">
          <a href="/" className="text-terracotta hover:underline">&larr; Back to Home</a>
        </div>
      </div>
    </div>
  )
}
