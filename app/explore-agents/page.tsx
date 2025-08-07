'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Target, 
  Workflow, 
  Zap, 
  Rocket, 
  ArrowRight, 
  CheckCircle, 
  Lightbulb, 
  BarChart3,
  Users,
  Clock,
  TrendingUp,
  Shield,
  Sparkles,
  Brain,
  Database,
  Network,
  Search,
  ArrowDown,
  ArrowUp,
  Play,
  Settings,
  Monitor
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const workflowSteps = [
  {
    id: 'discovery',
    title: 'Discovery & Analysis',
    description: 'We start by understanding your business goals, current processes, and key performance indicators',
    icon: Target,
    gradient: 'from-blue-500 to-cyan-500',
    details: [
      'Business goal analysis and KPI mapping',
      'Current process documentation and pain point identification',
      'Stakeholder interviews and requirements gathering',
      'Technology stack assessment and integration planning',
      'ROI projections and success metrics definition'
    ],
    duration: '1-2 weeks',
    deliverables: ['Business Analysis Report', 'Process Documentation', 'KPI Strategy']
  },
  {
    id: 'design',
    title: 'AI Solution Design',
    description: 'Our experts design custom AI solutions tailored to your specific business needs and workflows',
    icon: Workflow,
    gradient: 'from-purple-500 to-pink-500',
    details: [
      'Custom AI model architecture design',
      'Workflow automation mapping and optimization',
      'Integration strategy with existing systems',
      'User experience design and interface planning',
      'Security and compliance requirements implementation'
    ],
    duration: '2-3 weeks',
    deliverables: ['AI Solution Architecture', 'Workflow Blueprint', 'Integration Plan']
  },
  {
    id: 'development',
    title: 'Custom Development',
    description: 'We build your AI solution using cutting-edge technology and best practices',
    icon: Zap,
    gradient: 'from-green-500 to-emerald-500',
    details: [
      'Custom AI model training and fine-tuning',
      'API development and system integration',
      'User interface and experience implementation',
      'Testing and quality assurance procedures',
      'Documentation and knowledge transfer preparation'
    ],
    duration: '4-6 weeks',
    deliverables: ['Custom AI Solution', 'API Documentation', 'User Training Materials']
  },
  {
    id: 'deployment',
    title: 'Deployment & Optimization',
    description: 'We deploy your solution with ongoing support and continuous improvement',
    icon: Rocket,
    gradient: 'from-orange-500 to-red-500',
    details: [
      'Phased deployment strategy and rollout',
      'Team training and change management',
      'Performance monitoring and optimization',
      'Ongoing support and maintenance',
      'Continuous improvement and scaling'
    ],
    duration: '1-2 weeks',
    deliverables: ['Live AI Solution', 'Team Training', 'Support Plan']
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and streamline workflows',
    metric: '40-60% time savings'
  },
  {
    icon: Shield,
    title: 'Improved Accuracy',
    description: 'Reduce human error and ensure consistent quality',
    metric: '85%+ error reduction'
  },
  {
    icon: Users,
    title: 'Better Customer Experience',
    description: 'Provide faster, more personalized service',
    metric: '3x faster response times'
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Insights',
    description: 'Gain valuable insights from your business data',
    metric: 'Real-time analytics'
  }
]

export default function ExploreAgentsPage() {
  return (
    <div className="min-h-screen dynamic-shapes-bg relative overflow-hidden">
      {/* Animated Purple Shapes */}
      <div className="purple-shape-1" style={{ top: '10%', left: '20%' }}></div>
      <div className="purple-shape-2" style={{ top: '60%', right: '10%' }}></div>
      <div className="purple-shape-3" style={{ top: '30%', right: '30%' }}></div>
      
      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>
      
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="ai-section relative">
        <div className="ai-container text-center">
          <div className="mb-8 animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-light bg-slate-800/30 text-purple-400 border border-purple-500/20 backdrop-blur-sm purple-glow">
              <Sparkles className="h-4 w-4 mr-2" />
              Custom AI Workflow
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Our Custom AI
            <span className="block ai-text-gradient-primary ai-glow-text-strong">
              Solution Process
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto font-light animate-fade-in" style={{animationDelay: '0.4s'}}>
            Discover how we design and implement tailored AI systems that automate your workflows, 
            boost revenue, and eliminate inefficiencies through our proven 4-step process.
          </p>
        </div>
      </section>

      {/* Workflow Process Section */}
      <section className="ai-section">
        <div className="ai-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 purple-glow-text">
              Our Proven 4-Step Process
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
              From initial discovery to ongoing optimization, we guide you through every step
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500"></div>
            
            <div className="space-y-16">
              {workflowSteps.map((step, index) => (
                <div key={step.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-slate-900 z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 transition-all duration-300 backdrop-blur-sm">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-light text-white">{step.title}</h3>
                          <span className="text-sm text-slate-400 font-light bg-slate-700/50 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 font-light mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Details Grid */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-white font-light mb-3 flex items-center">
                            <CheckCircle className="h-4 w-4 mr-2 text-green-400" />
                            Key Activities
                          </h4>
                          <ul className="space-y-2">
                            {step.details.slice(0, 3).map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-sm text-slate-300 font-light flex items-start">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-light mb-3 flex items-center">
                            <Settings className="h-4 w-4 mr-2 text-blue-400" />
                            Deliverables
                          </h4>
                          <ul className="space-y-2">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className="text-sm text-slate-300 font-light flex items-start">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="ai-section bg-slate-900/30">
        <div className="ai-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 purple-glow-text">
              Expected Outcomes
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
              Transform your business with measurable improvements across all key areas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-light text-white mb-2">{benefit.title}</h3>
                <p className="text-slate-300 font-light text-sm mb-3">{benefit.description}</p>
                <div className="text-lg font-light ai-text-gradient-primary">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ai-section ai-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 purple-glow-text">
            Ready to Start Your AI Transformation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-light">
            Book your free AI discovery audit and see how our custom solution process can revolutionize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/cerevaai/30min" target="_blank" rel="noopener noreferrer">
              <button className="text-lg px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 group font-light rounded-lg transition-all duration-300">
                Book Your Free AI Discovery Audit
                <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 