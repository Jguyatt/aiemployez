'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  Target, 
  Users, 
  Calendar,
  Play,
  Pause,
  MessageSquare,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  ArrowLeft,
  Zap,
  TrendingUp,
  Shield,
  Globe,
  Award,
  Headphones,
  FileText,
  Settings,
  BarChart3,
  Mail,
  ShoppingCart
} from 'lucide-react'
import Link from 'next/link'

const demos = {
  'receptionist': {
    name: 'AI Receptionist Demo',
    icon: <Phone className="h-8 w-8" />,
    scenarios: [
      {
        title: 'Appointment Booking',
        customer: "Hi, I'd like to schedule an appointment with Dr. Johnson",
        agent: "Hello! I'd be happy to help you schedule an appointment with Dr. Johnson. I can see that Dr. Johnson has availability this week. What type of appointment are you looking for?",
        customer2: "I need a routine checkup",
        agent2: "Perfect! For routine checkups, we typically schedule 30-minute appointments. I have openings on Tuesday at 2:00 PM, Wednesday at 10:00 AM, or Friday at 3:30 PM. Which works best for you?",
        customer3: "Tuesday at 2:00 PM works great",
        agent3: "Excellent! I've reserved Tuesday at 2:00 PM for your routine checkup with Dr. Johnson. I'll send you a confirmation email with pre-appointment instructions. Is there anything else I can help you with today?"
      },
      {
        title: 'FAQ Handling',
        customer: "What are your office hours?",
        agent: "Our office is open Monday through Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 2:00 PM. We're closed on Sundays and major holidays.",
        customer2: "Do you accept insurance?",
        agent2: "Yes, we accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealth. We also offer self-pay options. Would you like me to check if we accept your specific insurance plan?"
      }
    ]
  },
  'sales-agent': {
    name: 'AI Sales Agent Demo',
    icon: <Target className="h-8 w-8" />,
    scenarios: [
      {
        title: 'Lead Qualification',
        customer: "I'm interested in your software solution",
        agent: "Great! I'd love to learn more about your needs to see if our solution is the right fit. What industry are you in, and what challenges are you currently facing?",
        customer2: "I'm in healthcare, and we're struggling with patient data management",
        agent2: "Perfect! Our healthcare solution is specifically designed for patient data management. We work with over 200 healthcare providers. What's your current patient volume, and are you looking for HIPAA compliance?",
        customer3: "We have about 5,000 patients and yes, HIPAA compliance is crucial",
        agent3: "Excellent! Our solution is fully HIPAA compliant and can easily handle your patient volume. Based on your needs, I'd recommend our Professional plan at $2,500/month. Would you like me to schedule a demo with our healthcare specialist?"
      },
      {
        title: 'Objection Handling',
        customer: "Your solution seems expensive",
        agent: "I understand cost is a concern. Let me ask - what's the current cost of your data management challenges? Most of our clients find they save 40-60% in operational costs within the first year.",
        customer2: "We're spending about $50,000 annually on manual processes",
        agent2: "That's exactly what we help eliminate! Our solution would pay for itself in just 6 months. Plus, we offer flexible payment plans and a 30-day money-back guarantee. Would you like to see a detailed ROI analysis?"
      }
    ]
  },
  'social-assistant': {
    name: 'AI Social Assistant Demo',
    icon: <Users className="h-8 w-8" />,
    scenarios: [
      {
        title: 'Content Creation',
        customer: "Create a post about our new product launch",
        agent: "Here's a social media post for your product launch:\n\n🚀 Exciting news! We're thrilled to announce the launch of our revolutionary [Product Name]!\n\n✨ What makes it special:\n• [Key Feature 1]\n• [Key Feature 2]\n• [Key Feature 3]\n\n🎯 Perfect for [target audience] who want [benefit]\n\n📅 Launch date: [Date]\n💰 Early bird pricing available\n\n#ProductLaunch #Innovation #YourIndustry",
        customer2: "Make it more engaging for our audience",
        agent2: "Here's a more engaging version:\n\n🔥 THE WAIT IS OVER! 🔥\n\nWe've been working behind the scenes for months, and today we're finally launching the game-changing [Product Name] that's going to revolutionize how you [main benefit]!\n\n🎯 Built specifically for [target audience] who are tired of [pain point]\n\n⚡ What you'll love:\n• [Benefit 1] - No more [pain point 1]\n• [Benefit 2] - Finally [pain point 2] solved\n• [Benefit 3] - [Pain point 3] becomes effortless\n\n🚀 Ready to transform your [industry] experience?\n\nDrop a ❤️ if you're excited, and share with someone who needs this!\n\n#GameChanger #Innovation #YourIndustry"
      },
      {
        title: 'Community Engagement',
        customer: "Someone commented 'This looks amazing! How does it work?'",
        agent: "Thanks for your interest! 🙌\n\n[Product Name] works by [simple explanation of core functionality]. Think of it as [analogy] - but specifically designed for [target audience].\n\nWant to see it in action? We've got a quick demo video in our highlights! 📱\n\nWhat specific aspect are you most curious about? We'd love to dive deeper! 💬",
        customer2: "They asked about pricing",
        agent2: "Great question! 💰\n\nWe offer flexible pricing to fit different needs:\n\n• Starter: $X/month - Perfect for [small businesses]\n• Professional: $X/month - Ideal for [medium businesses]\n• Enterprise: Custom pricing - For [large organizations]\n\nPlus, we're running a special launch discount! 🎉\n\nWant to see which plan fits your needs best? Drop us a DM or check out our pricing page (link in bio)!\n\nWhat's your current [industry] setup? We can recommend the perfect plan! 💡"
      }
    ]
  },
  'appointment-setter': {
    name: 'AI Appointment Setter Demo',
    icon: <Calendar className="h-8 w-8" />,
    scenarios: [
      {
        title: 'Intelligent Scheduling',
        customer: "I need to book a consultation",
        agent: "I'd be happy to help you schedule a consultation! I can see our available slots for this week and next. What type of consultation are you looking for?",
        customer2: "I need a business strategy consultation",
        agent2: "Perfect! For business strategy consultations, we typically schedule 60-minute sessions. I have openings on Tuesday at 10:00 AM, Wednesday at 2:00 PM, or Friday at 11:00 AM. Which works best for you?",
        customer3: "Wednesday at 2:00 PM",
        agent3: "Excellent choice! I've reserved Wednesday at 2:00 PM for your business strategy consultation. Before we confirm, I'd like to gather some information to make your session more productive. What's your primary business challenge right now?"
      },
      {
        title: 'Conflict Resolution',
        customer: "I need to reschedule my appointment",
        agent: "No problem! I can help you reschedule. What's your current appointment date and time?",
        customer2: "I have an appointment tomorrow at 3:00 PM",
        agent2: "I found your appointment for tomorrow at 3:00 PM. I can see available slots on Thursday at 10:00 AM, Friday at 2:00 PM, or next Monday at 11:00 AM. Which would work better for you?",
        customer3: "Thursday at 10:00 AM works",
        agent3: "Perfect! I've rescheduled your appointment to Thursday at 10:00 AM. You'll receive a confirmation email shortly, and I'll send you a reminder 24 hours before your new appointment. Is there anything else I can help you with?"
      }
    ]
  }
}

export default function DemoPage() {
  const [selectedAgent, setSelectedAgent] = useState('receptionist')
  const [currentScenario, setCurrentScenario] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const agent = demos[selectedAgent as keyof typeof demos]
  const scenario = agent?.scenarios[currentScenario]

  const startDemo = () => {
    setIsPlaying(true)
    setCurrentStep(0)
  }

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsPlaying(false)
      setCurrentStep(0)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Interactive AI Agent Demos</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See our AI agents in action with real-world scenarios. Experience how they handle customer interactions, 
            solve problems, and deliver exceptional service 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Agent Selection */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">Choose an Agent</h2>
            {Object.entries(demos).map(([key, demo]) => (
              <Card 
                key={key}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedAgent === key 
                    ? 'bg-white/10 border-blue-500' 
                    : 'bg-white/5 border-white/10 hover:bg-white/8'
                } text-white`}
                onClick={() => {
                  setSelectedAgent(key)
                  setCurrentScenario(0)
                  setIsPlaying(false)
                  setCurrentStep(0)
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                      {demo.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{demo.name}</h3>
                      <p className="text-sm text-slate-300">
                        {demo.scenarios.length} scenarios available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Demo Interface */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      {agent?.icon}
                      <span className="ml-2">{agent?.name}</span>
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      Scenario {currentScenario + 1} of {agent?.scenarios.length}
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (currentScenario > 0) {
                          setCurrentScenario(currentScenario - 1)
                          setIsPlaying(false)
                          setCurrentStep(0)
                        }
                      }}
                      disabled={currentScenario === 0}
                      className="border-slate-600 text-slate-300 hover:bg-slate-800"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (currentScenario < (agent?.scenarios.length || 0) - 1) {
                          setCurrentScenario(currentScenario + 1)
                          setIsPlaying(false)
                          setCurrentStep(0)
                        }
                      }}
                      disabled={currentScenario === (agent?.scenarios.length || 0) - 1}
                      className="border-slate-600 text-slate-300 hover:bg-slate-800"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {scenario?.title}
                  </h3>
                  <p className="text-slate-300">
                    Watch how our AI agent handles this real-world scenario
                  </p>
                </div>

                {/* Demo Controls */}
                <div className="flex items-center justify-center mb-6">
                  <Button
                    onClick={isPlaying ? () => setIsPlaying(false) : startDemo}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        Pause Demo
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Start Demo
                      </>
                    )}
                  </Button>
                </div>

                {/* Demo Chat Interface */}
                <div className="bg-slate-800 rounded-lg p-4 h-96 overflow-y-auto">
                  <div className="space-y-4">
                    {/* Customer Message 1 */}
                    {currentStep >= 1 && (
                      <div className="flex justify-end">
                        <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-xs">
                          <p className="text-sm">{scenario?.customer}</p>
                        </div>
                      </div>
                    )}

                    {/* Agent Response 1 */}
                    {currentStep >= 2 && (
                      <div className="flex justify-start">
                        <div className="bg-slate-700 text-white rounded-lg px-4 py-2 max-w-xs">
                          <p className="text-sm">{scenario?.agent}</p>
                        </div>
                      </div>
                    )}

                    {/* Customer Message 2 */}
                    {currentStep >= 3 && (
                      <div className="flex justify-end">
                        <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-xs">
                          <p className="text-sm">{scenario?.customer2}</p>
                        </div>
                      </div>
                    )}

                    {/* Agent Response 2 */}
                    {currentStep >= 4 && (
                      <div className="flex justify-start">
                        <div className="bg-slate-700 text-white rounded-lg px-4 py-2 max-w-xs">
                          <p className="text-sm">{scenario?.agent2}</p>
                        </div>
                      </div>
                    )}

                    {/* Customer Message 3 */}
                    {currentStep >= 5 && 'customer3' in scenario && scenario.customer3 && (
                      <div className="flex justify-end">
                        <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-xs">
                          <p className="text-sm">{scenario.customer3}</p>
                        </div>
                      </div>
                    )}

                    {/* Agent Response 3 */}
                    {currentStep >= 6 && 'agent3' in scenario && scenario.agent3 && (
                      <div className="flex justify-start">
                        <div className="bg-slate-700 text-white rounded-lg px-4 py-2 max-w-xs">
                          <p className="text-sm">{scenario.agent3}</p>
                        </div>
                      </div>
                    )}

                    {currentStep === 0 && (
                      <div className="text-center text-slate-400 py-8">
                        <MessageSquare className="h-12 w-12 mx-auto mb-4" />
                        <p>Click "Start Demo" to see the AI agent in action</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Step Navigation */}
                {isPlaying && (
                  <div className="flex justify-center mt-4">
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5, 6].map((step) => (
                        <button
                          key={step}
                          onClick={() => setCurrentStep(step)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            currentStep >= step ? 'bg-blue-500' : 'bg-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Auto-advance timer */}
                {isPlaying && currentStep < 6 && (
                  <div className="text-center mt-4">
                    <div className="text-sm text-slate-400">
                      Next message in <span className="text-blue-400">3</span> seconds
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Demo Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-4 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                  <h4 className="font-semibold">24/7 Availability</h4>
                  <p className="text-sm text-slate-300">Never miss a customer interaction</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-4 text-center">
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-400" />
                  <h4 className="font-semibold">Consistent Quality</h4>
                  <p className="text-sm text-slate-300">Same high standard every time</p>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-4 text-center">
                  <Zap className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                  <h4 className="font-semibold">Instant Response</h4>
                  <p className="text-sm text-slate-300">No waiting, immediate assistance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30 text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Deploy Your AI Agent?</h2>
              <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
                See how our AI agents can transform your business operations. 
                Get started today and experience the future of customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  <a href="https://calendly.com/cerevaai/30min" target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Book Your Free AI Discovery Audit
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  <Link href="/agents/receptionist">
                    <FileText className="h-5 w-5 mr-2" />
                    Learn More
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 