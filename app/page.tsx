import Link from 'next/link'
import { Check, Star, Users, Clock, MessageSquare, Calendar, Zap, Shield, TrendingUp, Brain, Database, Network, ArrowRight, Play, BarChart3, Smartphone, Sparkles, DollarSign, Timer, TrendingDown, Phone, Mail, ShoppingCart, FileText, Settings, HelpCircle, UserCheck, Target, BarChart, ChevronDown, Activity, PieChart, ArrowUpRight, ArrowDownRight, Pause, Eye, User, Plus, Filter, Download, MoreHorizontal, CheckCircle, AlertTriangle } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const features = [
  {
    title: 'Custom AI Solutions',
    description: 'Tailored AI systems designed specifically for your business needs',
    icon: Brain,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: '24/7 Operation',
    description: 'AI systems that work around the clock without breaks or downtime',
    icon: Clock,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Seamless Integration',
    description: 'Works with your existing tools and systems without disruption',
    icon: Network,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Performance Analytics',
    description: 'Real-time insights and optimization for continuous improvement',
    icon: BarChart3,
    gradient: 'from-orange-500 to-red-500'
  }
]

const aiSolutions = [
  {
    id: 'customer-service',
    title: 'Customer Service Automation',
    description: 'Automate customer support, handle inquiries, and resolve issues 24/7',
    icon: HelpCircle,
    gradient: 'from-blue-500 to-cyan-500',
    features: ['Issue resolution', 'FAQ handling', 'Ticket creation', 'Escalation management']
  },
  {
    id: 'sales-automation',
    title: 'Sales Automation System',
    description: 'Automate lead qualification, sales calls, and deal closing processes',
    icon: TrendingUp,
    gradient: 'from-purple-500 to-pink-500',
    features: ['Lead qualification', 'Product demos', 'Quote generation', 'Follow-up automation']
  },
  {
    id: 'appointment-scheduling',
    title: 'Appointment Scheduling System',
    description: 'Automate meeting scheduling, calendar management, and reminders',
    icon: Calendar,
    gradient: 'from-green-500 to-emerald-500',
    features: ['Meeting scheduling', 'Calendar sync', 'Reminder system', 'Conflict resolution']
  },
  {
    id: 'data-processing',
    title: 'Data Processing Automation',
    description: 'Automate data analysis, reporting, and business intelligence tasks',
    icon: BarChart3,
    gradient: 'from-indigo-500 to-purple-500',
    features: ['Data analysis', 'Report generation', 'Trend identification', 'Performance tracking']
  }
]

const faqs = [
  {
    question: 'How does your AI automation technology work?',
    answer: 'Our AI systems use advanced machine learning and natural language processing to understand your business processes, automate repetitive tasks, and provide intelligent responses. Each solution is customized to your specific needs and integrates seamlessly with your existing systems.'
  },
  {
    question: 'Can the AI handle multiple languages?',
    answer: 'Yes! Our AI systems support multiple languages and can seamlessly switch between them based on your requirements. This makes it perfect for businesses serving diverse customer bases or operating internationally.'
  },
  {
    question: 'What happens when the AI can\'t handle a task?',
    answer: 'Our system intelligently escalates complex tasks to human operators while providing them with full context of the interaction. This ensures no issue goes unresolved while maintaining efficiency and quality.'
  },
  {
    question: 'How quickly can we implement an AI solution?',
    answer: 'Implementation typically takes 2-4 weeks from start to finish. We handle all the technical setup, training, and integration with your existing systems. Our team works closely with you to ensure a smooth transition.'
  },
  {
    question: 'What kind of businesses can benefit from AI automation?',
    answer: 'Any business can benefit from AI automation - from small businesses to large enterprises. We\'ve helped healthcare providers, e-commerce companies, service businesses, and more automate processes and improve efficiency.'
  },
  {
    question: 'How do you customize the AI for my business?',
    answer: 'We start with a free discovery audit to understand your specific business processes, pain points, and goals. Then we design a custom AI solution that addresses your unique needs and integrates with your existing tools and workflows.'
  }
]

// Mock data for dashboard preview
const mockCallCenter = {
  id: 'customer-service-1',
  name: 'Cereva Customer Service',
  type: 'Customer Service AI',
  status: 'active',
  metrics: {
    totalCalls: 1247,
    callsHandled: 1189,
    avgCallTime: '2.3min',
    satisfactionRate: 94.2,
    escalationRate: 5.8
  },
  recentActivity: [
    { time: '2 min ago', action: 'Resolved billing inquiry', customer: 'John Smith', status: 'success' },
    { time: '5 min ago', action: 'Created support ticket', customer: 'Sarah Johnson', status: 'success' },
    { time: '12 min ago', action: 'Escalated technical issue', customer: 'Mike Davis', status: 'escalated' },
    { time: '18 min ago', action: 'Scheduled appointment', customer: 'Lisa Wilson', status: 'success' }
  ]
}

const getMetricsByType = (callCenter: any) => {
  return [
    { label: 'Total Calls', value: callCenter.metrics.totalCalls, icon: Phone, trend: '+15%', color: 'text-blue-500' },
    { label: 'Calls Handled', value: callCenter.metrics.callsHandled, icon: CheckCircle, trend: '+12%', color: 'text-green-500' },
    { label: 'Avg. Call Time', value: callCenter.metrics.avgCallTime, icon: Clock, trend: '-8%', color: 'text-purple-500' },
    { label: 'Satisfaction Rate', value: `${callCenter.metrics.satisfactionRate}%`, icon: Star, trend: '+3%', color: 'text-yellow-500' },
    { label: 'Escalation Rate', value: `${callCenter.metrics.escalationRate}%`, icon: TrendingDown, trend: '-2%', color: 'text-orange-500' }
  ]
}

const getInsightsByType = (callCenter: any) => {
  return [
    { title: 'Peak Hours', description: 'Most calls between 9-11 AM and 2-4 PM', icon: Clock, color: 'text-blue-500' },
    { title: 'Common Issues', description: 'Billing inquiries up 23% this week', icon: MessageSquare, color: 'text-green-500' },
    { title: 'Performance', description: 'AI resolution rate improved by 15%', icon: Zap, color: 'text-purple-500' }
  ]
}

export default function HomePage() {
  return (
    <div className="min-h-screen dynamic-shapes-bg relative overflow-hidden">
      {/* Animated Purple Shapes */}
      <div className="purple-shape-1" style={{ top: '10%', left: '20%' }}></div>
      <div className="purple-shape-2" style={{ top: '60%', right: '10%' }}></div>
      <div className="purple-shape-3" style={{ top: '30%', right: '30%' }}></div>
      <div className="purple-shape-4" style={{ bottom: '20%', left: '10%' }}></div>
      <div className="purple-shape-5" style={{ top: '70%', left: '60%' }}></div>
      <div className="purple-shape-6" style={{ top: '15%', left: '70%' }}></div>
      
      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>
      
      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Redesigned for AI Call Centers */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-light bg-slate-800/30 text-purple-400 border border-purple-500/20 backdrop-blur-sm purple-glow">
              <Sparkles className="h-4 w-4 mr-2" />
              Trusted by 500+ businesses worldwide
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight animate-fade-in purple-glow-text" style={{animationDelay: '0.2s'}}>
            Transform Your Business
            <span className="block ai-text-gradient-primary purple-glow-text">
              With Custom AI Solutions
            </span>
          </h1>
          
          {/* Value Proposition */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in" style={{animationDelay: '0.4s'}}>
            Automate your business processes with intelligent AI systems that work 24/7, 
            handle complex tasks, and never take a break. Reduce costs by up to 80% while improving efficiency.
          </p>

          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <a href="https://calendly.com/cerevaai/30min" target="_blank" rel="noopener noreferrer">
              <button className="text-lg px-8 py-4 ai-button text-white group font-light ai-hover-lift purple-glow rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Book Your Free AI Discovery Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform inline" />
              </button>
            </a>
          </div>
          
          {/* Phone Number Blurb */}
          <div className="text-center mb-12 animate-fade-in" style={{animationDelay: '0.9s'}}>
            <p className="text-slate-400 font-light">
              Or call <span className="text-purple-400 font-medium">628-228-0057</span> and have our AI assistant book a call for you!
            </p>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-400 font-light animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-green-400" />
              SOC 2 Compliant
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-purple-400" />
              24/7 Operation
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2 text-green-400" />
              99.9% Uptime
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section - NEW */}
      <section className="ai-section bg-slate-900/20">
        <div className="ai-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-light bg-red-500/20 text-red-300 border border-red-500/30 mb-6">
              <AlertTriangle className="h-4 w-4 mr-2" />
              The Hidden Cost Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 animate-fade-in purple-glow-text">
              Business Owners Are Spending Too Much on Manual Systems
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Traditional business processes are expensive, inefficient, and limited by human constraints. 
              Companies spend thousands on manual systems that could be automated with AI, 
              wasting money on repetitive tasks that technology can handle better.
            </p>
          </div>
          
          {/* Problem Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Average Annual Cost',
                value: '$45,000',
                description: 'Per employee for manual processes',
                icon: DollarSign,
                color: 'text-red-400'
              },
              {
                title: 'Time Wasted',
                value: '40%',
                description: 'On repetitive tasks daily',
                icon: Timer,
                color: 'text-orange-400'
              },
              {
                title: 'Error Rate',
                value: '15%',
                description: 'Human error in manual processes',
                icon: AlertTriangle,
                color: 'text-yellow-400'
              }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="group relative" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm group-hover:bg-slate-800/60 transition-all duration-300 group-hover:border-red-500/30">
                    <div className="text-center">
                      <div className={`w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl text-white font-light mb-2">{stat.title}</h3>
                      <p className="text-2xl font-light text-red-400 mb-2">{stat.value}</p>
                      <p className="text-sm text-slate-400 font-light">{stat.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Solution Preview */}
          <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-lg text-slate-300 font-light mb-6">
              <span className="ai-text-gradient-primary font-medium">AI automation reduces these costs by 80%</span> while improving efficiency by 40%. 
              The ROI is immediate and substantial.
            </p>
            <a href="https://calendly.com/cerevaai/30min" target="_blank" rel="noopener noreferrer">
              <button className="text-white font-light px-8 py-4 ai-hover-lift rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 border border-cyan-400/30 shadow-lg shadow-cyan-500/25">
                <DollarSign className="mr-2 h-5 w-5 inline" />
                Discover Your Savings Potential
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* AI Automation Revolution Section */}
      <section className="ai-section bg-slate-900/30">
        <div className="ai-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 animate-fade-in purple-glow-text">
              The AI Automation Revolution is Here
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              Traditional business processes are expensive, inefficient, and limited by human constraints. 
              AI systems operate 24/7, handle complex tasks, and never get tired or frustrated. 
              The future of business automation is AI-powered.
            </p>
          </div>
          

          
          <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <p className="text-lg text-slate-300 font-light mb-6">
              <span className="ai-text-gradient-primary font-medium">80% cost reduction</span> while improving efficiency by 40%. 
              The ROI is immediate and substantial.
            </p>
            <a href="https://calendly.com/cerevaai/30min" target="_blank" rel="noopener noreferrer">
              <button className="text-white font-light px-8 py-4 ai-hover-lift rounded-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 border border-orange-400/30 shadow-lg shadow-orange-500/25">
                <Zap className="mr-2 h-5 w-5 inline" />
                Join the AI Automation Revolution
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="ai-section relative bg-gradient-to-br from-slate-900/40 via-purple-900/20 to-slate-900/40">
        <div className="ai-container">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-light bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Advanced AI Technology
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 purple-glow-text">
              Why AI Solutions Win
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Our AI systems outperform traditional processes in every metric that matters
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="group relative" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 h-full backdrop-blur-sm group-hover:bg-slate-800/60 transition-all duration-300 group-hover:border-purple-500/30">
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl text-white font-light mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                    <p className="text-center text-slate-300 font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Dashboard Section */}
      <section className="ai-section bg-slate-900/30">
        <div className="ai-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 purple-glow-text">
              Your AI System Dashboard
            </h2>
            <p className="text-slate-300 font-light leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
              Real-time analytics, performance tracking, and detailed insights for your AI automation operations.
            </p>
            <div className="inline-block px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-full text-sm text-slate-300 mt-4">
              ✨ Preview: This is what your dashboard will look like
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
              {/* Dashboard Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 mb-8">
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-16 rounded-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-light text-white">
                      {mockCallCenter.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500 text-white">
                        Active
                      </span>
                      <span className="text-sm text-slate-400">• Last active 2 minutes ago</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <select className="bg-slate-700/50 border border-slate-600/50 rounded-lg px-3 py-2 text-white text-sm">
                    <option>7 days</option>
                    <option>30 days</option>
                    <option>Custom</option>
                  </select>

                  <button className="flex items-center px-3 py-2 text-sm text-slate-300 hover:text-white border border-slate-600/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </button>

                  <button className="flex items-center px-3 py-2 text-sm text-slate-300 hover:text-white border border-slate-600/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </button>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                {getMetricsByType(mockCallCenter).map((metric, index) => {
                  const MetricIcon = metric.icon
                  return (
                    <div key={index} className="bg-slate-700/30 border border-slate-600/30 rounded-xl p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-slate-400">{metric.label}</p>
                          <p className="text-2xl font-light text-white mt-1">{metric.value}</p>
                          <div className="flex items-center mt-2">
                            {metric.trend !== 'N/A' ? (
                              <>
                                {metric.trend.startsWith('+') ? (
                                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                                ) : (
                                  <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                                )}
                                <span className={`text-sm ${metric.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                  {metric.trend}
                                </span>
                              </>
                            ) : (
                              <span className="text-sm text-slate-400">N/A</span>
                            )}
                          </div>
                        </div>
                        <div className={`p-3 rounded-lg ${metric.color.replace('text-', 'bg-')} bg-opacity-20`}>
                          <MetricIcon className={`h-6 w-6 ${metric.color}`} />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Activity Timeline */}
                <div className="lg:col-span-2">
                  <div className="bg-slate-700/30 border border-slate-600/30 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-xl font-light text-white">Recent Calls</h4>
                        <p className="text-slate-300 text-sm">Latest call activity and resolutions</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="flex items-center px-3 py-2 text-sm text-slate-300 hover:text-white border border-slate-600/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                          <Filter className="h-4 w-4 mr-2" />
                          Filter
                        </button>
                        <button className="flex items-center px-3 py-2 text-sm text-slate-300 hover:text-white border border-slate-600/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {mockCallCenter.recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-4 p-4 bg-slate-600/20 rounded-lg">
                          <div className={`w-3 h-3 rounded-full ${
                            activity.status === 'success' ? 'bg-green-500' : 'bg-yellow-500'
                          }`} />
                          <div className="flex-1">
                            <p className="text-white font-light">{activity.action}</p>
                            <p className="text-sm text-slate-400">
                              {activity.customer} • {activity.time}
                            </p>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            activity.status === 'success' 
                              ? 'bg-green-500 text-white' 
                              : 'bg-yellow-500 text-white'
                          }`}>
                            {activity.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Insights Panel */}
                <div>
                  <div className="bg-slate-700/30 border border-slate-600/30 rounded-xl p-6">
                    <div className="mb-6">
                      <h4 className="text-xl font-light text-white">Insights</h4>
                      <p className="text-slate-300 text-sm">Performance tips and trends</p>
                    </div>
                    <div className="space-y-4">
                      {getInsightsByType(mockCallCenter).map((insight, index) => {
                        const InsightIcon = insight.icon
                        return (
                          <div key={index} className="p-4 bg-slate-600/20 rounded-lg">
                            <div className="flex items-start space-x-3">
                              <div className={`p-2 rounded-lg ${insight.color.replace('text-', 'bg-')} bg-opacity-20`}>
                                <InsightIcon className={`h-4 w-4 ${insight.color}`} />
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-white">{insight.title}</h5>
                                <p className="text-xs text-slate-400 mt-1">{insight.description}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* AI Call Centers Preview Section */}
      <section className="ai-section bg-slate-900/30">
        <div className="ai-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 purple-glow-text">
              Your AI Call Center Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
              Specialized AI call centers for different business needs
            </p>
            <div className="inline-block px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-full text-sm text-slate-300 font-light mt-4">
              ✨ Preview: This is what your call center could look like
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'Total Calls Handled',
                value: '12,450',
                icon: Phone,
                gradient: 'from-blue-500 to-cyan-500',
                change: '+2,340 this month'
              },
              {
                title: 'Active Hours',
                value: '168',
                icon: Clock,
                gradient: 'from-purple-500 to-pink-500',
                change: '24/7 operation'
              },
              {
                title: 'Cost Savings',
                value: '$45,200',
                icon: DollarSign,
                gradient: 'from-green-500 to-emerald-500',
                change: '+80% vs traditional'
              },
              {
                title: 'Satisfaction Score',
                value: '4.8/5',
                icon: Activity,
                gradient: 'from-indigo-500 to-purple-500',
                change: '+40% improvement'
              }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="group relative" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm group-hover:bg-slate-800/60 transition-all duration-300 group-hover:border-purple-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400 font-light mb-1">{stat.title}</p>
                        <p className="text-2xl font-light text-white mb-1">{stat.value}</p>
                        <p className="text-xs text-green-400 font-light">{stat.change}</p>
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-lg flex items-center justify-center ai-glow`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Business Solutions Section */}
          <div className="space-y-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light text-white mb-4 purple-glow-text">Business Solutions That Save Time & Money</h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                Transform your business operations with intelligent automation that reduces costs by up to 80% while improving efficiency by 40%
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2">Automate Repetitive Tasks</h4>
                      <p className="text-slate-300 font-light leading-relaxed">
                        Free your team from mundane, time-consuming tasks. Our AI handles data entry, report generation, and routine customer interactions 24/7.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2">Reduce Operational Costs</h4>
                      <p className="text-slate-300 font-light leading-relaxed">
                        Cut overhead by up to 80% while maintaining or improving service quality. No more overtime, training costs, or employee turnover.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2">Scale Without Limits</h4>
                      <p className="text-slate-300 font-light leading-relaxed">
                        Handle 10x more volume without hiring additional staff. Our AI scales instantly to meet demand spikes and seasonal fluctuations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-2">Boost Revenue</h4>
                      <p className="text-slate-300 font-light leading-relaxed">
                        Increase customer satisfaction and conversion rates. AI never gets tired, never makes mistakes, and always provides consistent service.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <a href="https://calendly.com/cerevaai/30min" target="_blank" rel="noopener noreferrer">
                    <button className="ai-button text-white font-light px-8 py-4 ai-hover-lift purple-glow rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                      Discover Your Savings Potential
                      <ArrowRight className="ml-2 h-5 w-5 inline" />
                    </button>
                  </a>
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Brain className="h-12 w-12 text-white" />
                    </div>
                    <h4 className="text-2xl font-light text-white mb-4">AI-Powered Efficiency</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                        <span className="text-slate-300 font-light">Traditional Process</span>
                        <span className="text-red-400 font-light">8 hours/day</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                        <span className="text-white font-light">AI Automation</span>
                        <span className="text-green-400 font-light">24/7</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                        <span className="text-slate-300 font-light">Cost Savings</span>
                        <span className="text-green-400 font-light">80%</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
                        <span className="text-white font-light">Efficiency Gain</span>
                        <span className="text-purple-400 font-light">+40%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6 mt-12">
            <h3 className="text-2xl font-light text-white text-center">Get Started</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Free Consultation',
                  description: 'Get a personalized AI solution assessment',
                  icon: Sparkles,
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Demo System',
                  description: 'Experience AI automation live',
                  icon: Activity,
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'ROI Calculator',
                  description: 'See your potential cost savings',
                  icon: Users,
                  gradient: 'from-green-500 to-emerald-500'
                }
              ].map((action, index) => {
                const Icon = action.icon
                return (
                  <div key={index} className="group relative" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm group-hover:bg-slate-800/60 transition-all duration-300 group-hover:border-purple-500/30">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${action.gradient} rounded-lg flex items-center justify-center ai-glow`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-light text-white mb-1">{action.title}</h4>
                          <p className="text-sm text-slate-400 font-light">{action.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-slate-300 mb-6 font-light">
              Ready to revolutionize your call center? Book your free consultation today.
            </p>
            <a href="https://calendly.com/cerevaai/30min" target="_blank" rel="noopener noreferrer">
              <button className="ai-button text-white font-light px-8 py-4 ai-hover-lift purple-glow rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                <Plus className="mr-2 h-5 w-5 inline" />
                Book Your Free Call Center Audit
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="ai-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4 purple-glow-text">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-slate-700/30 pb-8 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-lg font-light text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-300 font-light">
                  {faq.answer}
                </p>
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
              Ready to Transform Your Call Center?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-light">
              Join hundreds of businesses already using Cereva to reduce call center costs by 80% while improving customer satisfaction.
            </p>
            <a href="https://calendly.com/cerevaai/30min" target="_blank" rel="noopener noreferrer">
              <button className="text-lg px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 group font-light ai-hover-lift purple-glow rounded-lg transition-all duration-300">
                Book Your Free Call Center Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform inline" />
              </button>
            </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 