import Navigation from '@/components/Navigation'
import AmenityCard from '@/components/AmenityCard'
import Footer from '@/components/Footer'
import { ChevronRight, Clock, Users, MapPin } from 'lucide-react'
import { Wifi, ShoppingCart, Battery as Banners, Activity } from 'lucide-react'

const facilitiesData = [
  {
    icon: Wifi,
    title: 'Free WiFi',
    description:
      'High-speed internet access throughout the lodge to keep you connected with family, friends, and work.',
    hours: 'Available 24/7',
    amenities: [
      'High-Speed Connection',
      'All Areas',
      'No Additional Charge',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Gift Shop',
    description:
      'Browse our selection of quality gifts, local crafts, and travel essentials at our on-site boutique shop.',
    hours: 'Open Daily 8 AM - 8 PM',
    amenities: ['Local Crafts', 'Souvenirs', 'Travel Supplies', 'Gifts'],
  },
]

export default function FacilitiesPage() {
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
              <span className="text-foreground">Facilities</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Facilities & Amenities
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl">
              Enjoy our essential amenities and services designed to make your stay comfortable and convenient.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: '24/7 Service', desc: 'Always available' },
              { icon: MapPin, label: 'Central Location', desc: 'Heart of Accra' },
              { icon: Activity, label: 'Premium Quality', desc: 'Best in class' },
              { icon: Clock, label: 'Extended Hours', desc: 'Day & Night' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-background rounded-lg">
                    <item.icon size={28} className="text-accent" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilitiesData.map((facility, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary rounded-lg flex-shrink-0">
                    <facility.icon size={32} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      {facility.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-accent font-medium mb-4">
                      <Clock size={16} />
                      {facility.hours}
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Amenities
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {facility.amenities.map((amenity, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-secondary text-xs font-medium text-foreground rounded"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a range of additional services to make your stay more
              comfortable and convenient
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Concierge Service',
                description: 'Professional assistance for reservations and local recommendations',
              },
              {
                title: 'Laundry Service',
                description: 'Same-day dry cleaning and laundry services available',
              },
              {
                title: 'Room Service',
                description: '24/7 in-room dining from our restaurant and bar menus',
              },
              {
                title: 'Car Rental',
                description: 'Arrange car hire for your local explorations',
              },
              {
                title: 'Tour Booking',
                description: 'Expert assistance in planning Accra city tours and excursions',
              },
              {
                title: 'Event Planning',
                description: 'Professional coordination for meetings and celebrations',
              },
            ].map((service, i) => (
              <div key={i} className="space-y-2">
                <h3 className="font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Accessibility & Convenience
            </h2>
            <p className="text-lg text-foreground/80">
              White Peace Guest House is committed to providing accessible facilities
              for all guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Wheelchair accessible rooms and facilities',
              'Accessible parking and entrance',
              'Elevator access to all floors',
              'Accessible bathrooms with grab bars',
              'Visual and hearing assistance available',
              'Service animals welcome',
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
            Ready to Experience Our Facilities?
          </h2>
          <p className="text-lg opacity-90">
            Book your stay and discover world-class amenities
          </p>
          <button className="px-8 py-3 bg-white text-accent rounded text-base font-semibold hover:bg-background/90 transition-colors">
            Book Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
