"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Muhammad Usman
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Experienced Software Developer with over 6 years of expertise in architecting and developing innovative
                mobile and web applications
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Sialkot, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>(+92) 324-6192457</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                <span>msusman97@gmail.com</span>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="https://github.com/msusman1" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-usman-a6a540197/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://play.google.com/store/apps/developer?id=Urban+Soft" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Image
                      src="/img/playstore.webp"
                      alt="Playstore"
                      width={20}
                      height={20}
                  />
                  <span className="sr-only">Playstore</span>
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-background bg-muted w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              <img
                src="/img/profile.jpeg"
                alt="Muhammad Usman"
                className="object-cover"
                width={400}
                height={400}
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link href="#about">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll Down</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
