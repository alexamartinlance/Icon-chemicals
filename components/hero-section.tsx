import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Shield, Truck } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/industrial-chemical-plant.png')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 animate-gradient-shift"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
                <span className="text-foreground">Global Chemical</span>
                <span className="text-gradient-primary block animate-float">Import & Export</span>
                <span className="text-foreground">Solutions</span>
              </h1>
              <p
                className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                IconChemicals is your trusted partner for premium dyes and specialty chemicals. We deliver reliable
                supply chain solutions with global reach and local expertise.
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground hover-lift transition-all duration-300">
                <Globe className="h-5 w-5 text-primary animate-pulse-glow" />
                Global Network
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground hover-lift transition-all duration-300">
                <Shield className="h-5 w-5 text-primary animate-pulse-glow" />
                Quality Assured
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground hover-lift transition-all duration-300">
                <Truck className="h-5 w-5 text-primary animate-pulse-glow" />
                Fast Delivery
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <Button size="lg" asChild className="gradient-primary hover-glow animate-pulse-glow">
                <Link href="/products" className="flex items-center gap-2">
                  Explore Products
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover-lift border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="text-center hover-lift transition-all duration-300">
                <div className="font-serif text-2xl font-bold text-gradient-primary animate-pulse-glow">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center hover-lift transition-all duration-300">
                <div className="font-serif text-2xl font-bold text-gradient-primary animate-pulse-glow">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center hover-lift transition-all duration-300">
                <div className="font-serif text-2xl font-bold text-gradient-primary animate-pulse-glow">1000+</div>
                <div className="text-sm text-muted-foreground">Products Available</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/20 hover-glow animate-float">
              <img
                src="/modern-chemical-lab.png"
                alt="Chemical laboratory with colorful dyes and modern equipment"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Cards */}
            <div
              className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg hover-lift animate-float"
              style={{ animationDelay: "1s" }}
            >
              <div className="text-sm font-medium text-card-foreground">Quality Certified</div>
              <div className="text-xs text-muted-foreground">ISO 9001:2015</div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg hover-lift animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="text-sm font-medium text-card-foreground">24/7 Support</div>
              <div className="text-xs text-muted-foreground">Global Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
