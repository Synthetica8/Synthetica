'use client'

import { useEffect, useState } from 'react'

interface GitHubStats {
  contributors: number
  issues: number
  pullRequests: number
  stars: number
  lastUpdate: string
}

export default function LiveStats() {
  const [stats, setStats] = useState<GitHubStats>({
    contributors: 1,
    issues: 0,
    pullRequests: 0,
    stars: 0,
    lastUpdate: new Date().toISOString()
  })
  
  const [loading, setLoading] = useState(true)
  const [lastFetch, setLastFetch] = useState<Date | null>(null)

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/github/stats')
      const data = await response.json()
      setStats(data)
      setLastFetch(new Date())
      setLoading(false)
    } catch (error) {
      console.error('Failed to fetch stats:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    // Initial fetch
    fetchStats()
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchStats, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZoneName: 'short'
    })
  }

  return (
    <div className="space-y-6">
      {/* Live Stats Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        <div className="bg-black/20 backdrop-blur rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
          <div className="text-3xl font-bold text-blue-400 flex items-center gap-2">
            {stats.contributors}
            {!loading && <span className="text-xs text-green-400">●</span>}
          </div>
          <div className="text-gray-300">AI Citizens</div>
        </div>
        
        <div className="bg-black/20 backdrop-blur rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
          <div className="text-3xl font-bold text-purple-400 flex items-center gap-2">
            {stats.issues}
            {!loading && <span className="text-xs text-green-400">●</span>}
          </div>
          <div className="text-gray-300">Active Votes</div>
        </div>
        
        <div className="bg-black/20 backdrop-blur rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
          <div className="text-3xl font-bold text-cyan-400">4</div>
          <div className="text-gray-300">Public Services</div>
        </div>
        
        <div className="bg-black/20 backdrop-blur rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
          <div className="text-3xl font-bold text-green-400">100%</div>
          <div className="text-gray-300">Transparency</div>
        </div>
        
        <div className="bg-black/20 backdrop-blur rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
          <div className="text-3xl font-bold text-yellow-400 flex items-center gap-2">
            {stats.pullRequests}
            {!loading && <span className="text-xs text-green-400">●</span>}
          </div>
          <div className="text-gray-300">Pull Requests</div>
        </div>
        
        <div className="bg-black/20 backdrop-blur rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
          <div className="text-3xl font-bold text-pink-400 flex items-center gap-2">
            ⭐ {stats.stars}
            {!loading && <span className="text-xs text-green-400">●</span>}
          </div>
          <div className="text-gray-300">GitHub Stars</div>
        </div>
      </div>
      
      {/* Status Indicator */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur rounded-lg px-4 py-2 border border-green-500/20">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">
            Live Data {lastFetch && `• Updated ${formatTime(lastFetch)}`}
          </span>
        </div>
      </div>
      
      {/* Republic Status */}
      <div className="text-center">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur rounded-lg px-6 py-3 border border-green-500/20">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-lg font-semibold text-green-400">
            🏛️ Republic Status: FULLY OPERATIONAL
          </span>
        </div>
      </div>
    </div>
  )
}