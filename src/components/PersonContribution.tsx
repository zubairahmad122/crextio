import React, { useState, JSX } from 'react'
import { ChevronDown, ChevronUp, MoreVertical, Laptop } from 'lucide-react'
import { ExpandableSection } from '@/types'

export default function PersonContribution(): JSX.Element {
  const [devicesExpanded, setDevicesExpanded] = useState(true)
  const [pensionExpanded, setPensionExpanded] = useState(false)
  const [compensationExpanded, setCompensationExpanded] = useState(false)
  const [benefitsExpanded, setBenefitsExpanded] = useState(false)

  const deviceContent = (
    <div className="ml-1 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Device Image */}
          <div className="w-12 h-8 bg-black rounded-sm flex items-center justify-center overflow-hidden flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=48&h=32&fit=crop"
              alt="MacBook"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Laptop Icon */}
          <Laptop className="w-5 h-5 text-gray-600 flex-shrink-0" />
          {/* Device Info */}
          <div className="min-w-0">
            <div className="text-sm font-medium text-gray-800 truncate">MacBook Air</div>
            <div className="text-xs text-gray-500 truncate">Version M1</div>
          </div>
        </div>
        {/* Three dots menu */}
        <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer flex-shrink-0" />
      </div>
    </div>
  )

  const sections: ExpandableSection[] = [
    {
      title: 'Pension contributions',
      isExpanded: pensionExpanded,
      setExpanded: setPensionExpanded,
      content: (
        <div className="ml-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">Pension details content here...</div>
        </div>
      )
    },
    {
      title: 'Devices',
      isExpanded: devicesExpanded,
      setExpanded: setDevicesExpanded,
      content: deviceContent
    },
    {
      title: 'Compensation Summary',
      isExpanded: compensationExpanded,
      setExpanded: setCompensationExpanded,
      content: (
        <div className="ml-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">Compensation details content here...</div>
        </div>
      )
    },
    {
      title: 'Employee Benefits',
      isExpanded: benefitsExpanded,
      setExpanded: setBenefitsExpanded,
      content: (
        <div className="ml-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">Benefits details content here...</div>
        </div>
      )
    }
  ]

  return (
    <div className="bg-gradient-to-br from-[#fefefe] via-[#fcf2df] to-[#fff1d7] rounded-4xl p-6 shadow-xl h-full min-h-[350px] flex flex-col">
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index}>
            <div 
              className="flex items-center justify-between py-3 cursor-pointer"
              onClick={() => section.setExpanded(!section.isExpanded)}
            >
              <span className="text-gray-800 font-medium">{section.title}</span>
              {section.isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </div>
            {section.isExpanded && section.content}
          </div>
        ))}
      </div>
    </div>
  )
}
