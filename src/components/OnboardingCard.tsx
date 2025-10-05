import React, { JSX } from 'react'
import { Check, Square, Zap, Circle, FileText, Link } from 'lucide-react'
import { Task } from '@/types'

export default function OnboardingCard(): JSX.Element {
  const tasks: Task[] = [
    { icon: Square, task: "Interview", time: "Sep 13, 08:30", completed: true },
    { icon: Zap, task: "Team Meeting", time: "Sep 13, 10:00", completed: true },
    { icon: Circle, task: "Documentation", time: "Sep 14, 09:00", completed: false },
    { icon: FileText, task: "Training", time: "Sep 14, 14:00", completed: false },
    { icon: Link, task: "Setup", time: "Sep 15, 10:00", completed: false }
  ]

  const progressBars = [
    { percentage: '30%', label: 'task', bgColor: 'bg-[#fdd762]', textColor: 'text-black', width: 'flex-1' },
    { percentage: '25%', label: '', bgColor: 'bg-black', textColor: 'text-white', width: 'w-[25%]' },
    { percentage: '0%', label: '', bgColor: 'bg-gray-400', textColor: 'text-white', width: 'w-[15%]' }
  ]

  return (
    <div className="bg-white/10 backdrop-blur-md overflow-hidden rounded-2xl p-6 border border-white/20 h-full min-h-[350px] flex flex-col shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-3xl font-normal text-black">Onboarding</h3>
        <span className="text-xl font-normal text-black">18%</span>
      </div>
     
      {/* Progress bars */}
      <div className="flex w-full items-center gap-2 mb-4">
        {progressBars.map((bar, index) => (
          <div key={index} className={bar.width}>
            <p className="text-sm mb-2 text-black">{bar.percentage}</p>
            <p className={`px-5 h-full pt-3 min-h-[50px] py-2.5 rounded-xl ${bar.bgColor} ${bar.textColor}`}>
              {bar.label}
            </p>
          </div>
        ))}
      </div>
      
      {/* Nested Onboarding Task Card */}
      <div className="mt-4 bg-gray-500 w-[94%] h-full mx-auto pt-10 mb-8 rounded-t-4xl">
        <div className="bg-gray-800 scale-110 h-full rounded-4xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white text-xl font-normal">Onboarding Task</h4>
            <span className="text-white text-3xl">2/8</span>
          </div>
          <div className="space-y-3">
            {tasks.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3 min-w-0 flex-1">
                  <div className={`w-10 h-10 ${item.completed ? 'bg-white/20 text-gray-300' : 'bg-white/90 text-black'} flex items-center justify-center rounded-full`}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white text-sm">{item.task}</div>
                    <div className="text-gray-400 text-xs">{item.time}</div>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${item.completed ? 'bg-yellow-400 border-yellow-400' : 'border-gray-400'}`}>
                  {item.completed && <Check className="w-3 h-3 text-gray-800" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}