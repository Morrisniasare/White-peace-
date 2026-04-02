import { Star, Quote } from 'lucide-react'

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
    <div className="bg-card border border-border p-8 space-y-6 hover:shadow-lg transition-shadow duration-300">
      {/* Quote Icon */}
      <Quote size={32} className="text-accent/30" />

      {/* Quote */}
      <p className="text-foreground leading-relaxed text-lg">
        {content}
      </p>

      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
        {[...Array(5 - rating)].map((_, i) => (
          <Star key={`empty-${i}`} size={16} className="text-border" />
        ))}
      </div>

      {/* Author */}
      <div className="pt-4 border-t border-border">
        <p className="font-serif text-lg font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  )
}
