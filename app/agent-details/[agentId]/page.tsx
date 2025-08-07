'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { 
  Phone, 
  Calendar, 
  TrendingUp, 
  Share2,
  MessageSquare,
  BarChart3,
  CheckCircle,
  Clock,
  Zap,
  ArrowLeft,
  Star,
  Users,
  Mail,
  Calendar as CalendarIcon,
  BarChart,
  MessageCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import CharacterSelector from '@/components/characters/CharacterSelector'

// AI Agent data
const aiAgents = {
  receptionist: {
    id: 'receptionist',
    title: 'AI Receptionist',
    subtitle: 'Your virtual front desk assistant that never sleeps',
    icon: Phone,
    gradient: 'from-blue-500 to-cyan-500',
    price: '$99/month',
    description: 'Handle customer inquiries, book appointments, and manage your front desk 24/7 with intelligent responses and seamless integration.',
    features: [
      '24/7 customer support',
      'Call handling & routing',
      'FAQ responses',
      'Ticket creation',
      'Appointment booking',
      'Customer data management',
      'Multi-language support',
      'Integration with CRM systems'
    ],
    useCases: [
      {
        title: 'Customer Inquiries',
        description: 'Instantly respond to common questions about your business, services, and policies.',
        icon: MessageCircle
      },
      {
        title: 'Appointment Scheduling',
        description: 'Automatically book appointments based on availability and customer preferences.',
        icon: CalendarIcon
      },
      {
        title: 'Support Ticket Creation',
        description: 'Create and categorize support tickets for complex issues that require human attention.',
        icon: Mail
      },
      {
        title: 'Call Routing',
        description: 'Intelligently route calls to the appropriate department or team member.',
        icon: Users
      }
    ],
    benefits: [
      'Reduce response time from hours to seconds',
      'Handle multiple inquiries simultaneously',
      'Never miss a customer call or message',
      'Maintain consistent service quality',
      'Scale your customer support without hiring'
    ]
  },
  'appointment-setter': {
    id: 'appointment-setter',
    title: 'Appointment Setter',
    subtitle: 'Streamline your scheduling process with intelligent automation',
    icon: Calendar,
    gradient: 'from-purple-500 to-pink-500',
    price: '$79/month',
    description: 'Automatically schedule meetings, manage calendars, and send reminders to keep everyone on track with smart conflict resolution.',
    features: [
      'Calendar integration',
      'Meeting scheduling',
      'Reminder system',
      'Conflict resolution',
      'Time zone handling',
      'Recurring appointments',
      'Calendar sync',
      'Automated follow-ups'
    ],
    useCases: [
      {
        title: 'Meeting Scheduling',
        description: 'Automatically find available time slots and schedule meetings with clients and team members.',
        icon: CalendarIcon
      },
      {
        title: 'Reminder Management',
        description: 'Send automated reminders and confirmations to reduce no-shows.',
        icon: Clock
      },
      {
        title: 'Conflict Resolution',
        description: 'Intelligently handle scheduling conflicts and suggest alternatives.',
        icon: CheckCircle
      },
      {
        title: 'Calendar Sync',
        description: 'Seamlessly integrate with existing calendar systems and tools.',
        icon: BarChart
      }
    ],
    benefits: [
      'Eliminate scheduling back-and-forth',
      'Reduce no-shows with automated reminders',
      'Handle multiple time zones effortlessly',
      'Integrate with existing calendar systems',
      'Scale scheduling without additional staff'
    ]
  },
  'sales-agent': {
    id: 'sales-agent',
    title: 'Sales Agent',
    subtitle: 'Close more deals with intelligent conversation and lead qualification',
    icon: TrendingUp,
    gradient: 'from-green-500 to-emerald-500',
    price: '$149/month',
    description: 'Qualify leads, conduct product demos, and close deals with intelligent conversation that adapts to each prospect.',
    features: [
      'Lead qualification',
      'Product demonstrations',
      'Quote generation',
      'Follow-up sequences',
      'Objection handling',
      'Pipeline management',
      'Sales analytics',
      'CRM integration'
    ],
    useCases: [
      {
        title: 'Lead Qualification',
        description: 'Automatically qualify leads based on conversation patterns and responses.',
        icon: Users
      },
      {
        title: 'Product Demos',
        description: 'Conduct interactive product demonstrations tailored to prospect needs.',
        icon: BarChart3
      },
      {
        title: 'Quote Generation',
        description: 'Generate accurate quotes and proposals based on requirements.',
        icon: TrendingUp
      },
      {
        title: 'Follow-up Management',
        description: 'Automate follow-up sequences to nurture leads through the sales cycle.',
        icon: MessageSquare
      }
    ],
    benefits: [
      'Qualify leads 24/7 without human intervention',
      'Conduct consistent product demonstrations',
      'Generate quotes instantly',
      'Never miss a follow-up opportunity',
      'Scale your sales team efficiently'
    ]
  },
  'customer-support': {
    id: 'customer-support',
    title: 'Customer Support Agent',
    subtitle: 'Provide instant support and resolve issues efficiently',
    icon: MessageSquare,
    gradient: 'from-indigo-500 to-purple-500',
    price: '$119/month',
    description: 'Provide instant customer support, resolve common issues, and escalate complex problems with intelligent conversation.',
    features: [
      'Instant responses',
      'Issue resolution',
      'Knowledge base access',
      'Escalation handling',
      'Multi-channel support',
      'Ticket management',
      'Customer satisfaction tracking',
      'Integration with support tools'
    ],
    useCases: [
      {
        title: 'Instant Support',
        description: 'Provide immediate responses to common customer questions and issues.',
        icon: MessageSquare
      },
      {
        title: 'Issue Resolution',
        description: 'Resolve common problems without human intervention.',
        icon: CheckCircle
      },
      {
        title: 'Knowledge Base Access',
        description: 'Access and share relevant information from your knowledge base.',
        icon: BarChart3
      },
      {
        title: 'Escalation Management',
        description: 'Intelligently escalate complex issues to human agents.',
        icon: Users
      }
    ],
    benefits: [
      'Provide instant support 24/7',
      'Resolve issues faster than human agents',
      'Reduce support ticket volume',
      'Improve customer satisfaction scores',
      'Scale support without additional staff'
    ]
  }
}

export default function AgentDetailsPage() {
  const router = useRouter()
  const params = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [agent, setAgent] = useState<any>(null)

  useEffect(() => {
    // Get agent data
    const agentId = params.agentId as string
    const agentData = aiAgents[agentId as keyof typeof aiAgents]
    
    if (!agentData) {
      router.push('/')
      return
    }

    setAgent(agentData)
  }, [router, params.agentId])

  const handleContactUs = async () => {
    setIsLoading(true)
    
    try {
      // Simulate contact process
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Open Calendly in new tab
              window.open('https://calendly.com/cerevaai/30min', '_blank')
    } catch (err) {
      console.error('Contact error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-slate-300">Loading...</p>
        </div>
      </div>
    )
  }

  const AgentIcon = agent.icon

  return (
    <div className="min-h-screen ai-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 ai-grid opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">
            {/* Agent Info */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${agent.gradient} rounded-2xl flex items-center justify-center`}>
                  <AgentIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-light text-white mb-2">{agent.title}</h1>
                  <p className="text-xl text-slate-300 font-light">{agent.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {agent.description}
              </p>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="text-white font-light">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-white font-light">500+ Active Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-white font-light">99.9% Uptime</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleContactUs}
                  disabled={isLoading}
                  className="ai-button text-white font-light px-8 py-4 ai-hover-lift purple-glow rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Contacting...
                    </>
                  ) : (
                    <>
                      Book Your Free AI Discovery Audit
                      <Zap className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:text-white font-light px-8 py-4"
                >
                  <Share2 className="mr-2 h-5 w-5" />
                  Share Solution
                </Button>
              </div>
            </div>
            
            {/* Pricing Card */}
            <div className="lg:w-80">
              <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white font-light">Pricing</CardTitle>
                  <CardDescription className="text-slate-300">
                    Start with a free discovery audit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-light text-white mb-2">{agent.price}</div>
                    <p className="text-slate-400 text-sm">per month</p>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-slate-300 text-sm">Free discovery audit</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-slate-300 text-sm">Custom implementation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-slate-300 text-sm">24/7 support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span className="text-slate-300 text-sm">Performance analytics</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleContactUs}
                    disabled={isLoading}
                    className="w-full ai-button text-white font-light"
                  >
                    {isLoading ? 'Contacting...' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-white mb-8 purple-glow-text">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agent.features.map((feature, index) => (
              <div key={index} className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-white font-light">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-white mb-8 purple-glow-text">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {agent.useCases.map((useCase, index) => {
              const UseCaseIcon = useCase.icon
              return (
                <div key={index} className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UseCaseIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-white mb-2">{useCase.title}</h3>
                      <p className="text-slate-300 font-light leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-light text-white mb-8 purple-glow-text">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agent.benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-white font-light leading-relaxed">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-12 backdrop-blur-sm">
            <h2 className="text-3xl font-light text-white mb-4 purple-glow-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              Book your free AI discovery audit and see how {agent.title} can revolutionize your workflow.
            </p>
            <Button 
              onClick={handleContactUs}
              disabled={isLoading}
              className="ai-button text-white font-light px-8 py-4 ai-hover-lift purple-glow rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              {isLoading ? 'Contacting...' : 'Book Your Free AI Discovery Audit'}
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
} 