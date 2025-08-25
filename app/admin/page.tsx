"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Edit, Save, Plus, Trash2, Eye, Settings } from "lucide-react"

export default function AdminDashboard() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Settings className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-gradient-primary">IconChemicals Admin</h1>
                <p className="text-sm text-muted-foreground">Content Management System</p>
              </div>
            </div>
            <Badge variant="secondary" className="animate-pulse-glow">
              Admin Panel
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content" className="hover-lift">
              Content Management
            </TabsTrigger>
            <TabsTrigger value="products" className="hover-lift">
              Products
            </TabsTrigger>
            <TabsTrigger value="news" className="hover-lift">
              News & Updates
            </TabsTrigger>
            <TabsTrigger value="settings" className="hover-lift">
              Site Settings
            </TabsTrigger>
          </TabsList>

          {/* Content Management */}
          <TabsContent value="content" className="space-y-6">
            <Card className="hover-glow animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Edit className="h-5 w-5" />
                  Page Content Editor
                </CardTitle>
                <CardDescription>Edit homepage content, hero section, and company information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hero-title">Hero Title</Label>
                    <Input
                      id="hero-title"
                      defaultValue="Global Chemical Import & Export Solutions"
                      className="hover-glow"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-subtitle">Hero Subtitle</Label>
                    <Input
                      id="hero-subtitle"
                      defaultValue="Premium dyes and specialty chemicals"
                      className="hover-glow"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-description">Hero Description</Label>
                  <Textarea
                    id="hero-description"
                    defaultValue="IconChemicals is your trusted partner for premium dyes and specialty chemicals. We deliver reliable supply chain solutions with global reach and local expertise."
                    className="hover-glow"
                  />
                </div>
                <Button className="gradient-primary hover-glow">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Products Management */}
          <TabsContent value="products" className="space-y-6">
            <Card className="hover-glow animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Product Management
                </CardTitle>
                <CardDescription>Add, edit, and manage chemical products and dyes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Button className="gradient-primary hover-glow">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Product
                  </Button>
                  <Button variant="outline" className="hover-lift bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    View All Products
                  </Button>
                </div>

                {/* Sample Product List */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg hover-lift">
                    <div>
                      <h4 className="font-medium">Reactive Red 195</h4>
                      <p className="text-sm text-muted-foreground">Industrial Dye - High Quality</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="hover-glow bg-transparent">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="hover-glow bg-transparent">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg hover-lift">
                    <div>
                      <h4 className="font-medium">Sodium Hydroxide</h4>
                      <p className="text-sm text-muted-foreground">Specialty Chemical - Industrial Grade</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="hover-glow bg-transparent">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="hover-glow bg-transparent">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* News Management */}
          <TabsContent value="news" className="space-y-6">
            <Card className="hover-glow animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Edit className="h-5 w-5" />
                  News & Updates
                </CardTitle>
                <CardDescription>Manage company news, industry insights, and announcements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="news-title">Article Title</Label>
                    <Input id="news-title" placeholder="Enter news article title" className="hover-glow" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="news-category">Category</Label>
                    <Input
                      id="news-category"
                      placeholder="Industry News, Company Update, etc."
                      className="hover-glow"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="news-content">Article Content</Label>
                  <Textarea
                    id="news-content"
                    placeholder="Write your news article content here..."
                    rows={6}
                    className="hover-glow"
                  />
                </div>
                <Button className="gradient-primary hover-glow">
                  <Save className="h-4 w-4 mr-2" />
                  Publish Article
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Site Settings */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="hover-glow animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Site Configuration
                </CardTitle>
                <CardDescription>Manage global site settings and configurations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="site-title">Site Title</Label>
                    <Input
                      id="site-title"
                      defaultValue="IconChemicals - Chemical Import Export"
                      className="hover-glow"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Contact Email</Label>
                    <Input id="contact-email" defaultValue="info@iconchemicals.com" className="hover-glow" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-address">Company Address</Label>
                  <Textarea
                    id="company-address"
                    defaultValue="123 Chemical Industry Boulevard, Industrial District, Global City 12345"
                    className="hover-glow"
                  />
                </div>
                <Button className="gradient-primary hover-glow">
                  <Save className="h-4 w-4 mr-2" />
                  Update Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
