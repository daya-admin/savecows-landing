'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { Heart, Mail, MessageCircle, Send, Shield, Check } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { RAZORPAY_PAGE_URL, CONTACTS, TRUST_NAME, DONATION_TIERS, HERO_IMAGES, IMAGES, QUOTES } from '@/lib/constants'
import CampaignProgress from './components/CampaignProgress'

export default function Home() {
  const donationRef = useRef<HTMLDivElement>(null)

  const scrollToDonation = () => {
    donationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection onDonateClick={scrollToDonation} />

      {/* Campaign Progress */}
      <section className="py-8 px-4 bg-gradient-to-b from-black/20 to-transparent -mt-32 pt-36 relative z-20">
        <CampaignProgress />
      </section>

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {HERO_IMAGES.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
              <img
                src={image}
                alt={`Shri Devraha Baba Gaushala ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

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

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
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
  const [selectedAmount, setSelectedAmount] = useState<number>(5000)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [isCustom, setIsCustom] = useState<boolean>(false)

  const handleCustomAmountChange = (value: string) => {
    // Allow only numbers
    const numericValue = value.replace(/[^0-9]/g, '')
    setCustomAmount(numericValue)

    if (numericValue) {
      const amount = parseInt(numericValue, 10)
      // Limit: min 100, max 200000 (2 lakh)
      if (amount >= 100 && amount <= 200000) {
        setSelectedAmount(amount)
        setIsCustom(true)
      }
    }
  }

  const selectTier = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount('')
    setIsCustom(false)
  }

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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {DONATION_TIERS.map((tier) => {
            const isSelected = !isCustom && selectedAmount === tier.amount
            return (
              <div
                key={tier.amount}
                onClick={() => selectTier(tier.amount)}
                className={`bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all cursor-pointer relative ${
                  isSelected
                    ? 'ring-2 ring-terracotta scale-105'
                    : tier.popular
                    ? 'ring-1 ring-terracotta/30'
                    : ''
                }`}
              >
                {tier.popular && !isSelected && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-sacred-orange text-white text-xs rounded-full">
                    Popular
                  </div>
                )}
                {isSelected && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 bg-terracotta rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
                <p className="text-2xl sm:text-3xl font-bold text-terracotta-dark">
                  ₹{tier.amount.toLocaleString('en-IN')}
                </p>
                <p className="text-sm text-gray-600 mt-2">{tier.label}</p>
              </div>
            )
          })}
        </div>

        {/* Custom Amount Input */}
        <div className="max-w-md mx-auto mb-8">
          <div className={`bg-white rounded-xl p-4 shadow-md transition-all ${
            isCustom ? 'ring-2 ring-terracotta' : ''
          }`}>
            <label className="block text-sm text-gray-600 mb-2 text-center">
              Or enter a custom amount:
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400">₹</span>
              <input
                type="text"
                inputMode="numeric"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                placeholder="Enter amount"
                className="w-full pl-10 pr-4 py-3 text-xl text-center border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Min ₹100 · Max ₹2,00,000
            </p>
          </div>
        </div>

        {/* Selected Amount Display */}
        <div className="text-center mb-6">
          <p className="text-lg text-earth-brown">
            Selected: <span className="font-bold text-terracotta">₹{selectedAmount.toLocaleString('en-IN')}</span>
          </p>
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
            href={`${RAZORPAY_PAGE_URL}?amount=${selectedAmount}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base sm:text-lg px-10 py-4 inline-flex items-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Donate ₹{selectedAmount.toLocaleString('en-IN')}
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
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl text-center mb-8 text-earth-brown font-semibold">
          Every Cow Has a Story
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={IMAGES.aboutAshram}
              alt="Cows at Gaushala"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div className="prose prose-lg text-gray-700">
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
      </div>
    </section>
  )
}

function QuoteSection() {
  const [quote, setQuote] = useState(QUOTES[0])

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)])
  }, [])

  return (
    <section className="py-12 px-4 bg-spiritual-cream">
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="text-xl sm:text-2xl md:text-3xl italic text-earth-brown">
          &quot;{quote.text}&quot;
        </blockquote>
        <p className="mt-4 text-gray-600">— {quote.source}</p>
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
