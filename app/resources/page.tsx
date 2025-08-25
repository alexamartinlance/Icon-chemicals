import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Video, BookOpen, Users, Award } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  const resourceCategories = [
    {
      title: "Technical Guides",
      description: "Comprehensive guides for chemical handling and applications",
      icon: <BookOpen className="h-6 w-6" />,
      count: 12,
      resources: [
        { name: "Chemical Storage Best Practices", type: "PDF", size: "2.4 MB", downloads: 1250 },
        { name: "Dye Application Techniques", type: "PDF", size: "1.8 MB", downloads: 890 },
        { name: "Safety Protocol Handbook", type: "PDF", size: "3.2 MB", downloads: 2100 },
      ],
    },
    {
      title: "Industry Reports",
      description: "Market analysis and industry trend reports",
      icon: <FileText className="h-6 w-6" />,
      count: 8,
      resources: [
        { name: "Global Chemical Market Report 2024", type: "PDF", size: "5.1 MB", downloads: 3200 },
        { name: "Specialty Chemicals Outlook", type: "PDF", size: "2.9 MB", downloads: 1800 },
        { name: "Regulatory Compliance Update", type: "PDF", size: "1.5 MB", downloads: 950 },
      ],
    },
    {
      title: "Training Materials",
      description: "Educational content for chemical industry professionals",
      icon: <Video className="h-6 w-6" />,
      count: 15,
      resources: [
        { name: "Chemical Handling Training Video", type: "MP4", size: "125 MB", downloads: 750 },
        { name: "Quality Control Procedures", type: "PDF", size: "2.1 MB", downloads: 1100 },
        { name: "Emergency Response Guide", type: "PDF", size: "1.7 MB", downloads: 1350 },
      ],
    },
    {
      title: "Webinar Recordings",
      description: "Expert presentations and industry discussions",
      icon: <Users className="h-6 w-6" />,
      count: 6,
      resources: [
        { name: "Future of Chemical Manufacturing", type: "MP4", size: "89 MB", downloads: 420 },
        { name: "Sustainable Chemistry Practices", type: "MP4", size: "76 MB", downloads: 380 },
        { name: "Digital Supply Chain Solutions", type: "MP4", size: "92 MB", downloads: 310 },
      ],
    },
  ]

  const featuredResources = [
    {
      title: "Complete Guide to Chemical Import/Export",
      description: "Comprehensive 50-page guide covering all aspects of international chemical trade",
      type: "Whitepaper",
      pages: 50,
      downloads: 5200,
      featured: true,
    },
    {
      title: "Chemical Safety Data Sheet Templates",
      description: "Standardized SDS templates compliant with GHS regulations",
      type: "Template Pack",
      pages: 25,
      downloads: 3800,
      featured: true,
    },
    {
      title: "Quality Control Checklist for Chemical Imports",
      description: "Step-by-step checklist ensuring quality compliance",
      type: "Checklist",
      pages: 8,
      downloads: 2900,
      featured: true,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Resources & Knowledge Center</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive library of technical guides, industry reports, training materials, and expert
              insights to enhance your chemical business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Featured Resources</h2>
            <p className="text-muted-foreground">Most popular downloads from our knowledge library</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-primary/10 text-primary border-primary/20">Featured</Badge>
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{resource.description}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground">{resource.type}</span>
                      <span className="text-muted-foreground">{resource.pages} pages</span>
                    </div>
                    <span className="text-primary font-medium">{resource.downloads.toLocaleString()} downloads</span>
                  </div>

                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Free
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Browse by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our organized collection of resources tailored for chemical industry professionals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      {category.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        {category.title}
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{category.description}</p>

                  <div className="space-y-3">
                    {category.resources.map((resource, resourceIndex) => (
                      <div key={resourceIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground text-sm">{resource.name}</h4>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                            <span>{resource.type}</span>
                            <span>{resource.size}</span>
                            <span>{resource.downloads.toLocaleString()} downloads</span>
                          </div>
                        </div>
                        <Button size="sm" variant="ghost">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    View All {category.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Hub CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground">Need Custom Resources?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our technical experts can create customized guides, training materials, and documentation specific to
                  your business requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">Request Custom Content</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/services">Consulting Services</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
