"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Star, MapPin, Bed, Bath, Car, Phone, Mail, Menu, X, Facebook, Instagram, Youtube, Linkedin, Twitter, Clock, DollarSign, TrendingUp, Shield, Users, CheckCircle, ArrowRight, Building, Home, Calculator } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ContactDialog from '@/components/contact-dialog'
import projectsData from '@/data/projects.json'
import { Project } from '@/types/project'

// Dynamic project data - loaded from JSON file
const investmentProjects: Project[] = (projectsData as Project[]) || []

const services = [
  {
    icon: Building,
    title: "Project Management",
    description: "End-to-end management of your property development from land acquisition to final sale"
  },
  {
    icon: Calculator,
    title: "Investment Analysis",
    description: "Comprehensive financial analysis and due diligence for all investment opportunities"
  },
  {
    icon: Home,
    title: "Property Development",
    description: "Full-service property development including design, construction, and project delivery"
  },
  {
    icon: TrendingUp,
    title: "Portfolio Growth",
    description: "Strategic guidance to build and diversify your property investment portfolio"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Thorough risk assessment and mitigation strategies for all investment projects"
  },
  {
    icon: Users,
    title: "Investor Relations",
    description: "Dedicated support and regular updates throughout your investment journey"
  }
]

const testimonials = [
  {
    quote: "WEMARK's project management approach delivered exceptional returns on our investment. Their transparency and expertise made the entire process seamless.",
    name: "Sarah & Michael Chen",
    location: "Adelaide Hills Project",
    return: "22% return"
  },
  {
    quote: "The team's attention to detail and market knowledge helped us achieve better than expected results. We're already planning our next investment with them.",
    name: "David Thompson",
    location: "Morphett Vale Development",
    return: "19% return"
  },
  {
    quote: "Professional, reliable, and results-driven. WEMARK turned our property investment goals into reality with their proven development process.",
    name: "Jennifer Walsh",
    location: "Glenelg Townhouse Project",
    return: "24% return"
  }
]

const processSteps = [
  {
    step: "01",
    title: "Land Acquisition",
    description: "We identify and secure prime development sites with strong growth potential and favorable zoning."
  },
  {
    step: "02",
    title: "Design & Planning",
    description: "Our team creates optimized designs and manages all planning approvals and council requirements."
  },
  {
    step: "03",
    title: "Construction Management",
    description: "Professional project management ensures quality construction on time and within budget."
  },
  {
    step: "04",
    title: "Marketing & Sales",
    description: "Strategic marketing and sales approach to maximize returns and minimize holding costs."
  },
  {
    step: "05",
    title: "Final Delivery",
    description: "Complete project handover with full documentation and ongoing support for investors."
  }
]

export default function WemarkHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const [contactDialogTitle, setContactDialogTitle] = useState('Book a Call')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const filteredProjects = investmentProjects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  )

  const scrollToProjects = () => {
    document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact-banner')?.scrollIntoView({ behavior: 'smooth' })
  }

  const openContactDialog = (title: string) => {
    setContactDialogTitle(title)
    setIsContactDialogOpen(true)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Header */}
      <Header 
        onContactClick={scrollToContact} 
        onProjectsClick={scrollToProjects}
        onBookCallClick={() => openContactDialog('Book a Call')}
      />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/8134750/pexels-photo-8134750.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')`
          }}
        >
          <div className="absolute inset-0" style={{ 
            background: `linear-gradient(to right, var(--gradient-overlay-start), var(--gradient-overlay-end))` 
          }}></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center" style={{ color: 'var(--text-white)' }}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" 
                    style={{ backgroundColor: 'var(--btn-secondary-bg)', color: 'var(--btn-secondary-text)' }}>
                Premium Property Investment
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span style={{ color: 'var(--bg-primary)' }}>Invest</span> and enjoy the <span style={{ color: 'var(--bg-primary)' }}>returns</span>
            </h1>
            
            <p className="text-lg md:text-xl font-normal mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-white-90)' }}>
              We source premium land, build quality homes, and sell them to deliver exceptional returns. Your trusted partner in South Australian property investment.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
              <div>
                <div className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--bg-primary)' }}>$50M+</div>
                <div className="text-sm font-normal" style={{ color: 'var(--text-white-80)' }}>Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--bg-primary)' }}>22%</div>
                <div className="text-sm font-normal" style={{ color: 'var(--text-white-80)' }}>Average Returns</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--bg-primary)' }}>150+</div>
                <div className="text-sm font-normal" style={{ color: 'var(--text-white-80)' }}>Happy Investors</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToProjects}
                className="px-8 py-4 text-lg rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: 'var(--btn-secondary-bg)', color: 'var(--btn-secondary-text)' }}
              >
                View Projects
              </Button>
              <Button 
                onClick={() => openContactDialog('Schedule Free Consultation')}
                variant="outline"
                className="px-8 py-4 text-lg rounded-lg font-medium transition-all hover:scale-105 border-2"
                style={{ borderColor: 'var(--btn-outline-border)', color: 'var(--btn-outline-text)' }}
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-20" style={{ backgroundColor: 'var(--color-light-beige)' }}>
        <div className="container  max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium" 
                    style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
                Investment Opportunities
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
              Find your next property
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto" style={{ color: 'var(--color-primary)' }}>
              Explore our current investment projects featuring premium house and land developments 
              across South Australia's most promising growth areas.
            </p>
          </div>

          {/* Featured Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {investmentProjects.slice(0, 3).map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className="px-3 py-1 text-xs font-medium"
                      style={{ 
                        backgroundColor: project.status === 'Active Investment' ? 'var(--color-secondary)' : 
                                        project.status === 'Launching Soon' ? '#f59e0b' : '#10b981',
                        color: 'white'
                      }}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="text-sm font-bold" style={{ color: 'var(--color-secondary)' }}>
                        {project.expectedReturn}
                      </div>
                      <div className="text-xs opacity-70" style={{ color: 'var(--text-primary)' }}>
                        Expected Return
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6" style={{ backgroundColor: 'var(--bg-white)' }}>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4" style={{ color: 'var(--btn-secondary-bg)' }} />
                      <span className="text-sm opacity-80" style={{ color: 'var(--text-primary)' }}>
                        {project.location}
                      </span>
                    </div>
                    <p className="text-sm opacity-80 mb-4" style={{ color: 'var(--text-primary)' }}>
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-b" style={{ borderColor: 'var(--border-secondary)' }}>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Bed className="w-4 h-4" style={{ color: 'var(--btn-secondary-bg)' }} />
                        <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {project.beds}
                        </span>
                      </div>
                      <div className="text-xs opacity-70" style={{ color: 'var(--text-primary)' }}>Beds</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Bath className="w-4 h-4" style={{ color: 'var(--btn-secondary-bg)' }} />
                        <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {project.baths}
                        </span>
                      </div>
                      <div className="text-xs opacity-70" style={{ color: 'var(--text-primary)' }}>Baths</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Car className="w-4 h-4" style={{ color: 'var(--btn-secondary-bg)' }} />
                        <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                          {project.parking}
                        </span>
                      </div>
                      <div className="text-xs opacity-70" style={{ color: 'var(--text-primary)' }}>Cars</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                        Investment Range:
                      </span>
                      <span className="font-bold" style={{ color: 'var(--btn-secondary-bg)' }}>
                        {project.investmentAmount}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                        Timeline:
                      </span>
                      <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {project.timeline}
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full py-3 rounded-lg font-medium transition-all hover:scale-105"
                    style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}
                    onClick={() => window.location.href = `/projects/${project.id}`}
                  >
                    View Investment Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <Button 
              className="px-8 py-4 text-lg rounded-lg font-medium transition-all hover:scale-105"
              variant="outline"
              style={{ 
                borderColor: 'var(--btn-outline-border)', 
                color: 'var(--btn-outline-text)',
                backgroundColor: 'transparent'
              }}
              onClick={() => window.location.href = '/projects'}
            >
              View All Investment Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium" 
                    style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
                Our Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-accent)' }}>
              Maximise the potential of your property with Australia's #1 real estate brand
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto" style={{ color: 'var(--color-accent)' }}>
              Our proven 5-step development process ensures maximum returns through strategic planning, professional execution, and transparent communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 z-0" 
                       style={{ backgroundColor: 'var(--color-secondary)' }}>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full" 
                         style={{ backgroundColor: 'var(--color-secondary)' }}></div>
                  </div>
                )}
                
                <Card className="relative z-10 p-6 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center" 
                      style={{ backgroundColor: 'var(--color-accent)' }}>
                  {/* Step Number */}
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-lg" 
                       style={{ backgroundColor: 'var(--color-secondary)' }}>
                    {step.step}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                    {step.title}
                  </h3>
                  
                  <p className="text-sm opacity-80 leading-relaxed" style={{ color: 'var(--color-primary)' }}>
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>

          {/* Process CTA */}
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-accent)' }}>
                Experience our proven development process
              </h3>
              <p className="text-lg opacity-90 mb-8" style={{ color: 'var(--color-accent)' }}>
                Join successful investors who trust our systematic approach to property development and investment returns.
              </p>
              <Button 
                onClick={scrollToContact}
                className="px-8 py-4 text-lg rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}
              >
                Start Your Investment Journey
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20" style={{ backgroundColor: 'var(--color-accent)' }}>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium" 
                    style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
              Benefit from our expertise
            </h2>
            <p className="text-lg opacity-80 max-w-3xl mx-auto" style={{ color: 'var(--color-primary)' }}>
              Comprehensive property investment services designed to maximize your returns while minimizing risk through professional management and proven strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" 
                    style={{ backgroundColor: 'white' }}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" 
                       style={{ backgroundColor: 'var(--color-secondary)' }}>
                    <service.icon className="w-8 h-8" style={{ color: 'var(--btn-secondary-text)' }} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-sm opacity-80 leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Services CTA */}
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Ready to maximize your property investment returns?
              </h3>
              <p className="text-lg opacity-80 mb-8" style={{ color: 'var(--text-primary)' }}>
                Our expert team is ready to guide you through every step of your investment journey with personalized strategies and proven results.
              </p>
              <Button 
                onClick={scrollToContact}
                className="px-8 py-4 text-lg rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}
              >
                Get Expert Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Do it */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6" style={{ color: 'var(--btn-secondary-bg)' }}>How We Deliver Results</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Our proven methodology ensures consistent returns and successful project outcomes
            </p>
            <div className="w-24 h-1 mx-auto mt-6" style={{ backgroundColor: 'var(--bg-dark)' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--bg-dark)' }}
              >
                <Clock style={{ color: 'var(--text-white)' }} size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--btn-secondary-bg)' }}>Speed & Efficiency</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Streamlined processes and experienced team ensure projects are completed on time and within budget
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--bg-dark)' }}
              >
                <DollarSign style={{ color: 'var(--text-white)' }} size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--btn-secondary-bg)' }}>Cost Management</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Economies of scale and strong supplier relationships deliver better margins and higher returns
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--bg-dark)' }}
              >
                <TrendingUp style={{ color: 'var(--text-white)' }} size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--btn-secondary-bg)' }}>Market Expertise</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Deep understanding of local markets ensures optimal site selection and pricing strategies
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--bg-dark)' }}
              >
                <Shield style={{ color: 'var(--text-white)' }} size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--btn-secondary-bg)' }}>Quality Assurance</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Rigorous quality control and regular inspections ensure premium construction standards
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--bg-dark)' }}
              >
                <Users style={{ color: 'var(--text-white)' }} size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--btn-secondary-bg)' }}>Transparent Communication</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Regular updates and open communication keep investors informed throughout the project lifecycle
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--bg-primary)' }}>
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: 'var(--bg-dark)' }}
              >
                <CheckCircle style={{ color: 'var(--text-white)' }} size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--btn-secondary-bg)' }}>Proven Track Record</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Consistent delivery of successful projects and satisfied investors across South Australia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-light-beige)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium" 
                    style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
                Success Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
              Hear From Real Wemark Investors
            </h2>
            <p className="text-lg opacity-80 max-w-3xl mx-auto" style={{ color: 'var(--color-primary)' }}>
              At Wemark, we specialise in providing investment management services that are customised to meet the unique needs of our clients.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-500 ease-in-out" 
                   style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="p-8 text-center border-0 shadow-xl" style={{ backgroundColor: 'white' }}>
                      <div className="mb-6">
                        <div className="flex justify-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" style={{ color: 'var(--color-secondary)' }} />
                          ))}
                        </div>
                        <blockquote className="text-lg italic mb-6 leading-relaxed" style={{ color: 'var(--color-primary)' }}>
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      <div className="border-t pt-6 border-[#1A2D3B]/10">
                        <div className="font-bold text-lg mb-1" style={{ color: 'var(--color-primary)' }}>
                          {testimonial.name}
                        </div>
                        <div className="text-sm opacity-70 mb-2" style={{ color: 'var(--color-primary)' }}>
                          {testimonial.location}
                        </div>
                        <div className="inline-block px-3 py-1 rounded-full text-sm font-medium" 
                             style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
                          {testimonial.return}
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'scale-125' : 'opacity-50'
                  }`}
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">
              Common questions about property investment with WEMARK
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">What types of investors does WEMARK work with?</h3>
              <p className="text-slate-600">
                We work with a diverse range of investors including first-time property investors, experienced developers, 
                self-managed super funds (SMSF), and high-net-worth individuals looking for consistent returns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">What is the minimum investment amount?</h3>
              <p className="text-slate-600">
                Investment minimums vary by project, typically starting from $120,000. We offer flexible investment 
                structures to accommodate different investor profiles and financial goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">How long do projects typically take?</h3>
              <p className="text-slate-600">
                Most of our development projects are completed within 10-24 months, depending on the scope and complexity. 
                We provide detailed timelines and regular progress updates throughout the project lifecycle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-3 text-slate-900">What areas do you focus on in South Australia?</h3>
              <p className="text-slate-600">
                We focus on high-growth areas across Adelaide and South Australia, including the Adelaide Hills, 
                southern suburbs, and emerging growth corridors with strong infrastructure and amenity development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section id="contact-banner" className="py-20" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-accent)' }}>
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl mb-8" style={{ color: 'var(--color-accent)', opacity: 0.9 }}>
              Join successful investors who trust WEMARK for consistent returns and professional property development management. Contact our expert team today.
            </p>
            
            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" 
                    style={{ backgroundColor: 'var(--color-accent)' }}>
                <Phone className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-secondary)' }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>Call Us</h3>
                <p className="text-sm opacity-80 mb-4" style={{ color: 'var(--color-primary)' }}>
                  Speak directly with our investment specialists
                </p>
                <div className="font-semibold" style={{ color: 'var(--color-secondary)' }}>
                  (08) 7200 1444
                </div>
              </Card>
              
              <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" 
                    style={{ backgroundColor: 'var(--color-accent)' }}>
                <Mail className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-secondary)' }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>Email Us</h3>
                <p className="text-sm opacity-80 mb-4" style={{ color: 'var(--color-primary)' }}>
                  Get detailed information about our projects
                </p>
                <div className="font-semibold" style={{ color: 'var(--color-secondary)' }}>
                  parm@wemark.com.au
                </div>
              </Card>
              
              <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" 
                    style={{ backgroundColor: 'var(--color-accent)' }}>
                <MapPin className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-secondary)' }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>Visit Us</h3>
                <p className="text-sm opacity-80 mb-4" style={{ color: 'var(--color-primary)' }}>
                  Meet our team at our Adelaide office
                </p>
                <div className="font-semibold text-sm" style={{ color: 'var(--color-secondary)' }}>
                  3/392 Main N Rd, Blair Athol SA 5084
                </div>
              </Card>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="px-8 py-4 text-lg rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-accent)' }}
              >
                Schedule Free Consultation
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-4 text-lg rounded-lg font-medium transition-all hover:scale-105 border-2 backdrop-blur-sm"
                style={{ 
                  borderColor: 'var(--color-accent)', 
                  color: 'var(--color-accent)',
                  backgroundColor: 'rgba(234, 223, 207, 0.1)'
                }}
              >
                Download Investment Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-accent)' }}>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium" 
                      style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                  It's what makes us different
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--color-secondary)' }}>
                Discover your home's true value
              </h2>
              
              <p className="text-lg mb-8 opacity-80" style={{ color: 'var(--color-secondary)' }}>
                Our experienced investment team combines market expertise with strategic development to maximize returns. 
                We handle every aspect from land acquisition to final settlement, ensuring transparent communication and 
                professional project management throughout your investment journey.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                  <span className="text-lg" style={{ color: 'var(--color-secondary)' }}>
                    Strategic land acquisition in high-growth areas
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                  <span className="text-lg" style={{ color: 'var(--color-secondary)' }}>
                    Professional construction and project management
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                  <span className="text-lg" style={{ color: 'var(--color-secondary)' }}>
                    Transparent reporting and regular investor updates
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
                  <span className="text-lg" style={{ color: 'var(--color-secondary)' }}>
                    Proven track record of 15-25% investor returns
                  </span>
                </div>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="px-8 py-4 text-lg rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
              >
                Get Your Property Valuation
              </Button>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7647222/pexels-photo-7647222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Professional property consultation and valuation"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border-l-4" 
                   style={{ borderColor: 'var(--color-primary)' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>22%</div>
                  <div className="text-sm font-medium" style={{ color: 'var(--color-secondary)' }}>Average Return</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-medium" 
                      style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>
                  About WEMARK
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-accent)' }}>
                Discover what makes us different
              </h2>
              <p className="text-lg font-normal mb-8 leading-relaxed" style={{ color: 'var(--color-accent)', opacity: 0.9 }}>
                WEMARK sources premium land, builds quality homes, and sells them to deliver exceptional returns. Our streamlined approach combines strategic land acquisition, professional construction management, and transparent investor relations.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" 
                       style={{ backgroundColor: 'var(--color-secondary)' }}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-accent)' }}>
                      Proven Track Record
                    </h3>
                    <p className="font-normal opacity-80" style={{ color: 'var(--color-accent)' }}>
                      Over $25M in successful projects with consistent 15-25% returns for our investment partners.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" 
                       style={{ backgroundColor: 'var(--color-secondary)' }}>
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-accent)' }}>
                      Risk Management
                    </h3>
                    <p className="font-normal opacity-80" style={{ color: 'var(--color-accent)' }}>
                      Comprehensive due diligence and risk assessment on every project to protect your investment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" 
                       style={{ backgroundColor: 'var(--color-secondary)' }}>
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-accent)' }}>
                      Expert Team
                    </h3>
                    <p className="font-normal opacity-80" style={{ color: 'var(--color-accent)' }}>
                      Experienced professionals in property development, construction, and investment management.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="px-8 py-4 text-lg rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}
              >
                Learn More About Us
              </Button>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="WEMARK team discussing property investment strategies"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2D3B]/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <Card className="p-4 backdrop-blur-sm border-0" style={{ backgroundColor: 'rgba(234, 223, 207, 0.95)' }}>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold" style={{ color: 'var(--color-secondary)' }}>$50M+</div>
                      <div className="text-xs opacity-70" style={{ color: 'var(--text-primary)' }}>Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{ color: 'var(--color-secondary)' }}>22%</div>
                      <div className="text-xs opacity-70" style={{ color: 'var(--text-primary)' }}>Avg Returns</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold" style={{ color: 'var(--color-secondary)' }}>150+</div>
                      <div className="text-xs opacity-70" style={{ color: 'var(--text-primary)' }}>Investors</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Members Section */}
        <div className="py-20 mt-20" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A2D3B' }}>
              Meet Our Team
            </h2>
            <p className="text-lg font-normal" style={{ color: '#4a5568' }}>
              The experts behind your investment success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Chirag Chavda */}
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="/Chirag Chavda.webp"
                  alt="Chirag Chavda"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#1A2D3B]/20 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A2D3B' }}>
                Chirag Chavda
              </h3>
              <p className="text-lg font-medium mb-4" style={{ color: '#D4A574' }}>
                Director
              </p>
              <p className="text-sm font-normal leading-relaxed" style={{ color: '#4a5568' }}>
                Leading strategic project development and ensuring exceptional delivery standards across all WEMARK developments.
              </p>
            </div>
            
            {/* Parm Singh */}
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="/Parm Singh.webp"
                  alt="Parm Singh"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#1A2D3B]/20 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A2D3B' }}>
                Parm Singh
              </h3>
              <p className="text-lg font-medium mb-4" style={{ color: '#D4A574' }}>
                Director
              </p>
              <p className="text-sm font-normal leading-relaxed" style={{ color: '#4a5568' }}>
                Driving company vision and strategic growth while maintaining our commitment to investor success and quality development.
              </p>
            </div>
            
            {/* Ravin */}
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="/Ravin Amingad.webp"
                  alt="Ravin Amingad"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#1A2D3B]/20 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A2D3B' }}>
                Ravin
              </h3>
              <p className="text-lg font-medium mb-4" style={{ color: '#D4A574' }}>
                Project Manager
              </p>
              <p className="text-sm font-normal leading-relaxed" style={{ color: '#4a5568' }}>
                Managing project timelines and ensuring quality delivery while coordinating with all stakeholders for successful outcomes.
              </p>
            </div>
            
            {/* Mohammed Isa */}
            <div className="text-center">
              <div className="relative mb-6">
                <img 
                  src="/Mohammed Isa.webp"
                  alt="Mohammed Isa"
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#1A2D3B]/20 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A2D3B' }}>
                Mohammed Isa
              </h3>
              <p className="text-lg font-medium mb-4" style={{ color: '#D4A574' }}>
                Advertising Agent
              </p>
              <p className="text-sm font-normal leading-relaxed" style={{ color: '#4a5568' }}>
                Developing innovative marketing strategies and managing advertising campaigns to maximize project visibility and investor engagement.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Contact Dialog */}
      <ContactDialog 
        isOpen={isContactDialogOpen}
        onClose={() => setIsContactDialogOpen(false)}
        title={contactDialogTitle}
        subtitle={contactDialogTitle === 'Book a Call' ? 'Get in touch with our team for a free consultation' : 'Schedule your free property investment consultation'}
      />
    </div>
  )
}






















