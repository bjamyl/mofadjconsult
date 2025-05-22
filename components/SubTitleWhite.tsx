import React from "react";

export default function SubTitleWhite({ title }: { title: string }) {
  return (
    <div className="border border-white px-6 w-fit py-2 rounded-full">
      <p className="text-white font-semibold">{title}</p>
    </div>
  );
}
