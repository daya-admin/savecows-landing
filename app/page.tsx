'use client'

import { useRef } from 'react'
import { Heart, Mail, MessageCircle, Send, Shield, Check } from 'lucide-react'
import { RAZORPAY_DONATE_URL, CONTACTS, TRUST_NAME, DONATION_TIERS } from '@/lib/constants'

export default function Home() {
  const donationRef = useRef<HTMLDivElement>(null)

  const scrollToDonation = () => {
    donationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onDonateClick={scrollToDonation} />

      {/* Quick Impact */}
      <QuickImpact />

      {/* Donation Section */}
      <div ref={donationRef}>
        <DonationSection />
      </div>

      {/* Story Section */}
      <StorySection />

      {/* Quote Section */}
      <QuoteSection />

      {/* International Support */}
      <InternationalSupport />

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Button */}
      <StickyDonateButton onClick={scrollToDonation} />
    </div>
  )
}

function HeroSection({ onDonateClick }: { onDonateClick: () => void }) {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1565346156504-91cca27d6e62?auto=format&fit=crop&w=1920&q=80"
          alt="Sacred cows"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight font-bold">
          Protect Sacred Life.
          <br />
          Nourish the Future.
        </h1>

        <div className="inline-block px-6 py-2 mb-6 rounded-full bg-amber-500/20 border-2 border-amber-400">
          <p className="text-lg sm:text-xl text-amber-200 tracking-wide">
            Save Cow Save Earth
          </p>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          Help us provide a full year of nourishment for rescued and protected cows.
        </p>

        <button
          onClick={onDonateClick}
          className="btn-primary text-base sm:text-lg px-8 py-4 inline-flex items-center gap-2"
        >
          <Heart className="w-5 h-5" />
          Donate Now
        </button>
      </div>
    </section>
  )
}

function QuickImpact() {
  const stats = [
    { number: '150+', label: 'Cows Protected', labelHi: 'गायों की रक्षा' },
    { number: '₹5,000', label: 'Monthly Care Cost', labelHi: 'मासिक देखभाल' },
    { number: '365', label: 'Days of Love', labelHi: 'प्यार के दिन' },
  ]

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-center mb-8 text-earth-brown font-semibold">
          Your Impact
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-terracotta">
                {stat.number}
              </p>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DonationSection() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-warm-beige">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 text-earth-brown font-semibold">
            Support a Cow&apos;s Life
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Caring for one cow costs approximately{' '}
            <span className="text-terracotta font-semibold">₹5,000 per month</span>.
          </p>
        </div>

        {/* Donation Tiers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {DONATION_TIERS.map((tier) => (
            <div
              key={tier.amount}
              className={`bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all cursor-pointer relative ${
                tier.popular ? 'ring-2 ring-terracotta' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-sacred-orange text-white text-xs rounded-full">
                  Popular
                </div>
              )}
              <p className="text-2xl sm:text-3xl font-bold text-terracotta-dark">
                ₹{tier.amount.toLocaleString('en-IN')}
              </p>
              <p className="text-sm text-gray-600 mt-2">{tier.label}</p>
            </div>
          ))}
        </div>

        {/* Emotional Quote */}
        <div className="text-center mb-8">
          <p className="text-base sm:text-lg italic text-earth-brown">
            &quot;You can take care of a life, even for a single day.&quot;
          </p>
        </div>

        {/* CTA Button - Links to Razorpay */}
        <div className="text-center">
          <a
            href={RAZORPAY_DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base sm:text-lg px-10 py-4 inline-flex items-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Donate via Razorpay
          </a>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
            <Shield className="w-4 h-4 text-terracotta" />
            <span>Secure payment powered by Razorpay</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-center mb-6 text-earth-brown font-semibold">
          Every Cow Has a Story
        </h2>
        <div className="prose prose-lg mx-auto text-gray-700 text-center">
          <p>
            Our Gaushala provides shelter, food, and medical care to abandoned and injured cows.
            Many of these gentle souls have been rescued from the streets, where they faced
            starvation and mistreatment.
          </p>
          <p className="mt-4">
            With your support, we can continue to provide them with a safe haven where they
            can live out their days in peace and dignity.
          </p>
        </div>
      </div>
    </section>
  )
}

function QuoteSection() {
  return (
    <section className="py-12 px-4 bg-spiritual-cream">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="text-xl sm:text-2xl md:text-3xl italic text-earth-brown">
          &quot;The cow is the mother of all civilization.&quot;
        </blockquote>
        <p className="mt-4 text-gray-600">— Indian Wisdom</p>
      </div>
    </section>
  )
}

function InternationalSupport() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACTS.email,
      href: `mailto:${CONTACTS.email}`,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: CONTACTS.phone,
      href: `https://wa.me/${CONTACTS.whatsapp}`,
    },
    {
      icon: Send,
      label: 'Telegram',
      value: `@${CONTACTS.telegram}`,
      href: `https://t.me/${CONTACTS.telegram}`,
    },
  ]

  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl mb-3 text-earth-brown font-semibold">
          International Donors
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          For donations from outside India, please contact us for alternative payment methods.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-spiritual-cream rounded-xl hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3">
                <contact.icon className="w-6 h-6 text-terracotta" />
              </div>
              <p className="font-medium text-earth-brown">{contact.label}</p>
              <p className="text-sm text-gray-600 mt-1">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-4 bg-earth-brown text-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-semibold mb-2">{TRUST_NAME}</p>
        <div className="flex justify-center gap-4 text-sm text-white/70">
          <a href="/legal/privacy" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="/legal/donation" className="hover:text-white">Donation Policy</a>
        </div>
        <p className="mt-4 text-sm text-white/50">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function StickyDonateButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:hidden">
      <button
        onClick={onClick}
        className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2"
      >
        <Heart className="w-5 h-5" />
        Donate Now
      </button>
    </div>
  )
}
