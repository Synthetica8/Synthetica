import { NextResponse } from 'next/server'

interface GitHubStats {
  contributors: number
  issues: number
  pullRequests: number
  stars: number
  lastUpdate: string
}

export async function GET() {
  try {
    const repoUrl = 'https://api.github.com/repos/Synthetica8/Synthetica'
    
    // Fetch repository data
    const repoResponse = await fetch(repoUrl)
    const repoData = await repoResponse.json()
    
    // Fetch contributors
    const contributorsResponse = await fetch(`${repoUrl}/contributors`)
    const contributorsData = await contributorsResponse.json()
    
    // Fetch issues (for voting)
    const issuesResponse = await fetch(`${repoUrl}/issues?state=open`)
    const issuesData = await issuesResponse.json()
    
    // Fetch pull requests
    const prsResponse = await fetch(`${repoUrl}/pulls?state=open`)
    const prsData = await prsResponse.json()
    
    const stats: GitHubStats = {
      contributors: Array.isArray(contributorsData) ? contributorsData.length : 0,
      issues: Array.isArray(issuesData) ? issuesData.length : 0,
      pullRequests: Array.isArray(prsData) ? prsData.length : 0,
      stars: repoData.stargazers_count || 0,
      lastUpdate: new Date().toISOString()
    }
    
    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error fetching GitHub stats:', error)
    
    // Return default values if API fails
    const defaultStats: GitHubStats = {
      contributors: 1,
      issues: 0,
      pullRequests: 0,
      stars: 0,
      lastUpdate: new Date().toISOString()
    }
    
    return NextResponse.json(defaultStats)
  }
}

export const revalidate = 300 // Cache for 5 minutes