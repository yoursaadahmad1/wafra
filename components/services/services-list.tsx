'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Server, Cloud, Database, Shield, Globe, Zap, Lock, Headphones } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Server,
    title: 'Shared Web Hosting',
    description: 'Perfect for personal websites, blogs, and small businesses just getting started online.',
    features: [
      'SSD Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      'One-Click WordPress Install',
      'Email Accounts',
      'cPanel Control Panel'
    ],
    price: 'Starting at $3.99/mo',
    badge: 'Most Popular',
    color: 'text-blue-600'
  },
  {
    icon: Cloud,
    title: 'VPS Hosting',
    description: 'Scalable virtual private servers with dedicated resources and full root access.',
    features: [
      'Dedicated Resources',
      'Full Root Access',
      'SSD Storage',
      'Free Backups',
      'Multiple OS Options',
      'Scalable Resources'
    ],
    price: 'Starting at $19.99/mo',
    badge: 'Scalable',
    color: 'text-purple-600'
  },
  {
    icon: Database,
    title: 'Dedicated Servers',
    description: 'Powerful bare-metal servers for high-performance applications and large websites.',
    features: [
      'Full Server Control',
      'Premium Hardware',
      'DDoS Protection',
      'Remote Management',
      'Custom Configurations',
      'Enterprise Support'
    ],
    price: 'Starting at $99.99/mo',
    badge: 'High Performance',
    color: 'text-green-600'
  },
  {
    icon: Shield,
    title: 'Cloud Hosting',
    description: 'Flexible cloud infrastructure that automatically scales with your business needs.',
    features: [
      'Auto-Scaling',
      'Load Balancing',
      'Global CDN',
      'API Integration',
      'Pay-as-you-use',
      'High Availability'
    ],
    price: 'Starting at $0.01/hour',
    badge: 'Flexible',
    color: 'text-orange-600'
  },
  {
    icon: Globe,
    title: 'Domain Registration',
    description: 'Secure your perfect domain name with our competitive pricing and easy management.',
    features: [
      '500+ Domain Extensions',
      'Free WHOIS Privacy',
      'DNS Management',
      'Domain Forwarding',
      'Bulk Registration',
      'Auto-Renewal'
    ],
    price: 'Starting at $9.99/year',
    badge: 'New',
    color: 'text-indigo-600'
  },
  {
    icon: Lock,
    title: 'SSL Certificates',
    description: 'Secure your website with our range of SSL certificates for every need.',
    features: [
      'Domain Validation',
      'Organization Validation',
      'Extended Validation',
      'Wildcard SSL',
      'Multi-Domain SSL',
      '99.9% Browser Trust'
    ],
    price: 'Starting at $9.99/year',
    badge: 'Secure',
    color: 'text-red-600'
  }
];

export function ServicesList() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Hosting Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From shared hosting to enterprise solutions, we provide the full spectrum 
            of hosting and web services your business needs.
          </p>
        </div>

        <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md relative overflow-hidden">
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {service.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gray-100 rounded-full p-3">
                      <Icon className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <div className="text-lg font-semibold text-gray-900">{service.price}</div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-2">
                    <Button className="w-full" asChild>
                      <Link href="/pricing">Get Started</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}