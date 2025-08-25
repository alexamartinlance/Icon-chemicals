import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Palette, Droplets, Shirt, FileText } from "lucide-react"
import Link from "next/link"

export default function DyesPage() {
  const dyeTypes = [
    {
      name: "Reactive Dyes",
      description: "High-performance dyes that form covalent bonds with fiber molecules",
      applications: ["Cotton", "Viscose", "Linen", "Wool"],
      features: ["Excellent fastness", "Bright colors", "Easy application", "Eco-friendly options"],
      colors: ["Red", "Blue", "Yellow", "Black", "Green", "Orange"],
      image: "/reactive-dyes.png",
    },
    {
      name: "Acid Dyes",
      description: "Water-soluble dyes ideal for protein fibers and synthetic materials",
      applications: ["Wool", "Silk", "Nylon", "Leather"],
      features: ["Superior color depth", "Good light fastness", "Wide color range", "Easy processing"],
      colors: ["Crimson", "Navy", "Golden", "Violet", "Emerald", "Scarlet"],
      image: "/acid-dyes.png",
    },
    {
      name: "Direct Dyes",
      description: "Cost-effective dyes for cellulosic fibers with good color yield",
      applications: ["Cotton", "Viscose", "Paper", "Leather"],
      features: ["Economic solution", "Good penetration", "Simple application", "Wide compatibility"],
      colors: ["Maroon", "Turquoise", "Brown", "Pink", "Purple", "Olive"],
      image: "/direct-dyes.png",
    },
    {
      name: "Disperse Dyes",
      description: "Specialized dyes for synthetic fibers and high-temperature applications",
      applications: ["Polyester", "Acetate", "Acrylic", "Synthetic blends"],
      features: ["Heat resistance", "Sublimation fastness", "Vibrant shades", "Uniform dyeing"],
      colors: ["Magenta", "Cyan", "Amber", "Indigo", "Coral", "Teal"],
      image: "/disperse-dyes.png",
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
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Industrial Dyes</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Premium quality dyes for textile, leather, paper, and industrial applications. Our comprehensive range
                ensures perfect color matching and superior performance for every project.
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
                src="/colorful-dye-powders.png"
                alt="Colorful industrial dye powders"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dye Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Dye Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of industrial dyes, each formulated for specific applications and
              performance requirements.
            </p>
          </div>

          <Tabs defaultValue="reactive" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="reactive">Reactive</TabsTrigger>
              <TabsTrigger value="acid">Acid</TabsTrigger>
              <TabsTrigger value="direct">Direct</TabsTrigger>
              <TabsTrigger value="disperse">Disperse</TabsTrigger>
            </TabsList>

            {dyeTypes.map((dye, index) => (
              <TabsContent key={index} value={dye.name.toLowerCase().split(" ")[0]} className="mt-8">
                <Card>
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <Palette className="h-8 w-8 text-primary" />
                          <h3 className="font-serif text-2xl font-bold text-card-foreground">{dye.name}</h3>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">{dye.description}</p>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-card-foreground mb-2 flex items-center gap-2">
                              <Shirt className="h-4 w-4" />
                              Applications:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {dye.applications.map((app, appIndex) => (
                                <Badge key={appIndex} variant="secondary">
                                  {app}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-card-foreground mb-2 flex items-center gap-2">
                              <Droplets className="h-4 w-4" />
                              Key Features:
                            </h4>
                            <ul className="space-y-1">
                              {dye.features.map((feature, featureIndex) => (
                                <li
                                  key={featureIndex}
                                  className="text-sm text-muted-foreground flex items-center gap-2"
                                >
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium text-card-foreground mb-2">Available Colors:</h4>
                            <div className="flex flex-wrap gap-2">
                              {dye.colors.map((color, colorIndex) => (
                                <Badge key={colorIndex} variant="outline" className="text-xs">
                                  {color}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <Button asChild>
                          <Link href="/contact">Request Information</Link>
                        </Button>
                      </div>

                      <div className="relative">
                        <img
                          src={dye.image || "/placeholder.svg"}
                          alt={dye.name}
                          className="rounded-lg shadow-lg w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Technical Support</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our technical team provides comprehensive support to ensure optimal results with our dye products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Technical Data Sheets</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed specifications, application guidelines, and safety information for every product.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Droplets className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Color Matching</h3>
                <p className="text-sm text-muted-foreground">
                  Professional color matching services to achieve your exact shade requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Application Support</h3>
                <p className="text-sm text-muted-foreground">
                  Expert guidance on dyeing processes, troubleshooting, and optimization techniques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
