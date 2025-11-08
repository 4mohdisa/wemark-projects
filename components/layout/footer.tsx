"use client"

import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-16" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/footer-logo1.svg" 
                alt="WEMARK" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-lg font-normal mb-4" style={{ color: 'var(--color-accent)', opacity: 0.9 }}>
                We're reimagining how you buy, sell and rent. It's now easier to get into a place you love. So let's do this, together.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full transition-all hover:scale-110 hover:shadow-lg" style={{ backgroundColor: 'var(--color-secondary)' }}>
                <Facebook size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 rounded-full transition-all hover:scale-110 hover:shadow-lg" style={{ backgroundColor: 'var(--color-secondary)' }}>
                <Instagram size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 rounded-full transition-all hover:scale-110 hover:shadow-lg" style={{ backgroundColor: 'var(--color-secondary)' }}>
                <Youtube size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 rounded-full transition-all hover:scale-110 hover:shadow-lg" style={{ backgroundColor: 'var(--color-secondary)' }}>
                <Linkedin size={20} className="text-white" />
              </a>
              <a href="#" className="p-2 rounded-full transition-all hover:scale-110 hover:shadow-lg" style={{ backgroundColor: 'var(--color-secondary)' }}>
                <Twitter size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-accent)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/#about" className="font-normal transition-colors hover:opacity-80" style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/#contact" className="font-normal transition-colors hover:opacity-80" style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/#services" className="font-normal transition-colors hover:opacity-80" style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
                  Our Team
                </a>
              </li>
              <li>
                <a href="/projects" className="font-normal transition-colors hover:opacity-80" style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
                  Investor Assist
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-accent)' }}>
              Contact Us
            </h3>
            
            {/* Australia */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2" 
                     style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
                  AU
                </div>
                <span className="font-medium" style={{ color: 'var(--color-accent)' }}>Australia</span>
              </div>
              <div className="space-y-1 text-sm font-normal" style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
                <div>3/392 Main N Rd, Blair Athol SA 5084, Australia</div>
                <div>(08) 7200 1444</div>
                <div>parm@wemark.com.au</div>
              </div>
            </div>

            {/* Dubai */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2" 
                     style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
                  AE
                </div>
                <span className="font-medium" style={{ color: 'var(--color-accent)' }}>Dubai</span>
              </div>
              <div className="space-y-1 text-sm font-normal" style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
                <div>615, Park Lane Tower, Business Bay, Dubai</div>
                <div>+971 4 553 9685</div>
                <div>admin@wemark.ae</div>
              </div>
            </div>

            {/* India */}
            <div>
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-2" 
                     style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
                  IN
                </div>
                <span className="font-medium" style={{ color: 'var(--color-accent)' }}>India</span>
              </div>
              <div className="space-y-1 text-sm font-normal" style={{ color: 'var(--color-accent)', opacity: 0.8 }}>
                <div>SCO 25 Second floor, Sector 82, JLPL Industrial Area, Sahibzada Ajit Singh Nagar, Punjab</div>
                <div>+91 96896 00010</div>
                <div>info@touristalrealty.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8" style={{ borderColor: 'var(--color-secondary)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <a href="#" className="text-sm font-normal transition-colors hover:opacity-80" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
                For Sale
              </a>
              <a href="#" className="text-sm font-normal transition-colors hover:opacity-80" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
                For Rent
              </a>
              <a href="#" className="text-sm font-normal transition-colors hover:opacity-80" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
                Sold
              </a>
              <a href="#" className="text-sm font-normal transition-colors hover:opacity-80" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
                Disclaimer
              </a>
              <a href="#" className="text-sm font-normal transition-colors hover:opacity-80" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
                Terms Of Use
              </a>
              <a href="#" className="text-sm font-normal transition-colors hover:opacity-80" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
                Privacy Policy
              </a>
              <a href="#" className="text-sm font-normal transition-colors hover:opacity-80" style={{ color: 'var(--color-accent)', opacity: 0.7 }}>
                Copyright
              </a>
            </div>
            <div className="text-sm font-normal" style={{ color: 'var(--color-accent)', opacity: 0.6 }}>
              © 2025 by Wemark. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
