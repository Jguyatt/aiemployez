'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AICharacterProps {
  type: 'receptionist' | 'appointment-setter' | 'sales-agent' | 'customer-support'
  className?: string
}

export default function AICharacter({ type, className = '' }: AICharacterProps) {
  const characterConfig = {
    receptionist: {
      color: 'from-blue-500 to-cyan-500',
      animation: 'wave',
      icon: '🤖',
      description: 'Friendly and helpful'
    },
    'appointment-setter': {
      color: 'from-purple-500 to-pink-500',
      animation: 'bounce',
      icon: '🤖',
      description: 'Organized and efficient'
    },
    'sales-agent': {
      color: 'from-green-500 to-emerald-500',
      animation: 'pulse',
      icon: '🤖',
      description: 'Confident and persuasive'
    },
    'customer-support': {
      color: 'from-indigo-500 to-purple-500',
      animation: 'float',
      icon: '🤖',
      description: 'Patient and knowledgeable'
    }
  }

  const config = characterConfig[type]

  const animations = {
    wave: {
      animate: {
        rotate: [0, 10, -10, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" as const
        }
      }
    },
    bounce: {
      animate: {
        y: [0, -10, 0],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut" as const
        }
      }
    },
    pulse: {
      animate: {
        scale: [1, 1.1, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" as const
        }
      }
    },
    float: {
      animate: {
        y: [0, -5, 0],
        rotate: [0, 5, 0],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" as const
        }
      }
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Character Container */}
      <motion.div
        className={`w-24 h-24 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center ai-glow relative overflow-hidden`}
        {...animations[config.animation as keyof typeof animations]}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
        
        {/* Character Icon */}
        <span className="text-3xl relative z-10">{config.icon}</span>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Status Indicator */}
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white ai-status-online">
        <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
      </div>
    </div>
  )
}

// Enhanced Character with 3D-like appearance
export function AICharacter3D({ type, className = '' }: AICharacterProps) {
  const characterConfig = {
    receptionist: {
      color: 'from-blue-500 to-cyan-500',
      shadow: 'shadow-blue-500/50',
      gradient: 'from-blue-400 via-cyan-400 to-blue-500'
    },
    'appointment-setter': {
      color: 'from-purple-500 to-pink-500',
      shadow: 'shadow-purple-500/50',
      gradient: 'from-purple-400 via-pink-400 to-purple-500'
    },
    'sales-agent': {
      color: 'from-green-500 to-emerald-500',
      shadow: 'shadow-green-500/50',
      gradient: 'from-green-400 via-emerald-400 to-green-500'
    },
    'customer-support': {
      color: 'from-indigo-500 to-purple-500',
      shadow: 'shadow-indigo-500/50',
      gradient: 'from-indigo-400 via-purple-400 to-indigo-500'
    }
  }

  const config = characterConfig[type]

  return (
    <div className={`relative ${className}`}>
      {/* 3D Character Container */}
      <motion.div
        className={`w-28 h-28 bg-gradient-to-r ${config.gradient} rounded-2xl flex items-center justify-center relative transform perspective-1000`}
        style={{
          boxShadow: `0 20px 40px ${config.shadow}`,
          background: `linear-gradient(135deg, var(--tw-gradient-stops))`
        }}
        whileHover={{
          rotateY: 10,
          rotateX: -5,
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
        animate={{
          y: [0, -5, 0],
          rotateY: [0, 5, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {/* 3D Depth Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
        
        {/* Character Face/Icon */}
        <div className="relative z-10 text-4xl">🤖</div>
        
        {/* Animated Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${5 + i * 15}%`
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      {/* Status Ring */}
      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
      </div>
    </div>
  )
}

// Sophisticated 3D Character matching the user's image style
export function AICharacterSophisticated({ type, className = '' }: AICharacterProps) {
  const characterConfig = {
    receptionist: {
      color: 'from-blue-400 to-cyan-400',
      shadow: 'shadow-blue-500/30',
      accent: 'from-blue-300 to-cyan-300',
      personality: 'Friendly & Helpful'
    },
    'appointment-setter': {
      color: 'from-purple-400 to-pink-400',
      shadow: 'shadow-purple-500/30',
      accent: 'from-purple-300 to-pink-300',
      personality: 'Organized & Efficient'
    },
    'sales-agent': {
      color: 'from-green-400 to-emerald-400',
      shadow: 'shadow-green-500/30',
      accent: 'from-green-300 to-emerald-300',
      personality: 'Confident & Persuasive'
    },
    'customer-support': {
      color: 'from-indigo-400 to-purple-400',
      shadow: 'shadow-indigo-500/30',
      accent: 'from-indigo-300 to-purple-300',
      personality: 'Patient & Knowledgeable'
    }
  }

  const config = characterConfig[type]

  return (
    <div className={`relative ${className}`}>
      {/* Main Character Container */}
      <motion.div
        className="relative w-32 h-40 flex flex-col items-center"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        {/* Head */}
        <motion.div
          className="w-20 h-20 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full relative mb-2"
          style={{
            boxShadow: `0 8px 32px ${config.shadow}`,
          }}
          animate={{
            y: [0, -3, 0],
            rotateY: [0, 2, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Face Features */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Eyes */}
            <div className="flex space-x-4">
              <motion.div
                className="w-3 h-3 bg-slate-700 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              <motion.div
                className="w-3 h-3 bg-slate-700 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }}
              />
            </div>
            
            {/* Mouth */}
            <motion.div
              className="absolute bottom-4 w-6 h-1 bg-slate-700 rounded-full"
              animate={{
                scaleX: [1, 1.2, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </div>
          
          {/* Hair */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-slate-800 rounded-full"></div>
        </motion.div>

        {/* Body */}
        <motion.div
          className={`w-24 h-32 bg-gradient-to-r ${config.color} rounded-2xl relative`}
          style={{
            boxShadow: `0 12px 40px ${config.shadow}`,
          }}
          animate={{
            y: [0, -2, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Hoodie Details */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
          
          {/* Zipper */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-2 w-0.5 h-8 bg-white/30"></div>
          
          {/* Pockets */}
          <div className="absolute bottom-4 left-2 w-6 h-4 bg-white/10 rounded-lg"></div>
          <div className="absolute bottom-4 right-2 w-6 h-4 bg-white/10 rounded-lg"></div>
        </motion.div>

        {/* Arms */}
        <motion.div
          className="absolute top-8 -left-2 w-3 h-16 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full"
          animate={{
            rotate: [0, 5, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute top-8 -right-2 w-3 h-16 bg-gradient-to-r from-slate-100 to-slate-200 rounded-full"
          animate={{
            rotate: [0, -5, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }}
        />

        {/* Laptop/Device */}
        <motion.div
          className="absolute top-12 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-slate-800 rounded-lg"
          style={{
            boxShadow: `0 4px 16px ${config.shadow}`,
          }}
          animate={{
            rotateY: [0, 5, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Screen Glow */}
          <motion.div
            className="absolute inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-md"
            animate={{
              opacity: [0.6, 1, 0.6],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${5 + i * 10}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Personality Badge */}
      <motion.div
        className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r ${config.accent} rounded-full text-xs text-white font-light opacity-80`}
        animate={{
          opacity: [0.8, 1, 0.8],
          scale: [1, 1.05, 1],
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        {config.personality}
      </motion.div>

      {/* Status Indicator */}
      <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
      </div>
    </div>
  )
} 