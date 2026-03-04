import Navigation from '@/components/Navigation'
import RoomCard from '@/components/RoomCard'
import Footer from '@/components/Footer'
import { ChevronRight } from 'lucide-react'

const allRooms = [
  {
    slug: 'standard',
    name: 'Standard Room',
    category: 'Classic Comfort',
    occupancy: 2,
    size: 28,
    amenities: ['King Bed', 'WiFi', 'Smart TV', 'Rainfall Shower'],
  },
  {
    slug: 'superior',
    name: 'Superior Room',
    category: 'Enhanced Elegance',
    occupancy: 2,
    size: 35,
    amenities: ['King Bed', 'Bath & Shower', 'Premium Toiletries', 'Minibar'],
  },
  {
    slug: 'deluxe',
    name: 'Deluxe Room',
    category: 'Luxury Living',
    occupancy: 3,
    size: 45,
    amenities: ['Suite Layout', 'City View', 'Premium Service', 'Work Desk'],
  },
  {
    slug: 'executive-suite',
    name: 'Executive Suite',
    category: 'Premium Luxury',
    occupancy: 4,
    size: 65,
    amenities: [
      'Separate Living Area',
      'Premium Amenities',
      'Concierge Service',
      'Executive Lounge',
    ],
  },
  {
    slug: 'one-bed-suite',
    name: 'One-Bedroom Suite',
    category: 'Spacious Elegance',
    occupancy: 4,
    size: 55,
    amenities: ['Full Kitchen', 'Separate Living & Bedroom', 'Washer/Dryer'],
  },
  {
    slug: 'two-bed-suite',
    name: 'Two-Bedroom Suite',
    category: 'Grand Luxury',
    occupancy: 6,
    size: 85,
    amenities: [
      'Full Kitchen',
      'Multiple Bedrooms',
      'Washer/Dryer',
      'Entertainment Area',
    ],
  },
]

export default function RoomsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-foreground transition-colors">
                Home
              </a>
              <ChevronRight size={16} />
              <span className="text-foreground">Rooms & Suites</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Rooms & Suites
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl">
              Each of our thoughtfully designed rooms offers a perfect blend of
              comfort, style, and modern convenience. From cozy classics to
              sprawling luxury suites, find your perfect retreat.
            </p>
          </div>
        </div>
      </section>

      {/* Room Categories Info */}
      <section className="py-12 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { num: '6', label: 'Room Types' },
              { num: '100+', label: 'Luxury Rooms' },
              { num: '24/7', label: 'Room Service' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-serif text-3xl font-bold text-accent">
                  {stat.num}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allRooms.map((room) => (
              <RoomCard key={room.slug} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Promise */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              What Every Room Includes
            </h2>
            <p className="text-lg text-foreground/80">
              Our commitment to excellence is reflected in every detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Premium bedding and pillows',
              'Complimentary WiFi & Streaming',
              'Modern climate control',
              'Luxury toiletries',
              '24/7 Room service',
              'Work desk with ergonomic chair',
              'Flat-screen smart TV',
              'In-room safe',
              'Coffee & tea facilities',
              'Rainfall shower system',
              'Premium cable channels',
              'Wake-up service',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-foreground">
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Ready to Book Your Stay?
          </h2>
          <p className="text-lg opacity-90">
            Check availability and secure your reservation today
          </p>
          <button className="px-8 py-3 bg-white text-accent rounded text-base font-semibold hover:bg-background/90 transition-colors">
            Check Availability
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
