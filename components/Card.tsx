import React from 'react';

interface CardProps {
  title: string;
  content: string;
  icon: React.ComponentType<{ className?: string }>; // Lucide icon component
  className?: string;
}

export default function Card({ title, content, icon: Icon, className = '' }: CardProps) {
  return (
    <div className={`rounded-lg border bg-white p-6 transition-all hover:shadow-wm ${className}`}>
      <div className="mb-4 flex flex-col gap-3">
        <Icon className="h-12 w-12 text-defaultGreen" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}