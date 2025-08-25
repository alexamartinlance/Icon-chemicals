import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Beaker, Palette, Factory, Droplets } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  const productCategories = [
    {
      title: "Industrial Dyes",
      description: "High-quality dyes for textile, leather, paper, and industrial applications",
      icon: <Palette className="h-8 w-8" />,
      products: ["Reactive Dyes", "Acid Dyes", "Direct Dyes", "Disperse Dyes"],
      applications: ["Textile Industry", "Leather Processing", "Paper Manufacturing"],
      link: "/products/dyes",
      image: "/industrial-dyes.png",
    },
    {
      title: "Specialty Chemicals",
      description: "Advanced chemical solutions for diverse industrial processes",
      icon: <Beaker className="h-8 w-8" />,
      products: ["Catalysts", "Surfactants", "Polymers", "Additives"],
      applications: ["Manufacturing", "Pharmaceuticals", "Cosmetics"],
      link: "/products/chemicals",
      image: "/specialty-chemicals.png",
    },
    {
      title: "Process Chemicals",
      description: "Essential chemicals for manufacturing and industrial processes",
      icon: <Factory className="h-8 w-8" />,
      products: ["Solvents", "Acids", "Bases", "Salts"],
      applications: ["Chemical Processing", "Metal Treatment", "Water Treatment"],
      link: "/products/catalog",
      image: "/process-chemicals.png",
    },
    {
      title: "Fine Chemicals",
      description: "High-purity chemicals for specialized applications",
      icon: <Droplets className="h-8 w-8" />,
      products: ["Intermediates", "APIs", "Research Chemicals", "Custom Synthesis"],
      applications: ["Pharmaceuticals", "Research", "Electronics"],
      link: "/products/catalog",
      image: "/fine-chemicals.png",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Our Products</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of high-quality dyes and specialty chemicals, sourced from trusted
              manufacturers worldwide and delivered with excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-2">
                        {category.icon}
                      </div>
                      <h3 className="font-serif text-xl font-bold">{category.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-muted-foreground">{category.description}</p>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-sm text-foreground mb-2">Key Products:</h4>
                        <div className="flex flex-wrap gap-1">
                          {category.products.map((product, productIndex) => (
                            <Badge key={productIndex} variant="secondary" className="text-xs">
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm text-foreground mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {category.applications.map((app, appIndex) => (
                            <Badge key={appIndex} variant="outline" className="text-xs">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link href={category.link} className="flex items-center justify-center gap-2">
                        Explore {category.title}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Quality Assurance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every product in our portfolio meets the highest international standards for quality, purity, and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beaker className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-card-foreground mb-2">Laboratory Tested</h3>
                <p className="text-sm text-muted-foreground">
                  All products undergo rigorous testing in certified laboratories to ensure quality and consistency.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-card-foreground mb-2">Certified Suppliers</h3>
                <p className="text-sm text-muted-foreground">
                  We partner only with ISO-certified manufacturers who meet our strict quality standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-card-foreground mb-2">Purity Guaranteed</h3>
                <p className="text-sm text-muted-foreground">
                  Each batch comes with detailed certificates of analysis and purity guarantees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-foreground">Need Custom Solutions?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our technical team can help you find the perfect chemical solution for your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Request Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/products/catalog">View Full Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
