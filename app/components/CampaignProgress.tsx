'use client'

import { useState, useEffect } from 'react'
import { Users, Target } from 'lucide-react'
import { useTranslations } from '@/lib/i18n'

interface CampaignData {
  total: number
  donors: number
  percentFunded: number
}

function formatIndianNumber(num: number): string {
  if (num >= 10000000) {
    return `${(num / 10000000).toFixed(1)} Cr`
  } else if (num >= 100000) {
    return `${(num / 100000).toFixed(1)} L`
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`
  }
  return num.toLocaleString('en-IN')
}

export default function CampaignProgress() {
  const t = useTranslations('SaveCows.campaign')
  const [data, setData] = useState<CampaignData>({
    total: 0,
    donors: 0,
    percentFunded: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/campaign')
      .then(res => res.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-2xl mx-auto">
      {/* Goal Header */}
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-5 h-5 text-terracotta" />
        <h3 className="text-lg font-semibold text-earth-brown">
          {t('goalTitle')}
        </h3>
      </div>

      {/* Amount Raised */}
      <div className="mb-3">
        <span className="text-3xl sm:text-4xl font-bold text-terracotta">
          ₹{formatIndianNumber(data.total)}
        </span>
        <span className="text-sm sm:text-base text-gray-600 ml-2">{t('raised')}</span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-terracotta to-sacred-orange rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${Math.max(1, data.percentFunded)}%` }}
        />
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 items-center gap-3 text-sm sm:text-base">
        {/* Percent */}
        <span className="font-semibold text-terracotta">
          {data.percentFunded}% {t('funded')}
        </span>

        {/* Donors */}
        <div className="flex items-center justify-end gap-1 text-gray-600">
          <Users className="w-4 h-4" />
          <span>{data.donors} {data.donors === 1 ? t('donor') : t('donors')}</span>
        </div>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center rounded-2xl">
          <div className="animate-pulse text-gray-400">{t('loading')}</div>
        </div>
      )}
    </div>
  )
}
