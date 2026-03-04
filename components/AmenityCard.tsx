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
    <div className="text-center space-y-3 p-6">
      <div className="flex justify-center">
        <div className="p-3 bg-secondary rounded-lg">
          <Icon size={32} className="text-accent" />
        </div>
      </div>
      <h3 className="font-serif text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}
