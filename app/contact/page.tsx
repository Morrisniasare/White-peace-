import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pb-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl">
              We{"'"}d love to hear from you. Contact us for room bookings, event
              inquiries, or general information. Our friendly team is ready to assist!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phone */}
            <div className="bg-card border border-border rounded p-6 space-y-3 text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-secondary rounded">
                  <Phone size={32} className="text-accent" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground">Call Us</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p className="font-mono">0248 919 557</p>
                <p className="text-xs">24/7 Support</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card border border-border rounded p-6 space-y-3 text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-secondary rounded">
                  <Mail size={32} className="text-accent" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground">Email Us</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p className="font-mono break-all">whitepeacelodge@gmail.com</p>
                <p className="text-xs">Response within 24 hours</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card border border-border rounded p-6 space-y-3 text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-secondary rounded">
                  <MapPin size={32} className="text-accent" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground">Visit Us</h3>
              <div className="text-sm text-muted-foreground">
                <p>Baatsona</p>
                <p>Near Spintex Road, Accra</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-card border border-border rounded p-6 space-y-3 text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-secondary rounded">
                  <Clock size={32} className="text-accent" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground">Hours</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>24-Hour Service</p>
                <p>Front Desk Available</p>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
                  Send us a Message
                </h2>
                <p className="text-foreground/80">
                  Fill out the form below and we{"'"}ll get back to you as soon as
                  possible.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+233 XXX XXX XXX"
                    className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>Select a subject</option>
                    <option>Room Reservation</option>
                    <option>Event Inquiry</option>
                    <option>Event Booking</option>
                    <option>General Inquiry</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>

                <button className="w-full px-6 py-3 bg-accent text-white rounded font-semibold hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="h-96 bg-secondary rounded-lg border border-border flex items-center justify-center">
                <span className="text-muted-foreground">
                  Google Map Embed Here
                </span>
              </div>

              {/* Quick Contact */}
              <div className="bg-card border border-border rounded p-8 space-y-6">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Quick Contacts
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      title: 'Reservations & General',
                      value: '0248 919 557',
                      desc: 'Room bookings and all inquiries',
                    },
                    {
                      title: 'Email',
                      value: 'whitepeacelodge@gmail.com',
                      desc: 'For detailed messages and bookings',
                    },
                    {
                      title: 'Event Planning',
                      value: '0248 919 557',
                      desc: 'Weddings, parties, corporate events',
                    },
                    {
                      title: 'Hours',
                      value: '24/7',
                      desc: 'Support available round the clock',
                    },
                  ].map((contact, i) => (
                    <div key={i} className="pb-4 border-b border-border last:border-0">
                      <p className="font-semibold text-foreground">
                        {contact.title}
                      </p>
                      <p className="font-mono text-accent text-sm mb-1">
                        {contact.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {contact.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Directions */}
              <div className="bg-secondary p-6 rounded-lg space-y-3">
                <h3 className="font-semibold text-foreground">Location</h3>
                <p className="text-sm text-muted-foreground">
                  White Peace Lodge & Event Gardens is conveniently located in
                  Baatsona, near Spintex Road. Easy access from shopping centers,
                  residential areas, and major transport routes throughout Accra.
                </p>
                <button className="text-accent text-sm font-semibold hover:opacity-75 transition-opacity">
                  Get Directions →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What is your cancellation policy?',
                a: 'Cancellations must be made 48 hours before check-in to avoid charges. For event bookings, please contact us directly for details.',
              },
              {
                q: 'What amenities are included in the room rate?',
                a: 'All rooms include air conditioning, free WiFi, TV with satellite channels, a work desk, and daily housekeeping.',
              },
              {
                q: 'Can I host events at White Peace Lodge?',
                a: 'Yes! Our spacious event gardens are perfect for weddings, birthday parties, corporate gatherings, and more. Contact our events team for planning.',
              },
              {
                q: 'What is your check-in and check-out time?',
                a: 'Standard check-in is available from early morning, and check-out is flexible. We offer secure luggage storage for guests.',
              },
              {
                q: 'Is parking available?',
                a: 'Yes, free on-site parking is available for all guests. The parking area is secure and well-maintained.',
              },
              {
                q: 'How far is the lodge from Spintex Road?',
                a: 'White Peace Lodge is conveniently located near Spintex Road in Baatsona, making it easily accessible from all parts of Accra.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded p-6 space-y-3 group cursor-pointer hover:border-accent transition-colors"
              >
                <h3 className="font-semibold text-foreground text-lg group-hover:text-accent transition-colors">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Stay Updated
            </h2>
            <p className="text-lg text-foreground/80">
              Subscribe to our newsletter for special offers, events, and news
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-6 py-3 bg-accent text-white rounded font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>

          <p className="text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Plan Your Perfect Stay
          </h2>
          <p className="text-lg opacity-90">
            Contact us now to reserve your room or plan your event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0248919557"
              className="px-8 py-3 bg-white text-accent rounded font-semibold hover:bg-foreground transition-colors inline-block"
            >
              Call 0248 919 557
            </a>
            <a
              href="mailto:whitepeacelodge@gmail.com"
              className="px-8 py-3 border-2 border-white text-white rounded font-semibold hover:bg-white hover:text-accent transition-colors inline-block"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
