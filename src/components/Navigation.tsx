"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Plane } from "lucide-react"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-navy)]/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Plane className="h-8 w-8 text-[var(--color-action-orange)]" />
            <span className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Apex Ascension
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/#services" className="text-white hover:text-[var(--color-action-orange)] transition-colors font-medium">
              Услуги
            </Link>
            <Link href="/skydiving" className="text-white hover:text-[var(--color-action-orange)] transition-colors font-medium">
              Скайдайвинг
            </Link>
            <Link href="/pilot-school" className="text-white hover:text-[var(--color-action-orange)] transition-colors font-medium">
              Школа пилотов
            </Link>
            <Link href="/about" className="text-white hover:text-[var(--color-action-orange)] transition-colors font-medium">
              О нас
            </Link>
            <Link href="/contact" className="text-white hover:text-[var(--color-action-orange)] transition-colors font-medium">
              Контакты
            </Link>
            <Button 
              asChild 
              className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact">Забронировать</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 animate-in fade-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col gap-4 bg-[var(--color-navy)]/90 p-4 rounded-lg">
              <Link 
                href="/#services" 
                className="text-white hover:text-[var(--color-action-orange)] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                href="/skydiving" 
                className="text-white hover:text-[var(--color-action-orange)] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Скайдайвинг
              </Link>
              <Link 
                href="/pilot-school" 
                className="text-white hover:text-[var(--color-action-orange)] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Школа пилотов
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-[var(--color-action-orange)] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                О нас
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-[var(--color-action-orange)] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </Link>
              <Button 
                asChild 
                className="bg-[var(--color-action-orange)] hover:bg-[var(--color-action-orange)]/90 text-white font-semibold w-full mt-2 shadow-lg"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Забронировать</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}