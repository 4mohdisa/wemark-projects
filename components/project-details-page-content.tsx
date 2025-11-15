


"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Bed, Bath, Car, Calendar, DollarSign, TrendingUp, Home, Users, Shield, CheckCircle, Phone, Mail, Wifi, Zap, Droplets, Wind, TreePine, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import projectsData from '@/data/projects.json'
import { Project } from '@/types/project'

// Dynamic project data - loaded from JSON file
const investmentProjects: Project[] = (projectsData as Project[]) || []

interface ProjectDetailsPageContentProps {
  projectId: string;
}

export default function ProjectDetailsPageContent({ projectId }: ProjectDetailsPageContentProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isInspectionDialogOpen, setIsInspectionDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [inspectionForm, setInspectionForm] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  })

  const project = investmentProjects.find(p => p.id === parseInt(projectId))

  if (!project) {
    // ... (rest of the code remains the same)
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-accent)' }}>
        <div className="text-center">
          <Home size={64} className="mx-auto mb-4" style={{ color: 'var(--color-primary)', opacity: 0.5 }} />
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Project Not Found</h1>
          <p className="mb-6" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
            The project you're looking for doesn't exist.
          </p>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    const galleryLength = project.gallery?.length ?? 0
    if (galleryLength > 0) {
      setSelectedImage((prev) => (prev + 1) % galleryLength)
    }
  }

  const prevImage = () => {
    const galleryLength = project.gallery?.length ?? 0
    if (galleryLength > 0) {
      setSelectedImage((prev) => (prev - 1 + galleryLength) % galleryLength)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/get-in-touch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...inspectionForm,
          projectName: project.title
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setInspectionForm({
          fullName: '',
          email: '',
          phoneNumber: ''
        })
        setTimeout(() => {
          setIsInspectionDialogOpen(false)
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-accent)' }}>
      {/* Header */}
      <Header />

      {/* Hero Section with Full-Width Image Carousel */}
      <section className="pt-24 pb-8">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Full-Width Image Carousel */}
          <div className="mb-8">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl mb-2">
                <img 
                  src={project.gallery?.[selectedImage] || project.image} 
                  alt={project.title}
                  className="w-full h-96 md:h-[500px] object-cover cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                />
                <Badge 
                  className="absolute top-4 left-4 text-white font-medium px-3 py-1"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  {project.status}
                </Badge>
                
                {/* Carousel Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all"
                >
                  <ChevronLeft size={24} style={{ color: 'var(--color-primary)' }} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all"
                >
                  <ChevronRight size={24} style={{ color: 'var(--color-primary)' }} />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              {project.gallery && project.gallery.length > 1 && (
              <div className="grid grid-cols-6 gap-2">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg transition-all hover:scale-105 ${
                      selectedImage === index ? 'ring-2' : ''
                    }`}
                    style={{ 
                      '--tw-ring-color': selectedImage === index ? 'var(--color-secondary)' : 'transparent'
                    } as React.CSSProperties}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-16 md:h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
              )}
            </div>
          </div>

          {/* Full-Width Description and Details */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Description */}
            <div className="lg:col-span-2">
              {/* Project Title */}
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                  {project.title}
                </h1>
                <div className="flex items-center mb-4" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
                  <MapPin size={20} className="mr-2" style={{ color: 'var(--color-secondary)' }} />
                  <span className="text-lg">{project.location}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Description</h2>
                <p className="text-lg font-normal mb-4 leading-relaxed" style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
                  {project.description}
                </p>
                <p className="text-base font-normal leading-relaxed" style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
                  {project.longDescription}
                </p>
              </div>

              {/* Property Details Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'white' }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>{project.beds}</div>
                  <div className="text-sm font-normal" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>Bedrooms</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'white' }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>{project.baths}</div>
                  <div className="text-sm font-normal" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>Bathrooms</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'white' }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>{project.parking}</div>
                  <div className="text-sm font-normal" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>Garage</div>
                </div>
              </div>

              {/* Features Section */}
              {project.propertyFeatures && project.propertyFeatures.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.propertyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg" style={{ backgroundColor: 'white' }}>
                      <CheckCircle size={16} className="mr-2 flex-shrink-0" style={{ color: 'var(--color-secondary)' }} />
                      <span className="text-sm font-normal" style={{ color: 'var(--color-primary)' }}>{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              )}
            </div>

            {/* Right Column - Contact Info */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-4" style={{ backgroundColor: 'white' }}>
                {/* Investment Amount */}
                <div className="text-center mb-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-light-beige)' }}>
                  <div className="text-sm font-normal mb-1" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>Investment Amount</div>
                  <div className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-secondary)' }}>
                    {project.investmentAmount}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Listed By</h3>
                  
                  {/* Primary Agent */}
                  <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-light-beige)' }}>
                    <div className="flex items-start mb-3">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <img 
                          src="/Parm Singh.webp"
                          alt="Parm Singh"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>Parm Singh</div>
                        <div className="text-sm mb-1" style={{ color: 'var(--color-secondary)' }}>Director</div>
                        <div className="text-sm font-normal" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
                          0426 786 664
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Agent */}
                  <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-light-beige)' }}>
                    <div className="flex items-start mb-3">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <img 
                          src="/Chirag Chavda.webp"
                          alt="Chirag Chavda"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>Chirag Chavda</div>
                        <div className="text-sm mb-1" style={{ color: 'var(--color-secondary)' }}>Director</div>
                        <div className="text-sm font-normal" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
                          0405 667 235
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={() => setIsInspectionDialogOpen(true)}
                    className="w-full py-3 text-lg font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}
                  >
                    Get in Touch
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>Floor plans</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <img 
              src={project.floorPlan || "https://i2.au.reastatic.net/3712x1648-resize,r=33,g=40,b=46/7e80cc5458a77ff7ab62b889a4955469c669988e36c011684e0750d3adeda1e8/image.jpg"} 
              alt="Floor Plan"
              className="w-full max-w-4xl mx-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-light-beige)' }}>
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>Location</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-4">
              <p className="text-lg font-medium" style={{ color: 'var(--color-primary)' }}>
                {project.location}
              </p>
            </div>
            <div className="rounded-lg h-96 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5053303838304!2d138.51428591189963!3d-34.91886147409767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c4556e1c72f3%3A0x3bb6620472e268c0!2s17%20Milton%20Ave%2C%20Fulham%20Gardens%20SA%205024!5e0!3m2!1sen!2sau!4v1762587612794!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${project.location}`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Book Inspection Dialog */}
      {isInspectionDialogOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsInspectionDialogOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                Get in Touch
              </h2>
              <button
                onClick={() => setIsInspectionDialogOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" style={{ color: 'var(--color-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">
                  ✓ Thank you! Your inquiry has been sent successfully. We'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm">
                  ✗ Sorry, there was an error sending your inquiry. Please try again.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/* Project Info */}
          <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--color-light-beige)' }}>
            <div className="text-sm font-medium" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
              Enquiring about:
            </div>
            <div className="font-bold" style={{ color: 'var(--color-primary)' }}>
              {project.title}
            </div>
            <div className="text-sm" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
              {project.location}
            </div>
          </div>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inspectionForm.fullName}
                    onChange={(e) => setInspectionForm({...inspectionForm, fullName: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ '--tw-ring-color': 'var(--color-secondary)' } as React.CSSProperties}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={inspectionForm.email}
                    onChange={(e) => setInspectionForm({...inspectionForm, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ '--tw-ring-color': 'var(--color-secondary)' } as React.CSSProperties}
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--color-primary)' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={inspectionForm.phoneNumber}
                    onChange={(e) => setInspectionForm({...inspectionForm, phoneNumber: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ '--tw-ring-color': 'var(--color-secondary)' } as React.CSSProperties}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsInspectionDialogOpen(false)}
                  className="flex-1 py-3"
                  style={{ borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)' }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3"
                  style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}
                >
                  {isSubmitting ? 'Sending...' : 'Get in Touch'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Full-Screen Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-7xl max-h-full p-4">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="relative">
              <img 
                src={project.gallery?.[selectedImage] || project.image} 
                alt={project.title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Modal Navigation */}
              {project.gallery && project.gallery.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all"
                  >
                    <ChevronLeft size={32} className="text-white" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all"
                  >
                    <ChevronRight size={32} className="text-white" />
                  </button>
                </>
              )}
            </div>

            {/* Image Counter */}
            {project.gallery && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {selectedImage + 1} / {project.gallery.length}
            </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}




