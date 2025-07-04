'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Zap } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter Cloud',
    price: '$0.01',
    period: '/hour',
    description: 'Perfect for small applications',
    specs: {
      cpu: '1 vCPU',
      ram: '1GB RAM',
      storage: '25GB SSD',
      bandwidth: '1TB Transfer'
    },
    features: [
      'Auto-scaling',
      'Load Balancing',
      'Global CDN',
      'SSL Certificate',
      'Basic Monitoring',
      'Email Support'
    ],
    popular: false
  },
  {
    name: 'Professional Cloud',
    price: '$0.05',
    period: '/hour',
    description: 'Great for growing applications',
    specs: {
      cpu: '2 vCPU',
      ram: '4GB RAM',
      storage: '100GB SSD',
      bandwidth: '5TB Transfer'
    },
    features: [
      'Auto-scaling',
      'Load Balancing',
      'Global CDN',
      'SSL Certificate',
      'Advanced Monitoring',
      'Priority Support',
      'Database Clustering',
      'API Access'
    ],
    popular: true
  },
  {
    name: 'Business Cloud',
    price: '$0.15',
    period: '/hour',
    description: 'For high-performance applications',
    specs: {
      cpu: '4 vCPU',
      ram: '16GB RAM',
      storage: '500GB SSD',
      bandwidth: '20TB Transfer'
    },
    features: [
      'Auto-scaling',
      'Load Balancing',
      'Global CDN',
      'SSL Certificate',
      'Advanced Monitoring',
      'Priority Support',
      'Database Clustering',
      'API Access',
      'Custom Integrations',
      'Dedicated Support'
    ],
    popular: false
  },
  {
    name: 'Enterprise Cloud',
    price: 'Custom',
    period: 'pricing',
    description: 'Tailored for enterprise needs',
    specs: {
      cpu: 'Custom vCPU',
      ram: 'Custom RAM',
      storage: 'Custom Storage',
      bandwidth: 'Unlimited'
    },
    features: [
      'Everything in Business',
      'Custom Architecture',
      'Dedicated Infrastructure',
      'SLA Guarantees',
      'White-glove Support',
      'Compliance Ready',
      'Multi-region Deployment',
      'Custom Integrations'
    ],
    popular: false
  }
];

export function CloudPlans() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-neural-network opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cloud Hosting Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible cloud hosting with pay-as-you-use pricing. Scale automatically 
            and only pay for the resources you consume.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card
                className={`relative hover:shadow-xl transition-all duration-300 transform ${
                  plan.popular ? 'ring-2 ring-cyan-500 shadow-xl scale-105' : ''
                } border-0 shadow-lg bg-white/80 backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-cyan-600 text-white px-4 py-1 flex items-center space-x-1">
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
                  
                  {/* Cloud Specs */}
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-left">
                    <div className="text-sm"><strong>CPU:</strong> {plan.specs.cpu}</div>
                    <div className="text-sm"><strong>RAM:</strong> {plan.specs.ram}</div>
                    <div className="text-sm"><strong>Storage:</strong> {plan.specs.storage}</div>
                    <div className="text-sm"><strong>Bandwidth:</strong> {plan.specs.bandwidth}</div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                          : 'bg-gray-900 hover:bg-gray-800 text-white'
                      }`}
                      asChild
                    >
                      <Link href="/cart">
                        {plan.name === 'Enterprise Cloud' ? 'Contact Sales' : 'Get Started'}
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            All plans include 99.99% uptime SLA and 24/7 support
          </p>
          <Button variant="outline" size="lg">
            Compare All Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
}