"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 hover-glow">
              <div className="relative w-10 h-10 gradient-primary rounded-xl flex items-center justify-center animate-pulse-glow hover:animate-logo-spin transition-all duration-300">
                <img src="/iconchemicals-logo.png" alt="IconChemicals Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="font-serif font-bold text-xl text-gradient-primary animate-fade-in-up">
                IconChemicals
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-all duration-300 hover-lift font-medium"
            >
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-all duration-300 hover-lift font-medium">
                About <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="animate-fade-in-up">
                <DropdownMenuItem asChild>
                  <Link href="/about" className="hover-glow">
                    Company Overview
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/history" className="hover-glow">
                    Our History
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about/team" className="hover-glow">
                    Leadership Team
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-all duration-300 hover-lift font-medium">
                Products{" "}
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="animate-fade-in-up">
                <DropdownMenuItem asChild>
                  <Link href="/products/dyes" className="hover-glow">
                    Industrial Dyes
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/chemicals" className="hover-glow">
                    Specialty Chemicals
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products/catalog" className="hover-glow">
                    Product Catalog
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-all duration-300 hover-lift font-medium">
                Services{" "}
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="animate-fade-in-up">
                <DropdownMenuItem asChild>
                  <Link href="/services/import" className="hover-glow">
                    Import Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/export" className="hover-glow">
                    Export Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/services/logistics" className="hover-glow">
                    Logistics Solutions
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-all duration-300 hover-lift font-medium">
                Documentation{" "}
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="animate-fade-in-up">
                <DropdownMenuItem asChild>
                  <Link href="/documentation" className="hover-glow">
                    Overview
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/documentation/import" className="hover-glow">
                    Import Docs
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/documentation/export" className="hover-glow">
                    Export Docs
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-all duration-300 hover-lift font-medium">
                Resources{" "}
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="animate-fade-in-up">
                <DropdownMenuItem asChild>
                  <Link href="/news" className="hover-glow">
                    News & Insights
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/resources" className="hover-glow">
                    Knowledge Center
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-all duration-300 hover-lift font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button asChild className="gradient-primary hover-glow animate-pulse-glow">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="hover-glow">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-md rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-card-foreground hover:bg-secondary rounded-md hover-lift transition-all duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-card-foreground hover:bg-secondary rounded-md hover-lift transition-all duration-300"
              >
                About
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 text-card-foreground hover:bg-secondary rounded-md hover-lift transition-all duration-300"
              >
                Products
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-card-foreground hover:bg-secondary rounded-md hover-lift transition-all duration-300"
              >
                Services
              </Link>
              <Link
                href="/documentation"
                className="block px-3 py-2 text-card-foreground hover:bg-secondary rounded-md hover-lift transition-all duration-300"
              >
                Documentation
              </Link>
              <Link
                href="/news"
                className="block px-3 py-2 text-card-foreground hover:bg-secondary rounded-md hover-lift transition-all duration-300"
              >
                News
              </Link>
              <Link
                href="/resources"
                className="block px-3 py-2 text-card-foreground hover:bg-secondary rounded-md hover-lift transition-all duration-300"
              >
                Resources
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-card-foreground hover:bg-secondary rounded-md hover-lift transition-all duration-300"
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full gradient-primary hover-glow">
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
