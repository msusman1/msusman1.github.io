import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/60 backdrop-blur">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
          <p className="text-sm font-semibold text-foreground">
            Muhammad Usman
          </p>
          <p className="text-xs text-muted-foreground">
            Senior Android &amp; Kotlin Engineer
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/msusman1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub profile of Muhammad Usman"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/muhammad-usman-a6a540197/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn profile of Muhammad Usman"
          >
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>

          <Link
            href="https://www.upwork.com/freelancers/~01fc760dec8e40b547"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors font-bold text-xs"
            aria-label="Upwork profile of Muhammad Usman"
          >
            <span className="px-1 py-0.5 rounded border border-border text-[11px]">Upwork</span>
            <span className="sr-only">Upwork</span>
          </Link>

          <Link
            href="mailto:msusman97@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email Muhammad Usman"
          >
            <Mail className="h-4 w-4" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
      <div className="border-t border-border/20 py-3 text-center">
        <p className="text-[11px] text-muted-foreground">
          &copy; {new Date().getFullYear()} Muhammad Usman. Built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
