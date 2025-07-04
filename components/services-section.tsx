'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Server, Cloud, Database, Shield, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Server,
    title: 'Shared Hosting',
    description: 'Perfect for small websites and blogs. Easy to use with one-click installs.',
    features: ['10GB SSD Storage', 'Unlimited Bandwidth', 'Free SSL Certificate', '24/7 Support'],
    price: '$3.99/month',
    color: 'text-blue-600'
  },
  {
    icon: Cloud,
    title: 'VPS Hosting',
    description: 'Scalable virtual private servers with full root access and dedicated resources.',
    features: ['50GB SSD Storage', 'Dedicated Resources', 'Full Root Access', 'Free Backups'],
    price: '$19.99/month',
    color: 'text-purple-600'
  },
  {
    icon: Database,
    title: 'Dedicated Servers',
    description: 'Powerful dedicated servers for high-traffic websites and applications.',
    features: ['1TB SSD Storage', 'Full Server Control', 'Premium Support', 'DDoS Protection'],
    price: '$99.99/month',
    color: 'text-green-600'
  },
  {
    icon: Shield,
    title: 'Cloud Hosting',
    description: 'Flexible cloud infrastructure that scales with your business needs.',
    features: ['Auto-Scaling', 'Load Balancing', 'Global CDN', 'API Access'],
    price: '$0.01/hour',
    color: 'text-orange-600'
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hosting Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From shared hosting to dedicated servers, we have the perfect solution 
            to power your online presence.
          </p>
        </div>

        <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-100 rounded-full p-4">
                      <Icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-500">Starting from</div>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/pricing">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}