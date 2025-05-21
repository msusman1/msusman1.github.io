"use client"

import {useState} from "react"
import {motion} from "framer-motion"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"
import {Github, Linkedin, Mail, MapPin, Phone} from "lucide-react"
import {useToast} from "@/hooks/use-toast"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const {name, email, subject, message} = formData

        const mailtoLink = `mailto:msusman97@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`

        window.location.href = mailtoLink
    }

    return (
        <section id="contact" className="py-16 md:py-24 bg-muted/50">
            <div className="container px-4 md:px-6">
                <motion.div
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Let's connect and discuss your project
                        </p>
                    </div>
                </motion.div>
                <div className="mx-auto max-w-5xl py-12">
                    <div className="grid gap-8 lg:grid-cols-2">
                        <motion.div
                            initial={{opacity: 0, x: -20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5}}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>Get in Touch</CardTitle>
                                    <CardDescription>Fill out the form and I'll get back to you as soon as
                                        possible.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="Your Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Input
                                                id="subject"
                                                name="subject"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Your Message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="min-h-[150px]"
                                                required
                                            />
                                        </div>
                                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, x: 20}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.5}}
                        >
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle>Contact Information</CardTitle>
                                    <CardDescription>Feel free to reach out through any of these
                                        channels.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-6 w-6 text-primary"/>
                                        <div>
                                            <h3 className="font-medium">Location</h3>
                                            <p className="text-sm text-muted-foreground">Sialkot, Punjab, Pakistan</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="h-6 w-6 text-primary"/>
                                        <div>
                                            <h3 className="font-medium">Phone</h3>
                                            <p className="text-sm text-muted-foreground">(+92) 324-6192457</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Mail className="h-6 w-6 text-primary"/>
                                        <div>
                                            <h3 className="font-medium">Email</h3>
                                            <p className="text-sm text-muted-foreground">msusman97@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <h3 className="font-medium mb-4">Connect with me</h3>
                                        <div className="flex gap-4">
                                            <Button variant="outline" size="icon" asChild>
                                                <a href="https://github.com/msusman1" target="_blank"
                                                   rel="noopener noreferrer">
                                                    <Github className="h-5 w-5"/>
                                                    <span className="sr-only">GitHub</span>
                                                </a>
                                            </Button>
                                            <Button variant="outline" size="icon" asChild>
                                                <a href="https://www.linkedin.com/in/muhammad-usman-a6a540197/"
                                                   target="_blank" rel="noopener noreferrer">
                                                    <Linkedin className="h-5 w-5"/>
                                                    <span className="sr-only">LinkedIn</span>
                                                </a>
                                            </Button>
                                            <Button variant="outline" size="icon" asChild>
                                                <a href="mailto:msusman97@gmail.com">
                                                    <Mail className="h-5 w-5"/>
                                                    <span className="sr-only">Email</span>
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
