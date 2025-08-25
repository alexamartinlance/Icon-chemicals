import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Award, TrendingUp } from "lucide-react"

export default function HistoryPage() {
  const milestones = [
    {
      year: "1998",
      title: "Company Founded",
      description:
        "IconChemicals established as a small chemical trading company with a focus on textile dyes in the local market.",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      year: "2002",
      title: "International Expansion",
      description:
        "Expanded operations to include import services, establishing partnerships with suppliers across Asia and Europe.",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      year: "2005",
      title: "ISO Certification",
      description: "Achieved ISO 9001:2000 certification, demonstrating commitment to quality management systems.",
      icon: <Award className="h-5 w-5" />,
    },
    {
      year: "2008",
      title: "Specialty Chemicals Division",
      description: "Launched specialty chemicals division, expanding product portfolio beyond traditional dyes.",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      year: "2012",
      title: "Global Network Established",
      description:
        "Established offices and partnerships in 25+ countries, creating a truly global supply chain network.",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      year: "2015",
      title: "Environmental Compliance",
      description: "Implemented comprehensive environmental management system and achieved ISO 14001 certification.",
      icon: <Award className="h-5 w-5" />,
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description:
        "Launched digital platform for order management and supply chain tracking, enhancing customer experience.",
      icon: <TrendingUp className="h-5 w-5" />,
    },
    {
      year: "2020",
      title: "Pandemic Resilience",
      description:
        "Maintained uninterrupted supply chains during global pandemic, proving reliability in challenging times.",
      icon: <Award className="h-5 w-5" />,
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description:
        "Launched comprehensive sustainability program, focusing on green chemistry and carbon footprint reduction.",
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Our Journey</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to global leadership - discover how IconChemicals has evolved over 25 years to
              become a trusted name in chemical trading.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative">
                {/* Timeline Line */}
                {index !== milestones.length - 1 && <div className="absolute left-8 top-16 w-0.5 h-16 bg-border"></div>}

                <Card>
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      {/* Year Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">{milestone.year}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                            {milestone.icon}
                          </div>
                          <h3 className="font-serif text-xl font-bold text-foreground">{milestone.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">Building a Legacy of Trust</h2>
              <p className="text-muted-foreground leading-relaxed">
                Over the past 25 years, IconChemicals has grown from a local chemical trader to a global leader in
                chemical import and export. Our journey has been marked by continuous innovation, unwavering commitment
                to quality, and a deep understanding of our clients' needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve over 500 clients across 50+ countries, maintaining the same values that guided us from
                the beginning: integrity, reliability, and excellence in everything we do.
              </p>

              {/* Key Achievements */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="font-serif text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="font-serif text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Satisfied Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/lab-evolution.png"
                alt="IconChemicals evolution from past to present"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-foreground">Looking Forward</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As we continue to grow, our focus remains on innovation, sustainability, and building stronger
              partnerships with our clients worldwide. The future of chemical trading is bright, and IconChemicals is
              leading the way.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">Embracing new technologies and sustainable practices</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">Expansion</h3>
                  <p className="text-sm text-muted-foreground">Growing our global network and market presence</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-card-foreground mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintaining the highest standards of quality and service
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
