


"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Bed, Bath, Car, Calendar, DollarSign, TrendingUp, Home, Users, Shield, CheckCircle, Phone, Mail, Wifi, Zap, Droplets, Wind, TreePine, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

// Investment project data - only house projects
const investmentProjects = [
  {
    id: 1,
    title: "Architectural Luxury Meets Lifestyle – The Last Opportunity",
    location: "64 Hart Street Campbelltown SA 5074",
    status: "Active Investment",
    category: "house-land",
    image: "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    gallery: [
      "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    floorPlan: "https://images.pexels.com/photos/8134750/pexels-photo-8134750.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    investmentAmount: "$1299K-$1349K",
    expectedReturn: "18-22%",
    timeline: "12-18 months",
    description: "To secure your offer, simply click the link below and register to get the rewards. Quality and luxury are the hallmarks of this home and register for the rewards.",
    longDescription: "Once registered, you'll be able to monitor other offers in real time. Quality and luxury are the hallmarks of this home and register for the rewards. With premium finishes and a spacious open plan design, this property offers exceptional value in a prime location. The home features high-end appliances, stone benchtops, and premium flooring throughout. Located in a sought-after neighborhood with excellent schools and amenities nearby.",
    beds: 4,
    baths: 2,
    parking: 2,
    landSize: "650m²",
    houseSize: "285m²",
    yearBuilt: "2024-2025",
    propertyFeatures: [
      { name: "Air Conditioning", icon: "Wind", description: "Ducted reverse cycle air conditioning throughout" },
      { name: "Bedrooms", icon: "Bed", description: "4 spacious bedrooms with built-in robes" },
      { name: "Bathrooms", icon: "Bath", description: "2 full bathrooms plus powder room" },
      { name: "Dishwasher", icon: "Home", description: "Premium integrated dishwasher" },
      { name: "Built-in Robes", icon: "Home", description: "Built-in wardrobes in all bedrooms" },
      { name: "Garage", icon: "Car", description: "Double garage with internal access" },
      { name: "Study", icon: "Home", description: "Dedicated study/home office space" }
    ],
    locationFeatures: [
      "Premium location in Campbelltown",
      "Close to excellent schools",
      "15 minutes to Adelaide CBD",
      "Near shopping centers and amenities",
      "Public transport access",
      "Family-friendly neighborhood"
    ],
    investmentHighlights: [
      "High-quality construction materials",
      "Energy-efficient design with 7-star rating",
      "Strong rental demand area ($650-750/week)",
      "Capital growth potential 8-12% annually",
      "Premium location with limited supply",
      "Professional property management available"
    ],
    features: [
      "Premium location in Campbelltown",
      "High-quality construction materials",
      "Energy-efficient design",
      "Landscaped gardens included",
      "Close to schools and amenities",
      "Strong rental demand area"
    ],
    investmentDetails: {
      minimumInvestment: "$150,000",
      maximumInvestment: "$300,000",
      expectedReturn: "18-22%",
      projectDuration: "12-18 months",
      totalProjectValue: "$2.5M",
      unitsAvailable: 8,
      soldUnits: 3
    }
  },
  {
    id: 2,
    title: "Morphett Vale Estate",
    location: "Morphett Vale, SA",
    status: "Launching Soon",
    category: "house-land",
    image: "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    gallery: [
      "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    ],
    investmentAmount: "$120,000 - $250,000",
    expectedReturn: "16-20%",
    timeline: "10-14 months",
    description: "Family-focused development with modern amenities and excellent schools nearby.",
    longDescription: "Morphett Vale Estate represents the perfect opportunity for investors seeking stable returns in a family-oriented community. This development focuses on creating quality homes for growing families, with easy access to schools, parks, and shopping centers. The area has shown consistent growth and strong rental demand from families seeking affordable quality housing. Each home features contemporary design with practical layouts, quality fixtures, and low-maintenance gardens perfect for busy families.",
    beds: 3,
    baths: 2,
    parking: 2,
    landSize: "500m²",
    houseSize: "220m²",
    yearBuilt: "2024-2025",
    propertyFeatures: [
      { name: "Main Bathroom", icon: "Bath", description: "Full family bathroom with separate toilet" },
      { name: "Built-in Robes", icon: "Home", description: "Built-in wardrobes in all bedrooms" },
      { name: "Modern Kitchen", icon: "Home", description: "Contemporary kitchen with island bench" },
      { name: "Laminate Benchtops", icon: "Home", description: "Durable laminate benchtops with modern finishes" },
      { name: "Split System AC", icon: "Wind", description: "Split system air conditioning in main living areas" },
      { name: "Solar Ready", icon: "Zap", description: "Solar panel ready with electrical provisions" },
      { name: "Garden Shed", icon: "Home", description: "Included garden shed for storage" },
      { name: "Alarm System", icon: "ShieldCheck", description: "Basic security alarm system included" },
      { name: "NBN Ready", icon: "Wifi", description: "NBN ready with internal cabling" },
      { name: "Low Maintenance", icon: "TreePine", description: "Drought-resistant landscaping and easy-care gardens" }
    ],
    locationFeatures: [
      "Family-friendly neighborhood",
      "5 minutes to Colonnades Shopping Centre",
      "25 minutes to Adelaide CBD",
      "Close to Morphett Vale Primary School",
      "Near Reynella East College",
      "Regular public transport to city"
    ],
    investmentHighlights: [
      "Modern open-plan designs",
      "Energy-efficient construction",
      "Strong rental demand ($450-550/week)",
      "Growing community amenities",
      "Affordable entry point for investors",
      "Established transport links"
    ],
    investmentDetails: {
      minimumInvestment: "$120,000",
      maximumInvestment: "$250,000",
      expectedReturn: "16-20%",
      projectDuration: "10-14 months",
      totalProjectValue: "$1.8M",
      unitsAvailable: 12,
      soldUnits: 0
    }
  }
]

interface ProjectDetailsPageContentProps {
  projectId: string;
}

export default function ProjectDetailsPageContent({ projectId }: ProjectDetailsPageContentProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isInspectionDialogOpen, setIsInspectionDialogOpen] = useState(false)
  const [inspectionForm, setInspectionForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectId: projectId
  })
  
  const project = investmentProjects.find(p => p.id === parseInt(projectId))

  if (!project) {
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
    setSelectedImage((prev) => (prev + 1) % project.gallery.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-accent)' }}>
      {/* Header */}
      <Header />

      {/* Hero Section with Full-Width Image Carousel */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          {/* Full-Width Image Carousel */}
          <div className="mb-8">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl mb-2">
                <img 
                  src={project.gallery[selectedImage]} 
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
                <p className="text-lg mb-4 leading-relaxed" style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
                  {project.description}
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--color-primary)', opacity: 0.8 }}>
                  {project.longDescription}
                </p>
              </div>

              {/* Property Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'white' }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>3</div>
                  <div className="text-sm" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>Bedrooms</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'white' }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>2</div>
                  <div className="text-sm" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>Bathrooms</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'white' }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>2</div>
                  <div className="text-sm" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>Garage</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'white' }}>
                  <div className="text-2xl font-bold mb-1" style={{ color: 'var(--color-primary)' }}>0</div>
                  <div className="text-sm" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>Remote Garage</div>
                </div>
              </div>

              {/* Features Section */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Features</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.propertyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg" style={{ backgroundColor: 'white' }}>
                      <CheckCircle size={16} className="mr-2 flex-shrink-0" style={{ color: 'var(--color-secondary)' }} />
                      <span className="text-sm" style={{ color: 'var(--color-primary)' }}>{feature.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-4" style={{ backgroundColor: 'white' }}>
                {/* Investment Amount */}
                <div className="text-center mb-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-light-beige)' }}>
                  <div className="text-sm font-medium mb-1" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>Investment Amount</div>
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
                          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                          alt="Peter Singh"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>Peter Singh</div>
                        <div className="text-sm mb-1" style={{ color: 'var(--color-secondary)' }}>Senior Sales Agent</div>
                        <div className="text-sm" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
                          <div>0418 820 1234</div>
                          <div>peter@wemark.com.au</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Agent */}
                  <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: 'var(--color-light-beige)' }}>
                    <div className="flex items-start mb-3">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <img 
                          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                          alt="Cheng Chandra"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>Cheng Chandra</div>
                        <div className="text-sm mb-1" style={{ color: 'var(--color-secondary)' }}>Sales Associate</div>
                        <div className="text-sm" style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
                          <div>0418 820 5678</div>
                          <div>cheng@wemark.com.au</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full py-3 text-lg font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}
                  >
                    <Phone size={20} className="mr-2" />
                    Call Agent
                  </Button>
                  <Button 
                    onClick={() => setIsInspectionDialogOpen(true)}
                    variant="outline"
                    className="w-full py-3 text-lg font-medium hover:bg-opacity-10 transition-all"
                    style={{ borderColor: 'var(--color-secondary)', color: 'var(--color-secondary)' }}
                  >
                    Book Inspection
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>Floor plans</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <img 
              src={project.floorPlan} 
              alt="Floor Plan"
              className="w-full max-w-2xl mx-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-light-beige)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--color-primary)' }}>Location</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-4">
              <p className="text-lg font-medium" style={{ color: 'var(--color-primary)' }}>
                {project.location}
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p style={{ color: 'var(--color-primary)' }}>Interactive Map Placeholder</p>
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
                Book Inspection
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

            <form onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission here
              console.log('Inspection booking:', inspectionForm);
              setIsInspectionDialogOpen(false);
              // Reset form
              setInspectionForm({
                fullName: '',
                email: '',
                phone: '',
                projectId: projectId
              });
            }}>
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
                    value={inspectionForm.phone}
                    onChange={(e) => setInspectionForm({...inspectionForm, phone: e.target.value})}
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
                  className="flex-1 py-3"
                  style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}
                >
                  Book Inspection
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
                src={project.gallery[selectedImage]} 
                alt={project.title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Modal Navigation */}
              {project.gallery.length > 1 && (
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
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {selectedImage + 1} / {project.gallery.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}




