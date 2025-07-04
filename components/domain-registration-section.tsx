'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Globe, Shield, Check } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/language-toggle';

const popularDomains = [
  { ext: '.com', price: '$12.99', popular: true },
  { ext: '.net', price: '$14.99', popular: false },
  { ext: '.org', price: '$13.99', popular: false },
  { ext: '.io', price: '$49.99', popular: true },
  { ext: '.dev', price: '$19.99', popular: false },
  { ext: '.app', price: '$14.99', popular: false },
];

const features = [
  'Free WHOIS Privacy Protection',
  'Easy DNS Management',
  'Domain Forwarding',
  'Auto-Renewal Options',
  '24/7 Support',
  'Instant Activation'
];

export function DomainRegistrationSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-neural-network opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="bg-teal-600 text-white mb-6">
            500+ Domain Extensions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Perfect Domain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your online presence with our comprehensive domain registration service. 
            Competitive pricing, free privacy protection, and easy management tools included.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Domain Search */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                  <Globe className="h-6 w-6 text-teal-600 mr-3" />
                  Domain Search
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="Enter your domain name..."
                    className="text-lg py-6"
                  />
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8">
                    <Search className="h-5 w-5" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {popularDomains.map((domain, index) => (
                    <motion.div
                      key={domain.ext}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-gray-900">{domain.ext}</span>
                        {domain.popular && (
                          <Badge className="bg-teal-600 text-white text-xs">Popular</Badge>
                        )}
                      </div>
                      <span className="font-bold text-teal-600">{domain.price}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-6 text-lg" asChild>
                    <Link href="/domain">
                      View All Extensions
                    </Link>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-teal-600 mr-3" />
                Domain Features
              </h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Special Offer</h4>
              <p className="text-teal-100 mb-4">
                Register your domain today and get free WHOIS privacy protection 
                for the first year (valued at $12.99).
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-white text-teal-600 hover:bg-teal-50 font-bold" asChild>
                  <Link href="/domain">
                    Register Now
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}