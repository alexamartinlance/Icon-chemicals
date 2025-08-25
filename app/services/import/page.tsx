import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ship, FileCheck, Globe, Shield, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function ImportServicesPage() {
  const importSteps = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "We analyze your specific chemical requirements, quality standards, and delivery timelines.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      step: "02",
      title: "Supplier Identification",
      description: "Our global network helps identify certified suppliers who meet your exact specifications.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      step: "03",
      title: "Quality Verification",
      description: "Rigorous quality control and testing ensure products meet international standards.",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      step: "04",
      title: "Documentation & Compliance",
      description: "Complete handling of import documentation, permits, and regulatory compliance.",
      icon: <FileCheck className="h-6 w-6" />,
    },
    {
      step: "05",
      title: "Logistics Coordination",
      description: "Efficient shipping, customs clearance, and delivery to your specified location.",
      icon: <Ship className="h-6 w-6" />,
    },
    {
      step: "06",
      title: "Delivery & Support",
      description: "On-time delivery with ongoing technical support and after-sales service.",
      icon: <Clock className="h-6 w-6" />,
    },
  ]

  const benefits = [
    {
      title: "Cost Optimization",
      description: "Competitive pricing through our established supplier relationships and bulk purchasing power.",
      icon: <Globe className="h-8 w-8" />,
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive quality control processes ensure consistent product quality and compliance.",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Regulatory Expertise",
      description: "Navigate complex import regulations with our experienced compliance team.",
      icon: <FileCheck className="h-8 w-8" />,
    },
    {
      title: "Reliable Supply Chain",
      description: "Established logistics network ensures timely delivery and supply chain continuity.",
      icon: <Ship className="h-8 w-8" />,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Import Services</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Streamline your chemical imports with our comprehensive services. From supplier sourcing to final
                delivery, we handle every aspect of the import process with expertise and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Import Process</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/import-process.png" alt="Chemical import process" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Import Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Our Import Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to chemical imports that ensures quality, compliance, and timely delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {importSteps.map((step, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="text-primary">{step.icon}</div>
                        <h3 className="font-serif text-lg font-bold text-card-foreground">{step.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Why Choose Our Import Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leverage our expertise and global network to optimize your chemical import operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-xl font-bold text-card-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Compliance & Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We ensure full compliance with international regulations and maintain the highest industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "ISO 9001:2015", description: "Quality Management" },
              { name: "REACH Compliant", description: "EU Chemical Regulation" },
              { name: "IMDG Certified", description: "Dangerous Goods Transport" },
              { name: "AEO Certified", description: "Authorized Economic Operator" },
            ].map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our import services cater to diverse industries with specialized chemical requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Textile & Apparel",
              "Pharmaceuticals",
              "Cosmetics & Personal Care",
              "Paints & Coatings",
              "Plastics & Polymers",
              "Food & Beverages",
              "Electronics",
              "Automotive",
              "Construction",
              "Agriculture",
              "Paper & Pulp",
              "Leather Processing",
            ].map((industry, index) => (
              <Badge key={index} variant="secondary" className="p-3 text-center justify-center">
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-foreground">Ready to Import?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let our import specialists help you source the chemicals you need with confidence and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Import Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services/export">Explore Export Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
