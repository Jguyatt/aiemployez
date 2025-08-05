'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft,
  Phone,
  Target,
  Users,
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  MessageSquare,
  CalendarDays,
  Settings,
  Zap,
  Shield,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const agentIcons = {
  'receptionist': <Phone className="h-8 w-8" />,
  'sales-agent': <Target className="h-8 w-8" />,
  'social-assistant': <Users className="h-8 w-8" />,
  'appointment-setter': <Calendar className="h-8 w-8" />
}

const agentNames = {
  'receptionist': 'AI Receptionist',
  'sales-agent': 'AI Sales Agent',
  'social-assistant': 'AI Social Assistant',
  'appointment-setter': 'AI Appointment Setter'
}

const formSections = {
  'receptionist': [
    {
      title: 'Contact Information',
      fields: [
        { name: 'businessName', label: 'Business Name', type: 'text', required: true },
        { name: 'phoneNumber', label: 'Business Phone Number', type: 'tel', required: true },
        { name: 'email', label: 'Business Email', type: 'email', required: true },
        { name: 'website', label: 'Website (optional)', type: 'url', required: false }
      ]
    },
    {
      title: 'Business Hours',
      fields: [
        { name: 'businessHours', label: 'Business Hours', type: 'textarea', required: true, placeholder: 'e.g., Monday-Friday 9AM-5PM, Saturday 10AM-2PM' },
        { name: 'timezone', label: 'Timezone', type: 'text', required: true, placeholder: 'e.g., EST, PST, GMT' }
      ]
    },
    {
      title: 'Services & Appointments',
      fields: [
        { name: 'services', label: 'Services Offered', type: 'textarea', required: true, placeholder: 'List your main services and appointment types' },
        { name: 'appointmentDuration', label: 'Typical Appointment Duration', type: 'text', required: true, placeholder: 'e.g., 30 minutes, 1 hour' },
        { name: 'cancellationPolicy', label: 'Cancellation Policy', type: 'textarea', required: true, placeholder: 'e.g., 24-hour notice required' }
      ]
    },
    {
      title: 'Common Questions',
      fields: [
        { name: 'faqs', label: 'Frequently Asked Questions', type: 'textarea', required: true, placeholder: 'List common questions customers ask and your standard responses' },
        { name: 'specialInstructions', label: 'Special Instructions', type: 'textarea', required: false, placeholder: 'Any special instructions for customers or appointment requirements' }
      ]
    }
  ],
  'sales-agent': [
    {
      title: 'Business Information',
      fields: [
        { name: 'businessName', label: 'Business Name', type: 'text', required: true },
        { name: 'industry', label: 'Industry', type: 'text', required: true },
        { name: 'website', label: 'Website', type: 'url', required: true },
        { name: 'email', label: 'Business Email', type: 'email', required: true }
      ]
    },
    {
      title: 'Product/Service Details',
      fields: [
        { name: 'products', label: 'Products/Services', type: 'textarea', required: true, placeholder: 'Describe your main products or services' },
        { name: 'pricing', label: 'Pricing Information', type: 'textarea', required: true, placeholder: 'Provide pricing details or ranges' },
        { name: 'targetMarket', label: 'Target Market', type: 'textarea', required: true, placeholder: 'Describe your ideal customer profile' }
      ]
    },
    {
      title: 'Sales Process',
      fields: [
        { name: 'salesCycle', label: 'Typical Sales Cycle', type: 'text', required: true, placeholder: 'e.g., 30 days, 3 months' },
        { name: 'objections', label: 'Common Objections', type: 'textarea', required: true, placeholder: 'List common customer objections and your responses' },
        { name: 'qualificationCriteria', label: 'Lead Qualification Criteria', type: 'textarea', required: true, placeholder: 'What makes a lead qualified for your business?' }
      ]
    },
    {
      title: 'CRM Integration',
      fields: [
        { name: 'crmSystem', label: 'CRM System', type: 'text', required: false, placeholder: 'e.g., Salesforce, HubSpot, Pipedrive' },
        { name: 'leadSources', label: 'Lead Sources', type: 'textarea', required: true, placeholder: 'Where do your leads come from? (website, social media, referrals, etc.)' }
      ]
    }
  ],
  'social-assistant': [
    {
      title: 'Business Information',
      fields: [
        { name: 'businessName', label: 'Business Name', type: 'text', required: true },
        { name: 'industry', label: 'Industry', type: 'text', required: true },
        { name: 'website', label: 'Website', type: 'url', required: true },
        { name: 'email', label: 'Business Email', type: 'email', required: true }
      ]
    },
    {
      title: 'Social Media Accounts',
      fields: [
        { name: 'socialAccounts', label: 'Social Media Accounts', type: 'textarea', required: true, placeholder: 'List your social media accounts (Instagram, Facebook, LinkedIn, Twitter, etc.)' },
        { name: 'accountAccess', label: 'Account Access', type: 'textarea', required: true, placeholder: 'Do you have admin access to these accounts? Any restrictions?' }
      ]
    },
    {
      title: 'Brand & Content',
      fields: [
        { name: 'brandVoice', label: 'Brand Voice', type: 'textarea', required: true, placeholder: 'Describe your brand voice and tone (professional, casual, friendly, etc.)' },
        { name: 'contentThemes', label: 'Content Themes', type: 'textarea', required: true, placeholder: 'What topics/themes should we focus on? (industry insights, company updates, tips, etc.)' },
        { name: 'targetAudience', label: 'Target Audience', type: 'textarea', required: true, placeholder: 'Describe your target audience demographics and interests' }
      ]
    },
    {
      title: 'Goals & KPIs',
      fields: [
        { name: 'socialGoals', label: 'Social Media Goals', type: 'textarea', required: true, placeholder: 'What are your main goals? (engagement, leads, brand awareness, etc.)' },
        { name: 'competitors', label: 'Competitors', type: 'textarea', required: false, placeholder: 'List 3-5 competitors to monitor' },
        { name: 'contentAssets', label: 'Content Assets', type: 'textarea', required: false, placeholder: 'Do you have brand guidelines, logos, or other assets we should use?' }
      ]
    }
  ],
  'appointment-setter': [
    {
      title: 'Business Information',
      fields: [
        { name: 'businessName', label: 'Business Name', type: 'text', required: true },
        { name: 'industry', label: 'Industry', type: 'text', required: true },
        { name: 'website', label: 'Website', type: 'url', required: true },
        { name: 'email', label: 'Business Email', type: 'email', required: true }
      ]
    },
    {
      title: 'Calendar & Availability',
      fields: [
        { name: 'calendarSystem', label: 'Calendar System', type: 'text', required: true, placeholder: 'e.g., Google Calendar, Outlook, Calendly' },
        { name: 'businessHours', label: 'Business Hours', type: 'textarea', required: true, placeholder: 'Your available hours for appointments' },
        { name: 'timezone', label: 'Timezone', type: 'text', required: true, placeholder: 'e.g., EST, PST, GMT' }
      ]
    },
    {
      title: 'Services & Booking',
      fields: [
        { name: 'services', label: 'Services Offered', type: 'textarea', required: true, placeholder: 'List all services and their durations' },
        { name: 'pricing', label: 'Pricing Information', type: 'textarea', required: true, placeholder: 'Service pricing or consultation fees' },
        { name: 'bookingPolicy', label: 'Booking Policy', type: 'textarea', required: true, placeholder: 'Any requirements or policies for booking appointments' }
      ]
    },
    {
      title: 'Customer Information',
      fields: [
        { name: 'customerQuestions', label: 'Pre-appointment Questions', type: 'textarea', required: true, placeholder: 'What information should we collect from customers before booking?' },
        { name: 'reminderPreferences', label: 'Reminder Preferences', type: 'textarea', required: true, placeholder: 'How many reminders and when? (24h, 2h before, etc.)' }
      ]
    }
  ]
}

export default function RequirementsForm() {
  const params = useParams()
  const router = useRouter()
  const agentId = params.agentId as string
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [currentSection, setCurrentSection] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const agentName = agentNames[agentId as keyof typeof agentNames]
  const agentIcon = agentIcons[agentId as keyof typeof agentIcons]
  const sections = formSections[agentId as keyof typeof formSections] || []

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Redirect to thank you page
    router.push(`/thank-you?agent=${agentId}&plan=basic&requirements=submitted`)
  }

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    }
  }

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  const isLastSection = currentSection === sections.length - 1

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href={`/agents/${agentId}`}>
            <Button variant="ghost" className="text-slate-300 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Agent Details
            </Button>
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
              {agentIcon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Setup Requirements</h1>
              <p className="text-slate-300">{agentName}</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-300">
                Step {currentSection + 1} of {sections.length}
              </span>
              <span className="text-sm text-slate-300">
                {Math.round(((currentSection + 1) / sections.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <Card className="bg-white/5 border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  {sections[currentSection]?.title}
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Please provide the following information to help us set up your {agentName} effectively.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {sections[currentSection]?.fields.map((field) => (
                  <div key={field.name} className="space-y-2">
                    <Label htmlFor={field.name} className="text-white">
                      {field.label}
                      {field.required && <span className="text-red-400 ml-1">*</span>}
                    </Label>
                    {field.type === 'textarea' ? (
                      <Textarea
                        id={field.name}
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                        rows={4}
                      />
                    ) : (
                      <Input
                        id={field.name}
                        type={field.type}
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="bg-slate-800 border-slate-600 text-white placeholder-slate-400"
                      />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={prevSection}
                disabled={currentSection === 0}
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <div className="flex space-x-4">
                {!isLastSection ? (
                  <Button
                    type="button"
                    onClick={nextSection}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="h-4 w-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Submit Requirements
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </form>

          {/* Info Card */}
          <Card className="mt-8 bg-white/5 border-white/10 text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                What Happens Next?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Review Requirements</h4>
                  <p className="text-sm text-slate-300">Our team will review your requirements and prepare a custom setup plan.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Custom Configuration</h4>
                  <p className="text-sm text-slate-300">We'll configure your AI agent with your specific business needs and preferences.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Go Live</h4>
                  <p className="text-sm text-slate-300">Your AI agent will be activated and ready to work for your business 24/7.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 