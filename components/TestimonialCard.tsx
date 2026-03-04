import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded p-8 space-y-4">
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={18} className="fill-accent text-accent" />
        ))}
        {[...Array(5 - rating)].map((_, i) => (
          <Star key={`empty-${i}`} size={18} className="text-border" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground leading-relaxed italic">
        {`"${content}"`}
      </p>

      {/* Author */}
      <div className="pt-4 border-t border-border">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  )
}
