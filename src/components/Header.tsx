import React, { useState, JSX } from 'react'
import { Settings, Search, Bell, Menu, X } from 'lucide-react'
import { NavItem, IconButton } from '@/types'

export default function Header(): JSX.Element {
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Navigation items array
  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'people', label: 'People' },
    { id: 'hiring', label: 'Hiring' },
    { id: 'devices', label: 'Devices' },
    { id: 'apps', label: 'Apps' },
    { id: 'salary', label: 'Salary' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'reviews', label: 'Reviews' },
  ]

  // Icon buttons array
  const iconButtons: IconButton[] = [
    { 
      icon: Settings, 
      label: 'Setting', 
      hasNotification: false,
      component: (Icon, item) => (
        <button 
          key={item.label}
          className="flex items-center space-x-2 bg-[#F6F6F6] hover:bg-gray-200 rounded-full px-5 py-3.5 transition-all"
        >
          <Icon className="w-5 h-5 text-gray-600" />
          <span className="text-sm text-gray-700 font-medium">{item.label}</span>
        </button>
      )
    },
    { 
      icon: Bell, 
      label: 'Notifications', 
      hasNotification: true,
      component: (Icon, item) => (
        <button 
          key={item.label}
          className="relative bg-[#F6F6F6] hover:bg-gray-200 rounded-full p-4 transition-all"
        >
          <Icon className="w-5 h-5 text-gray-600" />
          {item.hasNotification && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          )}
        </button>
      )
    },
    { 
      icon: Search, 
      label: 'Search', 
      hasNotification: false,
      component: (Icon, item) => (
        <button 
          key={item.label}
          className="bg-[#F6F6F6] hover:bg-gray-200 rounded-full p-4 transition-all"
        >
          <Icon className="w-5 h-5 text-gray-600" />
        </button>
      )
    },
  ]

  return (
    <div className="w-full bg-white/10 backdrop-blur-md border-b border-white/20 relative z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <button className="bg-transparent border-1 border-gray-700 rounded-full px-4 md:px-7 py-2 md:py-3 transition-all">
            <span className="font-normal text-base md:text-lg text-gray-800">Crextio</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden bg-[#F6F6F6] hover:bg-gray-200 rounded-full p-3 transition-all"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-gray-600" />
          ) : (
            <Menu className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {/* Desktop Navigation + Icons */}
        <div className="hidden lg:flex items-center py-2 px-6 space-x-4">
          {/* Navigation */}
          <div className="flex items-center bg-[#F6F6F6] rounded-full space-x-1">
            {navItems.map((item) => {
              const isActive = activeNav === item.label
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveNav(item.label)}
                  className={`px-3 xl:px-5 py-3.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            {iconButtons.map((item) => item.component(item.icon, item))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[var(--header-height,80px)] left-0 right-0 bg-gradient-to-br from-[#fefefe]/95 via-[#f7dba7]/95 to-[#f5f5f5]/95 backdrop-blur-xl border-t border-white/20 px-4 py-6 z-40 shadow-xl mobile-menu-overlay">
          {/* Mobile Navigation */}
          <div className="space-y-2 mb-6">
            {navItems.map((item) => {
              const isActive = activeNav === item.label
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveNav(item.label)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-black text-white shadow-lg'
                      : 'text-gray-700 hover:bg-white/50 hover:backdrop-blur-sm'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center justify-center gap-4">
            {iconButtons.map((item) => item.component(item.icon, item))}
          </div>
        </div>
      )}
    </div>
  )
}