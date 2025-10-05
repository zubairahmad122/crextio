'use client'

import React, { JSX } from 'react'
import Header from '@/components/Header'
import WelcomeSection from '@/components/WelcomeSection'
import ProgressIndicators from '@/components/ProgressIndicators'
import KPIMetrics from '@/components/KPIMetrics'
import UserProfile from '@/components/UserProfile'
import ProgressCard from '@/components/ProgressCard'
import TimeTracker from '@/components/TimeTracker'
import OnboardingCard from '@/components/OnboardingCard'
// import SidebarCard from '@/components/SidebarCard' // Unused component
import CalendarCard from '@/components/CalendarCard'
import PersonContribution from '@/components/PersonContribution'

export default function HRDashboard(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefefe] via-[#f7dba7] to-[#f5f5f5] relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="px-8 pb-8">
        {/* Welcome Section */}
        <WelcomeSection />
        
        {/* Progress Indicators and KPI Section */}
        <div className="flex items-center max-xl:flex-col  justify-center xl:justify-between mb-8">
          <div className="flex-1">
            <ProgressIndicators />
          </div>
          <div className=" xl:ml-8 flex-1">
            <KPIMetrics />
          </div>
        </div>
                
        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            {/* Top Row - Progress, Time Tracker & User Profile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[350px]">
              <UserProfile />
              <ProgressCard />
              <TimeTracker />
            </div>
            
            {/* Bottom Row - Calendar Card & Person Contribution */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[350px]">
              <div className="lg:col-span-1 min-h-[350px]">
                <PersonContribution /> 
              </div>
              <div className="lg:col-span-2 min-h-[350px]">
                <CalendarCard /> 
              </div>
            </div>
          </div>

          {/* Right Sidebar - Onboarding */}
          <div className="col-span-12 lg:col-span-3 min-h-[350px]">
            <OnboardingCard />
          </div>
        </div>
        </main>
    </div>
  )
}