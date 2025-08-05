'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  CheckCircle, 
  Clock, 
  Mail, 
  Phone, 
  Calendar, 
  Target,
  Users,
  ArrowRight,
  Sparkles,
  Shield,
  Zap
} from 'lucide-react'
import Link from 'next/link'

const agentIcons: { [key: string]: React.ReactNode } = {
  'receptionist': <Phone className="h-8 w-8" />,
  'sales-agent': <Target className="h-8 w-8" />,
  'social-assistant': <Users className="h-8 w-8" />,
  'appointment-setter': <Calendar className="h-8 w-8" />
}

const agentNames: { [key: string]: string } = {
  'receptionist': 'AI Receptionist',
  'sales-agent': 'AI Sales Agent',
  'social-assistant': 'AI Social Assistant',
  'appointment-setter': 'AI Appointment Setter'
}

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const [orderDetails, setOrderDetails] = useState<any>(null)

  useEffect(() => {
    // Get order details from URL params
    const agentType = searchParams.get('agent')
    const plan = searchParams.get('plan')
    
    if (agentType) {
      setOrderDetails({
        agentType,
        plan: plan || 'basic',
        orderId: `ORD-${Date.now()}`
      })
    }
  }, [searchParams])

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Payment Successful!</h1>
            <p className="text-xl text-slate-300">
              Thanks for purchasing {agentNames[orderDetails.agentType]}!
            </p>
          </div>

          {/* Order Details Card */}
          <Card className="bg-white/10 border-white/20 text-white mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500 rounded-lg">
                  {agentIcons[orderDetails.agentType]}
                </div>
                <span>{agentNames[orderDetails.agentType]}</span>
              </CardTitle>
              <CardDescription className="text-slate-300">
                Order #{orderDetails.orderId}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Plan</span>
                  <Badge variant="secondary" className="capitalize">
                    {orderDetails.plan} Plan
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Status</span>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    <Clock className="h-3 w-3 mr-1" />
                    Pending Setup
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Estimated Setup</span>
                  <span className="text-white">2-4 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-white/10 border-white/20 text-white mb-8">
            <CardHeader>
              <CardTitle>What happens next?</CardTitle>
              <CardDescription className="text-slate-300">
                We're setting up your AI agent and will notify you when it's ready
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Order Processing</h4>
                    <p className="text-sm text-slate-300">
                      Your order is being processed and our team is preparing your AI agent.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Agent Setup</h4>
                    <p className="text-sm text-slate-300">
                      We'll configure your AI agent with your business requirements and preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Ready to Use</h4>
                    <p className="text-sm text-slate-300">
                      You'll receive an email notification when your AI agent is ready to use.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Support */}
          <Card className="bg-white/10 border-white/20 text-white mb-8">
            <CardHeader>
              <CardTitle>Need help?</CardTitle>
              <CardDescription className="text-slate-300">
                Our support team is here to help you get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Support
                </Button>
                <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                  <Zap className="h-4 w-4 mr-2" />
                  Live Chat
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              <Link href="/dashboard">
                <ArrowRight className="h-4 w-4 mr-2" />
                Go to Dashboard
              </Link>
            </Button>
            <Button variant="outline" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800">
              <Shield className="h-4 w-4 mr-2" />
              View Documentation
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-400">
              You'll receive a confirmation email shortly with your order details.
            </p>
            <div className="flex items-center justify-center space-x-6 mt-4 text-xs text-slate-500">
              <div className="flex items-center space-x-1">
                <Shield className="h-3 w-3" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-1">
                <Sparkles className="h-3 w-3" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-3 w-3" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 