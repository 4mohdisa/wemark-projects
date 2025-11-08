"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  onContactClick?: () => void;
  onProjectsClick?: () => void;
  onBookCallClick?: () => void;
}

export default function Header({ onContactClick, onProjectsClick, onBookCallClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderSticky, setIsHeaderSticky] = useState(false)

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToProjects = () => {
    if (onProjectsClick) {
      onProjectsClick()
    } else {
      document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    if (onContactClick) {
      onContactClick()
    } else {
      document.getElementById('contact-banner')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHeaderSticky ? 'backdrop-blur-md shadow-lg' : ''
    }`} style={{ backgroundColor: isHeaderSticky ? 'var(--glass-bg)' : 'var(--bg-primary)' }}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img 
                src="https://www.wemark.com.au/assets/images/logo1.svg" 
                alt="WEMARK Property Investment" 
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#about" className="font-normal transition-colors hover:opacity-80" style={{ color: 'var(--text-primary)' }}>About</a>
            <a href="/projects" className="font-normal transition-colors hover:opacity-80" style={{ color: 'var(--text-primary)' }}>Projects</a>
            <a href="/#contact-banner" className="font-normal transition-colors hover:opacity-80" style={{ color: 'var(--text-primary)' }}>Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={onBookCallClick || scrollToContact}
              className="px-6 py-2 rounded-md font-medium transition-all hover:scale-105 shadow-lg"
              style={{ 
                backgroundColor: 'var(--btn-primary-bg)', 
                color: 'var(--btn-primary-text)' 
              }}
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{ color: 'var(--text-primary)' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t" style={{ borderColor: 'var(--border-secondary)' }}>
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="/#about" className="font-normal" style={{ color: 'var(--text-primary)' }}>About</a>
              <a href="/projects" className="font-normal" style={{ color: 'var(--text-primary)' }}>Projects</a>
              <a href="/#contact-banner" className="font-normal" style={{ color: 'var(--text-primary)' }}>Contact</a>
              <Button 
                onClick={onBookCallClick || scrollToContact}
                className="px-6 py-2 rounded-md w-fit transition-all hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--btn-primary-bg)', 
                  color: 'var(--btn-primary-text)' 
                }}
              >
                Book a Call
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}



