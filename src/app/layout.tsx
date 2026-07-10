import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { NoiseOverlay } from "@/components/effects/noise-overlay";
import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Deepika | Python Backend Developer",
  description:
    "Premium portfolio of Deepika — a Python Backend Developer specializing in scalable APIs, cloud deployment, and high-performance systems. 4+ years of experience building digital products.",
  keywords: [
    "Python Developer",
    "Backend Developer",
    "FastAPI",
    "Django",
    "AWS",
    "Docker",
    "Kubernetes",
    "API Development",
    "Cloud Deployment",
  ],
  authors: [{ name: "Deepika" }],
  openGraph: {
    title: "Deepika | Python Backend Developer",
    description:
      "Building scalable, secure, and beautiful digital products with Python.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepika | Python Backend Developer",
    description:
      "Building scalable, secure, and beautiful digital products with Python.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <LoadingScreen />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-full"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          <AppProviders>
            <NoiseOverlay />
            <CursorGlow />
            <Navbar />
            <main id="main-content">{children}</main>
            <Footer />
          </AppProviders>
        </SmoothScroll>
      </body>
    </html>
  );
}
