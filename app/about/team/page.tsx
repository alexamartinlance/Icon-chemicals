import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Users } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  const leadership = [
    {
      name: "Dr. Sarah Chen",
      position: "Chief Executive Officer",
      experience: "20+ years",
      education: "PhD Chemical Engineering, MIT",
      expertise: ["Strategic Leadership", "Global Trade", "Chemical Industry"],
      bio: "Dr. Chen has led IconChemicals' transformation into a global leader, with extensive experience in international chemical markets and sustainable business practices.",
      image: "/placeholder-j6yae.png",
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Operating Officer",
      experience: "18+ years",
      education: "MBA Operations, Wharton",
      expertise: ["Supply Chain", "Operations", "Quality Management"],
      bio: "Michael oversees global operations and supply chain management, ensuring efficient delivery and quality control across all markets.",
      image: "/hispanic-coo.png",
    },
    {
      name: "Dr. Priya Patel",
      position: "Chief Technology Officer",
      experience: "15+ years",
      education: "PhD Chemistry, Oxford",
      expertise: ["Chemical Innovation", "R&D", "Product Development"],
      bio: "Dr. Patel leads our technical team and product development initiatives, driving innovation in chemical solutions and sustainable practices.",
      image: "/indian-woman-scientist.png",
    },
    {
      name: "James Thompson",
      position: "Chief Financial Officer",
      experience: "16+ years",
      education: "CPA, MBA Finance",
      expertise: ["Financial Strategy", "Risk Management", "International Finance"],
      bio: "James manages financial operations and strategic planning, with expertise in international trade finance and risk management.",
      image: "/caucasian-cfo.png",
    },
  ]

  const departments = [
    {
      name: "Sales & Marketing",
      head: "Lisa Wang",
      team_size: 12,
      description: "Driving global sales growth and building strong customer relationships across all markets.",
    },
    {
      name: "Quality Assurance",
      head: "Dr. Ahmed Hassan",
      team_size: 8,
      description: "Ensuring product quality and regulatory compliance across all chemical products and processes.",
    },
    {
      name: "Logistics & Supply Chain",
      head: "Maria Santos",
      team_size: 15,
      description: "Managing global logistics operations and optimizing supply chain efficiency worldwide.",
    },
    {
      name: "Technical Support",
      head: "Robert Kim",
      team_size: 10,
      description: "Providing expert technical guidance and support to clients for optimal product utilization.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Leadership Team</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals who guide IconChemicals' vision and drive our commitment to excellence
              in global chemical trading.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Executive Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in chemical trading, operations, and global
              business management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6 space-y-4">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-card-foreground">{leader.name}</h3>
                        <p className="text-primary font-medium">{leader.position}</p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="secondary">{leader.experience}</Badge>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>

                      <div className="space-y-2">
                        <p className="text-xs font-medium text-card-foreground">Education:</p>
                        <p className="text-xs text-muted-foreground">{leader.education}</p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs font-medium text-card-foreground">Expertise:</p>
                        <div className="flex flex-wrap gap-1">
                          {leader.expertise.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
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

      {/* Department Heads */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Department Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our department heads lead specialized teams that ensure excellence in every aspect of our operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-card-foreground">{dept.name}</h3>
                        <p className="text-sm text-primary">Led by {dept.head}</p>
                        <Badge variant="secondary" className="mt-1">
                          {dept.team_size} team members
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{dept.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold text-foreground">Our Team Culture</h2>
              <p className="text-muted-foreground leading-relaxed">
                At IconChemicals, we believe that our people are our greatest asset. We foster a culture of
                collaboration, innovation, and continuous learning that empowers every team member to contribute to our
                success.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Excellence in everything we do</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Collaborative team environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Continuous learning and development</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/placeholder-t8au6.png"
                alt="IconChemicals team collaboration"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold">Join Our Growing Team</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              We're always looking for talented professionals who share our passion for excellence and innovation in the
              chemical industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Contact HR</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
