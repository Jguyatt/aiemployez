import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Play, Pause, Settings, Crown } from 'lucide-react'
import { AICharacter3D, AICharacterSophisticated } from './AICharacter'

interface AgentCardProps {
  agent: {
    id: string
    name: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    gradient: string
    features: string[]
    price: string
    type: 'marketplace' | 'dashboard'
    analytics?: Record<string, string | number>
    isActive?: boolean
  }
  onSelect?: (agent: any) => void
  onPause?: (agent: any) => void
  onEdit?: (agent: any) => void
  onUpgrade?: (agent: any) => void
  isLoading?: boolean
}

export default function AgentCard({ 
  agent, 
  onSelect, 
  onPause, 
  onEdit, 
  onUpgrade, 
  isLoading = false 
}: AgentCardProps) {
  const AgentIcon = agent.icon

  if (agent.type === 'marketplace') {
    return (
      <Card className="ai-card group ai-hover-lift">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <AICharacterSophisticated type={agent.id as any} className="w-16 h-16" />
              <div className="text-right">
                <span className="text-2xl font-light ai-text-gradient-primary">{agent.price}</span>
              </div>
            </div>
          </div>
          <CardTitle className="text-xl text-white font-light mb-2">{agent.name}</CardTitle>
          <CardDescription className="text-slate-300 text-sm leading-relaxed font-light">
            {agent.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {agent.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-sm text-slate-300 font-light">{feature}</span>
              </div>
            ))}
          </div>
          <Button 
            className="w-full ai-button text-white font-light py-3 rounded-xl transition-all duration-200 ai-hover-lift"
            onClick={() => onSelect?.(agent)}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span className="font-light">Processing...</span>
              </div>
            ) : (
              <span>Select Agent</span>
            )}
          </Button>
        </CardContent>
      </Card>
    )
  }

  // Dashboard view
  return (
    <Card className="ai-card group ai-hover-lift">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <AICharacterSophisticated type={agent.id as any} className="w-16 h-16" />
            <div>
              <CardTitle className="text-xl text-white font-light">{agent.name}</CardTitle>
              <CardDescription className="text-slate-300 font-light">
                {agent.description}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${agent.isActive ? 'ai-status-online' : 'bg-slate-500'}`}></div>
            <span className={`text-sm font-light ${agent.isActive ? 'text-green-400' : 'text-slate-500'}`}>
              {agent.isActive ? 'Active' : 'Paused'}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {agent.analytics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {Object.entries(agent.analytics).map(([key, value], index) => (
              <div key={key} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.05}s`}}>
                <div className="text-2xl font-light ai-text-gradient-primary">{String(value)}</div>
                <div className="text-xs text-slate-400 capitalize font-light">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
              </div>
            ))}
          </div>
        )}
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onPause?.(agent)}
            className="border-slate-600 text-slate-300 hover:bg-slate-800 font-light ai-hover-lift"
          >
            {agent.isActive ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            {agent.isActive ? 'Pause' : 'Resume'}
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onEdit?.(agent)}
            className="border-slate-600 text-slate-300 hover:bg-slate-800 font-light ai-hover-lift"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button 
            size="sm"
            onClick={() => onUpgrade?.(agent)}
            className="ai-button-secondary font-light ai-hover-lift"
          >
            <Crown className="h-4 w-4 mr-2" />
            Upgrade
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 