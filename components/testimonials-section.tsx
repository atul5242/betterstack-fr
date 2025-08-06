"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    content: "BetterStack has transformed how we handle monitoring and incidents. The alerting system is incredibly smart and has reduced our false positives by 90%.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "DevOps Engineer", 
    company: "CloudScale",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    content: "The incident management features are outstanding. We've cut our MTTR in half since switching to BetterStack. The team collaboration tools are a game-changer.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Engineering Manager",
    company: "DataStream",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    content: "The status pages are beautiful and our customers love the transparency. The automatic updates from monitoring save us hours every week.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Site Reliability Engineer",
    company: "FinanceApp",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    content: "Global monitoring from 200+ locations gives us confidence in our performance data. The insights have helped us optimize our infrastructure significantly.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "VP of Engineering",
    company: "E-commerce Plus",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    content: "BetterStack's reliability and ease of use impressed our entire team. The onboarding was smooth and we were up and running in minutes.",
    rating: 5
  },
  {
    name: "James Parker",
    role: "Lead Developer",
    company: "StartupCore",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    content: "The free tier is perfect for our startup, and knowing we can scale seamlessly as we grow gives us peace of mind. Great product and great pricing.",
    rating: 5
  }
]

const companies = [
  { name: "TechFlow", logo: "TF" },
  { name: "CloudScale", logo: "CS" },
  { name: "DataStream", logo: "DS" },
  { name: "FinanceApp", logo: "FA" },
  { name: "E-commerce Plus", logo: "E+" },
  { name: "StartupCore", logo: "SC" },
  { name: "DevTools", logo: "DT" },
  { name: "WebSolutions", logo: "WS" }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Loved by developers worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join 1000+ companies that trust BetterStack to monitor their infrastructure and manage incidents.
          </p>
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by teams at leading companies
          </p>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-sm font-bold text-muted-foreground">
                  {company.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-sm">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Ready to join these happy customers?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Start monitoring your infrastructure today with our 14-day free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-md font-medium">
              Start free trial
            </button>
            <button className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-2 rounded-md font-medium">
              Contact sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}