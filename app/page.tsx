import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Reviews from "@/components/reviews"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Certifications from "@/components/certifications"
import Education from "@/components/education"
import Interests from "@/components/interests"
import Contact from "@/components/contact"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Projects />
      <Reviews />
      <Skills />
      <Experience />
      <Certifications />
      <Education />
      <Interests />
      <Contact />
      <ScrollToTop />
    </main>
  )
}
