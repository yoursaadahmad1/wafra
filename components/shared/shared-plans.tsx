'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic Shared',
    price: '$2.99',
    originalPrice: '$5.99',
    period: '/month',
    description: 'Perfect for personal websites and blogs',
    features: [
      '10GB SSD Storage',
      '100GB Bandwidth',
      '1 Website',
      'Free SSL Certificate',
      'Email Support',
      'One-Click WordPress Install',
      'Daily Backups',
      'cPanel Control Panel'
    ],
    popular: false,
    savings: '50% OFF'
  },
  {
    name: 'Standard Shared',
    price: '$4.99',
    originalPrice: '$9.99',
    period: '/month',
    description: 'Great for small business websites',
    features: [
      '50GB SSD Storage',
      'Unlimited Bandwidth',
      '5 Websites',
      'Free SSL Certificate',
      'Priority Support',
      'Free Daily Backups',
      'Advanced Security',
      'Staging Environment',
      'Email Accounts',
      'Website Builder'
    ],
    popular: true,
    savings: '50% OFF'
  },
  {
    name: 'Advanced Shared',
    price: '$7.99',
    originalPrice: '$15.99',
    period: '/month',
    description: 'For growing businesses',
    features: [
      '100GB SSD Storage',
      'Unlimited Bandwidth',
      '25 Websites',
      'Free SSL Certificate',
      'Priority Support',
      'Free Daily Backups',
      'Advanced Security',
      'Staging Environment',
      'CDN Integration',
      'Performance Monitoring',
      'White-label Options'
    ],
    popular: false,
    savings: '50% OFF'
  },
  {
    name: 'Premium Shared',
    price: '$12.99',
    originalPrice: '$25.99',
    period: '/month',
    description: 'Maximum performance and features',
    features: [
      '200GB SSD Storage',
      'Unlimited Bandwidth',
      'Unlimited Websites',
      'Free SSL Certificate',
      '24/7 Phone Support',
      'Free Daily Backups',
      'Advanced Security',
      'Staging Environment',
      'CDN Integration',
      'Performance Monitoring',
      'White-label Options',
      'Priority Queue',
      'Dedicated IP'
    ],
    popular: false,
    savings: '50% OFF'
  }
];

export function SharedPlans() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Shared Hosting Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            All plans include our core features with no setup fees or hidden costs.
          </p>
          <Badge className="bg-red-600 text-white text-lg px-4 py-2">
            Limited Time: 50% OFF All Plans
          </Badge>
        </div>

        <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1 flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </Badge>
                </div>
              )}

              {plan.savings && (
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-red-600 text-white px-3 py-1 text-sm">
                    {plan.savings}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {plan.description}
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="line-through">{plan.originalPrice}/month</span>
                    <span className="ml-2 text-green-600 font-semibold">Save 50%</span>
                  </div>
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
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
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

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-600 mb-4">
            All plans include 30-day money-back guarantee
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Free Migration</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}