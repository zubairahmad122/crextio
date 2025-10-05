import React, { JSX } from 'react'
import { TimeSlot } from '@/types'

const times: TimeSlot[] = [
  {
    day: 'Mon',
    time: '8:00 am',
    title: 'Meeting with John',
    description: 'Discuss project progress'
  },
  {
    day: 'Tue',
    time: '9:00 am',
    title: 'Call with Jane',
    description: 'Follow up on proposal'
  },
  {
    day: 'Wed',
    time: '10:00 am',
    title: 'Review presentation',
    description: 'Finalize slides'
  },
  {
    day: 'Thu',
    time: '11:00 am',
    title: 'Lunch with team',
    description: 'Team bonding'
  },
  {
    day: 'Fri',
    time: '12:00 pm',
    title: 'Meeting with team',
    description: 'Team meeting'
  },
  {
    day: 'Sat',
    time: '1:00 pm',
    title: 'Lunch with team',
    description: 'Team bonding'
  },
]

export default function CalendarCard(): JSX.Element {
  return (
    <div className="bg-gradient-to-br from-[#fefefe5b] via-[#fcf2df] to-[#fff1d7] rounded-4xl p-6 shadow-xl h-full min-h-[350px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center justify-between w-full space-x-6">
          <span className="px-4 py-2 bg-white rounded-full text-base">August</span>
          <span className="text-lg font-normal text-black">September 2024</span>
          <span className="px-4 py-2 bg-white rounded-full text-base">October</span>
        </div>
      </div>
      
      <div className="flex items-start h-full">
        {/* Events */}
        <div className="space-y-6 h-full items-start flex flex-col mt-auto justify-end">
          <div className="flex items-start space-x-4">
            <div className="text-sm text-black w-20 pt-1">8:00 am</div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="text-sm text-black w-20 pt-1">09:00 am</div>
            <div className="flex-1 text-sm text-black pt-2"></div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="text-sm text-black w-20 pt-1">10:00 am</div>
            <div className="flex-1 text-sm text-black pt-2"></div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="text-sm text-black w-20 pt-1">11:00 am</div>
          </div>
        </div>
        
        {/* Days of Week - Horizontal Scroll Container */}
        <div className="overflow-x-auto w-full h-full">
          <div className="grid grid-cols-6 gap-4 relative h-full min-w-[600px]">
            {times.map((time) => (
              <div key={time.day} className="flex h-full items-center flex-col gap-1 justify-between min-w-[90px]">
                <div className={`text-center w-full text-base font-normal rounded-lg ${
                  time.day === 'Wed' ? 'text-black' : 'text-gray-500'
                }`}>
                  {time.day}
                </div>
                <div className={`text-center w-full text-base font-normal py-2 rounded-lg ${
                  time.day === 'Wed' ? 'text-black' : 'text-gray-500'
                }`}>
                  {time.time}
                </div>
                <div className="border-l-2 border-gray-400 border-dashed h-full"></div>
              </div>
            ))}

            <div className="absolute top-1/2 -translate-y-1/2 flex gap-10 min-w-[350px] justify-between rounded-xl left-1/2 -translate-x-1/2 bg-[#413434] text-white px-4 py-2">
              <div>
                <h5 className="text-base font-medium">Weekly team sync</h5>
                <p className="text-sm font-normal">Discuss project progress</p>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white rounded-full">
                  <img src="/images/user-profile-background.png" alt="avatar" className="w-full h-full object-cover object-top rounded-full" />  
                </div>
                <div className="w-10 h-10 bg-white rounded-full">
                  <img src="/images/user-profile-background.png" alt="avatar" className="w-full h-full object-cover object-top rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}