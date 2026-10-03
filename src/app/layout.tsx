import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vinay-yadav.dev"),
  title: "Vinay Yadav — Software Engineer | Full-Stack Developer",
  description:
    "Software Engineer and Full-Stack Developer building scalable web applications with React, Next.js, Node.js, Java, and Python.",
  keywords: [
    "Vinay Yadav",
    "Software Engineer",
    "Full-Stack Developer",
    "MERN Stack",
    "Java Backend",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Vinay Yadav" }],
  creator: "Vinay Yadav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vinay-yadav.dev",
    siteName: "Vinay Yadav Portfolio",
    title: "Vinay Yadav — Software Engineer | Full-Stack Developer",
    description:
      "Software Engineer and Full-Stack Developer building scalable web applications with MERN, Java and Python.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay Yadav — Software Engineer | Full-Stack Developer",
    description:
      "Building scalable web applications with MERN, Java, and Python.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased selection:bg-[#8B5CF6]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
