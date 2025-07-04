'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { Server3DIllustration } from '@/components/3d-server-illustration';

const plans = [
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
      'One-Click WordPress Install'
    ],
    cta: 'Get Started',
    popular: false,
    gradient: 'from-blue-500 to-cyan-500'
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
      'Advanced Security'
    ],
    cta: 'Get Started',
    popular: true,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Enterprise',
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
      'CDN Integration'
    ],
    cta: 'Get Started',
    popular: false,
    gradient: 'from-green-500 to-emerald-500'
  }
];

export function PricingSection() {
  return (
    <section className="py-24 bg-server-mesh relative overflow-hidden">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 opacity-20">
          <Server3DIllustration size="sm" animated={false} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Server3DIllustration size="sm" animated={false} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features 
            with no hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                className={`relative glass-morphism border-0 shadow-2xl transition-all duration-300 interactive-hover ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Server3DIllustration size="sm" animated={false} className="w-8 h-8" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-baseline justify-center">
                    <motion.span
                      className="text-4xl font-bold text-gray-900"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {plan.price}
                    </motion.span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
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
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
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
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                          : 'bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700'
                      } text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                      asChild
                    >
                      <Link href="/signup">{plan.cta}</Link>
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
            All plans include 30-day money-back guarantee
          </p>
          <Button variant="outline" className="glass-morphism border-gray-300" asChild>
            <Link href="/pricing">View All Plans</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}