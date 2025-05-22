import React from "react";

export default function SubTitle({ title }: { title: string }) {
  return (
    <div className="border border-[#0D6970] px-6 w-fit py-2 rounded-full">
      <p className="text-[#0D6970] font-semibold">{title}</p>
    </div>
  );
}
