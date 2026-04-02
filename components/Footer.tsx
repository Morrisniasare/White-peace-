import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold tracking-wide">
                White Peace
              </span>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              A welcoming haven offering comfortable accommodations and beautiful event spaces in the heart of Baatsona.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">
              Explore
            </h3>
            <nav className="space-y-3 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/rooms', label: 'Rooms' },
                { href: '/facilities', label: 'Facilities' },
                { href: '/events', label: 'Events' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">
              Services
            </h3>
            <nav className="space-y-3 text-sm">
              {[
                { href: '/rooms', label: 'Accommodations' },
                { href: '/events', label: 'Event Gardens' },
                { href: '/events', label: 'Wedding Venues' },
                { href: '/contact', label: 'Reservations' },
              ].map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="group flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 opacity-80" />
                <span className="opacity-80">
                  Baatsona, Near Spintex Road<br />
                  Accra, Ghana
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 opacity-80" />
                <a href="tel:+233248919557" className="opacity-80 hover:opacity-100 transition-opacity">
                  0248 919 557
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 opacity-80" />
                <a href="mailto:whitepeacelodge@gmail.com" className="opacity-80 hover:opacity-100 transition-opacity">
                  whitepeacelodge@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
            <p>
              &copy; {new Date().getFullYear()} White Peace Lodge & Event Garden. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
