"use client"

import { Separator } from '@/components/ui/separator'
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Mail,
  Monitor
} from 'lucide-react'

const navigation = {
  product: [
    { name: 'Website Monitoring', href: '#' },
    { name: 'API Monitoring', href: '#' },
    { name: 'Incident Management', href: '#' },
    { name: 'Status Pages', href: '#' },
    { name: 'Performance Monitoring', href: '#' },
    { name: 'Security Monitoring', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press Kit', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Status Page', href: '#' },
    { name: 'Changelog', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'GDPR', href: '#' },
    { name: 'Security', href: '#' },
  ],
}

const social = [
  {
    name: 'Twitter',
    href: '#',
    icon: Twitter,
  },
  {
    name: 'GitHub',
    href: '#',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: '#',
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-bold">
                <Monitor className="h-5 w-5" />
              </div>
              <span className="ml-2 text-xl font-bold">BetterStack</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Better monitoring for modern infrastructure. Trusted by 1000+ companies worldwide.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 BetterStack. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="text-xs text-muted-foreground">
              Built with ❤️ for developers
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}