'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Crown } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Bronze Reseller',
    price: '$19.99',
    period: '/month',
    description: 'Perfect for starting your hosting business',
    features: [
      '50GB SSD Storage',
      '500GB Bandwidth',
      '25 cPanel Accounts',
      'Free SSL Certificates',
      'White Label Branding',
      'WHMCS License Included',
      'Free Website Migration',
      'Email Support'
    ],
    popular: false
  },
  {
    name: 'Silver Reseller',
    price: '$39.99',
    period: '/month',
    description: 'Great for growing hosting businesses',
    features: [
      '100GB SSD Storage',
      '1TB Bandwidth',
      '50 cPanel Accounts',
      'Free SSL Certificates',
      'White Label Branding',
      'WHMCS License Included',
      'Free Website Migration',
      'Priority Support',
      'Private Name Servers',
      'Softaculous Auto Installer'
    ],
    popular: true
  },
  {
    name: 'Gold Reseller',
    price: '$79.99',
    period: '/month',
    description: 'For established hosting providers',
    features: [
      '200GB SSD Storage',
      '2TB Bandwidth',
      '100 cPanel Accounts',
      'Free SSL Certificates',
      'White Label Branding',
      'WHMCS License Included',
      'Free Website Migration',
      'Priority Support',
      'Private Name Servers',
      'Softaculous Auto Installer',
      'CloudLinux OS',
      'LiteSpeed Web Server'
    ],
    popular: false
  },
  {
    name: 'Platinum Reseller',
    price: '$149.99',
    period: '/month',
    description: 'Maximum resources and features',
    features: [
      '400GB SSD Storage',
      '4TB Bandwidth',
      '200 cPanel Accounts',
      'Free SSL Certificates',
      'White Label Branding',
      'WHMCS License Included',
      'Free Website Migration',
      '24/7 Phone Support',
      'Private Name Servers',
      'Softaculous Auto Installer',
      'CloudLinux OS',
      'LiteSpeed Web Server',
      'Dedicated IP Address',
      'Advanced Security Suite'
    ],
    popular: false
  }
];

export function ResellerPlans() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Reseller Hosting Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect reseller plan to start or grow your hosting business.
          </p>
        </div>

        <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-green-500 shadow-xl scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-600 text-white px-4 py-1 flex items-center space-x-1">
                    <Crown className="h-4 w-4" />
                    <span>Most Popular</span>
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {plan.description}
                </CardDescription>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
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
                      ? 'bg-green-600 hover:bg-green-700 text-white'
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