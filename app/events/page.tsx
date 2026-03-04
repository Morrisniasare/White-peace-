import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ChevronRight, Users, BarChart3, Heart, Briefcase } from 'lucide-react'

const eventSpaces = [
  {
    name: 'Grand Ballroom',
    capacity: '300 guests',
    size: '500m²',
    icon: Users,
    description:
      'Our most spacious venue, perfect for gala dinners, conferences, and large celebrations.',
    features: [
      'Flexible layouts',
      'Built-in sound system',
      'Dance floor',
      'Catering kitchen access',
    ],
  },
  {
    name: 'Executive Conference',
    capacity: '150 guests',
    size: '250m²',
    icon: Briefcase,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaff36c0-ec4e-45a0-98ec-0438b1435344-gOkXkR2NEJUbVUqkIQybpCIbDu8CnM.jpeg',
    description:
      'State-of-the-art meeting room ideal for corporate conferences and seminars.',
    features: [
      'Advanced AV equipment',
      'WiFi & connectivity',
      'Breakout rooms',
      'Tech support included',
    ],
  },
  {
    name: 'Intimate Garden',
    capacity: '100 guests',
    size: '150m²',
    icon: Heart,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ac00ae07-35c0-4b0d-93f4-e1408a239404-0j4yhqbmBvMFe7Z5oJBtGh2Nc4u1it.jpeg',
    description:
      'An enchanting outdoor space perfect for intimate ceremonies and garden parties.',
    features: [
      'Natural ambiance',
      'Weather protection',
      'Elegant seating',
      'Lighting options',
    ],
  },
  {
    name: 'Business Suites',
    capacity: 'Up to 50 guests',
    size: 'Various sizes',
    icon: BarChart3,
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaff36c0-ec4e-45a0-98ec-0438b1435344-gOkXkR2NEJUbVUqkIQybpCIbDu8CnM.jpeg',
    description:
      'Multiple breakout rooms perfect for smaller meetings, workshops, and private functions.',
    features: [
      'Privacy & exclusivity',
      'Modern furnishings',
      'Meeting technology',
      'Flexible configurations',
    ],
  },
]

export default function EventsPage() {
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
              <span className="text-foreground">Events</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Meetings & Events
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl">
              Host your most important gatherings in our elegant event spaces.
              From corporate meetings to intimate celebrations, we make every
              occasion unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Event Spaces */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {eventSpaces.map((space, index) => {
              const Icon = space.icon
              return (
                <div
                  key={index}
                  className="border-b border-border last:border-0 pb-12 last:pb-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Info */}
                    <div className="lg:col-span-3 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-secondary rounded">
                          <Icon size={28} className="text-accent" />
                        </div>
                        <h2 className="font-serif text-3xl font-bold text-foreground">
                          {space.name}
                        </h2>
                      </div>

                      <p className="text-lg text-foreground/80 leading-relaxed">
                        {space.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-secondary p-4 rounded">
                          <p className="text-sm text-muted-foreground mb-1">
                            Capacity
                          </p>
                          <p className="font-semibold text-foreground">
                            {space.capacity}
                          </p>
                        </div>
                        <div className="bg-secondary p-4 rounded">
                          <p className="text-sm text-muted-foreground mb-1">
                            Size
                          </p>
                          <p className="font-semibold text-foreground">
                            {space.size}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                          Key Features
                        </p>
                        <ul className="grid grid-cols-2 gap-2">
                          {space.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                              <span className="text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="h-64 lg:h-auto bg-secondary rounded border border-border overflow-hidden">
                      {space.image ? (
                        <img
                          src={space.image}
                          alt={space.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <span className="text-muted-foreground text-center px-4">
                            {space.name} Image
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Types of Events We Host
            </h2>
            <p className="text-lg text-muted-foreground">
              From corporate to personal, we have the expertise and facilities
              for all occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                type: 'Corporate Meetings',
                description: 'Board meetings, executive sessions, and business conferences',
                icon: '💼',
              },
              {
                type: 'Conferences & Seminars',
                description: 'Multi-day events with breakout sessions and networking',
                icon: '📊',
              },
              {
                type: 'Product Launches',
                description: 'Showcase your innovations in style and elegance',
                icon: '🚀',
              },
              {
                type: 'Weddings',
                description: 'Elegant ceremonies and reception dinners',
                icon: '💍',
              },
              {
                type: 'Gala Dinners',
                description: 'Black-tie events and formal celebrations',
                icon: '🎭',
              },
              {
                type: 'Intimate Celebrations',
                description: 'Birthdays, anniversaries, and personal milestones',
                icon: '🎉',
              },
            ].map((event, i) => (
              <div key={i} className="bg-background p-6 rounded border border-border">
                <div className="text-3xl mb-3">{event.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">
                  {event.type}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Support */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Event Services & Support
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team handles every detail to ensure your event is
              executed flawlessly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                category: 'Planning & Coordination',
                services: [
                  'Event planning consultation',
                  'Venue selection & setup',
                  'Timeline management',
                  'Vendor coordination',
                ],
              },
              {
                category: 'Catering & Beverages',
                services: [
                  'Customized menus',
                  'Bar service',
                  'Wine pairings',
                  'Dietary accommodations',
                ],
              },
              {
                category: 'Technical & AV',
                services: [
                  'Sound systems',
                  'Projection & screens',
                  'Lighting design',
                  'WiFi & connectivity',
                ],
              },
              {
                category: 'Décor & Design',
                services: [
                  'Floral arrangements',
                  'Table décor',
                  'Ambient lighting',
                  'Custom backdrops',
                ],
              },
              {
                category: 'Accommodations',
                services: [
                  'Room discounts',
                  'Group rates',
                  'Welcome packages',
                  'Extended checkout',
                ],
              },
              {
                category: 'Guest Experience',
                services: [
                  'Concierge service',
                  'Valet parking',
                  'Transportation',
                  'Photography options',
                ],
              },
            ].map((service, i) => (
              <div key={i} className="bg-card border border-border rounded p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  {service.category}
                </h3>
                <ul className="space-y-2">
                  {service.services.map((svc, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {svc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Event Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible packages designed to meet various event needs and budgets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Essential',
                features: [
                  'Venue rental',
                  'Basic setup',
                  'Staff support',
                  'Standard audio/visual',
                ],
              },
              {
                name: 'Premium',
                features: [
                  'Venue rental',
                  'Professional setup',
                  'Catering service',
                  'Advanced AV & lighting',
                ],
                highlighted: true,
              },
              {
                name: 'Luxury',
                features: [
                  'Multiple venues',
                  'Full event planning',
                  'Premium catering',
                  'Complete AV & design',
                ],
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`rounded-lg p-8 space-y-6 ${
                  pkg.highlighted
                    ? 'bg-accent text-white ring-2 ring-accent'
                    : 'bg-background border border-border'
                }`}
              >
                <div>
                  <h3 className={`font-serif text-2xl font-bold mb-2 ${
                    pkg.highlighted ? 'text-white' : 'text-foreground'
                  }`}>
                    {pkg.name}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {pkg.features.map((feature, j) => (
                    <li
                      key={j}
                      className={`flex items-center gap-2 ${
                        pkg.highlighted ? 'text-white' : 'text-foreground'
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        pkg.highlighted ? 'bg-white' : 'bg-accent'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`block w-full px-6 py-3 rounded font-semibold transition-colors text-center ${
                    pkg.highlighted
                      ? 'bg-white text-accent hover:bg-background'
                      : 'border-2 border-foreground text-foreground hover:bg-foreground hover:text-background'
                  }`}
                >
                  Inquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-border rounded-lg p-8 md:p-12 space-y-6">
            <div className="text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                Plan Your Event
              </h2>
              <p className="text-lg text-foreground/80">
                Contact our events team to discuss your requirements and receive
                a customized proposal
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Event Type"
                  className="px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="text"
                  placeholder="Expected Guest Count"
                  className="px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <textarea
                placeholder="Tell us about your event..."
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
              />

              <button className="w-full px-6 py-3 bg-accent text-white rounded font-semibold hover:bg-accent/90 transition-colors">
                Request Event Proposal
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Ready to Host Your Event?
          </h2>
          <p className="text-lg opacity-90">
            Let our team create an unforgettable experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-accent rounded font-semibold hover:bg-background/90 transition-colors">
              Contact Events Team
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded font-semibold hover:bg-white hover:text-accent transition-colors">
              View Event Spaces
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
