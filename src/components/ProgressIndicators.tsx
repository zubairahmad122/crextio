import React, { JSX } from 'react'

export default function ProgressIndicators(): JSX.Element {
  return (
    <div className="flex items-center space-x-4 md:space-x-8 mb-8">
      <div className="">
        <p className="text-sm mb-2 text-black">Interviews</p>
        <p className="px-5 sm:min-w-24 py-2.5 rounded-full bg-black text-white">15%</p>
      </div>

      <div className="">
        <p className="text-sm mb-2 text-black">Hired</p>
        <p className="px-5 sm:min-w-24 py-2.5 rounded-full bg-[#fdd762] text-black">15%</p>
      </div>

      <div className="">
        <p className="text-sm mb-2 text-black">Project time</p>
        <p className="px-5 w-auto sm:min-w-44 2xl:min-w-[300px] py-2.5 rounded-full text-black" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #fff 2px, #fff 6px)',
          backgroundSize: '15px 8px'
        }}>60%</p>
      </div>

      <div className="">
        <p className="text-sm mb-2 text-black">Output</p>
        <p className="px-5 sm:min-w-12 border border-black py-2.5 rounded-full bg-transparent text-black">10%</p>
      </div>
    </div>
  )
}
