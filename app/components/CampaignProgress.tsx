'use client'

import { useState, useEffect } from 'react'
import { Users, Clock, Target } from 'lucide-react'

interface CampaignData {
  total: number
  donors: number
  goal: number
  daysLeft: number
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
  const [data, setData] = useState<CampaignData>({
    total: 0,
    donors: 0,
    goal: 25000000,
    daysLeft: 30,
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
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-2xl mx-auto">
      {/* Goal Header */}
      <div className="flex items-center gap-2 mb-4">
        <Target className="w-5 h-5 text-terracotta" />
        <h3 className="text-lg font-semibold text-earth-brown">
          Feed 1000+ Cows for 1 Year
        </h3>
      </div>

      {/* Amount Raised + Goal on right */}
      <div className="flex justify-between items-baseline mb-2">
        <div>
          <span className="text-3xl sm:text-4xl font-bold text-terracotta">
            ₹{formatIndianNumber(data.total)}
          </span>
          <span className="text-gray-600 ml-2">raised</span>
        </div>
        <div className="text-right">
          <span className="text-3xl sm:text-4xl font-bold text-terracotta">
            ₹{formatIndianNumber(data.goal)}
          </span>
          <span className="text-gray-600 ml-2">goal</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-terracotta to-sacred-orange rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${Math.max(1, data.percentFunded)}%` }}
        />
      </div>

      {/* Stats Row */}
      <div className="flex justify-between items-center text-sm sm:text-base">
        <div className="flex items-center gap-4">
          {/* Percent */}
          <span className="font-semibold text-terracotta">
            {data.percentFunded}% funded
          </span>

          {/* Donors */}
          <div className="flex items-center gap-1 text-gray-600">
            <Users className="w-4 h-4" />
            <span>{data.donors} {data.donors === 1 ? 'donor' : 'donors'}</span>
          </div>
        </div>

        {/* Days Left */}
        <div className="flex items-center gap-1 text-gray-600">
          <Clock className="w-4 h-4" />
          <span className={data.daysLeft <= 7 ? 'text-red-500 font-semibold' : ''}>
            {data.daysLeft} days left
          </span>
        </div>
      </div>

      {/* Urgency Message */}
      {data.daysLeft <= 7 && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-center">
          <p className="text-red-600 font-medium">
            Only {data.daysLeft} days remaining! Help us reach our goal.
          </p>
        </div>
      )}

      {/* Loading Skeleton */}
      {loading && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center rounded-2xl">
          <div className="animate-pulse text-gray-400">Loading...</div>
        </div>
      )}
    </div>
  )
}
