import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Replicate 002 - Instagram Home Page",
  description: "Alimnfl make replicate design for Content Tiktok.",
};

export default function layout({ children }: { children: ReactNode }) {
  return <div className="w-full h-full">{children}</div>;
}
