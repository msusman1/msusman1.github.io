"use client"

import {motion} from "framer-motion"
import {Button} from "@/components/ui/button"
import {ArrowDown, Github, Linkedin, Mail, MapPin, ExternalLink, Briefcase} from "lucide-react"
import Link from "next/link"
import React from "react"
import Image from "next/image"

export default function Hero() {
    return (
        <section id="home" className="relative py-16 md:py-28 overflow-hidden border-b border-border/40">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-12 xl:grid-cols-[1fr_420px] items-center">
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-3">
                            <motion.div
                                initial={{opacity: 0, y: 15}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.4}}
                                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                            >
                <span className="relative flex h-2 w-2">
                  <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                                Senior Android &amp; Kotlin Multiplatform Engineer
                            </motion.div>

                            <motion.h1
                                className="text-3xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/tight"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.1}}
                            >
                                Muhammad Usman
                            </motion.h1>

                            <motion.p
                                className="text-lg font-medium text-foreground/80 sm:text-xl"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.15}}
                            >
                                Native Android/IOS · Kotlin Multiplatform · Production Mobile Architecture
                            </motion.p>

                            <motion.p
                                className="max-w-[620px] text-base text-muted-foreground leading-relaxed"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: 0.2}}
                            >
                                10+ years of software-development experience specializing in Android engineering,
                                Jetpack Compose, and cross-platform systems with Kotlin Multiplatform. Experienced
                                in architecting scalable mobile applications, BLE device integrations, and production
                                full-stack products.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-wrap gap-3"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.25}}
                        >
                            <Button asChild size="lg" className="font-semibold shadow-sm">
                                <Link href="#contact">Discuss a Project</Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild className="font-semibold">
                                <Link href="#projects">Explore Work</Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-muted-foreground pt-1"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.3}}
                        >
                            <div className="flex items-center gap-1.5">
                                <MapPin className="h-4 w-4 text-primary shrink-0"/>
                                <span>Sialkot, Punjab, Pakistan (Remote Worldwide)</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Briefcase className="h-4 w-4 text-primary shrink-0"/>
                                <span>Senior Roles &amp; Contract Engagements</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap items-center gap-2 pt-1"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: 0.35}}
                        >
                            <Button variant="outline" size="sm" asChild className="gap-2">
                                <Link href="https://github.com/msusman1" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4"/>
                                    <span>GitHub</span>
                                    <ExternalLink className="h-3 w-3 opacity-60"/>
                                </Link>
                            </Button>

                            <Button variant="outline" size="sm" asChild className="gap-2">
                                <Link href="https://www.linkedin.com/in/muhammad-usman-a6a540197/" target="_blank"
                                      rel="noopener noreferrer">
                                    <Linkedin className="h-4 w-4 text-[#0A66C2]"/>
                                    <span>LinkedIn</span>
                                    <ExternalLink className="h-3 w-3 opacity-60"/>
                                </Link>
                            </Button>

                            <Button variant="outline" size="sm" asChild className="gap-2">
                                <Link href="https://www.upwork.com/freelancers/~01fc760dec8e40b547" target="_blank"
                                      rel="noopener noreferrer">
                                    <span className="font-bold text-[#14A800] text-sm">Up</span>
                                    <span>Upwork</span>
                                    <ExternalLink className="h-3 w-3 opacity-60"/>
                                </Link>
                            </Button>

                            <Button variant="outline" size="sm" asChild className="gap-2">
                                <Link href="mailto:msusman97@gmail.com">
                                    <Mail className="h-4 w-4 text-primary"/>
                                    <span>Email</span>
                                </Link>
                            </Button>
                        </motion.div>
                    </div>

                    <motion.div
                        className="flex items-center justify-center"
                        initial={{opacity: 0, scale: 0.95}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                    >
                        <div className="relative group">
                            <div
                                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/30 to-blue-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500"/>

                            {/* Removed aspect-square and set height to 'auto' with a max-height or proportional sizing */}
                            <div
                                className="relative overflow-hidden rounded-2xl border-2 border-border/80 bg-card w-[260px] sm:w-[320px] lg:w-[360px] shadow-xl"
                                style={{aspectRatio: '718 / 893'}}>
                                <Image
                                    src="/img/profile2.jpeg"
                                    alt="Muhammad Usman — Senior Android & Kotlin Engineer"
                                    fill
                                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px"
                                    priority
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-12 hidden md:flex justify-center">
                    <Link href="#about" aria-label="Scroll to About section">
                        <Button variant="ghost" size="icon"
                                className="rounded-full text-muted-foreground hover:text-foreground">
                            <ArrowDown className="h-5 w-5 animate-bounce"/>
                            <span className="sr-only">Scroll Down</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
