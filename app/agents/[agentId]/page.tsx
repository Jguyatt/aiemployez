'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  Target, 
  Users, 
  Calendar,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Shield,
  Zap,
  MessageSquare,
  CalendarDays,
  Headphones,
  Globe,
  Award,
  TrendingUp,
  BarChart3,
  Settings,
  FileText,
  Mail,
  ShoppingCart,
  Star,
  Play,
  Pause,
  Eye,
  ArrowLeft,
  PhoneCall,
  MessageCircle,
  CalendarCheck,
  Target as TargetIcon,
  Users as UsersIcon,
  Calendar as CalendarIcon
} from 'lucide-react'
import Link from 'next/link'
import PurchaseFlow from '@/components/PurchaseFlow'

const agentData = {
  'receptionist': {
    name: 'AI Receptionist',
    tagline: 'Your 24/7 Virtual Front Desk',
    description: 'Professional AI receptionist that handles calls, schedules appointments, and manages customer inquiries around the clock.',
    icon: <Phone className="h-12 w-12" />,
    category: 'Customer Service',
    price: '$99/month',
    features: [
      '24/7 call handling and appointment scheduling',
      'Multi-language support and intelligent routing',
      'Integration with CRM and calendar systems',
      'Automated follow-up and reminder system',
      'Call recording and analytics',
      'Custom greeting and brand voice'
    ],
    benefits: [
      'Reduce call wait times by 80%',
      'Handle 10x more calls simultaneously',
      'Never miss a customer inquiry',
      'Increase customer satisfaction scores',
      'Reduce operational costs by 60%',
      'Provide consistent service quality'
    ],
    useCases: [
      'Medical practices and clinics',
      'Real estate agencies',
      'Legal firms',
      'Service-based businesses',
      'Consulting companies',
      'Beauty salons and spas'
    ],
    setupTime: '2-4 hours',
    roi: '300% within 3 months',
    requirements: [
      'Business phone number or VoIP system',
      'Calendar system (Google Calendar, Outlook, etc.)',
      'CRM system (optional but recommended)',
      'Business hours and availability',
      'Common FAQs and responses',
      'Brand voice guidelines'
    ],
    process: [
      'Initial consultation and requirements gathering',
      'System integration and configuration',
      'Custom greeting and response training',
      'Testing and quality assurance',
      'Go-live and monitoring',
      'Ongoing optimization and support'
    ],
    testimonials: [
      {
        quote: "Our AI receptionist handles 200+ calls daily, reducing wait times from 5 minutes to 30 seconds.",
        author: "Dr. Sarah Johnson",
        company: "Medical Practice"
      },
      {
        quote: "We've seen a 40% increase in appointment bookings since implementing the AI receptionist.",
        author: "Mike Chen",
        company: "Real Estate Agency"
      }
    ]
  },
  'sales-agent': {
    name: 'AI Sales Agent',
    tagline: 'Your 24/7 Sales Closer',
    description: 'Intelligent AI sales assistant that qualifies leads, handles objections, and closes deals with personalized approaches.',
    icon: <Target className="h-12 w-12" />,
    category: 'Sales',
    price: '$149/month',
    features: [
      'Lead qualification and scoring automation',
      'Personalized sales pitches and objection handling',
      'CRM integration and sales pipeline management',
      'Follow-up sequence automation',
      'Sales analytics and reporting',
      'Multi-channel lead engagement'
    ],
    benefits: [
      'Increase conversion rates by 40%',
      'Qualify leads 24/7 automatically',
      'Reduce sales cycle by 60%',
      'Generate 3x more qualified leads',
      'Improve sales team productivity',
      'Provide consistent sales messaging'
    ],
    useCases: [
      'B2B software companies',
      'Insurance agencies',
      'Financial services',
      'E-commerce businesses',
      'Real estate agencies',
      'Consulting firms'
    ],
    setupTime: '3-5 hours',
    roi: '500% within 6 months',
    requirements: [
      'CRM system (Salesforce, HubSpot, etc.)',
      'Lead generation sources',
      'Product/service information',
      'Sales scripts and objection handling',
      'Target customer personas',
      'Pricing and commission structure'
    ],
    process: [
      'Sales process analysis and optimization',
      'CRM integration and lead flow setup',
      'Sales script development and training',
      'Lead qualification criteria definition',
      'Testing and performance optimization',
      'Ongoing sales coaching and improvement'
    ],
    testimonials: [
      {
        quote: "Our AI sales agent has increased our lead conversion rate from 15% to 35% in just 3 months.",
        author: "Lisa Rodriguez",
        company: "Software Company"
      },
      {
        quote: "The AI handles 80% of our initial sales conversations, allowing our team to focus on closing deals.",
        author: "David Kim",
        company: "Insurance Agency"
      }
    ]
  },
  'social-assistant': {
    name: 'AI Social Assistant',
    tagline: 'Your Social Media Expert',
    description: 'Social media expert that creates content, engages with followers, and manages multiple platforms seamlessly.',
    icon: <Users className="h-12 w-12" />,
    category: 'Marketing',
    price: '$79/month',
    features: [
      'Content creation and scheduling across platforms',
      'Community engagement and sentiment analysis',
      'Performance tracking and optimization',
      'Hashtag research and trending topics',
      'Automated posting and engagement',
      'Brand voice consistency'
    ],
    benefits: [
      'Increase social media engagement by 200%',
      'Save 20+ hours per week on content creation',
      'Maintain consistent brand voice across platforms',
      'Improve social media ROI by 150%',
      'Generate more qualified leads',
      'Build stronger brand presence'
    ],
    useCases: [
      'Marketing agencies',
      'E-commerce brands',
      'Restaurants and hospitality',
      'Personal brands and influencers',
      'B2B companies',
      'Local businesses'
    ],
    setupTime: '1-2 hours',
    roi: '250% within 4 months',
    requirements: [
      'Social media accounts (Instagram, Facebook, LinkedIn, etc.)',
      'Brand guidelines and voice',
      'Content calendar and themes',
      'Target audience information',
      'Business goals and KPIs',
      'Visual assets and brand materials'
    ],
    process: [
      'Social media audit and strategy development',
      'Content calendar creation and optimization',
      'Brand voice training and content guidelines',
      'Platform integration and automation setup',
      'Performance monitoring and optimization',
      'Regular reporting and strategy refinement'
    ],
    testimonials: [
      {
        quote: "Our AI social assistant increased our Instagram engagement by 300% and generated 50+ new leads monthly.",
        author: "Emma Thompson",
        company: "E-commerce Brand"
      },
      {
        quote: "We save 25 hours per week on social media management while improving our brand presence.",
        author: "Alex Martinez",
        company: "Marketing Agency"
      }
    ]
  },
  'appointment-setter': {
    name: 'AI Appointment Setter',
    tagline: 'Your Intelligent Scheduler',
    description: 'Specialized AI agent that books meetings, sends reminders, and manages calendar conflicts automatically.',
    icon: <Calendar className="h-12 w-12" />,
    category: 'Scheduling',
    price: '$69/month',
    features: [
      'Intelligent scheduling with conflict resolution',
      'Automated reminders and follow-ups',
      'Calendar sync across multiple platforms',
      'Custom booking forms and questionnaires',
      'Time zone handling and availability management',
      'Integration with payment systems'
    ],
    benefits: [
      'Reduce no-shows by 70%',
      'Fill 3x more appointment slots',
      'Eliminate double-booking issues',
      'Increase booking conversion by 50%',
      'Save 15+ hours per week on scheduling',
      'Improve customer satisfaction'
    ],
    useCases: [
      'Consulting firms',
      'Beauty salons and spas',
      'Fitness trainers and coaches',
      'Professional services',
      'Medical practices',
      'Educational institutions'
    ],
    setupTime: '1-3 hours',
    roi: '400% within 2 months',
    requirements: [
      'Calendar system (Google Calendar, Outlook, etc.)',
      'Business hours and availability',
      'Service offerings and pricing',
      'Booking policies and cancellation rules',
      'Customer information collection needs',
      'Payment processing requirements'
    ],
    process: [
      'Calendar system integration and configuration',
      'Service offerings and availability setup',
      'Booking form customization and optimization',
      'Automated reminder system configuration',
      'Testing and quality assurance',
      'Go-live and performance monitoring'
    ],
    testimonials: [
      {
        quote: "Our AI appointment setter reduced no-shows by 75% and increased our booking rate by 60%.",
        author: "Dr. Maria Garcia",
        company: "Medical Practice"
      },
      {
        quote: "We now fill 90% of our available slots and save 20 hours per week on scheduling.",
        author: "Sarah Williams",
        company: "Beauty Salon"
      }
    ]
  }
}

export default function AgentDetailPage() {
  const params = useParams()
  const agentId = params.agentId as string
  const agent = agentData[agentId as keyof typeof agentData]
  const [showPurchaseFlow, setShowPurchaseFlow] = useState(false)

  if (!agent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Agent Not Found</h1>
            <Link href="/dashboard">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard">
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
              {agent.icon}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">{agent.name}</h1>
              <p className="text-xl text-slate-300">{agent.tagline}</p>
              <Badge variant="secondary" className="mt-2">{agent.category}</Badge>
            </div>
          </div>
          
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            {agent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {agent.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Business Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {agent.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Use Cases */}
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TargetIcon className="h-5 w-5 mr-2" />
                  Perfect For
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {agent.useCases.map((useCase, index) => (
                    <Badge key={index} variant="outline" className="text-sm border-slate-600 text-slate-300">
                      {useCase}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  What We Need From You
                </CardTitle>
                <CardDescription className="text-slate-300">
                  To set up your AI agent effectively, we'll need the following information and access
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {agent.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Setup Process */}
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Play className="h-5 w-5 mr-2" />
                  Setup Process
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Our streamlined setup process gets your AI agent working in hours, not weeks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {agent.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <span className="text-slate-300">{step}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonials */}
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  Customer Success Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {agent.testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <p className="text-slate-300 italic mb-2">"{testimonial.quote}"</p>
                      <div className="text-sm text-slate-400">
                        <span className="font-semibold">{testimonial.author}</span>
                        <span className="mx-2">•</span>
                        <span>{testimonial.company}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{agent.price}</div>
                  <p className="text-slate-400 mb-4">per month</p>
                  <Button 
                    onClick={() => setShowPurchaseFlow(true)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Setup Time</span>
                    <span className="text-white font-semibold">{agent.setupTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">ROI</span>
                    <span className="text-green-400 font-semibold">{agent.roi}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Uptime</span>
                    <span className="text-blue-400 font-semibold">99.9%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle>Enterprise Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-slate-300">SOC 2 Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-slate-300">99.9% Uptime</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-slate-300">Enterprise Security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Headphones className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-slate-300">24/7 Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/30 text-white">
              <CardHeader>
                <CardTitle>Ready to Get Started?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Purchase Now
                  </Button>
                  <Button asChild variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                    <Link href={`/agents/${agentId}/requirements`}>
                      <FileText className="h-4 w-4 mr-2" />
                      Fill Requirements Form
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                    <a href="https://calendly.com/cereva/30min?month=2025-08" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Schedule Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <PurchaseFlow
        agentType={agentId}
        agentName={agent.name}
        isOpen={showPurchaseFlow}
        onClose={() => setShowPurchaseFlow(false)}
        onSuccess={() => {
          setShowPurchaseFlow(false)
          // Redirect to dashboard after successful purchase
          window.location.href = '/dashboard'
        }}
      />
    </div>
  )
} 