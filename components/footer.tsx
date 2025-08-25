import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Globe, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our History", href: "/about/history" },
        { name: "Leadership Team", href: "/about/team" },
        { name: "Careers", href: "/careers" },
        { name: "News & Press", href: "/news" },
      ],
    },
    {
      title: "Products & Services",
      links: [
        { name: "Industrial Dyes", href: "/products/dyes" },
        { name: "Specialty Chemicals", href: "/products/chemicals" },
        { name: "Import Services", href: "/services/import" },
        { name: "Export Services", href: "/services/export" },
        { name: "Logistics Solutions", href: "/services/logistics" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/documentation" },
        { name: "Technical Guides", href: "/resources" },
        { name: "Industry Reports", href: "/resources" },
        { name: "Safety Data Sheets", href: "/documentation/safety" },
        { name: "Compliance Center", href: "/documentation" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Technical Support", href: "/contact" },
        { name: "Customer Portal", href: "/portal" },
        { name: "Request Quote", href: "/contact" },
        { name: "Emergency Hotline", href: "/contact" },
      ],
    },
  ]

  const offices = [
    {
      city: "Mumbai",
      country: "India",
      address: "Andheri East, Mumbai 400069",
      phone: "+91 22 2673 4567",
      email: "mumbai@iconchemicals.com",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "International Business Park",
      phone: "+65 6234 5678",
      email: "singapore@iconchemicals.com",
    },
    {
      city: "Dubai",
      country: "UAE",
      address: "Dubai International Financial Centre",
      phone: "+971 4 123 4567",
      email: "dubai@iconchemicals.com",
    },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get the latest chemical industry insights, market trends, and company updates delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Enter your email address" className="flex-1" />
              <Button className="sm:w-auto">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">I</span>
              </div>
              <span className="font-serif font-bold text-xl text-foreground">IconChemicals</span>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Leading global supplier of industrial dyes and specialty chemicals with over 25 years of experience in
              international trade. Committed to quality, safety, and sustainable business practices.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-transparent">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-transparent">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-transparent">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="w-10 h-10 p-0 bg-transparent">
                <Globe className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-serif font-bold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global Offices */}
        <div className="mt-16 pt-8 border-t border-border">
          <h4 className="font-serif font-bold text-foreground mb-6">Global Offices</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground text-sm">
                    {office.city}, {office.country}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm pl-6">{office.address}</p>
                <div className="flex items-center gap-2 pl-6">
                  <Phone className="h-3 w-3 text-primary" />
                  <span className="text-muted-foreground text-sm">{office.phone}</span>
                </div>
                <div className="flex items-center gap-2 pl-6">
                  <Mail className="h-3 w-3 text-primary" />
                  <span className="text-muted-foreground text-sm">{office.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">© {currentYear} IconChemicals. All rights reserved.</div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
