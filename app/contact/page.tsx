import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Globe, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const offices = [
    {
      city: "Mumbai",
      country: "India",
      address: "IconChemicals Building, Andheri East, Mumbai 400069, India",
      phone: "+91 22 2673 4567",
      email: "mumbai@iconchemicals.com",
      type: "Headquarters",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "25 International Business Park, Singapore 609916",
      phone: "+65 6234 5678",
      email: "singapore@iconchemicals.com",
      type: "Regional Office",
    },
    {
      city: "Dubai",
      country: "UAE",
      address: "Dubai International Financial Centre, Dubai, UAE",
      phone: "+971 4 123 4567",
      email: "dubai@iconchemicals.com",
      type: "Regional Office",
    },
    {
      city: "Hamburg",
      country: "Germany",
      address: "Speicherstadt, 20457 Hamburg, Germany",
      phone: "+49 40 123 4567",
      email: "hamburg@iconchemicals.com",
      type: "European Office",
    },
  ]

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+91 22 2673 4567",
      availability: "Mon-Fri, 9:00 AM - 6:00 PM IST",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Get detailed responses to your queries",
      contact: "info@iconchemicals.com",
      availability: "24/7 - Response within 24 hours",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Technical Support",
      description: "Expert guidance on product selection",
      contact: "technical@iconchemicals.com",
      availability: "Mon-Fri, 10:00 AM - 5:00 PM IST",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss your chemical requirements? Our global team of experts is here to help you find the
              perfect solutions for your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {method.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-card-foreground mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <p className="font-medium text-primary mb-1">{method.contact}</p>
                  <p className="text-xs text-muted-foreground">{method.availability}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your Company Ltd." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quote">Request Quote</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="general">General Information</SelectItem>
                      <SelectItem value="complaint">Complaint/Issue</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your requirements or inquiry in detail..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button className="w-full" size="lg">
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Quick Response</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Response Time</h4>
                      <p className="text-sm text-muted-foreground">
                        We typically respond to all inquiries within 24 hours during business days.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Global Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Our team operates across multiple time zones to serve you better.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Expert Consultation</h4>
                      <p className="text-sm text-muted-foreground">
                        Get personalized recommendations from our chemical experts.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">For urgent matters outside business hours:</p>
                  <div className="space-y-2">
                    <p className="font-medium text-foreground">Emergency Hotline</p>
                    <p className="text-primary font-medium">+91 98765 43210</p>
                    <p className="text-xs text-muted-foreground">Available 24/7 for critical issues</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground">Our Global Offices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With offices across major business hubs, we're always close to our clients worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">{office.type}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-card-foreground mb-1">
                    {office.city}, {office.country}
                  </h3>

                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">{office.address}</p>

                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{office.phone}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{office.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
