'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  User, 
  MessageSquare, 
  Calendar, 
  Phone, 
  Mail,
  Check,
  Sparkles
} from 'lucide-react'

interface Character {
  id: string
  name: string
  role: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  isSelected?: boolean
}

interface CharacterSelectorProps {
  characters: Character[]
  onCharacterSelect: (characterId: string) => void
  selectedCharacterId?: string
  className?: string
}

export default function CharacterSelector({
  characters,
  onCharacterSelect,
  selectedCharacterId,
  className = ''
}: CharacterSelectorProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {characters.map((character) => {
        const Icon = character.icon
        const isSelected = character.id === selectedCharacterId
        
        return (
          <div
            key={character.id}
            className={`relative p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer group ${
              isSelected
                ? 'border-purple-500 bg-purple-500/10 ai-glow'
                : 'border-slate-700 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800/70 ai-hover-lift'
            }`}
            onClick={() => onCharacterSelect(character.id)}
          >
            {/* Selection indicator */}
            {isSelected && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center ai-glow">
                <Check className="h-4 w-4 text-white" />
              </div>
            )}

            {/* Character header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                isSelected ? 'ai-gradient-primary ai-glow' : 'bg-slate-700'
              }`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">{character.name}</h3>
                <p className="text-sm text-slate-400">{character.role}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              {character.description}
            </p>

            {/* Features */}
            <div className="space-y-2">
              {character.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-purple-400" />
                  <span className="text-sm text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Select button */}
            <Button
              variant={isSelected ? "default" : "outline"}
              size="sm"
              className={`w-full mt-4 ${
                isSelected 
                  ? 'ai-gradient-primary border-purple-500' 
                  : 'border-slate-600 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {isSelected ? 'Selected' : 'Select'}
            </Button>
          </div>
        )
      })}
    </div>
  )
} 