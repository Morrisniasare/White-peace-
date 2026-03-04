import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import RoomCard from '@/components/RoomCard'
import AmenityCard from '@/components/AmenityCard'
import TestimonialCard from '@/components/TestimonialCard'
import Footer from '@/components/Footer'
import { Wifi, Car, Lock, Music, Heart, Users, Utensils, Dumbbell } from 'lucide-react'

const featuredRooms = [
  {
    slug: 'standard',
    name: 'Standard Room',
    category: 'Comfortable & Affordable',
    occupancy: 2,
    size: 24,
    amenities: ['Air Conditioning', 'Free WiFi', 'TV with Satellite'],
  },
  {
    slug: 'family',
    name: 'Family Room',
    category: 'Perfect for Groups',
    occupancy: 4,
    size: 32,
    amenities: ['Air Conditioning', 'Free WiFi', 'Multiple Beds'],
  },
  {
    slug: 'suite',
    name: 'Guest Suite',
    category: 'Extra Space & Comfort',
    occupancy: 3,
    size: 40,
    amenities: ['Air Conditioning', 'Free WiFi', 'Living Area'],
  },
]

const amenities = [
  {
    icon: Wifi,
    title: 'Free WiFi',
    description: 'Complimentary high-speed internet throughout the lodge',
  },
  {
    icon: Lock,
    title: '24-Hour Security',
    description: 'Safe and secure environment with round-the-clock support',
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Convenient on-site parking for all guests',
  },
  {
    icon: Utensils,
    title: 'Event Coordination',
    description: 'Professional support for weddings, parties, and gatherings',
  },
  {
    icon: Music,
    title: 'Event Gardens',
    description: 'Spacious outdoor venue for private and corporate events',
  },
  {
    icon: Dumbbell,
    title: 'Housekeeping',
    description: 'Daily cleaning and laundry service on request',
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
    role: 'Local Business Owner',
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

      {/* About Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              About White Peace Lodge & Event Gardens
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Located in Baatsona near Spintex Road, White Peace Lodge & Event
              Gardens is a welcoming and comfortable lodging destination. We
              provide a peaceful, secure environment perfect for travelers,
              families, and guests attending events or functions.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Whether you{"'"}re staying for a night or a week, hosting a wedding,
              or planning a corporate gathering, our friendly team is dedicated
              to making your stay relaxed and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Rooms
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each room is thoughtfully designed to provide the perfect blend of
              comfort, style, and convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRooms.map((room) => (
              <RoomCard key={room.slug} {...room} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/rooms"
              className="inline-block px-8 py-3 border-2 border-foreground text-foreground rounded text-base font-semibold hover:bg-foreground hover:text-background transition-colors"
            >
              Explore All Rooms & Suites
            </a>
          </div>
        </div>
      </section>

      {/* Amenities & Facilities */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Amenities & Facilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              World-class facilities designed to enhance your stay and ensure
              complete relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <AmenityCard key={index} {...amenity} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Gardens Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Event Gardens & Functions
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our spacious and serene event gardens provide the perfect venue
                for your special occasions. From intimate gatherings to larger
                celebrations, we offer flexible spaces and professional
                coordination support for every event.
              </p>
              <ul className="space-y-3">
                {[
                  'Weddings & Receptions',
                  'Birthday Parties',
                  'Corporate Gatherings',
                  'Church Programs & Social Events',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Music size={20} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-96 bg-secondary rounded overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaff36c0-ec4e-45a0-98ec-0438b1435344-pYmsNIVJRQP77OsOTZkBX4jnybGo0t.jpeg"
                alt="Event Dining Space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meetings & Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Host your most important gatherings in our elegant event spaces,
              supported by our professional team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Corporate Meetings',
                desc: 'Fully equipped boardrooms with modern AV technology',
              },
              {
                title: 'Conferences & Seminars',
                desc: 'Capacity up to 300 guests with flexible configurations',
              },
              {
                title: 'Weddings & Celebrations',
                desc: 'Stunning venues for your most cherished moments',
              },
            ].map((event, i) => (
              <div key={i} className="bg-background p-6 rounded border border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-foreground/80">{event.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-accent text-white rounded text-base font-semibold hover:bg-accent/90 transition-colors">
              Inquire About Events
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Guest Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our valued guests about their experiences at White Peace
              Lodge & Event Gardens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Ready to Book Your Stay or Event?
          </h2>
          <p className="text-lg opacity-90">
            Contact us today to reserve your room or plan your perfect event at White Peace Lodge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-accent rounded text-base font-semibold hover:bg-foreground transition-colors">
              Book Now
            </button>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded text-base font-semibold hover:bg-white hover:text-accent transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
