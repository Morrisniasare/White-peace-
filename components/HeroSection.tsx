'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0079-jX61WgbCNid6w3b7OAmStqxyCZU2UM.png"
          alt="White Peace Lodge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Tagline */}
          <p className="text-sm sm:text-base uppercase tracking-[0.3em] text-white/80 font-medium">
            Comfort, Warmth & Hospitality
          </p>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white text-balance leading-[1.1]">
            White Peace
            <br />
            <span className="italic font-normal">Lodge & Garden</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            A welcoming haven in Baatsona. Experience serene accommodations and 
            beautiful event spaces for your most cherished gatherings.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              href="/rooms"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground rounded-sm text-sm font-medium hover:bg-white/90 transition-all tracking-wide"
            >
              Explore Rooms
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white rounded-sm text-sm font-medium hover:bg-white/10 transition-colors tracking-wide"
            >
              View Event Spaces
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
