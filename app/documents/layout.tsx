import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mofad-J Consult | Documents",
  description: "contact Mofad-J Consult for project management consulting, procurement and logistics, quantity survey works, MS project training, plan, schedule, monitor and control projects.",
};

export default function DocumentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      {children}
    </div>
  );
}
