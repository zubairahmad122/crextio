import React, { JSX } from 'react'
import { Play, Pause, ArrowRight, AlarmClock } from 'lucide-react'

export default function TimeTracker(): JSX.Element {
  return (
    <div className="bg-gradient-to-br from-[#fefefe] via-[#fcf2df] to-[#fff1d7] rounded-4xl justify-between p-6 shadow-xl h-full min-h-[350px] flex flex-col">
      {/* Header with title and arrow */}
      <div className="flex items pt-3 items-center justify-between mb-2">
        <h3 className="text-4xl font-normal text-black">Time tracker</h3>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <ArrowRight className="w-6 -rotate-40 h-6 text-black" />
        </div>
      </div>
        
      <div className="tracker"></div>

      <div className="flex items-center w-full bg-dark-50 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Play className="w-6 h-6 text-black" />
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Pause className="w-6 h-6 text-black" />
          </div>
        </div>
        
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <AlarmClock className="w-6 h-6 text-black" />
        </div>
      </div>
    </div>
  )
}
