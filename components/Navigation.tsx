'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sparkles, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="border-b border-slate-800/30 bg-black/60 backdrop-blur-sm sticky top-0 z-50">
      <div className="ai-container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-light ai-glow-text">
              <span className="ai-text-gradient-primary">
                Cereva
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/explore-agents" className="text-slate-300 hover:text-white transition-colors font-light hover:ai-text-gradient-primary">
              Our Frameworks
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-slate-300 hover:text-white transition-colors p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800/30 bg-black/80 backdrop-blur-sm">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/explore-agents" 
                className="block text-slate-300 hover:text-white transition-colors font-light py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Frameworks
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 