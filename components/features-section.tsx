"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Monitor, 
  Bell, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe, 
  Clock, 
  Users,
  ArrowRight 
} from 'lucide-react'

const features = [
  {
    icon: Monitor,
    title: "Website & API Monitoring",
    description: "Monitor your websites, APIs, and services from 200+ locations worldwide with real-time alerts.",
    badge: "Core"
  },
  {
    icon: Bell,
    title: "Smart Incident Management",
    description: "Automatically create incidents, assign to teams, and track resolution with intelligent escalation.",
    badge: "Popular"
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Get detailed insights into your system performance with custom dashboards and reports.",
    badge: "New"
  },
  {
    icon: Shield,
    title: "Security Monitoring",
    description: "Monitor SSL certificates, domain expiry, and security vulnerabilities across your infrastructure.",
    badge: "Pro"
  },
  {
    icon: Zap,
    title: "Status Pages",
    description: "Keep your customers informed with beautiful, customizable status pages that update automatically.",
    badge: "Core"
  },
  {
    icon: Globe,
    title: "Global Monitoring Network",
    description: "Monitor from 200+ locations across 6 continents for accurate global performance data.",
    badge: "Enterprise"
  },
  {
    icon: Clock,
    title: "Response Time Tracking",
    description: "Track response times, uptime, and performance metrics with detailed historical data.",
    badge: "Core"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Collaborate with your team using shared dashboards, comments, and notification channels.",
    badge: "Popular"
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Features</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need to monitor your stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From uptime monitoring to incident management, we've got all the tools you need to keep your services running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary/80 transition-colors cursor-pointer">
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Platform Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Global Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">Checks Per Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}