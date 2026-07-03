import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joy Online Clone | Ghana News Homepage",
  description: "A Vercel-ready Next.js clone inspired by the MyJoyOnline news homepage.",
  openGraph: {
    title: "Joy Online Clone",
    description: "A dense editorial news homepage built with Next.js and Tailwind CSS.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
