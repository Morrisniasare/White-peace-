import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Wifi, Car, ShieldCheck, Sparkles, Trees, Coffee, Clock, Check } from 'lucide-react'

const facilities = [
  {
    icon: Wifi,
    title: 'Free WiFi',
    description: 'Stay connected with complimentary high-speed internet access throughout the entire property.',
  },
  {
    icon: ShieldCheck,
    title: '24-Hour Security',
    description: 'Rest easy with our round-the-clock security personnel and secure environment.',
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Convenient and secure on-site parking available for all guests at no extra charge.',
  },
  {
    icon: Sparkles,
    title: 'Daily Housekeeping',
    description: 'Enjoy clean, well-maintained rooms with daily housekeeping service.',
  },
  {
    icon: Trees,
    title: 'Event Gardens',
    description: 'Beautiful outdoor event spaces perfect for weddings, parties, and gatherings.',
  },
  {
    icon: Coffee,
    title: 'Front Desk Service',
    description: '24/7 front desk support to assist with all your needs during your stay.',
  },
]

const services = [
  'Room service',
  'Laundry service',
  'Wake-up calls',
  'Luggage storage',
  'Event coordination',
  'Local recommendations',
  'Transportation assistance',
  'Extra bedding on request',
]

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pb-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent font-medium mb-4">
            Our Amenities
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
            Facilities & Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a comfortable and convenient stay at White Peace Lodge.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Clock, label: '24/7', desc: 'Service' },
              { icon: ShieldCheck, label: 'Secure', desc: 'Environment' },
              { icon: Wifi, label: 'Free', desc: 'WiFi' },
              { icon: Car, label: 'Free', desc: 'Parking' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="space-y-2">
                  <div className="w-12 h-12 mx-auto flex items-center justify-center bg-accent/10">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Our Facilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon
              return (
                <div 
                  key={index} 
                  className="group p-8 bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon size={28} className="text-accent" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">{facility.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
                At Your Service
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Additional Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Beyond our core facilities, we offer a range of services to make 
                your stay as comfortable and convenient as possible.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center bg-accent/10 rounded-full">
                      <Check size={12} className="text-accent" />
                    </div>
                    <span className="text-foreground text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7c78e2ce-5654-44f0-8a27-89a0352e6d26-8OZIb9bpjYy17aaY21RZZeqqQM0acW.jpeg"
                alt="Lodge interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Gardens Feature */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 aspect-[4/3] overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaff36c0-ec4e-45a0-98ec-0438b1435344-pYmsNIVJRQP77OsOTZkBX4jnybGo0t.jpeg"
                alt="Event garden"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
                Special Feature
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Event Gardens
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our spacious and beautifully maintained event gardens are perfect for 
                hosting memorable occasions. From intimate gatherings to larger celebrations, 
                our outdoor venue provides a serene backdrop for your special moments.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Weddings and receptions',
                  'Birthday celebrations',
                  'Corporate events and retreats',
                  'Church programs and social gatherings',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-sm text-sm font-medium hover:bg-accent/90 transition-colors tracking-wide"
              >
                Learn More About Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent-foreground mb-6 text-balance">
            Experience Our Facilities
          </h2>
          <p className="text-lg text-accent-foreground/80 mb-10">
            Book your stay and enjoy all the amenities White Peace Lodge has to offer.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent rounded-sm text-sm font-medium hover:bg-white/90 transition-colors tracking-wide"
          >
            Book Your Stay
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
