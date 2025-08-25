import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Ship, Globe, FileText, Shield, Truck } from "lucide-react"
import Link from "next/link"

export default function ExportServicesPage() {
  const exportServices = [
    {
      title: "Global Shipping",
      description: "Worldwide delivery with multiple shipping options",
      icon: <Ship className="h-6 w-6" />,
      features: ["Sea Freight", "Air Freight", "Express Delivery", "Door-to-Door"],
    },
    {
      title: "Documentation",
      description: "Complete export documentation and compliance",
      icon: <FileText className="h-6 w-6" />,
      features: ["Export Licenses", "Certificates of Origin", "Safety Data Sheets", "Custom Forms"],
    },
    {
      title: "Packaging Solutions",
      description: "Secure packaging for chemical products",
      icon: <Shield className="h-6 w-6" />,
      features: ["UN Certified Packaging", "Hazmat Compliance", "Custom Labeling", "Temperature Control"],
    },
    {
      title: "Logistics Support",
      description: "End-to-end logistics management",
      icon: <Truck className="h-6 w-6" />,
      features: ["Warehouse Storage", "Inventory Management", "Order Tracking", "Insurance Coverage"],
    },
  ]

  const destinations = [
    "United States",
    "European Union",
    "Middle East",
    "Southeast Asia",
    "South America",
    "Africa",
    "Australia",
    "Canada",
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Export Services</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive export solutions connecting your business to global markets with reliable, compliant, and
              efficient chemical product delivery worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Export Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Export Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Our Export Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From documentation to delivery, we handle every aspect of your chemical exports.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {exportServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Global Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We export to major markets worldwide with established logistics networks.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {destinations.map((destination, index) => (
              <Card key={index} className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground">{destination}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Export Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures smooth and compliant exports.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Order Confirmation", desc: "Verify product specifications and quantities" },
              { step: "2", title: "Documentation", desc: "Prepare all required export documents" },
              { step: "3", title: "Packaging & Shipping", desc: "Secure packaging and arrange transport" },
              { step: "4", title: "Delivery & Tracking", desc: "Monitor shipment until final delivery" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
