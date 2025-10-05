import React, { JSX } from 'react'
import { Users, Briefcase } from 'lucide-react'

export default function KPIMetrics(): JSX.Element {
  return (
    <div className="bg-transparent">
      <div className="flex items-center gap-4 flex-wrap sm:gap-6 lg:gap-8 sm:space-x-0 xl:space-x-8">
        <div className="text-center flex items-end flex-row-reverse">
          <div className=" text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-normal text-gray-900 mb-1">78</div>
          <div className="flex flex-col space-x-2 text-sm text-black">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 bg-white/50 rounded-full p-1" />
            <span className="font-medium text-black">Employees</span>
          </div>
        </div>
        
        <div className="text-center flex items-end flex-row-reverse">
          <div className=" text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-normal text-gray-900 mb-1">56</div>
          <div className="flex items-center justify-center space-x-2 text-sm text-black">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 bg-white/50 rounded-full p-1" />
            <span className="font-medium text-black">Hirings</span>
          </div>
        </div>
        
        <div className="text-center flex items-end flex-row-reverse">
          <div className=" text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-normal text-gray-900 mb-1">203</div>
          <div className="flex items-center justify-center space-x-2 text-sm text-black">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 bg-white/50 rounded-full p-1" />
            <span className="font-medium text-black">Projects</span>
          </div>
        </div>
      </div>
    </div>
  )
}
