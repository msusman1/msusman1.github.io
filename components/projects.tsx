"use client"

import {motion} from "framer-motion"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {ExternalLink, Github} from "lucide-react"
import Link from "next/link"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"

type Project = {
    title: string
    description: string
    image: string
    technologies: string[]
    link: string
    category: string
}
export default function Projects() {
    const projects: Project[] = [
        {
            title: "Seed",
            description:
                "A science-backed, gamified app designed to help you quit porn for good. It uses hypnosis tapes to rewire your brain, a progress tracker with evolving 3D orbs to keep you motivated, and breath work exercises to manage triggers.",
            image: "/img/seed_poster.png?height=300&width=500",
            technologies: ["RevenueCat", "Spline 3D", "Adapty", "Superwall", "Appsflyer", "MVVM", "Hilt", "Lottie", "Firebase", "MixPanel"],
            link: "https://play.google.com/store/apps/details?id=com.polyspeaker.broadcast",
            category: "featured",
        },
        {
            title: "PolySpeaker",
            description:
                "Poly Speaker app let the guides to connect with their groups easily. Guide can speak directly to your group without worrying about clunky equipment or about connectivity issues.",
            image: "/img/poly_speaker_poster.png?height=300&width=500",
            technologies: ["Wifi Direct", "MVVM", "Hilt", "Google Zxing", "Netty Server/Client", "TCP Sockets", "ML Kit", "Mockito"],
            link: "https://play.google.com/store/apps/details?id=com.polyspeaker.broadcast",
            category: "featured",
        },
        {
            title: "GiveTree App",
            description:
                "The GiveTree app is installed on ArmourPayments-affiliated kiosks for fast and secure fundraising purposes.",
            image: "/img/givetree_poster.png?height=300&width=500",
            technologies: ["Clean Arch", "Dejavoo", "Lottie Compose", "AWS SES SDK", "ESCPOS Thermal Printer"],
            link: "https://play.google.com/store/apps/details?id=com.give.tree",
            category: "mobile",
        },
        {
            title: "GiveTree Admin Dashboard",
            description:
                "The Givetree Admin dashboard manages campaigns, kiosks, donors, and registered organizations. It issues licenses to organizations and provides insightful data on transactions and donations.",
            image: "/img/give_tree_web_poster.jpeg?height=300&width=500",
            technologies: ["Next.js", "Prisma ORM", "AWS SDK", "Zod & Yup Twilio", "Chart.js", "jsPDF", "TanStack"],
            link: "https://webportal.givetree.ca/signin",
            category: "web",
        },
        {
            title: "Bedtime Story AI",
            description:
                "Bedtime Story AI App help you create high-quality written bedtime stories. Explore your kids curiosity with them writing their own stories and reading.",
            image: "/img/bedtime_story_ai_poster.png?height=300&width=500",
            technologies: ["Hilt", "Firebase", "WorkManager", "Retrofit", "Coil", "Branch.io", "Google Auth"],
            link: "https://play.google.com/store/apps/details?id=com.kaj.bedtimestory",
            category: "featured",
        },
        {
            title: "WhatColors: Color Analysis",
            description:
                "Color Analysis is the world's most sophisticated Personal Color Theory App in the world based on AI.",
            image: "/img/colorme_poster.png?height=300&width=500",
            technologies: ["MVVM", "Mixpanel", "Compose", "Superwall", "Google Auth", "Firebase", "RevenueCat"],
            link: "https://play.google.com/store/apps/details?id=io.mindgarden.colorme",
            category: "mobile",
        },
        {
            title: "Lopos Alert",
            description:
                "Lopos Alert App help you configure Lopos Inc, Flagship products, This app is used to scan the BLE devices like Beacons and Wearables and update their firmware.",
            image: "/img/lopos_poster.png?height=300&width=500",
            technologies: ["MVVM", "Hilt", "Firmware", "Gitlab", "Auth0", "Bluetooth", "BLE"],
            link: "https://play.google.com/store/apps/details?id=be.lopos.android",
            category: "featured",
        },
        {
            title: "Lopos Configurator",
            description:
                "Lopos IOS App to configure Lopos Inc, Flagship products, This app is used to scan the BLE devices like Beacons and Wearables and update their firmware.",
            image: "/img/lopos_ios_poster.png?height=300&width=500",
            technologies: ["Auth0", "Bluetooth", "BLE", "Combine", "SwiftUI", "Bugsnag", "NordicDFU"],
            link: "https://apps.apple.com/tr/app/lopos/id1621771307",
            category: "featured",
        },
        {
            title: "Watchmode",
            description: "Watchmode app let you watch multiple streaming services, Netflix addicts, movie lovers, binge watchers and cord cutters.",
            image: "/img/watchmode_poster.png?height=300&width=500",
            technologies: ["RxKotlin", "trevjonez composer", "spotless", "Mockito", "Dagger", "Exoplayer", "Youtube Player"],
            link: "https://play.google.com/store/apps/details?id=com.meteoric.wm",
            category: "mobile",
        },
        {
            title: "AssessByPhone",
            description: "AssessByPhone an innovative educational app designed to empower educators and stakeholders in assessing a student's proficiency in early literacy, with a focus on speaking, reading, and numeracy. Key Features: → Accurate Assessment → Comprehensive Literacy Evaluation → Instant Result Transmission → Database Analysis → Contextualized Teacher Feedback",
            image: "/img/accessByphone_poster.png?height=300&width=500",
            technologies: [
                "Backendless",
                "Room database",
                "Bluetooth Printing",
                "Dagger Hilt",
                "Macrobenchmark",
                "Kotlin",
                "Coroutines"
            ],
            link: "https://play.google.com/store/apps/details?id=org.educatorsinternational.assessbyphone&hl=en",
            category: "mobile"
        },
        {
            title: "Boshhh",
            description: "Boshhh app help you BOOSTS your credit score if you can’t get credit. Powered by the UK’s most reliable network",
            image: "/img/boshhh_poster.png?height=300&width=500",
            technologies: [
                "Webkit",
                "firebase",
                "Material You",
                "Google wallet",
                "oppwa payment gateway",
                "Truth",
                "Baseline Profiling"
            ],
            link: "https://play.google.com/store/apps/details?id=com.app.boshhh&hl=en",
            category: "featured"
        },
        {
            title: "My Safari passenger App",
            description: "This app is for Booking bus tickets, special hiring whole bus, Ticket printing, Live bus tracking,",
            image: "/img/safari_passenger_poster.png?height=300&width=500",
            technologies: [
                "Wakala Payments",
                "Push Notification",
                "MVVM with repository layer",
                "Fasebook/Google Auth",
                "firebase ",
            ],
            link: "https://play.google.com/store/apps/details?id=com.mysafari.passenger&hl=en",
            category: "featured"
        },
        {
            title: "Sportise App",
            description: "Sportise is a Italian sports events organizer, built to help you gather information and videos of your favorite sports in one place.",
            image: "/img/sportize_poster.png?height=300&width=500",
            technologies: [
                "Connect SDK for casting",
                "Exoplayer",
                "Jsoup",
                "Nanohttpd",
                "Firebase Auth",
                "Live media streaming"
            ],
            link: "https://play.google.com/store/apps/details?id=com.sportize.sportizeapp&hl=en",
            category: "featured"
        },
        {
            title: "My Safari Agent",
            description: "My Safari is a mobile app for My Safari Agent that let you reserve seats, cancellation of reservation and different types of route inquiries used on securing quick reservations.",
            image: "/img/my_safari_agent_poster.png?height=300&width=500",
            technologies: [
                "MVI Architecture",
                "datastore",
                "firebase analytics/crashlytics",
                "retrofit with okhttp3",
                "Sunmi Printer/Zing printer sdk"
            ],
            link: "https://play.google.com/store/apps/details?id=com.wakala.mysafari",
            category: "mobile"
        },
        {
            title: "Exime",
            description: "A free learning platform for students and working professionals from diverse education domains,",
            image: "/img/exime_poster.png?height=300&width=500",
            technologies: [
                "Junit",
                "Espresso",
                "hilt",
                "Mathjax",
                "jsoap",
                "AWS cloudfront",
                "S3"
            ],
            link: "https://play.google.com/store/apps/details?id=org.exime.android&hl=en",
            category: "mobile"
        },
        {
            title: "Exime Admin Dashboard",
            description: "Admin dashboard for Exime app",
            image: "/img/admin_poster.png?height=300&width=500",
            technologies: [
                "Kotlinx html",
                "KTOR",
                "JOOQ",
                "Firebase-admin sdk",
                "okhttp3",
                "JDBC"
            ],
            link: "https://admin.exime.org/web/login",
            category: "web"
        },
        {
            title: "SWMC Operations",
            description: "An App that mange SWMC organization daily tasks",
            image: "/img/swmc_operations_poster.png?height=300&width=500",
            technologies: [
                "Zxing for qr scanning",
                "MPAndroidChart",
                "Eventbus",
                "Custom Tabs"
            ],
            link: "",
            category: "mobile"
        },
        {
            title: "City traffic police Sialkot",
            description: "An app that display users their challan status, live traffic updates, licence info,vehicle info hold 100+ sample driving licence test questions and much more",
            image: "/img/city_trafic_police_sialkot_poster.png?height=300&width=500",
            technologies: [
                "Geo Fencing",
                "Distance matrix api",
                "Route api",
                "Jsoap for web crawling",
                "Real time Location"
            ],
            link: "",
            category: "mobile"
        },
        {
            title: "Rentrak",
            description: "A movie and tv series watching app like netflix",
            image: "/img/rentrak_poster.png?height=300&width=500",
            technologies: [
                "Exoplayer with mpeg extensions",
                "Leanback UI libraries"
            ],
            link: "",
            category: "mobile"
        },
        {
            title: "ShahnApp",
            description: "An app that allow customer to send their parcel/packages in Egypt, view their status and track them",
            image: "/img/shahn_app_poster.png?height=300&width=500",
            technologies: [
                "Realtime Chat",
                "Farypay payment Integration",
                "Firebase notifications"
            ],
            link: "",
            category: "mobile"
        },
        {
            title: "SWMC Citizen",
            description: "App that allow citizen to complain for any waste in sialkot city",
            image: "/img/swmc_citizen_poster.png?height=300&width=500",
            technologies: [
                "Geo fencing",
                "Fused Location client for realtime locations",
                "google map",
                "Road Apis",
                "Camerax"
            ],
            link: "https://play.google.com/store/apps/details?id=com.swmc.fleeksoft.swmccitizenv3",
            category: "mobile"
        },
        {
            title: "Trendpk",
            description: "App that hold trending youtube videos, live tvs, trending news and much more.",
            image: "/img/trendpk_poster.png?height=300&width=500",
            technologies: [
                "Youtube player",
                "news apis",
                "exoplayer for live tv links"
            ],
            link: "",
            category: "mobile"
        },
        {
            title: "Miracles of Quran",
            description: "This App contains scientific knowledge that could not have been known 1400 years ago. It ranges from basic arithmetic's to the most advanced topics in astrophysics.",
            image: "/img/miracles.png?height=300&width=500",
            technologies: [
                "Remote Configs",
                "Crashlytics",
                "Analytics",
                "data-domain-ui arch",
                "Hilt"
            ],
            link: "https://play.google.com/store/apps/details?id=com.app.divinescript&hl=en",
            category: "mobile"
        }
    ]

    return (
        <section id="projects" className="py-16 md:py-24 bg-muted/50">
            <div className="container px-4 md:px-6">
                <motion.div
                    className="flex flex-col items-center justify-center space-y-4 text-center"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                >
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Work</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Showcasing my latest projects and applications
                        </p>
                    </div>
                </motion.div>
                <div className="mx-auto max-w-5xl py-12">
                    <Tabs defaultValue="featured" className="w-full">
                        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                            <TabsTrigger value="featured">Featured Projects</TabsTrigger>
                            <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
                            <TabsTrigger value="web">Web Apps</TabsTrigger>
                        </TabsList>
                        <TabsContent value="featured" className="mt-6">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                                {projects
                                    .filter((p) => p.category === "featured")
                                    .map((project: Project, index) => (
                                        <ProjectCard key={index} project={project} index={index}/>
                                    ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="mobile" className="mt-6">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                                {projects
                                    .filter((p) => p.category === "mobile")
                                    .map((project, index) => (
                                        <ProjectCard key={index} project={project} index={index}/>
                                    ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="web" className="mt-6">
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                                {projects
                                    .filter((p) => p.category === "web")
                                    .map((project, index) => (
                                        <ProjectCard key={index} project={project} index={index}/>
                                    ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

type ProjectCardProps = {
    project: Project
    index: number
}

export function ProjectCard({project, index}: ProjectCardProps) {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: index * 0.1}}
        >
            <Card className="overflow-hidden h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                    <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary">
                                {tech}
                            </Badge>
                        ))}
                        {project.technologies.length > 6 && (
                            <Badge variant="outline">+{project.technologies.length - 6} more</Badge>
                        )}
                    </div>
                </CardContent>
                <CardFooter className="border-t bg-muted/50 p-4">
                    <div className="flex justify-between w-full">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4"/>
                                View Project
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Github className="h-4 w-4"/>
                            <span className="sr-only">GitHub</span>
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
