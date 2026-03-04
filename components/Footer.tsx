import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="font-serif text-sm font-bold">WP</span>
              </div>
              <span className="font-serif text-xl font-semibold">White Peace</span>
            </div>
            <p className="text-sm opacity-75">
              Comfortable rooms and warm hospitality in Baatsona, Accra.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wide">
              Quick Links
            </h3>
            <nav className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/rooms', label: 'Rooms' },
                { href: '/facilities', label: 'Facilities' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block opacity-75 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wide">
              Services
            </h3>
            <nav className="space-y-2 text-sm">
              {[
                { href: '/events', label: 'Event Gardens' },
                { href: '/contact', label: 'Contact' },
                { href: '/', label: 'Accommodations' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block opacity-75 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 opacity-75" />
                <span className="opacity-75">
                  Baatsona, Accra, Ghana
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5 opacity-75" />
                <span className="opacity-75">0248 919 557</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5 opacity-75" />
                <span className="opacity-75">whitepeacelodge@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-75">
            <p>
              &copy; {new Date().getFullYear()} White Peace Lodge & Event Gardens. All rights
              reserved.
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
