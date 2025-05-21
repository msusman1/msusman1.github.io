"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Passionate about building products that make a positive impact on people&apos;s lives
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-500 dark:text-gray-400 leading-7">
                  Experienced Software Developer with over 6 years of expertise in architecting and developing
                  innovative mobile and web applications across diverse industries, including e-commerce, social
                  networking, public transportation, entertainment, productivity, healthcare, and identity verification
                  systems.
                </p>
                <p className="mt-4 text-gray-500 dark:text-gray-400 leading-7">
                  Highly tech-oriented and quality-focused, passionate about building products that make a positive
                  impact on people&apos;s lives.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            className="grid gap-4 md:grid-cols-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="row-span-2">
              <CardContent className="p-6 flex flex-col h-full justify-center">
                <div className="text-center">
                  <h3 className="text-5xl font-bold">6+</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Years of Experience</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold">20+</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Projects Completed</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold">35+</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Developer Badges</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
