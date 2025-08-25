import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Beaker, Shield, Zap, Award } from "lucide-react"
import Link from "next/link"

export default function ChemicalsPage() {
  const chemicalCategories = [
    {
      name: "Catalysts",
      description: "High-performance catalysts for industrial processes",
      applications: ["Petrochemical", "Pharmaceutical", "Fine Chemical"],
      purity: "99.5%+",
      packaging: "1kg, 5kg, 25kg",
    },
    {
      name: "Surfactants",
      description: "Surface-active agents for various applications",
      applications: ["Detergents", "Cosmetics", "Industrial Cleaning"],
      purity: "98%+",
      packaging: "25kg, 200kg, IBC",
    },
    {
      name: "Polymers",
      description: "Specialty polymers for advanced applications",
      applications: ["Coatings", "Adhesives", "Electronics"],
      purity: "99%+",
      packaging: "25kg bags, bulk",
    },
    {
      name: "Additives",
      description: "Performance-enhancing chemical additives",
      applications: ["Plastics", "Rubber", "Paints"],
      purity: "97%+",
      packaging: "1kg, 25kg",
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
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Specialty Chemicals</h1>
              <p className="text-lg text-muted-foreground">
                Advanced chemical solutions engineered for precision and performance across diverse industrial
                applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Request Samples</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/products/catalog">View Catalog</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/specialty-chemicals.png"
                alt="Specialty Chemicals"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chemical Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Our Chemical Portfolio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of specialty chemicals sourced from leading global manufacturers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {chemicalCategories.map((chemical, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Beaker className="h-5 w-5 text-primary" />
                    </div>
                    {chemical.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{chemical.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-foreground">Purity:</span>
                      <p className="text-muted-foreground">{chemical.purity}</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Packaging:</span>
                      <p className="text-muted-foreground">{chemical.packaging}</p>
                    </div>
                  </div>

                  <div>
                    <span className="font-medium text-foreground text-sm">Applications:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {chemical.applications.map((app, appIndex) => (
                        <Badge key={appIndex} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold text-card-foreground mb-2">Safety First</h3>
              <p className="text-sm text-muted-foreground">
                All chemicals handled with strict safety protocols and proper documentation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold text-card-foreground mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Efficient logistics network ensuring timely delivery worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold text-card-foreground mb-2">Quality Assured</h3>
              <p className="text-sm text-muted-foreground">
                Every batch tested and certified for purity and performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Beaker className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold text-card-foreground mb-2">Technical Support</h3>
              <p className="text-sm text-muted-foreground">
                Expert technical assistance for optimal product selection and usage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
