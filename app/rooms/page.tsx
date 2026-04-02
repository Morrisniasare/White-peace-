import Navigation from '@/components/Navigation'
import RoomCard from '@/components/RoomCard'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Check } from 'lucide-react'

const allRooms = [
  {
    slug: 'standard',
    name: 'Standard Room',
    category: 'Comfortable',
    occupancy: 2,
    size: 24,
    amenities: ['Air Conditioning', 'Free WiFi', 'Satellite TV'],
  },
  {
    slug: 'superior',
    name: 'Superior Room',
    category: 'Enhanced',
    occupancy: 2,
    size: 28,
    amenities: ['Air Conditioning', 'Free WiFi', 'Work Desk'],
  },
  {
    slug: 'deluxe',
    name: 'Deluxe Room',
    category: 'Premium',
    occupancy: 3,
    size: 32,
    amenities: ['Air Conditioning', 'Free WiFi', 'Sitting Area'],
  },
  {
    slug: 'family',
    name: 'Family Room',
    category: 'Spacious',
    occupancy: 4,
    size: 38,
    amenities: ['Air Conditioning', 'Free WiFi', 'Multiple Beds'],
  },
  {
    slug: 'suite',
    name: 'Guest Suite',
    category: 'Luxury',
    occupancy: 3,
    size: 45,
    amenities: ['Air Conditioning', 'Free WiFi', 'Living Area'],
  },
]

const amenitiesList = [
  'Air conditioning',
  'Complimentary WiFi',
  'Flat-screen TV with satellite',
  'Daily housekeeping',
  'Clean bedding and towels',
  'Work desk',
  'Hot water shower',
  'In-room safe',
  '24/7 front desk support',
  'Free parking',
  'Secure environment',
  'Laundry service available',
]

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pb-32">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feb260be-7904-458c-b702-9a7310432af1-4Hg5C0qpEr9322Y1ld0COCjzKz7ypw.jpeg"
            alt="Room interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/80 font-medium mb-4">
            Accommodations
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 text-balance">
            Rooms & Suites
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comfortable, clean, and thoughtfully designed rooms for every type of guest. 
            From solo travelers to families, find your perfect space.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { num: '5', label: 'Room Types' },
              { num: '20+', label: 'Comfortable Rooms' },
              { num: '24/7', label: 'Front Desk Service' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-serif text-3xl md:text-4xl font-semibold text-accent">
                  {stat.num}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
              Choose Your Room
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Our Accommodations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allRooms.map((room) => (
              <RoomCard key={room.slug} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* What&apos;s Included */}
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
                Every Room Includes
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Amenities for Your Comfort
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe in providing value and comfort to all our guests. 
                Every room comes equipped with essential amenities at no extra cost.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {amenitiesList.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center bg-accent/10 rounded-full">
                      <Check size={12} className="text-accent" />
                    </div>
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7c78e2ce-5654-44f0-8a27-89a0352e6d26-8OZIb9bpjYy17aaY21RZZeqqQM0acW.jpeg"
                  alt="Room amenities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent-foreground mb-6 text-balance">
            Ready to Book Your Stay?
          </h2>
          <p className="text-lg text-accent-foreground/80 mb-10">
            Contact us to check availability and secure your reservation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent rounded-sm text-sm font-medium hover:bg-white/90 transition-colors tracking-wide"
          >
            Contact Us to Book
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
