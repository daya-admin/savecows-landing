'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { Heart, Mail, MessageCircle, Send, Shield, Check, Globe } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { RAZORPAY_PAGE_URL, CONTACTS, TRUST_NAME, DONATION_TIERS, HERO_IMAGES, IMAGES, QUOTES, LOGO_URL, KAMDHENUSEVA_URL } from '@/lib/constants'
import { useLocale, useSetLocale, useTranslations } from '@/lib/i18n'
import { LOCALES, type Locale } from '@/lib/messages'
import CampaignProgress from './components/CampaignProgress'

export default function Home() {
  const t = useTranslations('SaveCows')
  const donationRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const [showStickyButton, setShowStickyButton] = useState(true)
  const visibilityMap = useRef<Map<Element, boolean>>(new Map())

  const scrollToDonation = () => {
    donationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Hide sticky button when donate buttons are visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          visibilityMap.current.set(entry.target, entry.isIntersecting)
        })
        const anyVisible = Array.from(visibilityMap.current.values()).some(v => v)
        setShowStickyButton(!anyVisible)
      },
      { threshold: 0.1 }
    )

    const refs = [heroRef, donationRef, ctaRef, videoRef]
    refs.forEach(ref => {
      if (ref.current) {
        visibilityMap.current.set(ref.current, false)
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef}>
        <HeroSection onDonateClick={scrollToDonation} />
      </div>

      {/* Campaign Progress */}
      <section className="py-8 px-4 relative z-20">
        <h2 className="text-2xl sm:text-3xl text-center mb-6 text-terracotta font-semibold">
          {t('campaign.togetherTitle')}
        </h2>
        <CampaignProgress />
      </section>


      {/* Donation Section */}
      <div ref={donationRef}>
        <DonationSection />
      </div>

      {/* Story Section */}
      <StorySection />

      {/* Call to Action - Appeals */}
      <div ref={ctaRef}>
        <CallToActionSection onDonateClick={scrollToDonation} />
      </div>

      {/* Quote Section */}
      <QuoteSection />

      {/* Urgent Appeal */}
      <UrgentAppeal />

      {/* Where Donations Go */}
      <WhereDonationsGo />

      {/* Video Section */}
      <div ref={videoRef}>
        <VideoSection onDonateClick={scrollToDonation} />
      </div>

      {/* Adopt Cows Section */}
      <AdoptCowsSection />

      {/* International Support */}
      <InternationalSupport />

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Button */}
      <StickyDonateButton onClick={scrollToDonation} visible={showStickyButton} />
    </div>
  )
}

function HeroSection({ onDonateClick }: { onDonateClick: () => void }) {
  const t = useTranslations('SaveCows.hero')
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
      {/* Language Switcher */}
      <LanguageSwitcher />

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
          {t('title1')}
          <br />
          {t('title2')}
        </h1>

        <div className="inline-block px-6 py-2 mb-6 rounded-full bg-amber-500/20 border-2 border-amber-400">
          <p className="text-lg sm:text-xl text-amber-200 tracking-wide">
            {t('badge')}
          </p>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
          {t('subtitleBefore')} <strong>{t('subtitleBold')}</strong> {t('subtitleAfter')}
        </p>

        <button
          onClick={onDonateClick}
          className="btn-primary text-base sm:text-lg px-8 py-4 inline-flex items-center gap-2"
        >
          <Heart className="w-5 h-5" />
          {t('donateNow')}
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

function DonationSection() {
  const t = useTranslations('SaveCows.donation')
  const [selectedAmount, setSelectedAmount] = useState<number>(5000)
  const [customAmount, setCustomAmount] = useState<string>('')
  const [isCustom, setIsCustom] = useState<boolean>(false)

  const tierLabels: Record<number, string> = {
    500: t('tierDays3'),
    1000: t('tierWeek'),
    5000: t('tierMonth'),
    10000: t('tierMultiple'),
  }

  const handleCustomAmountChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '')
    setCustomAmount(numericValue)

    if (numericValue) {
      const amount = parseInt(numericValue, 10)
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
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            {t('costInfo')}{' '}
            <span className="text-terracotta font-semibold">{t('costAmount')}</span>.
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
                    {t('popular')}
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
                <p className="text-sm text-gray-600 mt-2">{tierLabels[tier.amount] ?? tier.label}</p>
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
              {t('customLabel')}
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400">₹</span>
              <input
                type="text"
                inputMode="numeric"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                placeholder={t('customPlaceholder')}
                className="w-full pl-10 pr-4 py-3 text-xl text-center border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta focus:border-transparent"
              />
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              {t('customRange')}
            </p>
          </div>
        </div>

        {/* Emotional Quote */}
        <div className="text-center mb-8">
          <p className="text-base sm:text-lg italic text-earth-brown">
            &quot;{t('quote')}&quot;
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
            {t('donateAmount', { amount: selectedAmount.toLocaleString('en-IN') })}
          </a>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
            <Shield className="w-4 h-4 text-terracotta" />
            <span>{t('securePayment')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function StorySection() {
  const t = useTranslations('SaveCows.story')

  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* About Our Goshala */}
        <h2 className="text-2xl sm:text-3xl text-center mb-8 text-earth-brown font-semibold">
          {t('aboutTitle')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={IMAGES.aboutGoshala}
              alt="Cows at Shri Devraha Baba Gaushala"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div className="prose prose-lg text-gray-700">
            <p>{t('aboutP1')}</p>
            <p className="mt-4">{t('aboutP2')}</p>
          </div>
        </div>

        {/* Why We Care */}
        <div className="bg-spiritual-cream rounded-2xl p-8 mb-16">
          <h3 className="text-xl sm:text-2xl text-center mb-6 text-earth-brown font-semibold">
            {t('whyCareTitle')}
          </h3>
          <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg leading-relaxed">
            <p>{t('whyCareText')}</p>
          </div>
        </div>

        {/* Preserving Rare Breeds */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl text-center mb-6 text-earth-brown font-semibold">
            {t('rareBreedsTitle')}
          </h3>
          <p className="prose prose-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
            {t('rareBreedsText')}
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={IMAGES.rareBreed1}
                alt="Rare cow breed at our Goshala"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={IMAGES.rareBreed2}
                alt="Rare cow breed at our Goshala"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Ecological Significance */}
        <h3 className="text-xl sm:text-2xl text-center mb-6 text-earth-brown font-semibold">
          {t('ecologicalTitle')}
        </h3>
        <p className="prose prose-lg text-gray-700 max-w-3xl mx-auto text-center mb-8">
          {t('ecologicalSubtitle')}
        </p>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <h4 className="font-semibold text-terracotta mb-2">{t('biogas')}</h4>
            <p className="text-sm text-gray-600">{t('biogasDesc')}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <h4 className="font-semibold text-terracotta mb-2">{t('zeroWaste')}</h4>
            <p className="text-sm text-gray-600">{t('zeroWasteDesc')}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <h4 className="font-semibold text-terracotta mb-2">{t('stoneGrinding')}</h4>
            <p className="text-sm text-gray-600">{t('stoneGrindingDesc')}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <h4 className="font-semibold text-terracotta mb-2">{t('ayurveda')}</h4>
            <p className="text-sm text-gray-600">{t('ayurvedaDesc')}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center sm:col-span-2">
            <h4 className="font-semibold text-terracotta mb-2">{t('foundation')}</h4>
            <p className="text-sm text-gray-600">{t('foundationDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CallToActionSection({ onDonateClick }: { onDonateClick: () => void }) {
  const t = useTranslations('SaveCows.cta')
  const appeals = [
    { icon: Shield, text: t('protect') },
    { icon: Heart, text: t('sustain') },
    { icon: Globe, text: t('support') },
  ]

  return (
    <section className="py-8 px-4 bg-gradient-to-r from-spiritual-cream to-warm-beige">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8">
          {appeals.map((appeal, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                <appeal.icon className="w-5 h-5 text-terracotta" />
              </div>
              <span className="text-gray-700 text-sm sm:text-base">{appeal.text}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={onDonateClick}
            className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2"
          >
            <Heart className="w-5 h-5" />
            {t('donateNow')}
          </button>
        </div>
      </div>
    </section>
  )
}

function UrgentAppeal() {
  const t = useTranslations('SaveCows.urgentAppeal')

  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-terracotta/10 to-sacred-orange/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={IMAGES.urgentAppeal}
              alt="Spring Feed Purchase"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl mb-6 text-earth-brown font-semibold">
              {t('title')}
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>{t('text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhereDonationsGo() {
  const t = useTranslations('SaveCows.whereDonationsGo')

  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={IMAGES.donationsGo}
                alt="Cow feed and care"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
          <div className="md:order-1">
            <h2 className="text-2xl sm:text-3xl mb-6 text-earth-brown font-semibold">
              {t('title')}
            </h2>
            <div className="prose prose-lg text-gray-700">
              <p>{t('intro')}</p>
              <ul className="mt-4 space-y-2">
                <li><strong>{t('busa')}</strong> — {t('busaDesc')}</li>
                <li><strong>{t('khal')}</strong> — {t('khalDesc')}</li>
                <li><strong>{t('grains')}</strong> — {t('grainsDesc')}</li>
              </ul>
              <p className="mt-4">{t('completeDiet')}</p>
            </div>
          </div>
        </div>

        {/* Trust and Assurance */}
        <div className="mt-12 bg-spiritual-cream rounded-2xl p-8">
          <h3 className="text-xl sm:text-2xl text-center mb-6 text-earth-brown font-semibold">
            {t('trustTitle')}
          </h3>
          <div className="prose prose-lg text-gray-700 max-w-3xl mx-auto text-center">
            <p>{t('trustText')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function VideoSection({ onDonateClick }: { onDonateClick: () => void }) {
  const t = useTranslations('SaveCows.video')
  const locale = useLocale()
  const mainVideoId = locale === 'ru' ? 'QshfBzEM_RI' : '5IkJvS9RCyI'

  return (
    <section className="py-12 sm:py-16 px-4 bg-earth-brown text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 font-semibold">
          {t('title')}
        </h2>

        {/* Videos — landscape + shorts side by side */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-center md:items-stretch">
          {/* Main Video — takes remaining space */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${mainVideoId}`}
              title="Gau Seva Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          {/* Shorts Video — fixed narrow width */}
          <div className="w-64 sm:w-72 md:w-48 lg:w-56 shrink-0 aspect-[9/16] rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/eqMPyaQaxi0"
              title="Gau Seva Shorts"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        <button
          onClick={onDonateClick}
          className="bg-terracotta hover:bg-terracotta-dark text-white text-lg px-10 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:scale-105"
        >
          <Heart className="w-5 h-5" />
          {t('donateNow')}
        </button>
      </div>
    </section>
  )
}

function AdoptCowsSection() {
  const t = useTranslations('SaveCows.adopt')

  return (
    <section className="py-12 sm:py-16 px-4 bg-warm-beige">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={IMAGES.adoptCow}
              alt="Beautiful cow at our Goshala"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl mb-4 text-terracotta font-semibold">
              {t('title')}
            </h2>
            <p className="text-gray-700 mb-4">{t('p1')}</p>
            <p className="text-gray-700 mb-6">{t('p2')}</p>
            <a
              href="https://kamdhenuseva.dayadevraha.com/en/donate/cows"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta hover:text-terracotta-dark underline underline-offset-2 transition-colors"
            >
              {t('link')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuoteSection() {
  const locale = useLocale()
  const localeQuotes = QUOTES[locale] ?? QUOTES.en
  const [quote, setQuote] = useState(localeQuotes[0])

  useEffect(() => {
    const q = QUOTES[locale] ?? QUOTES.en
    setQuote(q[Math.floor(Math.random() * q.length)])
  }, [locale])

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-1 bg-gray-300 mx-auto mb-8" />
        <blockquote className="text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed font-medium">
          <span className="text-gray-300 font-serif">&ldquo;</span>
          {quote.text}
          <span className="text-gray-300 font-serif">&rdquo;</span>
        </blockquote>
        <p className="mt-6 text-gray-500">— {quote.source}</p>
      </div>
    </section>
  )
}

function InternationalSupport() {
  const t = useTranslations('SaveCows.international')
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
    {
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 16.611h-1.744c-.66 0-.862-.523-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.563c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.673 4 8.249c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.49 2.27 4.675 2.862 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.716-.576.716z"/>
        </svg>
      ),
      label: 'VK',
      value: `vk.com/${CONTACTS.vk}`,
      href: `https://vk.com/${CONTACTS.vk}`,
    },
  ]

  return (
    <section className="py-12 sm:py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl mb-3 text-earth-brown font-semibold">
          {t('title')}
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          {t('subtitle')}
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-spiritual-cream rounded-xl hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mx-auto mb-3">
                <contact.icon className="w-6 h-6 text-terracotta" />
              </div>
              <p className="font-medium text-earth-brown">{contact.label}</p>
              <p className="text-xs text-gray-600 mt-1 break-all">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const t = useTranslations('SaveCows.footer')

  const quickLinks = [
    { name: t('home'), href: KAMDHENUSEVA_URL },
    { name: t('aboutUs'), href: `${KAMDHENUSEVA_URL}/about` },
    { name: t('donate'), href: `${KAMDHENUSEVA_URL}/donate` },
    { name: t('adoptCow'), href: `${KAMDHENUSEVA_URL}/donate/cows` },
    { name: t('gallery'), href: `${KAMDHENUSEVA_URL}/gallery` },
    { name: t('faq'), href: `${KAMDHENUSEVA_URL}/faq` },
  ]

  const contactInfo = [
    { icon: Mail, label: CONTACTS.email, href: `mailto:${CONTACTS.email}` },
    { icon: MessageCircle, label: CONTACTS.phone, href: `https://wa.me/${CONTACTS.whatsapp}` },
  ]

  return (
    <footer className="py-10 px-4 bg-earth-brown text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <a href={KAMDHENUSEVA_URL} target="_blank" rel="noopener noreferrer" className="inline-block mb-4">
              <img src={LOGO_URL} alt="Kamdhenuseva" className="h-24 w-24 object-contain" />
            </a>
            <p className="text-white/80 text-sm leading-relaxed">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('contact')}</h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <Globe className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/place/Yogiraj+Devraha+Baba+(Samadhi+sthal+and+Ashram)/@27.5882824,77.7155146,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Shri Devraha Baba Ashram<br />Vrindavan, Yamuna Tat,<br />Post-Dangoli,<br />(Tahshil-Mant), Mathura,<br />Uttar Pradesh - 281202
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/legal/privacy" className="text-white/80 hover:text-white transition-colors text-sm">
                  {t('privacy')}
                </a>
              </li>
              <li>
                <a href="/legal/donation" className="text-white/80 hover:text-white transition-colors text-sm">
                  {t('donationPolicy')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} {TRUST_NAME}. {t('allRights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

const LOCALE_CONFIG: Record<Locale, { flag: string; label: string; short: string }> = {
  en: { flag: '🇬🇧', label: 'English', short: 'EN' },
  ru: { flag: '🇷🇺', label: 'Русский', short: 'RU' },
  hi: { flag: '🇮🇳', label: 'हिंदी', short: 'HI' },
}

function LanguageSwitcher() {
  const locale = useLocale()
  const setLocale = useSetLocale()
  const [open, setOpen] = useState(false)

  const current = LOCALE_CONFIG[locale] ?? LOCALE_CONFIG.en

  const switchLocale = (next: Locale) => {
    setLocale(next)
    setOpen(false)
  }

  return (
    <div className="absolute top-4 right-4 z-20">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 shadow-lg backdrop-blur text-earth-brown text-sm font-medium hover:bg-white transition-all"
      >
        <span className="text-base">{current.flag}</span>
        <span>{current.short}</span>
        <svg className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 min-w-[160px] bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
          {LOCALES.map(l => {
            const config = LOCALE_CONFIG[l]
            const isActive = l === locale
            return (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`flex items-center gap-3 w-full px-4 py-3 text-sm text-left transition-colors ${
                  isActive ? 'bg-warm-beige text-terracotta font-medium' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg">{config.flag}</span>
                <span>{config.label}</span>
                {isActive && <Check className="w-4 h-4 ml-auto text-terracotta" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

function StickyDonateButton({ onClick, visible }: { onClick: () => void; visible: boolean }) {
  const t = useTranslations('SaveCows.hero')

  return (
    <div className={`fixed bottom-4 left-4 right-4 z-50 sm:hidden transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
      <button
        onClick={onClick}
        className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2"
      >
        <Heart className="w-5 h-5" />
        {t('donateNow')}
      </button>
    </div>
  )
}
