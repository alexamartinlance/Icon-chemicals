import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Shield, Globe, Download, CheckCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function DocumentationPage() {
  const documentCategories = [
    {
      title: "Import Documentation",
      description: "Essential documents for importing chemicals into your country",
      icon: <FileText className="h-6 w-6" />,
      documents: [
        "Import License",
        "Certificate of Analysis",
        "Safety Data Sheet (SDS)",
        "Bill of Lading",
        "Commercial Invoice",
        "Packing List",
      ],
      link: "/documentation/import",
    },
    {
      title: "Export Documentation",
      description: "Required paperwork for exporting chemicals internationally",
      icon: <Globe className="h-6 w-6" />,
      documents: [
        "Export License",
        "Certificate of Origin",
        "Dangerous Goods Declaration",
        "Customs Declaration",
        "Insurance Certificate",
        "Quality Certificate",
      ],
      link: "/documentation/export",
    },
    {
      title: "Safety & Compliance",
      description: "Safety documentation and regulatory compliance materials",
      icon: <Shield className="h-6 w-6" />,
      documents: [
        "MSDS/SDS Sheets",
        "UN Classification",
        "REACH Registration",
        "GHS Labeling",
        "Transport Documents",
        "Emergency Procedures",
      ],
      link: "/documentation/safety",
    },
  ]

  const regulations = [
    {
      region: "European Union",
      regulation: "REACH Regulation",
      description: "Registration, Evaluation, Authorization of Chemicals",
      status: "Compliant",
    },
    {
      region: "United States",
      regulation: "TSCA",
      description: "Toxic Substances Control Act",
      status: "Compliant",
    },
    {
      region: "India",
      regulation: "Chemical Accidents Rules",
      description: "Manufacture, Storage and Import of Hazardous Chemicals",
      status: "Compliant",
    },
    {
      region: "International",
      regulation: "UN GHS",
      description: "Globally Harmonized System of Classification",
      status: "Compliant",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Import/Export Documentation</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive documentation and compliance support for international chemical trade. We ensure all
              regulatory requirements are met for smooth customs clearance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Documentation Support</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#download-forms">Download Forms</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Documentation Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete documentation packages for all aspects of chemical import and export operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {documentCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {category.icon}
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{category.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-foreground">Required Documents:</h4>
                    <div className="space-y-1">
                      {category.documents.map((doc, docIndex) => (
                        <div key={docIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-muted-foreground">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={category.link}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Regulatory Compliance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain compliance with all major international chemical regulations and standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {regulations.map((reg, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-card-foreground">{reg.regulation}</h3>
                      <p className="text-sm text-muted-foreground">{reg.region}</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {reg.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{reg.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Document Templates */}
      <section id="download-forms" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Document Templates</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download standardized forms and templates to streamline your documentation process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Import License Application", type: "PDF", size: "245 KB" },
              { name: "Export Declaration Form", type: "PDF", size: "189 KB" },
              { name: "Safety Data Sheet Template", type: "DOC", size: "156 KB" },
              { name: "Certificate of Analysis", type: "PDF", size: "203 KB" },
              { name: "Dangerous Goods Declaration", type: "PDF", size: "298 KB" },
              { name: "Quality Certificate Template", type: "DOC", size: "167 KB" },
            ].map((template, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground text-sm">{template.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {template.type} • {template.size}
                      </p>
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground">Need Documentation Assistance?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our compliance experts are here to help you navigate complex documentation requirements and ensure smooth
              international trade operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Compliance Team</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
