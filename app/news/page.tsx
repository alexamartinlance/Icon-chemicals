import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function NewsPage() {
  const featuredNews = {
    title: "Global Chemical Market Outlook 2024: Opportunities in Specialty Chemicals",
    excerpt:
      "Industry analysis reveals significant growth potential in specialty chemicals sector, driven by sustainable manufacturing and digital transformation initiatives.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Market Analysis",
    image: "/news-featured.png",
    slug: "global-chemical-market-outlook-2024",
  }

  const newsArticles = [
    {
      title: "New EU REACH Regulations: What Chemical Importers Need to Know",
      excerpt:
        "Updated REACH compliance requirements for 2024 and their impact on chemical import operations across European markets.",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Regulatory",
      image: "/news-reach.png",
      slug: "eu-reach-regulations-2024",
    },
    {
      title: "Sustainable Dyes: The Future of Textile Industry",
      excerpt:
        "Exploring eco-friendly dye alternatives and their growing adoption in sustainable textile manufacturing processes.",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Sustainability",
      image: "/news-sustainable-dyes.png",
      slug: "sustainable-dyes-textile-future",
    },
    {
      title: "IconChemicals Expands Operations to Southeast Asia",
      excerpt:
        "Strategic expansion into Vietnam and Thailand markets strengthens our regional presence and supply chain capabilities.",
      date: "2024-01-08",
      readTime: "4 min read",
      category: "Company News",
      image: "/news-expansion.png",
      slug: "iconchemicals-southeast-asia-expansion",
    },
    {
      title: "Digital Transformation in Chemical Supply Chain Management",
      excerpt:
        "How IoT, AI, and blockchain technologies are revolutionizing chemical logistics and inventory management systems.",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Technology",
      image: "/news-digital.png",
      slug: "digital-transformation-chemical-supply-chain",
    },
    {
      title: "Safety First: New Chemical Handling Protocols for 2024",
      excerpt:
        "Updated safety guidelines and best practices for handling hazardous chemicals in industrial environments.",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Safety",
      image: "/news-safety.png",
      slug: "chemical-handling-protocols-2024",
    },
    {
      title: "Market Trends: Rising Demand for Fine Chemicals in Pharmaceuticals",
      excerpt:
        "Analysis of growing pharmaceutical sector driving increased demand for high-purity fine chemicals and intermediates.",
      date: "2023-12-28",
      readTime: "5 min read",
      category: "Market Analysis",
      image: "/news-pharma.png",
      slug: "fine-chemicals-pharmaceutical-demand",
    },
  ]

  const categories = [
    { name: "All", count: 24, active: true },
    { name: "Market Analysis", count: 8, active: false },
    { name: "Regulatory", count: 6, active: false },
    { name: "Company News", count: 4, active: false },
    { name: "Technology", count: 3, active: false },
    { name: "Safety", count: 2, active: false },
    { name: "Sustainability", count: 1, active: false },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Industry News & Insights</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest developments in the chemical industry, regulatory updates, and market trends
              that impact your business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Featured Story</h2>
            <div className="w-16 h-1 bg-primary"></div>
          </div>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredNews.image || "/placeholder.svg"}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">{featuredNews.category}</Badge>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredNews.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredNews.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-card-foreground leading-tight">
                    {featuredNews.title}
                  </h3>

                  <p className="text-muted-foreground">{featuredNews.excerpt}</p>

                  <Button asChild>
                    <Link href={`/news/${featuredNews.slug}`} className="flex items-center gap-2">
                      Read Full Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories and Articles */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category.active ? "default" : "outline"}
                  size="sm"
                  className="flex items-center gap-2"
                >
                  {category.name}
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-card-foreground leading-tight line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>

                    <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                      <Link href={`/news/${article.slug}`} className="flex items-center gap-1 text-primary">
                        Read More
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground">Stay Updated</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Subscribe to our newsletter and get the latest chemical industry insights, market trends, and company
                  updates delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                  />
                  <Button>Subscribe</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
