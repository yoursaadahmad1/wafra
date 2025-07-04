'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Storage',
    shared: '10GB SSD',
    vps: '50GB SSD',
    dedicated: '1TB SSD',
    cloud: 'Unlimited'
  },
  {
    feature: 'Bandwidth',
    shared: 'Unlimited',
    vps: 'Unlimited',
    dedicated: 'Unlimited',
    cloud: 'Unlimited'
  },
  {
    feature: 'Websites',
    shared: '1',
    vps: '10',
    dedicated: 'Unlimited',
    cloud: 'Unlimited'
  },
  {
    feature: 'SSL Certificate',
    shared: true,
    vps: true,
    dedicated: true,
    cloud: true
  },
  {
    feature: 'Root Access',
    shared: false,
    vps: true,
    dedicated: true,
    cloud: true
  },
  {
    feature: 'Dedicated Resources',
    shared: false,
    vps: true,
    dedicated: true,
    cloud: true
  },
  {
    feature: 'Auto Scaling',
    shared: false,
    vps: false,
    dedicated: false,
    cloud: true
  },
  {
    feature: 'Support Level',
    shared: 'Email',
    vps: 'Priority',
    dedicated: 'Premium',
    cloud: 'Enterprise'
  }
];

const plans = [
  { name: 'Shared Hosting', key: 'shared', price: '$3.99/mo', popular: false },
  { name: 'VPS Hosting', key: 'vps', price: '$19.99/mo', popular: true },
  { name: 'Dedicated Server', key: 'dedicated', price: '$99.99/mo', popular: false },
  { name: 'Cloud Hosting', key: 'cloud', price: '$0.01/hr', popular: false }
];

export function ServiceComparison() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compare Our Hosting Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect hosting solution by comparing features across all our plans.
          </p>
        </div>

        <div className="animate-fade-in overflow-x-auto">
          <div className="min-w-full">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 mb-8">
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">Features</h3>
              </div>
              {plans.map((plan) => (
                <Card key={plan.key} className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <div className="text-2xl font-bold text-gray-900">{plan.price}</div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Comparison Rows */}
            <div className="space-y-4">
              {comparisonData.map((row, index) => (
                <div key={index} className="grid grid-cols-5 gap-4 py-4 border-b border-gray-200">
                  <div className="p-4 font-medium text-gray-900">
                    {row.feature}
                  </div>
                  {plans.map((plan) => (
                    <div key={plan.key} className="p-4 text-center">
                      {typeof row[plan.key as keyof typeof row] === 'boolean' ? (
                        row[plan.key as keyof typeof row] ? (
                          <Check className="h-6 w-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-700">{row[plan.key as keyof typeof row]}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}