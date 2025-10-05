import React, { useState } from 'react'
import { ChevronDown, ChevronUp, MoreVertical, Laptop } from 'lucide-react'

export default function SidebarCard() {
  const [devicesExpanded, setDevicesExpanded] = useState(true)

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">Pension contributions</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-700 font-medium">Devices</span>
            <button onClick={() => setDevicesExpanded(!devicesExpanded)}>
              {devicesExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>
          </div>
          {devicesExpanded && (
            <div className="ml-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                  <Laptop className="w-4 h-4 text-gray-600" />
                  <div>
                    <div className="text-sm font-medium text-gray-800">MacBook Air</div>
                    <div className="text-xs text-gray-600">Version M1</div>
                  </div>
                </div>
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">Compensation Summary</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">Employee Benefits</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  )
}
