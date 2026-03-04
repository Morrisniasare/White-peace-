import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0079-jX61WgbCNid6w3b7OAmStqxyCZU2UM.png"
          alt="White Peace Guest House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background/40" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Main Heading */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
            White Peace Guest House
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comfort, Warmth & Hospitality
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            A welcoming home away from home in Baatsona. Experience comfortable rooms, friendly service, and perfect spaces for your events and gatherings.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="px-8 py-3 bg-accent text-white rounded text-base font-semibold hover:bg-accent/90 transition-colors">
              Book Now
            </button>
            <Link
              href="/rooms"
              className="px-8 py-3 border-2 border-foreground text-foreground rounded text-base font-semibold hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-2"
            >
              View Rooms
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
