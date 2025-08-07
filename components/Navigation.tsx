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
            <Link href="/" className="flex items-center space-x-3">
              {/* Logo */}
              <div className="w-12 h-12 relative">
                <img src="/logo.png" alt="Cereva Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-light text-white">Cereva</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/explore-agents" className="text-slate-300 hover:text-white font-light transition-colors">
              Our Solutions
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800/30 bg-black/60 backdrop-blur-sm">
            <div className="px-4 py-6 space-y-4">
              <Link href="/explore-agents" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full text-slate-300 hover:text-white font-light">
                  Our Solutions
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 