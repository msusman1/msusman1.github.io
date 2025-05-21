"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Certifications() {
  const certifications = [
    {
      title: "Meta Android Developer",
      credential: "Q9Z4PR7Q38HS",
      link: "https://coursera.org/verify/professional-cert/Q9Z4PR7Q38HS",
      description: "Certified Android Developer by Meta",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      credential: "LGSHXDK1Z1RQQMWT",
      link: "https://aws.amazon.com/verification",
      description: "Foundational understanding of AWS Cloud services",
    },
    {
      title: "Certified Cloud Native Computing",
      credential: "PIAIC90157",
      link: "https://certification.piaic.org/",
      description: "Expertise in cloud-native technologies and practices",
    },
  ]

  return (
    <section id="certifications" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Professional certifications and achievements
            </p>
          </div>
        </motion.div>
        <div className="mx-auto max-w-3xl py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                    </div>
                    <CardDescription>Credential: {cert.credential}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                  <div className="p-4 pt-0 mt-auto">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Verify
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
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-muted-foreground">
              Additionally, I have earned 35+ developer badges. View my complete{" "}
              <Link href="https://g.dev/muhammadusman97" className="text-primary hover:underline">
                Developer Profile
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
