import Link from 'next/link'
import { Check, Star, Users, Clock, MessageSquare, Calendar, Zap, Shield, TrendingUp, Brain, Database, Network, ArrowRight, Play, BarChart3, Smartphone, Sparkles, DollarSign, Timer, TrendingDown, Phone, Mail, ShoppingCart, FileText, Settings, HelpCircle, UserCheck, Target, BarChart, ChevronDown, Activity, PieChart, ArrowUpRight, ArrowDownRight, Pause, Eye, User, Plus, Filter, Download, MoreHorizontal, CheckCircle, AlertTriangle, Home, Building, Users2, PhoneCall, Clipboard, Search, Lightbulb, Cog, Rocket } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="ai-section bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 ai-grid opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="ai-container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-light bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-6">
              <Play className="h-4 w-4 mr-2" />
              Live Demo Process
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6 purple-glow-text">
              See the Process
              <span className="block ai-text-gradient-primary ai-glow-text-strong">
                in Action
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Watch how we transform Pinnacle Real Estate from manual chaos to AI-powered efficiency 
              in just 4 weeks. Real company, real results.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="ai-section bg-slate-900/30">
        <div className="ai-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-light text-white">Pinnacle Real Estate</h2>
                  <p className="text-slate-400 font-light">Mid-size real estate brokerage, 150+ agents</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-light text-green-400 mb-1">$2.5M</div>
                  <p className="text-sm text-slate-400 font-light">Annual Revenue</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-blue-400 mb-1">850+</div>
                  <p className="text-sm text-slate-400 font-light">Monthly Leads</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-light text-purple-400 mb-1">45%</div>
                  <p className="text-sm text-slate-400 font-light">Time on Admin Tasks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1: Discovery Audit */}
      <section className="ai-section">
        <div className="ai-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-light bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-6">
              <Search className="h-4 w-4 mr-2" />
              Phase 1: Discovery Audit
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 purple-glow-text">
              Understanding the Pain Points
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Our 2-week deep dive revealed critical inefficiencies costing Pinnacle $180,000 annually
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Problems Discovered */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-white mb-6">Problems Discovered:</h3>
              
              {[
                {
                  title: 'Lead Response Time',
                  problem: 'Average 4-hour response to new leads',
                  impact: '$45,000 lost revenue annually',
                  icon: Timer,
                  color: 'red'
                },
                {
                  title: 'Manual Lead Qualification',
                  problem: 'Agents spend 3 hours daily on unqualified leads',
                  impact: '40% of agent time wasted',
                  icon: Users2,
                  color: 'orange'
                },
                {
                  title: 'Follow-up Inconsistency',
                  problem: '65% of leads never receive follow-up',
                  impact: '$85,000 in missed opportunities',
                  icon: MessageSquare,
                  color: 'yellow'
                },
                {
                  title: 'Appointment Scheduling',
                  problem: '12 emails average per appointment scheduled',
                  impact: '15 hours weekly on coordination',
                  icon: Calendar,
                  color: 'blue'
                }
              ].map((item, index) => {
                const Icon = item.icon
                const colors = {
                  red: 'from-red-500 to-red-600',
                  orange: 'from-orange-500 to-orange-600',
                  yellow: 'from-yellow-500 to-yellow-600',
                  blue: 'from-blue-500 to-blue-600'
                }
                
                return (
                  <div key={index} className="group relative animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm group-hover:bg-slate-800/60 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${colors[item.color]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-light text-white mb-2">{item.title}</h4>
                          <p className="text-slate-300 font-light text-sm mb-2">{item.problem}</p>
                          <p className="text-red-400 font-light text-sm">{item.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Audit Process */}
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-light text-white mb-6">Our Audit Process:</h3>
              
              <div className="space-y-4">
                {[
                  'Interviewed 25 agents and 3 managers',
                  'Analyzed 90 days of lead data',
                  'Tracked agent workflows for 2 weeks',
                  'Measured response times and conversion rates',
                  'Identified 12 automation opportunities',
                  'Calculated ROI for each solution'
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-slate-300 font-light">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-5 w-5 text-green-400" />
                  <h4 className="text-lg font-light text-white">Total Savings Identified</h4>
                </div>
                <p className="text-2xl font-light text-green-400">$180,000 annually</p>
                <p className="text-sm text-slate-300 font-light">With 320% ROI in first year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Solution Design */}
      <section className="ai-section bg-slate-900/30">
        <div className="ai-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-light bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-6">
              <Lightbulb className="h-4 w-4 mr-2" />
              Phase 2: Solution Design
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 purple-glow-text">
              Custom AI Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Tailored automation systems designed specifically for Pinnacle's workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'AI Lead Qualification Agent',
                description: 'Instantly qualifies leads using 15 data points',
                features: [
                  'Real-time lead scoring',
                  'Automatic categorization',
                  'Budget verification',
                  'Timeline assessment'
                ],
                impact: 'Saves 3 hours per agent daily',
                icon: Brain,
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Smart Follow-up System',
                description: 'Automated nurture sequences for every lead type',
                features: [
                  'Personalized email sequences',
                  'SMS appointment reminders',
                  'Property match notifications',
                  'Market update delivery'
                ],
                impact: 'Increases conversion by 85%',
                icon: MessageSquare,
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Appointment Automation',
                description: 'AI scheduler that handles all booking logistics',
                features: [
                  'Calendar integration',
                  'Automatic rescheduling',
                  'Confirmation sequences',
                  'No-show prevention'
                ],
                impact: 'Reduces admin time by 90%',
                icon: Calendar,
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                title: 'Client Communication Hub',
                description: 'Centralized system for all client interactions',
                features: [
                  'Unified inbox management',
                  'Response templates',
                  'Priority flagging',
                  'Performance analytics'
                ],
                impact: 'Improves response time by 75%',
                icon: Phone,
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((solution, index) => {
              const Icon = solution.icon
              return (
                <div key={index} className="group relative animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 h-full backdrop-blur-sm group-hover:bg-slate-800/60 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${solution.gradient} rounded-lg flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-light text-white">{solution.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 font-light mb-6">{solution.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {solution.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-slate-300 font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                      <p className="text-green-400 font-light text-sm">{solution.impact}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Phase 3: Implementation */}
      <section className="ai-section">
        <div className="ai-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-light bg-green-500/20 text-green-300 border border-green-500/30 mb-6">
              <Cog className="h-4 w-4 mr-2" />
              Phase 3: Implementation
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 purple-glow-text">
              Seamless Integration
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              4-week rollout with zero downtime and comprehensive training
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  week: 1,
                  title: 'Foundation Setup',
                  tasks: [
                    'Install AI systems on existing infrastructure',
                    'Integrate with current CRM and tools',
                    'Set up data pipelines and analytics',
                    'Configure initial automation rules'
                  ],
                  status: 'completed'
                },
                {
                  week: 2,
                  title: 'Agent Training',
                  tasks: [
                    'Comprehensive training sessions for all agents',
                    'Hands-on practice with new systems',
                    'Create custom workflows per agent',
                    'Set up performance dashboards'
                  ],
                  status: 'completed'
                },
                {
                  week: 3,
                  title: 'Gradual Rollout',
                  tasks: [
                    'Deploy to 25% of agents first',
                    'Monitor performance and adjust',
                    'Expand to 50% of team',
                    'Fine-tune automation rules'
                  ],
                  status: 'completed'
                },
                {
                  week: 4,
                  title: 'Full Deployment',
                  tasks: [
                    'Complete rollout to all 150+ agents',
                    'Final performance optimization',
                    'Launch monitoring and support',
                    'Establish ongoing improvement process'
                  ],
                  status: 'completed'
                }
              ].map((phase, index) => (
                <div key={index} className="flex items-start space-x-6 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">{phase.week}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-light text-white">{phase.title}</h3>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span className="text-sm text-green-400 font-light">Completed</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {phase.tasks.map((task, tIndex) => (
                        <div key={tIndex} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-slate-300 font-light">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="ai-section bg-slate-900/30">
        <div className="ai-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-light bg-orange-500/20 text-orange-300 border border-orange-500/30 mb-6">
              <Rocket className="h-4 w-4 mr-2" />
              Results After 90 Days
            </div>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 purple-glow-text">
              Measurable Impact
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Real numbers from Pinnacle's transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Response Time',
                before: '4 hours',
                after: '< 2 minutes',
                improvement: '99% faster',
                icon: Timer,
                color: 'blue'
              },
              {
                title: 'Lead Conversion',
                before: '12%',
                after: '22%',
                improvement: '+83% increase',
                icon: TrendingUp,
                color: 'green'
              },
              {
                title: 'Agent Productivity',
                before: '55% admin',
                after: '15% admin',
                improvement: '73% reduction',
                icon: BarChart3,
                color: 'purple'
              },
              {
                title: 'Monthly Revenue',
                before: '$208K',
                after: '$285K',
                improvement: '+$77K increase',
                icon: DollarSign,
                color: 'orange'
              }
            ].map((result, index) => {
              const Icon = result.icon
              const colors = {
                blue: 'from-blue-500 to-cyan-500',
                green: 'from-green-500 to-emerald-500',
                purple: 'from-purple-500 to-pink-500',
                orange: 'from-orange-500 to-red-500'
              }
              
              return (
                <div key={index} className="group relative animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm group-hover:bg-slate-800/60 transition-all duration-300 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${colors[result.color]} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-light text-white mb-4">{result.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">Before:</span>
                        <span className="text-sm text-red-400">{result.before}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">After:</span>
                        <span className="text-sm text-green-400">{result.after}</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                      <p className="text-green-400 font-light text-sm">{result.improvement}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ROI Summary */}
          <div className="mt-16 max-w-2xl mx-auto bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-8 border border-green-500/30">
            <div className="text-center">
              <h3 className="text-2xl font-light text-white mb-4">Total ROI</h3>
              <div className="text-4xl font-light text-green-400 mb-2">420%</div>
              <p className="text-lg text-slate-300 font-light mb-4">Return on Investment in First Year</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-lg font-light text-white">Investment</div>
                  <div className="text-2xl font-light text-red-400">$38,000</div>
                </div>
                <div>
                  <div className="text-lg font-light text-white">Annual Savings</div>
                  <div className="text-2xl font-light text-green-400">$198,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ai-section ai-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 purple-glow-text">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-light">
            Book your free discovery audit and see how we can deliver similar results for your business.
          </p>
          <a href="https://calendly.com/cerevaai/30min" target="_blank" rel="noopener noreferrer">
            <button className="text-lg px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 group font-light ai-hover-lift purple-glow rounded-lg transition-all duration-300">
              <Search className="mr-2 h-5 w-5 inline" />
              Book Your Free Discovery Audit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform inline" />
            </button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
} 