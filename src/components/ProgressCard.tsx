import React, { JSX } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ProgressCard(): JSX.Element {
  const weeklyData = [
    { day: 'S', height: 105, isActive: false },
    { day: 'M', height: 75, isActive: false },
    { day: 'T', height: 40, isActive: false },
    { day: 'W', height: 30, isActive: false },
    { day: 'T', height: 82, isActive: false },
    { day: 'F', height: 55, isActive: true },
    { day: 'S', height: 38, isActive: false },
  ]

  return (
    <div className="bg-gradient-to-br from-[#fefefe] via-[#fcf2df] to-[#fff1d7] rounded-4xl justify-between p-6 shadow-xl h-full min-h-[350px] flex flex-col">
      {/* Header with title and arrow */}
      <div className="flex items pt-3 items-center justify-between mb-2">
        <h3 className="text-4xl font-normal text-black">Progress</h3>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <ArrowRight className="w-6 -rotate-40 h-6 text-black" />
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-between mt-4">
        <div className="flex items-center gap-2">
          <div className="text-5xl font-normal text-black mb-2">6.1 h</div>
          <p className="text-base text-black max-w-[100px] font-normal">Work Time this week</p>
        </div>
        
        {/* Weekly chart */}
        <div className="space-y-3">
          <div className="flex items-end justify-between">
            {weeklyData.map((item, index) => (
              <div key={index} className="flex relative flex-col items-center">
                {item.isActive && (
                  <div className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-full text-sm font-bold text-center mb-8">
                    5h 23m
                  </div>
                )}
                
                <div
                  className={`w-3 rounded-t-lg ${
                    item.isActive ? 'bg-yellow-400' : 'bg-gray-300'
                  }`}
                  style={{ height: `${item.height}px` }}
                />
                
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
            {weeklyData.map((item, index) => (
              <span key={index}>{item.day}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
