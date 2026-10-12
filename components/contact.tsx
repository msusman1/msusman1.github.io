"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, ExternalLink, Send, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { name, email, subject, message } = formData
    const mailtoSubject = encodeURIComponent(subject || `Inquiry from ${name}`)
    const mailtoBody = encodeURIComponent(
      `Hello Muhammad,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    )

    setSubmitted(true)
    window.location.href = `mailto:msusman97@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background border-t border-border/40">
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
              <MessageSquare className="h-3.5 w-3.5" />
              Direct Communication &amp; Availability
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Let&apos;s Connect</h2>
            <p className="mx-auto max-w-[720px] text-muted-foreground text-base sm:text-lg">
              Available for senior Android/Kotlin roles, cross-platform consulting, and select contract engagements
            </p>
          </div>
        </motion.div>

        <div className="mx-auto max-w-5xl py-10">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Quick Contact & Channels */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-border/70 shadow-sm bg-card flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Direct Channels</CardTitle>
                    <CardDescription className="text-sm">
                      Choose the channel most convenient for you. I respond promptly to inquiries.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="font-semibold text-sm">Direct Email</h3>
                        <Link
                          href="mailto:msusman97@gmail.com"
                          className="text-sm text-primary hover:underline underline-offset-4 block"
                        >
                          msusman97@gmail.com
                        </Link>
                        <p className="text-xs text-muted-foreground">Preferred for direct recruitment &amp; technical inquiries</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 shrink-0">
                        <span className="font-bold text-sm block px-0.5">Up</span>
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="font-semibold text-sm">Upwork Profile</h3>
                        <Link
                          href="https://www.upwork.com/freelancers/~01fc760dec8e40b547"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline underline-offset-4 inline-flex items-center gap-1"
                        >
                          <span>Hire via Upwork</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                        <p className="text-xs text-muted-foreground">Contract engagements &amp; escrow-backed projects</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] shrink-0">
                        <Linkedin className="h-5 w-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="font-semibold text-sm">LinkedIn</h3>
                        <Link
                          href="https://www.linkedin.com/in/muhammad-usman-a6a540197/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline underline-offset-4 inline-flex items-center gap-1"
                        >
                          <span>Connect on LinkedIn</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                        <p className="text-xs text-muted-foreground">Professional network and employment inquiries</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Github className="h-5 w-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="font-semibold text-sm">GitHub Profile</h3>
                        <Link
                          href="https://github.com/msusman1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline underline-offset-4 inline-flex items-center gap-1"
                        >
                          <span>github.com/msusman1</span>
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                        <p className="text-xs text-muted-foreground">Open-source code repositories &amp; implementations</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-muted text-muted-foreground shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="font-semibold text-sm">Location &amp; Availability</h3>
                        <p className="text-sm text-muted-foreground">Sialkot, Punjab, Pakistan</p>
                        <p className="text-xs text-muted-foreground">Available for remote collaboration across worldwide timezones</p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>

            {/* Email Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-border/70 shadow-sm bg-card h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
                  <CardDescription className="text-sm">
                    Fill out this form to prepare a direct pre-composed message in your email client.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="text-xs font-semibold text-foreground">
                          Your Name *
                        </label>
                        <Input
                          id="contact-name"
                          name="name"
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-10 text-sm"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="text-xs font-semibold text-foreground">
                          Your Email *
                        </label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          placeholder="jane@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-10 text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="text-xs font-semibold text-foreground">
                        Subject *
                      </label>
                      <Input
                        id="contact-subject"
                        name="subject"
                        placeholder="e.g. Senior Android Contract / Project Discussion"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="h-10 text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="text-xs font-semibold text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        placeholder="Tell me about your project, timeline, and tech stack..."
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[140px] text-sm"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full h-10 font-semibold gap-2">
                      <Send className="h-4 w-4" />
                      <span>Compose Email</span>
                    </Button>
                    {submitted && (
                      <p className="text-xs text-center text-muted-foreground pt-1">
                        Opening your default mail client. You can also email directly at{" "}
                        <a href="mailto:msusman97@gmail.com" className="text-primary underline">
                          msusman97@gmail.com
                        </a>
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
