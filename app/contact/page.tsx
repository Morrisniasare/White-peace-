import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    primary: '0248 919 557',
    secondary: 'Available 24/7',
  },
  {
    icon: Mail,
    title: 'Email Us',
    primary: 'whitepeacelodge@gmail.com',
    secondary: 'Response within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    primary: 'Baatsona',
    secondary: 'Near Spintex Road, Accra',
  },
  {
    icon: Clock,
    title: 'Hours',
    primary: '24-Hour Service',
    secondary: 'Front desk always available',
  },
]

const faqs = [
  {
    q: 'What is the cancellation policy?',
    a: 'Please contact us at least 48 hours before your check-in date for cancellations. For event bookings, reach out to discuss specific terms.',
  },
  {
    q: 'What amenities are included?',
    a: 'All rooms include air conditioning, free WiFi, TV with satellite channels, daily housekeeping, and 24/7 front desk support.',
  },
  {
    q: 'Can I host events at White Peace?',
    a: 'Yes! Our spacious event gardens are perfect for weddings, birthday parties, corporate events, and more. Contact us to discuss your plans.',
  },
  {
    q: 'Is parking available?',
    a: 'Yes, free and secure on-site parking is available for all guests and event attendees.',
  },
  {
    q: 'How do I make a reservation?',
    a: 'You can call us directly, send an email, or fill out the contact form on this page. We respond to all inquiries promptly.',
  },
  {
    q: 'Where exactly is White Peace located?',
    a: 'We are located in Baatsona, near Spintex Road in Accra. The area is easily accessible and close to shopping centers and major roads.',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pb-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent font-medium mb-4">
            Contact
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out for reservations, event inquiries, 
            or any questions about your stay.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div 
                  key={index} 
                  className="p-6 bg-card border border-border hover:border-accent/30 transition-all text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-accent/10">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-sm font-medium text-foreground">{info.primary}</p>
                  <p className="text-xs text-muted-foreground mt-1">{info.secondary}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
                Send a Message
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                We&apos;ll Get Back to You
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will respond as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+233 XXX XXX XXX"
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <select className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors">
                    <option>Select a subject</option>
                    <option>Room Reservation</option>
                    <option>Event Inquiry</option>
                    <option>General Question</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full px-6 py-4 bg-accent text-accent-foreground rounded-sm font-medium hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 tracking-wide"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Quick Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="aspect-video bg-secondary rounded-sm border border-border flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto text-muted-foreground/50 mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Baatsona, Near Spintex Road<br />
                    Accra, Ghana
                  </p>
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-card border border-border p-8 space-y-6">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a 
                    href="tel:0248919557" 
                    className="flex items-center gap-4 p-4 bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Phone size={20} className="text-accent" />
                    <div>
                      <p className="font-medium text-foreground">Call Us</p>
                      <p className="text-sm text-muted-foreground">0248 919 557</p>
                    </div>
                  </a>
                  <a 
                    href="mailto:whitepeacelodge@gmail.com" 
                    className="flex items-center gap-4 p-4 bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <Mail size={20} className="text-accent" />
                    <div>
                      <p className="font-medium text-foreground">Email Us</p>
                      <p className="text-sm text-muted-foreground">whitepeacelodge@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location Info */}
              <div className="bg-accent/5 border border-accent/20 p-6 space-y-3">
                <h4 className="font-semibold text-foreground">Finding Us</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  White Peace Lodge & Event Garden is conveniently located in Baatsona, 
                  near Spintex Road. We are easily accessible from all parts of Accra and 
                  close to shopping centers, restaurants, and major transport routes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">
              Help Center
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-card border border-border p-6 hover:border-accent/30 transition-colors"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
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
            Contact us now to reserve your room or plan your event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0248919557"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent rounded-sm text-sm font-medium hover:bg-white/90 transition-colors tracking-wide"
            >
              Call 0248 919 557
            </a>
            <a
              href="mailto:whitepeacelodge@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white rounded-sm text-sm font-medium hover:bg-white/10 transition-colors tracking-wide"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
