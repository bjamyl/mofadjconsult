import Image from "next/image";
import { InView } from "./ui/in-view";
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  alt: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamMateCard({ member, className = "" }: TeamMemberCardProps) {
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewOptions={{ margin: "0px 0px -200px 0px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div
        className={`flex flex-col items-center text-center space-y-4 ${className}`}
      >
        <div className="relative w-80 h-80 rounded-2xl overflow-hidden">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-gray-200">{member.name}</h3>
          <p className="text-gray-100">{member.position}</p>
        </div>
      </div>
    </InView>
  );
}
