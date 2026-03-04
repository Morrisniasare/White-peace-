'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ChevronRight, Users, Square } from 'lucide-react'
import { notFound } from 'next/navigation'

const roomsData = {
  standard: {
    name: 'Standard Room',
    category: 'Classic Comfort',
    description:
      'Our Standard Rooms are perfect for the discerning traveler seeking comfort without compromise. Each room features carefully selected furnishings and modern amenities to ensure a restful stay.',
    occupancy: 2,
    size: 28,
    amenities: [
      'King Bed',
      'WiFi',
      'Smart TV',
      'Rainfall Shower',
      'Climate Control',
      'Work Desk',
      'Premium Toiletries',
      'Mini Bar',
      'Safe',
      'Coffee/Tea',
    ],
    features: [
      'City views from select rooms',
      'Soundproofed windows',
      'Blackout curtains',
      'LED lighting',
      'Modern electrical outlets',
    ],
    images: ['Standard Room View', 'Bedroom Setup', 'Bathroom'],
  },
  superior: {
    name: 'Superior Room',
    category: 'Enhanced Elegance',
    description:
      'Experience enhanced comfort in our Superior Rooms. With additional space and upgraded amenities, these rooms are ideal for travelers who appreciate the finer details.',
    occupancy: 2,
    size: 35,
    amenities: [
      'King Bed with Premium Linens',
      'Bath & Separate Shower',
      'Premium Toiletries',
      'WiFi',
      'Smart TV',
      'Work Area',
      'Climate Control',
      'Minibar',
      'Safe',
      'Robes & Slippers',
    ],
    features: [
      'Spacious layout',
      'Enhanced bathroom',
      'Better city views',
      'Reading nook',
      'Premium in-room technology',
    ],
    images: ['Superior Room', 'Bathroom Suite', 'Living Area'],
  },
  deluxe: {
    name: 'Deluxe Room',
    category: 'Luxury Living',
    description:
      'Our Deluxe Rooms represent the pinnacle of comfort and style. Generously proportioned with premium furnishings, these rooms offer a true home away from home.',
    occupancy: 3,
    size: 45,
    amenities: [
      'Suite Layout',
      'City View Balcony',
      'Premium Service',
      'King Bed',
      'Luxury Bathroom',
      'Separate Shower',
      'Smart TV System',
      'Work Desk',
      'Complimentary WiFi',
      'Premium Minibar',
    ],
    features: [
      'Panoramic views',
      'Balcony or terrace',
      'Separate living area',
      'Premium mattress',
      'Luxury amenities',
    ],
    images: ['Deluxe Suite', 'Bedroom with Balcony', 'Bathroom & Living'],
  },
  'executive-suite': {
    name: 'Executive Suite',
    category: 'Premium Luxury',
    description:
      'The ultimate in luxury accommodation. Our Executive Suites feature separate living and sleeping areas, premium amenities, and personalized concierge service.',
    occupancy: 4,
    size: 65,
    amenities: [
      'Separate Living Area',
      'Premium Furnishings',
      'Concierge Service',
      'Executive Lounge Access',
      'King Bedroom',
      'Luxury Spa Bathroom',
      'Smart Home Technology',
      'Multiple TVs',
      'Premium Minibar',
      'Nespresso Machine',
    ],
    features: [
      'Spectacular city views',
      'Private terrace',
      'Dining area',
      'Full kitchen facilities',
      'Premium technology systems',
    ],
    images: ['Executive Living', 'Premium Bedroom', 'Spa Bathroom'],
  },
  'one-bed-suite': {
    name: 'One-Bedroom Suite',
    category: 'Spacious Elegance',
    description:
      'Perfect for families or those requiring extra space. Our One-Bedroom Suites include a full kitchen, separate living and sleeping areas, and premium amenities.',
    occupancy: 4,
    size: 55,
    amenities: [
      'Full Kitchen',
      'Separate Living & Bedroom',
      'Washer/Dryer',
      'Premium Bedding',
      'Luxury Bathroom',
      'Multiple TVs',
      'Smart Home Features',
      'Dining Area',
      'Work Station',
      'Premium Toiletries',
    ],
    features: [
      'Complete kitchen facilities',
      'Laundry services',
      'Spacious living area',
      'Multiple storage options',
      'Comfortable family setup',
    ],
    images: ['Suite Living', 'Kitchen Area', 'Bedroom Space'],
  },
  'two-bed-suite': {
    name: 'Two-Bedroom Suite',
    category: 'Grand Luxury',
    description:
      'Our most luxurious accommodation option. The Two-Bedroom Suite is ideal for large families, groups, or those seeking the ultimate in space and comfort.',
    occupancy: 6,
    size: 85,
    amenities: [
      'Full Kitchen',
      'Two Bedrooms',
      'Washer/Dryer',
      'Multiple Bathrooms',
      'Large Living Area',
      'Entertainment Center',
      'Premium Bedding',
      'Smart Home Technology',
      'Dining Area for 6',
      'Premium Toiletries',
    ],
    features: [
      'Two ensuite bathrooms',
      'Fully equipped kitchen',
      'Spacious living & dining',
      'Home entertainment system',
      'Laundry facilities in suite',
    ],
    images: ['Grand Living', 'Kitchen & Dining', 'Master Bedroom'],
  },
}

export default function RoomDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  // Unwrap params promise (Next.js 16)
  const unwrappedParams = params as any
  const slug = unwrappedParams.slug

  const room = roomsData[slug as keyof typeof roomsData]

  if (!room) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <section className="pt-24 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">
              Home
            </a>
            <ChevronRight size={16} />
            <a
              href="/rooms"
              className="hover:text-foreground transition-colors"
            >
              Rooms
            </a>
            <ChevronRight size={16} />
            <span className="text-foreground">{room.name}</span>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-96 bg-secondary rounded-lg overflow-hidden border border-border">
              <img
                src={
                  slug === 'standard'
                    ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feb260be-7904-458c-b702-9a7310432af1-4Hg5C0qpEr9322Y1ld0COCjzKz7ypw.jpeg'
                    : slug === 'superior'
                      ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7c78e2ce-5654-44f0-8a27-89a0352e6d26-8OZIb9bpjYy17aaY21RZZeqqQM0acW.jpeg'
                      : 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/035f8fb2-a193-4e60-af05-d7ee344879c8-HMkLYTjhBCRwAyugAaHzQcc8mb070l.jpeg'
                }
                alt={room.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  img:
                    slug === 'standard'
                      ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feb260be-7904-458c-b702-9a7310432af1-4Hg5C0qpEr9322Y1ld0COCjzKz7ypw.jpeg'
                      : slug === 'superior'
                        ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7c78e2ce-5654-44f0-8a27-89a0352e6d26-8OZIb9bpjYy17aaY21RZZeqqQM0acW.jpeg'
                        : 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/035f8fb2-a193-4e60-af05-d7ee344879c8-HMkLYTjhBCRwAyugAaHzQcc8mb070l.jpeg',
                  label: 'Main View',
                },
                {
                  img:
                    slug === 'standard'
                      ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feb260be-7904-458c-b702-9a7310432af1-4Hg5C0qpEr9322Y1ld0COCjzKz7ypw.jpeg'
                      : slug === 'superior'
                        ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7c78e2ce-5654-44f0-8a27-89a0352e6d26-8OZIb9bpjYy17aaY21RZZeqqQM0acW.jpeg'
                        : 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/035f8fb2-a193-4e60-af05-d7ee344879c8-HMkLYTjhBCRwAyugAaHzQcc8mb070l.jpeg',
                  label: 'Bedroom',
                },
                {
                  img:
                    slug === 'standard'
                      ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b24c1f-45a5-4f67-ad0b-b32f29010d4e-XtvsrsP3BXE7C2S87571SvO3CcpNeZ.jpeg'
                      : slug === 'superior'
                        ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2ab04d7f-f0e2-45b7-95d1-0f90e734e17b-p05kzwyS23tOWmZlSp2IrW5NQAQbsT.jpeg'
                        : 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ea5db623-761f-4ecd-b853-cf1217f642d5-RzzvFLItHQTxyTY3ZYiBuG3bt38sRQ.jpeg',
                  label: 'Bathroom',
                },
                {
                  img:
                    slug === 'standard'
                      ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feb260be-7904-458c-b702-9a7310432af1-4Hg5C0qpEr9322Y1ld0COCjzKz7ypw.jpeg'
                      : slug === 'superior'
                        ? 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b96c425f-3f50-4e96-bae2-fc24948e0105-QG4S9Q7ySAZCoKRYvxxr13P5hoomc1.jpeg'
                        : 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4a024a8c-774b-49dc-abd2-3b59fa005f29-sBuq5Ri3SByDpliJJ9KZIvtc8yXQ2D.jpeg',
                  label: 'Details',
                },
              ].map((photo, i) => (
                <div
                  key={i}
                  className="relative h-32 bg-secondary rounded-lg overflow-hidden border border-border"
                >
                  <img
                    src={photo.img || "/placeholder.svg"}
                    alt={photo.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <p className="text-sm font-medium text-accent uppercase tracking-wide">
                  {room.category}
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                  {room.name}
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {room.description}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={20} className="text-accent" />
                    <span className="text-sm text-muted-foreground">
                      Occupancy
                    </span>
                  </div>
                  <p className="font-serif text-2xl font-semibold text-foreground">
                    {room.occupancy}
                  </p>
                </div>
                <div className="bg-card p-4 rounded border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Square size={20} className="text-accent" />
                    <span className="text-sm text-muted-foreground">
                      Room Size
                    </span>
                  </div>
                  <p className="font-serif text-2xl font-semibold text-foreground">
                    {room.size}m²
                  </p>
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Room Amenities
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Special Features
                </h2>
                <div className="space-y-3">
                  {room.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-secondary rounded"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Card */}
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-foreground text-lg">
                    Ready to Book?
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Reserve your {room.name.toLowerCase()} and experience ultimate comfort.
                  </p>

                  <a
                    href="/contact"
                    className="block w-full px-6 py-3 bg-accent text-white rounded font-semibold hover:bg-accent/90 transition-colors text-center"
                  >
                    Check Availability
                  </a>

                  <a
                    href="/contact"
                    className="block w-full px-6 py-3 border-2 border-foreground text-foreground rounded font-semibold hover:bg-foreground hover:text-background transition-colors text-center"
                  >
                    Request Information
                  </a>

                  <div className="border-t border-border pt-4 space-y-2 text-sm text-muted-foreground">
                    <p>✓ Free cancellation available</p>
                    <p>✓ Free WiFi included</p>
                    <p>✓ 24/7 customer support</p>
                  </div>
                </div>

                {/* Info Card */}
                <div className="bg-secondary p-6 rounded-lg space-y-4">
                  <h3 className="font-semibold text-foreground">
                    Questions About This Room?
                  </h3>
                  <p className="text-sm text-foreground/80">
                    Our reservations team is ready to help you find the perfect
                    accommodation.
                  </p>
                  <button className="w-full px-4 py-2 bg-foreground text-background rounded text-sm font-semibold hover:bg-foreground/90 transition-colors">
                    Contact Our Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Rooms */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Other Rooms
            </h2>
            <p className="text-lg text-muted-foreground">
              Find the perfect room type for your needs
            </p>
          </div>
          <div className="text-center">
            <a
              href="/rooms"
              className="inline-block px-8 py-3 border-2 border-foreground text-foreground rounded font-semibold hover:bg-foreground hover:text-background transition-colors"
            >
              View All Rooms
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
