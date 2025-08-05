import React from 'react'

interface CharacterProps {
  className?: string
  isActive?: boolean
}

export default function RealisticReceptionist({ className = '', isActive = true }: CharacterProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Character Container */}
      <div className="relative w-40 h-48 mx-auto">
        {/* Background Glow */}
        <div className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 ${
          isActive ? 'bg-blue-400/30 animate-pulse' : 'bg-slate-400/10'
        }`} />
        
        {/* Character Body */}
        <div className="relative z-10 w-full h-full flex flex-col items-center">
          {/* Head */}
          <div className="w-20 h-20 bg-gradient-to-br from-orange-200 via-orange-100 to-orange-300 rounded-full relative mb-3 shadow-lg">
            {/* Hair */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-18 h-8 bg-gradient-to-b from-brown-600 to-brown-800 rounded-full" />
            
            {/* Eyes */}
            <div className="absolute top-6 left-5 w-3 h-3 bg-black rounded-full animate-blink">
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full" />
            </div>
            <div className="absolute top-6 right-5 w-3 h-3 bg-black rounded-full animate-blink">
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full" />
            </div>
            
            {/* Eyebrows */}
            <div className="absolute top-4 left-4 w-4 h-1 bg-brown-800 rounded-full transform rotate-12" />
            <div className="absolute top-4 right-4 w-4 h-1 bg-brown-800 rounded-full transform -rotate-12" />
            
            {/* Nose */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-orange-400 rounded-full" />
            
            {/* Mouth */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-pink-400 rounded-full" />
            
            {/* Ears */}
            <div className="absolute top-6 -left-1 w-2 h-3 bg-orange-300 rounded-full" />
            <div className="absolute top-6 -right-1 w-2 h-3 bg-orange-300 rounded-full" />
          </div>
          
          {/* Neck */}
          <div className="w-6 h-4 bg-orange-200 rounded-full mb-2" />
          
          {/* Body */}
          <div className="w-28 h-32 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-t-3xl relative shadow-lg">
            {/* Arms */}
            <div className="absolute -left-3 top-6 w-4 h-12 bg-blue-400 rounded-full transform rotate-12 animate-wave" />
            <div className="absolute -right-3 top-6 w-4 h-12 bg-blue-400 rounded-full transform -rotate-12 animate-wave-reverse" />
            
            {/* Hands */}
            <div className="absolute -left-4 bottom-2 w-3 h-4 bg-orange-200 rounded-full" />
            <div className="absolute -right-4 bottom-2 w-3 h-4 bg-orange-200 rounded-full" />
            
            {/* Headset */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-300 rounded-full shadow-md">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-400 rounded-full" />
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-gray-500 rounded-full" />
            </div>
            
            {/* Name Badge */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md border border-gray-200 z-10">
              <div className="text-xs font-bold text-gray-800">Rosie</div>
              <div className="text-xs text-gray-600">Receptionist</div>
            </div>
          </div>
          
          {/* Legs */}
          <div className="flex space-x-2 mt-2">
            <div className="w-8 h-10 bg-blue-600 rounded-t-full" />
            <div className="w-8 h-10 bg-blue-600 rounded-t-full" />
          </div>
          
          {/* Shoes */}
          <div className="flex space-x-2 mt-1">
            <div className="w-8 h-2 bg-black rounded-full" />
            <div className="w-8 h-2 bg-black rounded-full" />
          </div>
        </div>
        
        {/* Activity Indicators */}
        {isActive && (
          <>
            {/* Phone Ring */}
            <div className="absolute -top-3 -right-3 w-5 h-5 bg-green-400 rounded-full animate-ping" />
            <div className="absolute -top-3 -right-3 w-5 h-5 bg-green-400 rounded-full" />
            
            {/* Typing Indicator */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>
          </>
        )}
      </div>
    </div>
  )
} 