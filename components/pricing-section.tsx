"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for side projects and small websites",
    features: [
      "10 monitors",
      "1-minute check frequency",
      "30-day data retention",
      "Email notifications",
      "Basic status page",
      "Community support"
    ],
    cta: "Start for free",
    popular: false
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Great for growing teams and businesses",
    features: [
      "100 monitors",
      "30-second check frequency",
      "1-year data retention",
      "SMS & email notifications",
      "Custom status pages",
      "Incident management",
      "API access",
      "Priority support"
    ],
    cta: "Start free trial",
    popular: true
  },
  {
    name: "Team",
    price: "$79",
    period: "per month",
    description: "For teams that need advanced features",
    features: [
      "500 monitors",
      "10-second check frequency",
      "3-year data retention",
      "All notification channels",
      "Advanced status pages",
      "Full incident management",
      "Team collaboration",
      "Custom integrations",
      "White-label options",
      "24/7 phone support"
    ],
    cta: "Start free trial",
    popular: false
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited monitors",
      "1-second check frequency",
      "Unlimited data retention",
      "All features included",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "On-premises deployment",
      "Advanced security features",
      "Custom training"
    ],
    cta: "Contact sales",
    popular: false
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Pricing</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start monitoring for free. Upgrade as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent>
                <Button 
                  className={`w-full mb-6 ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              99.9% SLA guarantee
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              Cancel anytime
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              24/7 support
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}