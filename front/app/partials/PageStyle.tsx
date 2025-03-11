"use client";

import {ReactNode} from "react";

interface PageStyleProps {
  children: ReactNode;
}

export default function PageStyle({children}: PageStyleProps) {
  return (
    <div
      className="bg-white min-h-screen"
      style={{
        backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {children}
    </div>
  );
}
