"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    investmentInterest: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        investmentInterest: ''
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-accent)' }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--color-accent)' }}>
            Contact WEMARK
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--color-accent)', opacity: 0.9 }}>
            Ready to start your property investment journey? Get in touch with our expert team today.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-secondary)' }}>
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <Card className="p-6 border-0" style={{ backgroundColor: 'white' }}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--color-accent)' }}>
                      <Phone size={24} style={{ color: 'var(--color-secondary)' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-primary)' }}>
                        Phone
                      </h3>
                      <p style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
                        <a href="tel:+61881234567" className="hover:underline">
                          +61 8 8123 4567
                        </a>
                      </p>
                      <p className="text-sm mt-1" style={{ color: 'var(--color-primary)', opacity: 0.6 }}>
                        Monday - Friday, 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-0" style={{ backgroundColor: 'white' }}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--color-accent)' }}>
                      <Mail size={24} style={{ color: 'var(--color-secondary)' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-primary)' }}>
                        Email
                      </h3>
                      <p style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
                        <a href="mailto:invest@wemark.com.au" className="hover:underline">
                          invest@wemark.com.au
                        </a>
                      </p>
                      <p className="text-sm mt-1" style={{ color: 'var(--color-primary)', opacity: 0.6 }}>
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-0" style={{ backgroundColor: 'white' }}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--color-accent)' }}>
                      <MapPin size={24} style={{ color: 'var(--color-secondary)' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-primary)' }}>
                        Office
                      </h3>
                      <p style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
                        Level 3, 123 King William Street<br />
                        Adelaide, SA 5000
                      </p>
                      <p className="text-sm mt-1" style={{ color: 'var(--color-primary)', opacity: 0.6 }}>
                        By appointment only
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-0" style={{ backgroundColor: 'white' }}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--color-accent)' }}>
                      <Clock size={24} style={{ color: 'var(--color-secondary)' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-primary)' }}>
                        Business Hours
                      </h3>
                      <div style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 border-0" style={{ backgroundColor: 'white' }}>
                <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-secondary)' }}>
                  Send Us a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle size={64} className="mx-auto mb-4" style={{ color: 'var(--color-secondary)' }} />
                    <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
                      Thank you for your inquiry. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="+61 4XX XXX XXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                          Investment Interest
                        </label>
                        <select
                          name="investmentInterest"
                          value={formData.investmentInterest}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select an option</option>
                          <option value="house-land">House & Land Packages</option>
                          <option value="townhouses">Townhouse Developments</option>
                          <option value="commercial">Commercial Properties</option>
                          <option value="portfolio">Portfolio Management</option>
                          <option value="consultation">Investment Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                        Subject *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full"
                        placeholder="Tell us about your investment goals, timeline, and any specific questions you have..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-4 text-lg font-medium transition-all hover:scale-105"
                      style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}
                    >
                      <Send size={20} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-accent)' }}>
              Ready to Start Investing?
            </h2>
            <p className="text-xl mb-8" style={{ color: 'var(--color-accent)', opacity: 0.9 }}>
              Book a free consultation with our investment specialists to discuss your property investment goals.
            </p>
            <Button 
              className="px-8 py-4 text-lg font-medium transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-secondary)' }}
            >
              <Phone size={20} className="mr-2" />
              Book a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}