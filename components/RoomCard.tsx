import { Users, Maximize, Wind, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface RoomCardProps {
  slug: string
  name: string
  category: string
  occupancy: number
  size: number
  amenities: string[]
  image?: string
}

const imageMap: { [key: string]: string } = {
  standard: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/feb260be-7904-458c-b702-9a7310432af1-4Hg5C0qpEr9322Y1ld0COCjzKz7ypw.jpeg',
  superior: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7c78e2ce-5654-44f0-8a27-89a0352e6d26-8OZIb9bpjYy17aaY21RZZeqqQM0acW.jpeg',
  deluxe: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/035f8fb2-a193-4e60-af05-d7ee344879c8-HMkLYTjhBCRwAyugAaHzQcc8mb070l.jpeg',
  family: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/49b24c1f-45a5-4f67-ad0b-b32f29010d4e-XtvsrsP3BXE7C2S87571SvO3CcpNeZ.jpeg',
  suite: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7c78e2ce-5654-44f0-8a27-89a0352e6d26-8OZIb9bpjYy17aaY21RZZeqqQM0acW.jpeg',
}

export default function RoomCard({
  slug,
  name,
  category,
  occupancy,
  size,
  amenities,
}: RoomCardProps) {
  const imagePath = imageMap[slug] || '/images/room-standard.jpg'

  return (
    <div className="group bg-card overflow-hidden hover:shadow-xl transition-all duration-500">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imagePath || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-foreground tracking-wide uppercase">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-serif text-2xl font-semibold text-foreground">{name}</h3>
        
        {/* Quick Info */}
        <div className="flex gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users size={16} className="text-accent" />
            <span>{occupancy} Guests</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize size={16} className="text-accent" />
            <span>{size}m&sup2;</span>
          </div>
          <div className="flex items-center gap-2">
            <Wind size={16} className="text-accent" />
            <span>AC</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2">
          {amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="px-3 py-1.5 bg-secondary text-xs font-medium text-foreground/80 rounded-sm"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/rooms/${slug}`}
          className="group/link inline-flex items-center gap-2 pt-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
        >
          View Details
          <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
