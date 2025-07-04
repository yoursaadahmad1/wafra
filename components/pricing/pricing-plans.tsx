'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check } from 'lucide-react';
import Link from 'next/link';

const monthlyPlans = [
  {
    name: 'Starter',
    price: '$3.99',
    period: '/month',
    description: 'Perfect for personal websites and blogs',
    features: [
      '10GB SSD Storage',
      'Unlimited Bandwidth',
      '1 Website',
      'Free SSL Certificate',
      'Email Support',
      'One-Click WordPress Install',
      'Daily Backups',
      'cPanel Control Panel'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: '$7.99',
    period: '/month',
    description: 'Great for growing businesses',
    features: [
      '50GB SSD Storage',
      'Unlimited Bandwidth',
      '10 Websites',
      'Free SSL Certificate',
      'Priority Support',
      'Free Daily Backups',
      'Advanced Security',
      'Staging Environment',
      'CDN Integration',
      'Performance Monitoring'
    ],
    cta: 'Get Started',
    popular: true
  },
  {
    name: 'Business',
    price: '$15.99',
    period: '/month',
    description: 'For high-traffic websites',
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
      'Priority Queue'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Enterprise',
    price: '$39.99',
    period: '/month',
    description: 'For large-scale operations',
    features: [
      '500GB SSD Storage',
      'Unlimited Bandwidth',
      'Unlimited Websites',
      'Free SSL Certificate',
      'Dedicated Support Manager',
      'Free Daily Backups',
      'Advanced Security',
      'Staging Environment',
      'CDN Integration',
      'Performance Monitoring',
      'White-label Options',
      'Priority Queue',
      'Custom Integrations',
      'SLA Guarantee'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

const yearlyPlans = [
  {
    name: 'Starter',
    price: '$2.99',
    period: '/month',
    originalPrice: '$3.99',
    description: 'Perfect for personal websites and blogs',
    features: [
      '10GB SSD Storage',
      'Unlimited Bandwidth',
      '1 Website',
      'Free SSL Certificate',
      'Email Support',
      'One-Click WordPress Install',
      'Daily Backups',
      'cPanel Control Panel'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: '$5.99',
    period: '/month',
    originalPrice: '$7.99',
    description: 'Great for growing businesses',
    features: [
      '50GB SSD Storage',
      'Unlimited Bandwidth',
      '10 Websites',
      'Free SSL Certificate',
      'Priority Support',
      'Free Daily Backups',
      'Advanced Security',
      'Staging Environment',
      'CDN Integration',
      'Performance Monitoring'
    ],
    cta: 'Get Started',
    popular: true
  },
  {
    name: 'Business',
    price: '$11.99',
    period: '/month',
    originalPrice: '$15.99',
    description: 'For high-traffic websites',
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
      'Priority Queue'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Enterprise',
    price: '$29.99',
    period: '/month',
    originalPrice: '$39.99',
    description: 'For large-scale operations',
    features: [
      '500GB SSD Storage',
      'Unlimited Bandwidth',
      'Unlimited Websites',
      'Free SSL Certificate',
      'Dedicated Support Manager',
      'Free Daily Backups',
      'Advanced Security',
      'Staging Environment',
      'CDN Integration',
      'Performance Monitoring',
      'White-label Options',
      'Priority Queue',
      'Custom Integrations',
      'SLA Guarantee'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export function PricingPlans() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            All plans include our core features with no setup fees or hidden costs.
          </p>
        </div>

        <Tabs defaultValue="yearly" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-fit grid-cols-2 bg-white border">
              <TabsTrigger value="monthly" className="px-8 py-3">Monthly</TabsTrigger>
              <TabsTrigger value="yearly" className="px-8 py-3">
                Yearly
                <Badge className="ml-2 bg-green-600 text-white">Save 25%</Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly">
            <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {monthlyPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative hover:shadow-lg transition-shadow duration-300 ${
                    plan.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
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
                          ? 'bg-blue-600 hover:bg-blue-700'
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                      asChild
                    >
                      <Link href="/signup">{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly">
            <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {yearlyPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative hover:shadow-lg transition-shadow duration-300 ${
                    plan.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600 mb-4">
                      {plan.description}
                    </CardDescription>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-sm text-gray-500">
                        <span className="line-through">{plan.originalPrice}/month</span>
                        <span className="ml-2 text-green-600 font-semibold">Save 25%</span>
                      </div>
                    )}
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
                          ? 'bg-blue-600 hover:bg-blue-700'
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                      asChild
                    >
                      <Link href="/signup">{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white rounded-lg p-8 shadow-sm border">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              Get in touch with our sales team for enterprise-level hosting solutions tailored to your specific needs.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}