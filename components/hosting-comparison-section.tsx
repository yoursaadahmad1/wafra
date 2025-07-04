'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Server, Cloud, Database, Shield } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/language-toggle';

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
  { 
    name: 'Shared Hosting', 
    key: 'shared', 
    price: '$3.99/mo', 
    popular: false,
    icon: Server,
    color: 'text-blue-600',
    description: 'Perfect for beginners'
  },
  { 
    name: 'VPS Hosting', 
    key: 'vps', 
    price: '$19.99/mo', 
    popular: true,
    icon: Database,
    color: 'text-purple-600',
    description: 'Scalable performance'
  },
  { 
    name: 'Dedicated Server', 
    key: 'dedicated', 
    price: '$99.99/mo', 
    popular: false,
    icon: Shield,
    color: 'text-red-600',
    description: 'Maximum control'
  },
  { 
    name: 'Cloud Hosting', 
    key: 'cloud', 
    price: '$0.01/hr', 
    popular: false,
    icon: Cloud,
    color: 'text-cyan-600',
    description: 'Pay as you scale'
  }
];

export function HostingComparisonSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-data-flow opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Compare Hosting Plans
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Find the perfect hosting solution by comparing features across all our plans. 
            Each plan is designed for different needs and growth stages.
          </p>
        </motion.div>

        {/* Mobile-friendly cards for small screens */}
        <div className="lg:hidden space-y-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`glass-morphism border border-white/10 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon className={`h-6 w-6 ${plan.color}`} />
                        <div>
                          <CardTitle className="text-white">{plan.name}</CardTitle>
                          <p className="text-sm text-gray-300">{plan.description}</p>
                        </div>
                      </div>
                      {plan.popular && (
                        <Badge className="bg-purple-600 text-white">Popular</Badge>
                      )}
                    </div>
                    <div className="text-2xl font-bold text-white">{plan.price}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {comparisonData.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">{row.feature}</span>
                          <div>
                            {typeof row[plan.key as keyof typeof row] === 'boolean' ? (
                              row[plan.key as keyof typeof row] ? (
                                <Check className="h-4 w-4 text-green-400" />
                              ) : (
                                <X className="h-4 w-4 text-red-400" />
                              )
                            ) : (
                              <span className="text-white text-sm font-medium">
                                {row[plan.key as keyof typeof row]}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <motion.div
                      className="mt-6"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-white/20 hover:bg-white/30'} text-white`}
                        asChild
                      >
                        <Link href="/pricing">Choose Plan</Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop comparison table */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="glass-morphism rounded-2xl border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 p-6 border-b border-white/10">
              <div className="text-white font-semibold">Features</div>
              {plans.map((plan) => {
                const Icon = plan.icon;
                return (
                  <div key={plan.key} className="text-center">
                    <div className={`flex items-center justify-center space-x-2 mb-2 ${plan.popular ? 'relative' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-purple-600 text-white text-xs">Popular</Badge>
                        </div>
                      )}
                      <Icon className={`h-5 w-5 ${plan.color}`} />
                      <span className="text-white font-semibold">{plan.name}</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">{plan.description}</p>
                    <div className="text-xl font-bold text-white">{plan.price}</div>
                  </div>
                );
              })}
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-white/10">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-5 gap-4 p-4 hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="text-gray-300 font-medium">{row.feature}</div>
                  {plans.map((plan) => (
                    <div key={plan.key} className="text-center">
                      {typeof row[plan.key as keyof typeof row] === 'boolean' ? (
                        row[plan.key as keyof typeof row] ? (
                          <Check className="h-5 w-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-white font-medium">
                          {row[plan.key as keyof typeof row]}
                        </span>
                      )}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-5 gap-4 p-6 border-t border-white/10">
              <div></div>
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-white/20 hover:bg-white/30'} text-white`}
                    asChild
                  >
                    <Link href="/pricing">Choose Plan</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-100 mb-6">
            Need help choosing the right plan? Our experts are here to help.
          </p>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
            <Link href="/contact">Contact Our Experts</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}