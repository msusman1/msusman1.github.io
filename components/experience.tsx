"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Android Engineer / Software Engineer",
      company: "Lopos Inc.",
      type: "Remote Contract · Part-time",
      period: "Dec 2023 – Present",
      location: "Belgium (Remote)",
      summary:
        "Part-time contract role focused on maintenance, bug fixing, and targeted feature improvements for industrial BLE hardware applications (Lopos Alert on Android and Lopos Configurator on iOS).",
      highlights: [
        "Maintain BLE scanning, GATT telemetry communication, and Nordic DFU over-the-air firmware update pipelines for industrial beacons and wearables.",
        "Diagnose and resolve production defects; improve error handling and application stability.",
        "Maintain Auth0 enterprise authentication and Retrofit/OkHttp networking across Android and iOS.",
        "Collaborate on both Android (Jetpack Compose, MVVM, Hilt) and iOS (SwiftUI, Combine) device workflows.",
      ],
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "BLE / Bluetooth",
        "Nordic DFU",
        "Hilt",
        "Auth0",
        "Retrofit",
        "SwiftUI",
        "Combine",
      ],
    },
    {
      title: "Full-Stack Engineer",
      company: "Armour Payments",
      type: "Remote Contract",
      period: "Nov 2023 – Present",
      location: "Canada (Remote)",
      summary:
        "Contribute to the GiveTree donation kiosk Android client and associated administrative web portal ecosystem.",
      highlights: [
        "Develop donation collection workflows in Jetpack Compose following Clean Architecture principles.",
        "Integrate ESC/POS thermal receipt printers, local persistence (DataStore), and payment integrations.",
        "Contribute to the administrative web dashboard built with Next.js, TypeScript, and Prisma ORM.",
        "Integrate AWS SES transactional email services and write automated tests with JUnit and Espresso.",
      ],
      technologies: [
        "Jetpack Compose",
        "Clean Architecture",
        "DataStore",
        "ESC/POS Printers",
        "Next.js",
        "TypeScript",
        "Prisma ORM",
        "AWS SES",
        "JUnit",
      ],
    },
    {
      title: "Android Developer",
      company: "Borvista LLC",
      type: "Remote",
      period: "May 2022 – Apr 2023",
      location: "Texas, United States (Remote)",
      summary:
        "Led modernization and architecture refactoring initiatives for enterprise mobile applications in an Agile team environment.",
      highlights: [
        "Migrated monolithic architecture toward Clean Architecture (Data, Domain, Presentation) with MVVM.",
        "Refactored legacy RxJava reactive pipelines to Kotlin Coroutines & Flow, and transitioned layouts toward Jetpack Compose.",
        "Implemented strict data privacy safeguards complying with CCPA and GDPR regulations.",
        "Integrated BLE hardware connectivity and specialized cryptographic SDKs.",
      ],
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Clean Architecture",
        "Coroutines & Flow",
        "MVVM",
        "BLE",
        "CCPA/GDPR Compliance",
      ],
    },
    {
      title: "Senior Android Developer",
      company: "Fleeksoft",
      type: "Full-time",
      period: "Oct 2018 – May 2022",
      location: "Sialkot, Pakistan",
      summary:
        "Delivered production Android solutions across transportation, education, healthcare, and enterprise mobility.",
      highlights: [
        "Architected and delivered scalable Kotlin applications using Clean Architecture, MVVM, and MVP patterns.",
        "Integrated specialized hardware peripherals: iris scanners, fingerprint readers, USB Host devices, and thermal/POS printers.",
        "Diagnosed low-level concurrency bottlenecks, memory leaks, and background process crashes.",
        "Mentored junior engineers and conducted peer code reviews and automated testing with JUnit and Espresso.",
      ],
      technologies: [
        "Kotlin",
        "Java",
        "Android SDK",
        "Hilt / Dagger",
        "Clean Architecture",
        "USB Host",
        "Biometric Scanners",
        "Thermal Printers",
        "Espresso",
      ],
    },
    {
      title: "Android Developer / Junior Web Developer / Mentor",
      company: "SUHTECH",
      type: "Full-time",
      period: "Mar 2016 – Oct 2018",
      location: "Sialkot, Pakistan",
      summary:
        "Engineered native Android applications, IoT hardware prototypes, and web service integrations.",
      highlights: [
        "Built and maintained Android applications for courier tracking, student attendance, and warehouse management.",
        "Engineered smart-home and IoT prototypes communicating with ESP8266 microcontrollers.",
        "Implemented NFC tag scanning for attendance and inventory verification systems.",
        "Applied code obfuscation and security hardening using DexGuard.",
      ],
      technologies: [
        "Android",
        "Java",
        "ESP8266 IoT",
        "NFC",
        "DexGuard",
        "REST APIs",
        "Web Technologies",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/40 border-t border-border/40">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Professional Experience</h2>
            <p className="mx-auto max-w-[720px] text-muted-foreground text-base sm:text-lg">
              Detailed chronological record of professional roles, verified responsibilities, and engineering impact
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-4xl py-10 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Card className="border-border/70 shadow-sm bg-card overflow-hidden">
                <CardHeader className="pb-3 border-b border-border/30 bg-muted/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div className="space-y-1">
                      <CardTitle className="text-xl font-bold text-foreground">{exp.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground font-medium">
                        <span className="text-primary font-semibold">{exp.company}</span>
                        <span>·</span>
                        <span>{exp.type}</span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit text-xs font-mono font-medium border-border/80">
                      <Calendar className="mr-1.5 h-3 w-3" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-4 space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
                    {exp.summary}
                  </p>

                  <div className="space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary block">
                      Key Responsibilities &amp; Work
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/90 list-disc list-inside">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-border/40">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-[11px] font-normal px-2 py-0.5 bg-muted">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
