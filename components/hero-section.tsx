"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Play, ArrowRight, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/20 pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Content */}
          <div className="lg:col-span-6">
            <Badge variant="secondary" className="mb-4">
              🚀 New: Incident Management 2.0 is here
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              Better monitoring
              <span className="text-primary"> for modern</span>
              <br />
              infrastructure
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Monitor your entire stack, get alerted when things break, and resolve incidents faster with our all-in-one monitoring platform trusted by 1000+ companies.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Start free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Play className="mr-2 h-5 w-5" />
                Watch demo
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                No credit card required
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              {/* Main Dashboard Card */}
              <Card className="p-6 bg-card border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">System Status</h3>
                  <Badge variant="secondary" className="text-green-600 bg-green-100 dark:bg-green-900/20">
                    All systems operational
                  </Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Website</span>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm text-muted-foreground">99.9% uptime</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">API</span>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm text-muted-foreground">100% uptime</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Database</span>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                      <span className="text-sm text-muted-foreground">Degraded performance</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Floating Alert */}
              <Card className="absolute -top-4 -right-4 p-4 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  <div>
                    <p className="text-sm font-medium">High Response Time</p>
                    <p className="text-xs text-muted-foreground">Detected 2 minutes ago</p>
                  </div>
                </div>
              </Card>

              {/* Floating Metric */}
              <Card className="absolute -bottom-4 -left-4 p-4 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <div>
                    <p className="text-sm font-medium">Performance +15%</p>
                    <p className="text-xs text-muted-foreground">vs last week</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}