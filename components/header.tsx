"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen, isMobile])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
            Muhammad Usman
          </span>
          <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded border border-primary/20 bg-primary/10 text-primary font-semibold">
            Android · KMP
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6" aria-label="Main Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button size="sm" asChild className="ml-2">
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-16 z-50 bg-background/98 backdrop-blur p-6 md:hidden flex flex-col justify-between"
        >
          <nav className="grid gap-4 py-4" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className="text-lg font-medium hover:text-primary py-2 border-b border-border/40 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="pt-6 border-t flex flex-col gap-3">
            <Button asChild onClick={toggleMenu} className="w-full">
              <Link href="#contact">Discuss a Project</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
