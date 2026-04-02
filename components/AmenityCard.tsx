import { type LucideIcon } from 'lucide-react'

interface AmenityCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function AmenityCard({
  icon: Icon,
  title,
  description,
}: AmenityCardProps) {
  return (
    <div className="group p-6 bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg">
      <div className="space-y-4">
        <div className="w-12 h-12 flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors">
          <Icon size={24} className="text-accent" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
