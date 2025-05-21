"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Android Engineer",
      company: "Lopos",
      type: "Contract · Remote",
      period: "Dec 2023 - Present",
      description:
        "At Lopos, I play a pivotal role in developing the Lopos Alert App (Android and IOS), a cutting-edge solution for configuring Lopos Inc.'s flagship products. This app seamlessly scans and updates the firmware of BLE devices, including Beacons and Wearables, ensuring optimal performance and user experience.",
      technologies: [
        "MVVM",
        "Hilt",
        "Jetpack Compose",
        "Material You",
        "Auth0",
        "Bluetooth",
        "BLE",
        "Retrofit",
        "OkHttp3",
        "GitLab",
      ],
    },
    {
      title: "Full Stack Engineer",
      company: "Armour Payments",
      type: "Contract · Remote",
      period: "Nov 2023 - Present",
      description:
        "At Armour Payments, I am leading the development of a cutting-edge donation collection application, leveraging the latest Android technologies to deliver a seamless and efficient user experience. This application is designed to streamline the donation process, ensuring security, performance, and ease of use.",
      technologies: [
        "Jetpack Compose",
        "Material3",
        "Navigation Compose",
        "Retrofit",
        "OkHttp",
        "Gson",
        "DataStore",
        "JUnit",
        "Espresso",
        "AWS SES",
      ],
    },
    {
      title: "Android Developer",
      company: "Borvista LLC",
      type: "Remote · Texas, United States",
      period: "May 2022 - April 2023",
      description:
        "Maintained and improved coding standards across the team, taking part in code reviews for other developers. Made the user data privacy Compliance with CCPA/GDPA Regulations. Migrated to Clean Architecture(data-domain-presentation) using MVVM.",
      technologies: [
        "Clean Architecture",
        "MVVM",
        "Kotlin Coroutines",
        "Compose UI",
        "BLE",
        "Crypto SDK",
        "Agile",
        "JIRA",
      ],
    },
    {
      title: "Senior Android Developer",
      company: "Fleeksoft",
      type: "Full-time",
      period: "Oct 2018 - May 2022",
      description:
        "Translated designs and wireframes into high-quality code. Mentored junior developers. Migrated the code base to Kotlin Clean architectures (MVVM, MVP). Collaborated with cross-functional teams to define and design new features.",
      technologies: [
        "Clean Architecture",
        "Hilt",
        "Jetpack",
        "IRIS scanner",
        "Fingerprint scanner",
        "Bluetooth printers",
        "POS",
        "Bus Ticketing",
      ],
    },
    {
      title: "Android Developer/Junior Web Developer/Mentor",
      company: "SuhTech",
      type: "Full-time",
      period: "Mar 2016 - Oct 2018",
      description:
        "Continuously discovered, evaluated, and implemented new technologies to maximize development efficiency. Assisted in compliance with standards. Obfuscated/optimized the code using Dexguard. Implemented the Frontend of courier's solutions using front-end tech stacks.",
      technologies: ["Smart Home", "IoT", "ESP8266", "Courier solutions", "NFC", "Student attendance system"],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              My professional journey in software development
            </p>
          </div>
        </motion.div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>
                        {exp.company} · {exp.type}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
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
