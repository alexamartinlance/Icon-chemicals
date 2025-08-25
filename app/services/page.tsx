import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Ship, Plane, Truck, FileCheck, Globe, Shield } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Import Services",
      description: "Comprehensive import solutions for chemicals and raw materials from global suppliers",
      icon: <Ship className="h-8 w-8" />,
      features: [
        "Supplier sourcing and verification",
        "Quality control and inspection",
        "Customs clearance and documentation",
        "Regulatory compliance management",
      ],
      link: "/services/import",
      image: "/import-services.png",
    },
    {
      title: "Export Services",
      description: "Professional export services to deliver your products to international markets",
      icon: <Plane className="h-8 w-8" />,
      features: [
        "Market research and analysis",
        "Export documentation",
        "International shipping coordination",
        "Trade finance assistance",
      ],
      link: "/services/export",
      image: "/export-services.png",
    },
    {
      title: "Logistics Solutions",
      description: "End-to-end logistics management for efficient chemical transportation",
      icon: <Truck className="h-8 w-8" />,
      features: [
        "Warehousing and storage",
        "Transportation planning",
        "Dangerous goods handling",
        "Supply chain optimization",
      ],
      link: "/services/logistics",
      image: "/logistics-services.png",
    },
  ]

  const additionalServices = [
    {
      title: "Regulatory Compliance",
      description: "Navigate complex international chemical regulations with expert guidance",
      icon: <FileCheck className="h-6 w-6" />,
    },
    {
      title: "Market Intelligence",
      description: "Stay informed with market trends, pricing, and industry insights",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing and certification services for all products",
      icon: <Shield className="h-6 w-6" />,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive chemical trading services designed to streamline your supply chain and expand your global
              reach with confidence and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive suite of services covers every aspect of chemical import, export, and logistics
              management.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                    </div>

                    <div className={`p-8 space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                          {service.icon}
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-card-foreground">{service.title}</h3>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                      <div className="space-y-3">
                        <h4 className="font-medium text-card-foreground">Key Features:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild>
                        <Link href={service.link} className="flex items-center gap-2">
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Additional Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complementary services to support your chemical trading operations and business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to chemical trading that ensures efficiency, quality, and reliability at every
              step.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Understanding your specific requirements and goals" },
              { step: "02", title: "Sourcing", description: "Identifying and verifying the best suppliers globally" },
              { step: "03", title: "Quality Control", description: "Rigorous testing and inspection of all products" },
              { step: "04", title: "Delivery", description: "Efficient logistics and on-time delivery worldwide" },
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-foreground font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Let our experienced team help you navigate the complexities of global chemical trading with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
