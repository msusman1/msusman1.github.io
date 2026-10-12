"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Certifications() {
  const certifications = [
    {
      title: "Meta Android Developer Professional Certificate",
      issuer: "Meta (Coursera)",
      credential: "Q9Z4PR7Q38HS",
      link: "https://coursera.org/verify/professional-cert/Q9Z4PR7Q38HS",
      description:
        "Comprehensive professional credential covering native Android architecture, Jetpack Compose, Kotlin, data persistence, and automated UI testing.",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      credential: "LGSHXDK1Z1RQQMWT",
      link: "https://aws.amazon.com/verification",
      description:
        "Foundational AWS certification covering cloud architecture, security principles, compute/storage services, and deployment models.",
    },
    {
      title: "Certified Cloud Native Computing",
      issuer: "PIAIC",
      credential: "PIAIC90157",
      link: "https://certification.piaic.org/",
      description:
        "Specialized program in cloud-native technologies, containerization foundations, microservices, and modern deployment pipelines.",
    },
  ]

  return (
    <section id="certifications" className="py-16 md:py-24 bg-muted/40 border-t border-border/40">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Certifications &amp; Credentials</h2>
            <p className="mx-auto max-w-[720px] text-muted-foreground text-base sm:text-lg">
              Verified industry certifications and formal technical credentials
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-5xl py-10">
          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col border-border/70 hover:border-primary/40 transition-colors shadow-sm bg-card">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Award className="h-5 w-5" />
                      <span className="text-xs font-semibold uppercase tracking-wider">{cert.issuer}</span>
                    </div>
                    <CardTitle className="text-base font-bold leading-snug">{cert.title}</CardTitle>
                    <CardDescription className="text-xs font-mono pt-1">
                      ID: {cert.credential}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pb-4">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                  </CardContent>
                  <div className="p-4 pt-0 mt-auto border-t border-border/30 pt-3">
                    <Button variant="outline" size="sm" className="w-full text-xs font-medium" asChild>
                      <Link href={cert.link} target="_blank" rel="noopener noreferrer" aria-label={`Verify ${cert.title} credential`}>
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Verify Credential
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 p-3 px-5 rounded-full border border-border/60 bg-card text-xs sm:text-sm text-muted-foreground shadow-sm">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>
                Verified Google Developer Profile with recognized learning milestones:
              </span>
              <Link
                href="https://g.dev/muhammadusman97"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline underline-offset-4 inline-flex items-center gap-1"
              >
                <span>View Google Profile</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
