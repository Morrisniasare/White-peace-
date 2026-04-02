import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Users, Heart, Briefcase, PartyPopper, ArrowRight, Check } from 'lucide-react'

const eventTypes = [
  {
    icon: Heart,
    title: 'Weddings & Receptions',
    description: 'Celebrate your special day in our beautiful gardens with elegant setups and professional coordination.',
  },
  {
    icon: PartyPopper,
    title: 'Birthday Parties',
    description: 'From intimate gatherings to grand celebrations, create unforgettable birthday memories.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Team retreats, meetings, and workshops in a serene environment away from the office.',
  },
  {
    icon: Users,
    title: 'Social Gatherings',
    description: 'Family reunions, church programs, and community events in spacious outdoor settings.',
  },
]

const services = [
  'Venue setup and arrangement',
  'Flexible seating configurations',
  'Basic sound system',
  'Lighting options',
  'On-site coordination',
  'Parking for guests',
  'Security services',
  'Accommodation for guests',
]

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pb-32">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaff36c0-ec4e-45a0-98ec-0438b1435344-pYmsNIVJRQP77OsOTZkBX4jnybGo0t.jpeg"
            alt="Event garden"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/80 font-medium mb-4">
            Event Spaces
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 text-balance">
            Event Gardens
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Beautiful outdoor spaces for your most cherished celebrations. 
            From weddings to corporate gatherings, we bring your vision to life.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
              What We Host
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Events for Every Occasion
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => {
              const Icon = event.icon
              return (
                <div 
                  key={index} 
                  className="group p-8 bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors flex-shrink-0">
                      <Icon size={28} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Garden Feature */}
      <section className="py-20 md:py-32 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaff36c0-ec4e-45a0-98ec-0438b1435344-pYmsNIVJRQP77OsOTZkBX4jnybGo0t.jpeg"
                  alt="Event garden space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
                Our Venue
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Spacious Garden Setting
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our event gardens offer a serene and flexible outdoor space perfect for 
                celebrations of all sizes. Surrounded by greenery and designed for comfort, 
                it provides the ideal backdrop for your special moments.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/10 flex items-center justify-center">
                    <Users size={28} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Flexible Capacity</p>
                    <p className="text-sm text-muted-foreground">Accommodates 50 to 300+ guests</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/10 flex items-center justify-center">
                    <PartyPopper size={28} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">All-Inclusive Support</p>
                    <p className="text-sm text-muted-foreground">Setup, coordination, and hospitality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
                What We Provide
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Event Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We handle the logistics so you can focus on celebrating. 
                Our team ensures everything runs smoothly from start to finish.
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

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 mt-8 text-accent font-medium hover:text-accent/80 transition-colors"
              >
                Inquire About Events
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feb260be-7904-458c-b702-9a7310432af1-4Hg5C0qpEr9322Y1ld0COCjzKz7ypw.jpeg"
                  alt="Event setup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden mt-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b24c1f-45a5-4f67-ad0b-b32f29010d4e-XtvsrsP3BXE7C2S87571SvO3CcpNeZ.jpeg"
                  alt="Celebration space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
              Get Started
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Plan Your Event
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your event and we&apos;ll get back to you with options.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Your phone"
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Event Type</label>
                <select className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors">
                  <option>Select event type</option>
                  <option>Wedding</option>
                  <option>Birthday Party</option>
                  <option>Corporate Event</option>
                  <option>Church Program</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Expected Guests</label>
                <input
                  type="text"
                  placeholder="Number of guests"
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Preferred Date</label>
              <input
                type="text"
                placeholder="When are you planning your event?"
                className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Tell Us More</label>
              <textarea
                placeholder="Describe your event and any special requirements..."
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full px-6 py-4 bg-accent text-accent-foreground rounded-sm font-medium hover:bg-accent/90 transition-colors tracking-wide"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-accent-foreground mb-6 text-balance">
            Ready to Host Your Event?
          </h2>
          <p className="text-lg text-accent-foreground/80 mb-10">
            Contact us today to discuss your event and tour our garden spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0248919557"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent rounded-sm text-sm font-medium hover:bg-white/90 transition-colors tracking-wide"
            >
              Call 0248 919 557
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white rounded-sm text-sm font-medium hover:bg-white/10 transition-colors tracking-wide"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
