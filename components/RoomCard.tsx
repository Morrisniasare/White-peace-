import { Users, Square, Wind } from 'lucide-react'
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
    <div className="group overflow-hidden rounded border border-border hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 md:h-64 bg-secondary overflow-hidden">
        <img
          src={imagePath || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-sm font-medium opacity-90">{category}</p>
          <h3 className="font-serif text-2xl font-semibold text-balance">{name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Quick Info */}
        <div className="flex gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users size={16} />
            {occupancy} Guests
          </div>
          <div className="flex items-center gap-1">
            <Square size={16} />
            {size}m²
          </div>
          <div className="flex items-center gap-1">
            <Wind size={16} />
            AC
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2">
          {amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="px-3 py-1 bg-secondary text-xs font-medium text-foreground rounded"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-border">
          <Link
            href={`/rooms/${slug}`}
            className="block w-full px-4 py-2 bg-foreground text-background rounded text-sm font-semibold hover:bg-foreground/90 transition-colors text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
