


"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Bed, Bath, Car, ArrowRight, Home } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

// Investment project data - only house projects
const investmentProjects = [
  {
    id: 1,
    title: "Adelaide Hills Development",
    location: "Crafers, SA",
    status: "Active Investment",
    category: "house-land",
    image: "https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    investmentAmount: "$150,000 - $300,000",
    expectedReturn: "18-22%",
    timeline: "12-18 months",
    description: "Premium house and land development in sought-after Adelaide Hills location",
    beds: 4,
    baths: 2,
    parking: 2,
    landSize: "650m²"
  },
  {
    id: 2,
    title: "Morphett Vale Estate",
    location: "Morphett Vale, SA",
    status: "Launching Soon",
    category: "house-land",
    image: "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    investmentAmount: "$120,000 - $250,000",
    expectedReturn: "16-20%",
    timeline: "10-14 months",
    description: "Family-focused development with modern amenities and excellent schools nearby",
    beds: 3,
    baths: 2,
    parking: 2,
    landSize: "500m²"
  },
  {
    id: 3,
    title: "Glenelg House Project",
    location: "Glenelg, SA",
    status: "Fully Subscribed",
    category: "house-land",
    image: "https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    investmentAmount: "$200,000 - $400,000",
    expectedReturn: "20-25%",
    timeline: "15-20 months",
    description: "Luxury houses near the beach with high rental demand",
    beds: 4,
    baths: 3,
    parking: 2,
    landSize: "400m²"
  },
  {
    id: 4,
    title: "Mount Barker Family Homes",
    location: "Mount Barker, SA",
    status: "Planning Phase",
    category: "house-land",
    image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    investmentAmount: "$180,000 - $350,000",
    expectedReturn: "17-21%",
    timeline: "14-18 months",
    description: "Modern family homes in growing suburban location with excellent amenities",
    beds: 4,
    baths: 2,
    parking: 2,
    landSize: "600m²"
  },
  {
    id: 5,
    title: "Noarlunga Downs Development",
    location: "Noarlunga Downs, SA",
    status: "Active Investment",
    category: "house-land",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    investmentAmount: "$140,000 - $280,000",
    expectedReturn: "18-23%",
    timeline: "12-16 months",
    description: "Affordable family homes in established community with great transport links",
    beds: 3,
    baths: 2,
    parking: 2,
    landSize: "550m²"
  },
  {
    id: 6,
    title: "Aldinga Beach Houses",
    location: "Aldinga Beach, SA",
    status: "Launching Soon",
    category: "house-land",
    image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    investmentAmount: "$220,000 - $450,000",
    expectedReturn: "19-24%",
    timeline: "16-22 months",
    description: "Coastal living houses with premium finishes and ocean proximity",
    beds: 4,
    baths: 2,
    parking: 2,
    landSize: "700m²"
  }
]

export default function ProjectsPageContent() {
  const [selectedStatus, setSelectedStatus] = useState('all')

  const filteredProjects = investmentProjects.filter(project => 
    selectedStatus === 'all' || project.status.toLowerCase().includes(selectedStatus.toLowerCase())
  )

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-accent)' }}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--color-accent)' }}>
              Investment Projects
            </h1>
            <p className="text-xl mb-8" style={{ color: 'var(--color-accent)', opacity: 0.9 }}>
              Discover our premium house development projects with exceptional return potential
            </p>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant={selectedStatus === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedStatus('all')}
              className={`px-6 py-3 font-medium transition-all hover:scale-105 ${
                selectedStatus === 'all' 
                  ? 'text-white shadow-lg' 
                  : ''
              }`}
              style={{ 
                backgroundColor: selectedStatus === 'all' ? 'var(--btn-primary-bg)' : 'transparent',
                borderColor: 'var(--btn-outline-border)',
                color: selectedStatus === 'all' ? 'var(--btn-primary-text)' : 'var(--btn-outline-text)'
              }}
            >
              All Projects
            </Button>
            <Button 
              variant={selectedStatus === 'active' ? 'default' : 'outline'}
              onClick={() => setSelectedStatus('active')}
              className={`px-6 py-3 font-medium transition-all hover:scale-105 ${
                selectedStatus === 'active' 
                  ? 'text-white shadow-lg' 
                  : ''
              }`}
              style={{ 
                backgroundColor: selectedStatus === 'active' ? 'var(--btn-primary-bg)' : 'transparent',
                borderColor: 'var(--btn-outline-border)',
                color: selectedStatus === 'active' ? 'var(--btn-primary-text)' : 'var(--btn-outline-text)'
              }}
            >
              Active Investment
            </Button>
            <Button 
              variant={selectedStatus === 'launching' ? 'default' : 'outline'}
              onClick={() => setSelectedStatus('launching')}
              className={`px-6 py-3 font-medium transition-all hover:scale-105 ${
                selectedStatus === 'launching' 
                  ? 'text-white shadow-lg' 
                  : ''
              }`}
              style={{ 
                backgroundColor: selectedStatus === 'launching' ? 'var(--btn-primary-bg)' : 'transparent',
                borderColor: 'var(--btn-outline-border)',
                color: selectedStatus === 'launching' ? 'var(--btn-primary-text)' : 'var(--btn-outline-text)'
              }}
            >
              Launching Soon
            </Button>
            <Button 
              variant={selectedStatus === 'planning' ? 'default' : 'outline'}
              onClick={() => setSelectedStatus('planning')}
              className={`px-6 py-3 font-medium transition-all hover:scale-105 ${
                selectedStatus === 'planning' 
                  ? 'text-white shadow-lg' 
                  : ''
              }`}
              style={{ 
                backgroundColor: selectedStatus === 'planning' ? 'var(--btn-primary-bg)' : 'transparent',
                borderColor: 'var(--btn-outline-border)',
                color: selectedStatus === 'planning' ? 'var(--btn-primary-text)' : 'var(--btn-outline-text)'
              }}
            >
              Planning Phase
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0" style={{ 
                    background: `linear-gradient(to top, var(--gradient-overlay-start), transparent, transparent)` 
                  }}></div>
                  <Badge 
                    className="absolute top-4 left-4 font-medium px-3 py-1"
                    style={{ backgroundColor: 'var(--btn-secondary-bg)', color: 'var(--btn-secondary-text)' }}
                  >
                    {project.status}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-bold text-lg mb-1" style={{ color: 'var(--text-white)' }}>{project.expectedReturn} Expected Return</div>
                    <div className="text-sm" style={{ color: 'var(--text-white-80)' }}>{project.timeline}</div>
                  </div>
                </div>
                <CardContent className="p-8" style={{ backgroundColor: 'var(--bg-white)' }}>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>
                  <div className="flex items-center mb-4" style={{ color: 'var(--text-secondary)' }}>
                    <MapPin size={18} className="mr-2" style={{ color: 'var(--btn-secondary-bg)' }} />
                    {project.location}
                  </div>
                  <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>
                  <div className="text-2xl font-bold mb-6" style={{ color: 'var(--btn-secondary-bg)' }}>
                    {project.investmentAmount}
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                    <div className="flex items-center">
                      <Bed size={16} className="mr-1" style={{ color: 'var(--color-secondary)' }} />
                      {project.beds}
                    </div>
                    <div className="flex items-center">
                      <Bath size={16} className="mr-1" style={{ color: 'var(--color-secondary)' }} />
                      {project.baths}
                    </div>
                    <div className="flex items-center">
                      <Car size={16} className="mr-1" style={{ color: 'var(--color-secondary)' }} />
                      {project.parking}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full py-3 text-white font-medium transition-all hover:scale-105 shadow-lg"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                    onClick={() => window.location.href = `/projects/${project.id}`}
                  >
                    View Project Details
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <Home size={64} className="mx-auto mb-4" style={{ color: 'var(--color-primary)', opacity: 0.5 }} />
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>No projects found</h3>
              <p style={{ color: 'var(--color-primary)', opacity: 0.7 }}>
                Try adjusting your filters to see more projects.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}





