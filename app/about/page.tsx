import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Shield, Users, Award, Factory, Truck } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">About IconChemicals</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Leading the global chemical trade with over 25 years of expertise in dyes and specialty chemicals. Your
              trusted partner for reliable supply chain solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">Connecting Global Markets</h2>
              <p className="text-muted-foreground leading-relaxed">
                IconChemicals has been at the forefront of chemical import and export since 1998. We specialize in
                providing high-quality dyes and specialty chemicals to industries worldwide, maintaining the highest
                standards of quality, safety, and environmental responsibility.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our extensive network spans across 50+ countries, enabling us to source the finest chemicals and deliver
                them efficiently to our clients. We pride ourselves on building long-term partnerships based on trust,
                reliability, and exceptional service.
              </p>
              <Button asChild>
                <Link href="/about/history">Learn Our History</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder-7c21j.png"
                alt="IconChemicals warehouse facility"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-card-foreground">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide superior chemical solutions through reliable import and export services, fostering global
                    trade relationships while maintaining the highest standards of quality, safety, and environmental
                    stewardship.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-card-foreground">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be the world's most trusted chemical trading partner, connecting markets globally while driving
                    innovation and sustainability in the chemical industry for future generations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and interaction at IconChemicals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">Quality First</h3>
              <p className="text-muted-foreground">
                We maintain rigorous quality control standards and work only with certified suppliers to ensure product
                excellence.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">Customer Focus</h3>
              <p className="text-muted-foreground">
                Our clients' success is our priority. We provide personalized service and tailored solutions for every
                business need.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">Global Reach</h3>
              <p className="text-muted-foreground">
                Our extensive international network enables us to serve clients worldwide with local expertise and
                global capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Certifications & Compliance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest industry standards and regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">ISO 9001:2015</h3>
                <p className="text-sm text-muted-foreground">Quality Management System</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">ISO 14001</h3>
                <p className="text-sm text-muted-foreground">Environmental Management</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Factory className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">REACH Compliant</h3>
                <p className="text-sm text-muted-foreground">EU Chemical Regulation</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">IMDG Certified</h3>
                <p className="text-sm text-muted-foreground">Dangerous Goods Transport</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Global Presence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Serving clients across continents with local expertise and global reach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="font-serif text-3xl font-bold text-primary">25+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="space-y-2">
              <div className="font-serif text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="space-y-2">
              <div className="font-serif text-3xl font-bold text-primary">1000+</div>
              <div className="text-muted-foreground">Products Available</div>
            </div>
            <div className="space-y-2">
              <div className="font-serif text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Ready to Partner with Us?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust IconChemicals for their chemical supply needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/about/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
