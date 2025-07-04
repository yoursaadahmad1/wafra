'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Award } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic Dedicated',
    price: '$99.99',
    period: '/month',
    description: 'Entry-level dedicated server',
    specs: {
      cpu: 'Intel Xeon E3-1230v6',
      cores: '4 Cores / 8 Threads',
      ram: '16GB DDR4 RAM',
      storage: '1TB SATA HDD',
      bandwidth: '10TB Transfer',
      network: '1Gbps Port'
    },
    features: [
      'Full Root Access',
      'Choice of OS',
      'Free SSL Certificate',
      'DDoS Protection',
      'Hardware Replacement',
      '24/7 Support',
      'Remote Management',
      '99.9% Uptime SLA'
    ],
    popular: false
  },
  {
    name: 'Standard Dedicated',
    price: '$199.99',
    period: '/month',
    description: 'Perfect for growing businesses',
    specs: {
      cpu: 'Intel Xeon E5-2620v4',
      cores: '8 Cores / 16 Threads',
      ram: '32GB DDR4 RAM',
      storage: '2x 1TB SSD RAID1',
      bandwidth: '20TB Transfer',
      network: '1Gbps Port'
    },
    features: [
      'Full Root Access',
      'Choice of OS',
      'Free SSL Certificate',
      'Advanced DDoS Protection',
      'Hardware Replacement',
      'Priority Support',
      'Remote Management',
      '99.9% Uptime SLA',
      'IPMI Access',
      'Hardware Monitoring'
    ],
    popular: true
  },
  {
    name: 'Advanced Dedicated',
    price: '$399.99',
    period: '/month',
    description: 'High-performance server',
    specs: {
      cpu: 'Intel Xeon Gold 6248',
      cores: '20 Cores / 40 Threads',
      ram: '64GB DDR4 RAM',
      storage: '2x 2TB NVMe SSD',
      bandwidth: '50TB Transfer',
      network: '10Gbps Port'
    },
    features: [
      'Full Root Access',
      'Choice of OS',
      'Free SSL Certificate',
      'Advanced DDoS Protection',
      'Hardware Replacement',
      'Premium Support',
      'Remote Management',
      '99.9% Uptime SLA',
      'IPMI Access',
      'Hardware Monitoring',
      'Load Balancer Ready',
      'Custom Configurations'
    ],
    popular: false
  },
  {
    name: 'Premium Dedicated',
    price: '$799.99',
    period: '/month',
    description: 'Maximum performance server',
    specs: {
      cpu: 'AMD EPYC 7543',
      cores: '32 Cores / 64 Threads',
      ram: '128GB DDR4 RAM',
      storage: '4x 2TB NVMe SSD',
      bandwidth: '100TB Transfer',
      network: '10Gbps Port'
    },
    features: [
      'Full Root Access',
      'Choice of OS',
      'Free SSL Certificate',
      'Enterprise DDoS Protection',
      'Hardware Replacement',
      'Dedicated Support Manager',
      'Remote Management',
      '99.99% Uptime SLA',
      'IPMI Access',
      'Advanced Monitoring',
      'Load Balancer Ready',
      'Custom Configurations',
      'Dedicated Network',
      'White Glove Setup'
    ],
    popular: false
  }
];

export function DedicatedPlans() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Dedicated Server Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of high-performance dedicated servers with enterprise-grade hardware.
          </p>
        </div>

        <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-red-500 shadow-xl scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-red-600 text-white px-4 py-1 flex items-center space-x-1">
                    <Award className="h-4 w-4" />
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
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-left">
                  <div className="text-sm"><strong>CPU:</strong> {plan.specs.cpu}</div>
                  <div className="text-sm"><strong>Cores:</strong> {plan.specs.cores}</div>
                  <div className="text-sm"><strong>RAM:</strong> {plan.specs.ram}</div>
                  <div className="text-sm"><strong>Storage:</strong> {plan.specs.storage}</div>
                  <div className="text-sm"><strong>Bandwidth:</strong> {plan.specs.bandwidth}</div>
                  <div className="text-sm"><strong>Network:</strong> {plan.specs.network}</div>
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
                      ? 'bg-red-600 hover:bg-red-700 text-white'
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