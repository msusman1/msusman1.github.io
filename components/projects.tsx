"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Layers, Smartphone, Globe, Code2 } from "lucide-react"

export type Project = {
  title: string
  subtitle: string
  category: string
  platforms: string
  problem: string
  contribution: string
  image: string
  imageFit?: "cover" | "contain"
  technologies: string[]
  link: string
  githubLink?: string
  appStoreLink?: string
  playStoreLink?: string
  categories: ("featured" | "android" | "crossplatform" | "web" | "opensource")[]
}

const projects: Project[] = [
  {
    title: "Tamseel AI: Story Generator",
    subtitle: "AI-Powered Cross-Platform Illustrated Stories",
    category: "AI & Cross-Platform",
    platforms: "Android · iOS",
    problem:
      "Children's screen time is often passive. Tamseel AI turns screen time into learning and growth by generating personalized, illustrated adventures tailored to reading levels with synchronized narration.",
    contribution:
      "Architected the cross-platform mobile app using Kotlin Multiplatform (KMP), integrating OpenAI/generative story APIs, Firebase backend services, and RevenueCat subscription monetization across Android and iOS.",
    image: "/img/tamseel_ai_poster.webp",
    imageFit: "contain",
    technologies: ["Kotlin Multiplatform", "Ktor", "Firebase", "RevenueCat", "Koin", "Coil", "DataStore"],
    link: "https://tamseelai.app/",
    appStoreLink: "https://apps.apple.com/us/app/tamseel-ai-story-generator/id6773013072",
    playStoreLink: "https://play.google.com/store/apps/details?id=ai.tamseel.app",
    categories: ["featured", "crossplatform"],
  },
  {
    title: "Mentiva",
    subtitle: "Daily Reflection & Mental Wellness Application",
    category: "Compose Multiplatform",
    platforms: "Android · iOS",
    problem:
      "Most mental wellness apps enforce intrusive paywalls or mandatory accounts. Mentiva offers daily reflections, mood tracking, and mood-matched discovery with no forced sign-up or personal data harvesting.",
    contribution:
      "Engineered cross-platform mobile UI and shared business logic using Kotlin Multiplatform and Compose Multiplatform, multi-network ad mediation (Google Ads, Liftoff, Unity), and local persistence.",
    image: "/img/mentiva_poster.webp",
    imageFit: "cover",
    technologies: ["Compose Multiplatform", "Kotlin Multiplatform", "Liftoff Mediation", "Google Ads", "Unity Ads"],
    link: "https://www.mentivapp.com/",
    appStoreLink: "https://apps.apple.com/us/app/mentiva-daily-motivation/id6761253024",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.app.mentiva",
    categories: ["featured", "crossplatform"],
  },
  {
    title: "Amadz Dialer",
    subtitle: "Open-Source Android Calling App & Telephony System",
    category: "Open-Source Android",
    platforms: "Android",
    problem:
      "Stock telephony dialers are often proprietary, bloated, or ad-laden. Amadz provides an open, private, lightweight Android calling experience with modern Material You interface.",
    contribution:
      "Sole creator and maintainer. Implemented with Jetpack Compose, Navigation 3, Hilt, Paging 3, and native Android telephony framework APIs (call handling, grouped history, T9 contact search, and call blocking).",
    image: "/img/amadz_poster.webp",
    imageFit: "contain",
    technologies: ["Kotlin", "Jetpack Compose", "Android Telephony APIs", "Navigation 3", "Hilt", "Paging 3"],
    link: "https://f-droid.org/packages/com.talsk.amadz/",
    githubLink: "https://github.com/msusman1/Amadz",
    categories: ["featured", "android", "opensource"],
  },
  {
    title: "Lopos Alert & Configurator",
    subtitle: "Industrial BLE Hardware Configuration & Firmware Updates",
    category: "Connected Devices / BLE",
    platforms: "Android · iOS",
    problem:
      "Lopos hardware beacons and wearables require reliable field configuration, sensor diagnostics, and over-the-air firmware upgrades in high-interference industrial environments.",
    contribution:
      "Contract engineer maintaining and improving Android and iOS applications: Bluetooth Low Energy scanning, Auth0 enterprise authentication, telemetry pipelines, and Nordic DFU firmware updates.",
    image: "/img/lopos_poster.webp",
    imageFit: "cover",
    technologies: ["Jetpack Compose", "BLE / Bluetooth", "Nordic DFU", "Hilt", "Auth0", "SwiftUI", "Combine"],
    link: "https://play.google.com/store/apps/details?id=be.lopos.android",
    appStoreLink: "https://apps.apple.com/tr/app/lopos/id1621771307",
    playStoreLink: "https://play.google.com/store/apps/details?id=be.lopos.android",
    categories: ["featured", "android", "crossplatform"],
  },
  {
    title: "GiveTree Ecosystem",
    subtitle: "Kiosk Donation Mobile App & Admin Web Dashboard",
    category: "Fintech & Kiosks",
    platforms: "Android · Web",
    problem:
      "Charitable organizations require secure, tamper-resistant kiosks for in-person giving alongside centralized administrative dashboards for campaign oversight and compliance.",
    contribution:
      "Collaborated on Android kiosk client using Clean Architecture, payment flows, and ESC/POS thermal printer receipts; contributed to the Next.js/Prisma administrative dashboard and AWS SES transactional emails.",
    image: "/img/givetree_poster.webp",
    imageFit: "cover",
    technologies: ["Jetpack Compose", "Clean Architecture", "ESC/POS Printing", "Next.js", "Prisma ORM", "AWS SES"],
    link: "https://webportal.givetree.ca/signin",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.give.tree",
    categories: ["featured", "android", "web"],
  },
  {
    title: "Seed",
    subtitle: "Gamified Habit-Change & Guided Recovery App",
    category: "Habit Change & Subscriptions",
    platforms: "Android",
    problem:
      "Behavioral addiction recovery demands high user engagement, frictionless onboarding, and habit reinforcement tools to prevent relapse.",
    contribution:
      "Engineered mobile experience using MVVM architecture, interactive 3D orb progress visualizations with Spline, audio playback, Firebase, Mixpanel analytics, and multi-tier paywalls via RevenueCat & Superwall.",
    image: "/img/seed_poster.webp",
    imageFit: "cover",
    technologies: ["RevenueCat", "Superwall", "Spline 3D", "MVVM", "Hilt", "Firebase", "Mixpanel"],
    link: "https://play.google.com/store/apps/details?id=com.mindgarden.seed&hl=en",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.mindgarden.seed&hl=en",
    categories: ["featured", "android"],
  },
  {
    title: "PolySpeaker",
    subtitle: "Direct P2P Group Audio Broadcast System",
    category: "Local Networking & Sockets",
    platforms: "Android",
    problem:
      "Tour groups often struggle with expensive, bulky radio equipment or poor cellular reception in historical and underground locations.",
    contribution:
      "Developed an off-grid audio broadcast solution using Wi-Fi Direct and Netty TCP socket client/server architecture, QR code pairing with Google ML Kit, and MVVM design.",
    image: "/img/poly_speaker_poster.webp",
    imageFit: "cover",
    technologies: ["Wi-Fi Direct", "TCP Sockets", "Netty Client/Server", "Google ML Kit", "Hilt"],
    link: "https://play.google.com/store/apps/details?id=com.polyspeaker.broadcast",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.polyspeaker.broadcast",
    categories: ["featured", "android"],
  },
  {
    title: "Compose Card Stack",
    subtitle: "Open-Source Jetpack Compose Gesture Component",
    category: "Open-Source Library",
    platforms: "Android",
    problem:
      "Tinder/Bumble-style swipeable card stacks in Jetpack Compose often require complex custom gesture choreography and animation synchronization.",
    contribution:
      "Built a reusable open-source Jetpack Compose library supporting smooth drag animations, swipe velocity detection, dismiss events, and flexible custom item composables.",
    image: "/img/compose_card_poster.png",
    imageFit: "contain",
    technologies: ["Jetpack Compose", "Kotlin", "Custom Gestures", "Animations", "UI Architecture"],
    link: "https://github.com/msusman1/compose-card-stack",
    githubLink: "https://github.com/msusman1/compose-card-stack",
    categories: ["android", "opensource"],
  },
  {
    title: "GiveTree Admin Dashboard",
    subtitle: "Campaign Management, Donor Analytics & Multi-Tenant Portal",
    category: "Full-Stack Web",
    platforms: "Web",
    problem:
      "Charity administrators require a reliable, secure dashboard to manage physical donation kiosks, monitor real-time contributions, and issue organizational licenses.",
    contribution:
      "Built full-stack portal features utilizing Next.js, Prisma ORM, AWS SDK services, Zod/Yup data validation, Chart.js financial analytics, and jsPDF tax receipt generation.",
    image: "/img/give_tree_web_poster.webp",
    imageFit: "cover",
    technologies: ["Next.js", "TypeScript", "Prisma ORM", "AWS SDK", "Chart.js", "jsPDF", "TanStack"],
    link: "https://webportal.givetree.ca/signin",
    categories: ["web"],
  },
  {
    title: "AssessByPhone",
    subtitle: "Mobile Literacy & Numeracy Assessment Platform",
    category: "Education & Peripheral Integration",
    platforms: "Android",
    problem:
      "Field educators in developing regions need reliable offline assessment tools with instant feedback and thermal printer scorecards.",
    contribution:
      "Implemented offline evaluation workflows using Room database, Bluetooth printer integration, Macrobenchmark performance profiling, and Kotlin Coroutines.",
    image: "/img/accessByphone_poster.webp",
    imageFit: "cover",
    technologies: ["Room Database", "Bluetooth Printing", "Macrobenchmark", "Hilt", "Coroutines"],
    link: "https://play.google.com/store/apps/details?id=org.educatorsinternational.assessbyphone&hl=en",
    playStoreLink: "https://play.google.com/store/apps/details?id=org.educatorsinternational.assessbyphone&hl=en",
    categories: ["android"],
  },
  {
    title: "Boshhh",
    subtitle: "Credit Profiling & Mobile Finance Application",
    category: "Fintech & Performance",
    platforms: "Android",
    problem:
      "UK consumers seeking credit repair require a clear, high-speed mobile experience with payment processing and Google Wallet integration.",
    contribution:
      "Developed client features adhering to Material You design guidelines, integrated OPW payment gateways, Google Wallet, and optimized startup latency using Android Baseline Profiles.",
    image: "/img/boshhh_poster.webp",
    imageFit: "cover",
    technologies: ["Material You", "Google Wallet", "OPW Payments", "Baseline Profiles", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.app.boshhh&hl=en",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.app.boshhh&hl=en",
    categories: ["android"],
  },
  {
    title: "My Safari (Passenger & Agent)",
    subtitle: "Inter-City Bus Ticketing, Tracking & Agent POS",
    category: "Transportation & Ticketing",
    platforms: "Android",
    problem:
      "Transit operators need robust mobile booking for travelers and high-throughput ticket reservation and printing tools for station agents.",
    contribution:
      "Developed booking workflows, live route tracking, Wakala payment integration, and agent POS terminal integration with Sunmi and Zing thermal printer SDKs.",
    image: "/img/safari_passenger_poster.webp",
    imageFit: "cover",
    technologies: ["MVI Architecture", "Sunmi / Zing Printers", "Wakala Payments", "DataStore", "Retrofit"],
    link: "https://play.google.com/store/apps/details?id=com.mysafari.passenger&hl=en",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.mysafari.passenger&hl=en",
    categories: ["android"],
  },
  {
    title: "Exime Admin Dashboard",
    subtitle: "Server-Side Kotlin Learning Platform Management",
    category: "Server-Side Kotlin & Web",
    platforms: "Web",
    problem:
      "Education administrators need a centralized interface to manage educational curricula, test banks, and student accounts.",
    contribution:
      "Built backend and server-rendered administration features using Ktor, kotlinx.html, JOOQ, and PostgreSQL database persistence.",
    image: "/img/admin_poster.webp",
    imageFit: "cover",
    technologies: ["Ktor", "kotlinx.html", "JOOQ", "Firebase Admin SDK", "PostgreSQL"],
    link: "https://admin.exime.org/web/login",
    categories: ["web"],
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("featured")

  const getFilteredProjects = (filter: string) => {
    if (filter === "featured") {
      return projects.filter((p) => p.categories.includes("featured"))
    }
    if (filter === "android") {
      return projects.filter((p) => p.categories.includes("android"))
    }
    if (filter === "crossplatform") {
      return projects.filter((p) => p.categories.includes("crossplatform"))
    }
    if (filter === "web") {
      return projects.filter((p) => p.categories.includes("web"))
    }
    if (filter === "opensource") {
      return projects.filter((p) => p.categories.includes("opensource"))
    }
    return projects
  }

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/40 border-y border-border/40">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Layers className="h-3.5 w-3.5" />
              Production Deliveries &amp; Engineering Evidence
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Featured Work</h2>
            <p className="mx-auto max-w-[720px] text-muted-foreground text-base sm:text-lg">
              Published products, cross-platform mobile systems, and open-source contributions
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-6xl py-10">
          <Tabs defaultValue="featured" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 sm:grid-cols-5 w-full max-w-2xl h-auto p-1 gap-1">
                <TabsTrigger value="featured" className="text-xs sm:text-sm py-2">
                  Featured
                </TabsTrigger>
                <TabsTrigger value="android" className="text-xs sm:text-sm py-2">
                  Android &amp; Kotlin
                </TabsTrigger>
                <TabsTrigger value="crossplatform" className="text-xs sm:text-sm py-2">
                  Cross-Platform
                </TabsTrigger>
                <TabsTrigger value="web" className="text-xs sm:text-sm py-2">
                  Web &amp; Cloud
                </TabsTrigger>
                <TabsTrigger value="opensource" className="text-xs sm:text-sm py-2 col-span-2 sm:col-span-1">
                  Open Source
                </TabsTrigger>
              </TabsList>
            </div>

            {["featured", "android", "crossplatform", "web", "opensource"].map((tabKey) => (
              <TabsContent key={tabKey} value={tabKey} className="mt-0">
                <div className="grid gap-8 md:grid-cols-2">
                  {getFilteredProjects(tabKey).map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden border-border/70 hover:border-primary/40 hover:shadow-md transition-all duration-300 bg-card">
        {/* Visual Header */}
        <div className="relative aspect-[16/9] w-full bg-muted/60 overflow-hidden border-b border-border/40">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
            className={`${project.imageFit === "contain" ? "object-contain p-4" : "object-cover"} transition-transform duration-500 hover:scale-105`}
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-background/90 backdrop-blur border border-border text-foreground shadow-sm">
              {project.category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-primary/90 text-primary-foreground shadow-sm">
              {project.platforms}
            </span>
          </div>
        </div>

        <CardHeader className="pb-3 pt-5">
          <div className="space-y-1">
            <CardTitle className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <p className="text-xs font-medium text-muted-foreground">{project.subtitle}</p>
          </div>
        </CardHeader>

        <CardContent className="flex-grow space-y-4 pb-4">
          {/* Problem & Contribution */}
          <div className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground font-medium">Problem &amp; Context: </strong>
              <span className={isExpanded ? "" : "line-clamp-2"}>{project.problem}</span>
            </p>
            <div className="p-3 rounded-lg bg-muted/50 border border-border/50 space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-primary block">
                Engineering Contribution
              </span>
              <p className={isExpanded ? "text-foreground/90 text-xs sm:text-sm" : "text-foreground/90 text-xs sm:text-sm line-clamp-2"}>
                {project.contribution}
              </p>
            </div>
            {(project.problem.length > 120 || project.contribution.length > 120) && (
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                className="text-xs font-semibold text-primary hover:underline underline-offset-4 focus:outline-none"
                aria-expanded={isExpanded}
              >
                {isExpanded ? "Show less" : "Read full summary"}
              </button>
            )}
          </div>

          {/* Focused Tech Badges */}
          <div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-[11px] font-normal px-2 py-0.5 bg-muted hover:bg-muted/80">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>

        {/* Footer Actions */}
        <CardFooter className="border-t border-border/40 bg-muted/20 p-4 mt-auto">
          <div className="flex flex-wrap items-center justify-between gap-2 w-full">
            <div className="flex flex-wrap gap-2">
              {project.link && (
                <Button variant="default" size="sm" asChild className="h-8 text-xs font-medium">
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live project`}>
                    <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                    Visit Project
                  </Link>
                </Button>
              )}
              {project.playStoreLink && (
                <Button variant="outline" size="sm" asChild className="h-8 text-xs font-medium">
                  <Link href={project.playStoreLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on Google Play`}>
                    <Smartphone className="mr-1.5 h-3.5 w-3.5 text-emerald-600" />
                    Play Store
                  </Link>
                </Button>
              )}
              {project.appStoreLink && (
                <Button variant="outline" size="sm" asChild className="h-8 text-xs font-medium">
                  <Link href={project.appStoreLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on App Store`}>
                    <Layers className="mr-1.5 h-3.5 w-3.5 text-blue-600" />
                    App Store
                  </Link>
                </Button>
              )}
            </div>

            {project.githubLink && (
              <Button variant="outline" size="sm" asChild className="h-8 text-xs font-medium">
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View source code of ${project.title} on GitHub`}>
                  <Github className="mr-1.5 h-3.5 w-3.5" />
                  Source
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
