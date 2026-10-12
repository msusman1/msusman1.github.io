import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://msusman1.github.io"),
  title: "Muhammad Usman | Senior Android & Kotlin Engineer | Jetpack Compose & KMP",
  description:
    "Senior Android & Kotlin Engineer with 10+ years of software development experience specializing in Jetpack Compose, Kotlin Multiplatform, modern mobile architecture, and connected devices.",
  keywords: [
    "Muhammad Usman",
    "Android Engineer",
    "Senior Android Developer",
    "Kotlin",
    "Jetpack Compose",
    "Kotlin Multiplatform",
    "Compose Multiplatform",
    "BLE Android",
    "Mobile Application Architect",
    "Freelance Android Developer",
  ],
  authors: [{ name: "Muhammad Usman", url: "https://msusman1.github.io" }],
  creator: "Muhammad Usman",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://msusman1.github.io",
    siteName: "Muhammad Usman Portfolio",
    title: "Muhammad Usman | Senior Android & Kotlin Engineer | KMP",
    description:
      "Senior Android & Kotlin Engineer with 10+ years of software development experience specializing in Jetpack Compose, Kotlin Multiplatform, modern mobile architecture, and connected devices.",
    images: [
      {
        url: "/img/profile.webp",
        width: 800,
        height: 800,
        alt: "Muhammad Usman - Senior Android & Kotlin Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Usman | Senior Android & Kotlin Engineer",
    description:
      "Senior Android & Kotlin Engineer specializing in Jetpack Compose, Kotlin Multiplatform, and production mobile systems.",
    images: ["/img/profile.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://msusman1.github.io/#person",
      name: "Muhammad Usman",
      jobTitle: "Senior Android & Kotlin Engineer",
      description:
        "Senior Android & Kotlin Engineer with 10+ years of software development experience specializing in Jetpack Compose, Kotlin Multiplatform, modern mobile architecture, and connected devices.",
      url: "https://msusman1.github.io/",
      image: "https://msusman1.github.io/img/profile.webp",
      email: "mailto:msusman97@gmail.com",
      sameAs: [
        "https://github.com/msusman1",
        "https://www.linkedin.com/in/muhammad-usman-a6a540197/",
        "https://www.upwork.com/freelancers/~01fc760dec8e40b547",
        "https://f-droid.org/packages/com.talsk.amadz/",
      ],
      knowsAbout: [
        "Android SDK",
        "Kotlin",
        "Jetpack Compose",
        "Kotlin Multiplatform (KMP)",
        "Compose Multiplatform",
        "Bluetooth Low Energy (BLE)",
        "Coroutines & Flow",
        "Hilt & Dependency Injection",
        "Full-Stack Development (Next.js, TypeScript)",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://msusman1.github.io/#website",
      url: "https://msusman1.github.io/",
      name: "Muhammad Usman — Professional Portfolio",
      description:
        "Portfolio and engineering showcase of Muhammad Usman, Senior Android & Kotlin Engineer.",
      publisher: {
        "@id": "https://msusman1.github.io/#person",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
