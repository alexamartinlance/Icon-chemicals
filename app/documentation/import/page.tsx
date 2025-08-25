import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ImportDocumentationPage() {
  const importSteps = [
    {
      step: "1",
      title: "Pre-Import Registration",
      description: "Register with relevant authorities and obtain necessary permits",
      documents: ["Import License", "Company Registration", "Tax Registration"],
      timeframe: "2-4 weeks",
      status: "Required",
    },
    {
      step: "2",
      title: "Product Documentation",
      description: "Gather all product-specific documentation from supplier",
      documents: ["Certificate of Analysis", "Safety Data Sheet", "Product Specifications"],
      timeframe: "1-2 weeks",
      status: "Critical",
    },
    {
      step: "3",
      title: "Shipping Documentation",
      description: "Prepare shipping and customs documentation",
      documents: ["Bill of Lading", "Commercial Invoice", "Packing List"],
      timeframe: "3-5 days",
      status: "Required",
    },
    {
      step: "4",
      title: "Customs Clearance",
      description: "Submit documentation for customs clearance",
      documents: ["Customs Declaration", "Import Permit", "Insurance Certificate"],
      timeframe: "1-3 days",
      status: "Final",
    },
  ]

  const criticalDocuments = [
    {
      name: "Import License",
      description: "Government-issued permit to import specific chemicals",
      validity: "1-3 years",
      authority: "Ministry of Commerce",
      required: true,
    },
    {
      name: "Safety Data Sheet (SDS)",
      description: "Comprehensive safety information for chemical handling",
      validity: "Updated as needed",
      authority: "Manufacturer/Supplier",
      required: true,
    },
    {
      name: "Certificate of Analysis",
      description: "Laboratory test results confirming product quality",
      validity: "Per batch",
      authority: "Certified Laboratory",
      required: true,
    },
    {
      name: "Environmental Clearance",
      description: "Permit for environmentally sensitive chemicals",
      validity: "2-5 years",
      authority: "Environmental Ministry",
      required: false,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Import Documentation</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete guide to chemical import documentation requirements, procedures, and compliance standards for
              successful international trade operations.
            </p>
          </div>
        </div>
      </section>

      {/* Import Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Import Process Overview</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow these essential steps to ensure compliant chemical imports.
            </p>
          </div>

          <div className="space-y-8">
            {importSteps.map((step, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/4 bg-primary/5 p-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white font-bold text-xl">{step.step}</span>
                        </div>
                        <Badge variant={step.status === "Critical" ? "destructive" : "secondary"} className="text-xs">
                          {step.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="lg:w-3/4 p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="font-serif text-xl font-bold text-card-foreground mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-3 lg:mt-0">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">{step.timeframe}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm text-foreground mb-2">Required Documents:</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.documents.map((doc, docIndex) => (
                            <Badge key={docIndex} variant="outline" className="text-xs">
                              {doc}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Documents */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Critical Documents</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essential documentation required for chemical imports with validity periods and issuing authorities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {criticalDocuments.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        {doc.required ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-yellow-600" />
                        )}
                      </div>
                      {doc.name}
                    </div>
                    <Badge variant={doc.required ? "default" : "secondary"} className="text-xs">
                      {doc.required ? "Required" : "Optional"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">{doc.description}</p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-foreground">Validity:</span>
                      <p className="text-muted-foreground">{doc.validity}</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Issued by:</span>
                      <p className="text-muted-foreground">{doc.authority}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-foreground">Need Import Documentation Support?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our experienced team can guide you through the entire import documentation process and ensure compliance
              with all regulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Expert Help</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/documentation/export">Export Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
