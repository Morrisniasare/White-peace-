import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import RoomCard from '@/components/RoomCard'
import AmenityCard from '@/components/AmenityCard'
import TestimonialCard from '@/components/TestimonialCard'
import Footer from '@/components/Footer'
import { Wifi, Car, ShieldCheck, PartyPopper, Trees, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const featuredRooms = [
  {
    slug: 'standard',
    name: 'Standard Room',
    category: 'Comfortable',
    occupancy: 2,
    size: 24,
    amenities: ['Air Conditioning', 'Free WiFi', 'Satellite TV'],
  },
  {
    slug: 'family',
    name: 'Family Room',
    category: 'Spacious',
    occupancy: 4,
    size: 32,
    amenities: ['Air Conditioning', 'Free WiFi', 'Multiple Beds'],
  },
  {
    slug: 'suite',
    name: 'Guest Suite',
    category: 'Premium',
    occupancy: 3,
    size: 40,
    amenities: ['Air Conditioning', 'Free WiFi', 'Living Area'],
  },
]

const amenities = [
  {
    icon: Wifi,
    title: 'Free WiFi',
    description: 'Stay connected with complimentary high-speed internet throughout the property.',
  },
  {
    icon: ShieldCheck,
    title: '24-Hour Security',
    description: 'Rest easy with our round-the-clock security and safe environment.',
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Convenient and secure on-site parking for all our guests.',
  },
  {
    icon: PartyPopper,
    title: 'Event Planning',
    description: 'Professional coordination for weddings, parties, and gatherings.',
  },
  {
    icon: Trees,
    title: 'Garden Venues',
    description: 'Beautiful outdoor spaces for private and corporate events.',
  },
  {
    icon: Sparkles,
    title: 'Daily Housekeeping',
    description: 'Immaculate rooms with daily cleaning and laundry services.',
  },
]

const testimonials = [
  {
    name: 'Ama Mensah',
    role: 'Frequent Traveler',
    content:
      'Wonderful place to stay! The rooms are clean and comfortable, the staff is very friendly, and the prices are reasonable. Definitely my go-to lodge in Baatsona.',
    rating: 5,
  },
  {
    name: 'Samuel Osei',
    role: 'Event Organizer',
    content:
      'We hosted our daughter\'s wedding in the event gardens and it was perfect. The team was helpful and the venue was beautiful. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Yaa Boakye',
    role: 'Business Owner',
    content:
      'Great location near Spintex Road, excellent value for money, and the garden space is perfect for company retreats. White Peace Lodge is the best around.',
    rating: 5,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-6">
            Welcome to White Peace
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8 text-balance leading-tight">
            A Serene Retreat in the Heart of Baatsona
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Nestled in a peaceful corner of Baatsona near Spintex Road, White Peace Lodge & Event Garden 
            offers a welcoming escape from the everyday. Whether you{"'"}re seeking comfortable accommodations 
            or the perfect venue for your special occasion, our dedicated team ensures every moment is memorable.
          </p>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
                Accommodations
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-balance">
                Comfortable Rooms for Every Guest
              </h2>
            </div>
            <Link 
              href="/rooms"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              View All Rooms
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.slug} {...room} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Gardens Feature */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
                  Event Spaces
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6 text-balance">
                  Beautiful Gardens for Your Special Moments
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our spacious and serene event gardens provide the perfect backdrop for your most cherished 
                  celebrations. From intimate gatherings to grand weddings, we offer flexible spaces and 
                  professional coordination to bring your vision to life.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  'Weddings & Receptions',
                  'Birthday Celebrations',
                  'Corporate Events & Retreats',
                  'Church Programs & Social Gatherings',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-8 h-8 flex items-center justify-center bg-accent/10 text-accent font-serif font-semibold text-sm">
                      {i + 1}
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-sm text-sm font-medium hover:bg-accent/90 transition-colors tracking-wide"
              >
                Explore Event Spaces
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaff36c0-ec4e-45a0-98ec-0438b1435344-pYmsNIVJRQP77OsOTZkBX4jnybGo0t.jpeg"
                  alt="Event Garden Space"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 hidden md:block">
                <p className="font-serif text-3xl font-semibold">10+</p>
                <p className="text-sm opacity-90">Years of Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities & Facilities */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
              Our Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Amenities & Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a comfortable and memorable stay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <AmenityCard key={index} {...amenity} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
              Guest Experiences
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              What Our Guests Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from travelers and event hosts who have experienced White Peace hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-accent-foreground mb-6 text-balance">
            Ready to Experience White Peace?
          </h2>
          <p className="text-lg text-accent-foreground/80 mb-10 max-w-2xl mx-auto">
            Book your stay or plan your next event with us. Our team is ready to make your experience unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent rounded-sm text-sm font-medium hover:bg-white/90 transition-colors tracking-wide"
            >
              Book Your Stay
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white rounded-sm text-sm font-medium hover:bg-white/10 transition-colors tracking-wide"
            >
              Plan an Event
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
