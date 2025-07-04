'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Zap } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'VPS Starter',
    price: '$19.99',
    period: '/month',
    description: 'Perfect for small to medium websites',
    specs: {
      cpu: '2 vCPU Cores',
      ram: '4GB RAM',
      storage: '50GB SSD',
      bandwidth: '2TB Transfer'
    },
    features: [
      'Full Root Access',
      'Choice of OS',
      'Free SSL Certificate',
      'DDoS Protection',
      'Daily Backups',
      '24/7 Support',
      'KVM Virtualization',
      '99.9% Uptime SLA'
    ],
    popular: false
  },
  {
    name: 'VPS Professional',
    price: '$39.99',
    period: '/month',
    description: 'Great for growing applications',
    specs: {
      cpu: '4 vCPU Cores',
      ram: '8GB RAM',
      storage: '100GB SSD',
      bandwidth: '4TB Transfer'
    },
    features: [
      'Full Root Access',
      'Choice of OS',
      'Free SSL Certificate',
      'DDoS Protection',
      'Daily Backups',
      'Priority Support',
      'KVM Virtualization',
      '99.9% Uptime SLA',
      'Free Control Panel',
      'Monitoring Tools'
    ],
    popular: true
  },
  {
    name: 'VPS Business',
    price: '$79.99',
    period: '/month',
    description: 'For high-traffic websites',
    specs: {
      cpu: '6 vCPU Cores',
      ram: '16GB RAM',
      storage: '200GB SSD',
      bandwidth: '8TB Transfer'
    },
    features: [
      'Full Root Access',
      'Choice of OS',
      'Free SSL Certificate',
      'Advanced DDoS Protection',
      'Daily Backups',
      'Priority Support',
      'KVM Virtualization',
      '99.9% Uptime SLA',
      'Free Control Panel',
      'Monitoring Tools',
      'Load Balancer Ready',
      'Private Networking'
    ],
    popular: false
  },
  {
    name: 'VPS Enterprise',
    price: '$149.99',
    period: '/month',
    description: 'Maximum performance and resources',
    specs: {
      cpu: '8 vCPU Cores',
      ram: '32GB RAM',
      storage: '400GB SSD',
      bandwidth: '16TB Transfer'
    },
    features: [
      'Full Root Access',
      'Choice of OS',
      'Free SSL Certificate',
      'Advanced DDoS Protection',
      'Daily Backups',
      'Dedicated Support',
      'KVM Virtualization',
      '99.9% Uptime SLA',
      'Free Control Panel',
      'Advanced Monitoring',
      'Load Balancer Ready',
      'Private Networking',
      'Dedicated IP',
      'Custom Configurations'
    ],
    popular: false
  }
];

export function VPSPlans() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            VPS Hosting Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect VPS plan with dedicated resources and full control.
          </p>
        </div>

        <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-purple-500 shadow-xl scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white px-4 py-1 flex items-center space-x-1">
                    <Zap className="h-4 w-4" />
                    <span>Most Popular</span>
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {plan.description}
                </CardDescription>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                
                {/* Server Specs */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="text-sm font-medium text-gray-900">{plan.specs.cpu}</div>
                  <div className="text-sm font-medium text-gray-900">{plan.specs.ram}</div>
                  <div className="text-sm font-medium text-gray-900">{plan.specs.storage}</div>
                  <div className="text-sm font-medium text-gray-900">{plan.specs.bandwidth}</div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                  asChild
                >
                  <Link href="/cart">Choose Plan</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}