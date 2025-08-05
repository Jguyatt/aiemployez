'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowRight, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900/50 text-white border-t border-slate-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 ai-grid opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="ai-container relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-light mb-2">
                <span className="ai-text-gradient-primary">
                  Cereva
                </span>
              </h3>
              <p className="text-slate-400 font-light leading-relaxed max-w-md">
                Transform your business with custom AI frameworks that automate workflows, 
                boost revenue, and eliminate inefficiencies — no technical team required.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-slate-400">
                <Mail className="h-4 w-4 mr-3 text-purple-400" />
                <span className="font-light">hello@cereva.com</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="h-4 w-4 mr-3 text-purple-400" />
                <span className="font-light">+1 (628) 228-0057</span>
              </div>
              <div className="flex items-center text-slate-400">
                <MapPin className="h-4 w-4 mr-3 text-purple-400" />
                <span className="font-light">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-light mb-4 text-white text-lg">Product</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/explore-agents" className="hover:text-white transition-colors font-light hover:ai-text-gradient-primary">
                  Explore Agents
                </Link>
              </li>
              <li>
                <a href="https://calendly.com/cereva/30min?month=2025-08" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-light hover:ai-text-gradient-primary">
                  Book Demo
                </a>
              </li>
              <li>
                <a href="/api" className="hover:text-white transition-colors font-light hover:ai-text-gradient-primary">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Company */}
          <div>
            <h4 className="font-light mb-4 text-white text-lg">Support & Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="/help" className="hover:text-white transition-colors font-light hover:ai-text-gradient-primary">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors font-light hover:ai-text-gradient-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors font-light hover:ai-text-gradient-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors font-light hover:ai-text-gradient-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-white transition-colors font-light hover:ai-text-gradient-primary">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-800/50 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-light text-white mb-2">Stay Updated</h4>
              <p className="text-slate-400 font-light">Get the latest AI automation insights and updates.</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 ai-input rounded-lg text-white placeholder-slate-400 font-light"
              />
              <Button className="ai-button text-white font-light">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800/50 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <p className="text-slate-400 font-light">&copy; 2024 Cereva. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="/privacy" className="text-slate-400 hover:text-white transition-colors font-light text-sm">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-slate-400 hover:text-white transition-colors font-light text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com/cereva" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/cereva" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/cereva" className="text-slate-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 