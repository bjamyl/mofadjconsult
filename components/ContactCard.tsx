import { Mail, Phone, MapPin, MessageCircle, type LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export type ContactType = "email" | "phone" | "location" | "chat"

export interface ContactInfo {
  type: ContactType
  title: string
  primaryInfo: string
  secondaryInfo?: string
  actionText?: string
  actionHref?: string
}

interface ContactCardProps {
  contact: ContactInfo
  className?: string
}

const iconMap: Record<ContactType, LucideIcon> = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  chat: MessageCircle,
}

const iconColors: Record<ContactType, string> = {
  email: "text-defaultGreen",
  phone: "text-defaultGreen",
  location: "text-defaultGreen",
  chat: "text-defaultGreen",
}

export function ContactCard({ contact, className = "" }: ContactCardProps) {
  const Icon = iconMap[contact.type]
  const iconColor = iconColors[contact.type]

  return (
    <Card className={`bg-gray-100 border-gray-200 ${className}`}>
      <CardContent className="p-6 text-center space-y-4">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Icon className={`w-6 h-6 ${iconColor} `} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900">{contact.title}</h3>

        {/* Contact Information */}
        <div className="space-y-1">
          <p className="text-gray-700 text-sm">{contact.primaryInfo}</p>
          {contact.secondaryInfo && <p className="text-gray-700 text-sm">{contact.secondaryInfo}</p>}
        </div>

        {/* Action Link */}
        {contact.actionText && contact.actionHref && (
          <div className="pt-2">
            <a
              href={contact.actionHref}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline transition-colors"
            >
              {contact.actionText}
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
