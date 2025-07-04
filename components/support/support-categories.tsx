'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Globe, CreditCard, Settings, Shield, HelpCircle, Book, Wrench } from 'lucide-react';

const categories = [
  {
    icon: Server,
    title: 'Hosting Issues',
    description: 'Server problems, downtime, and performance issues',
    articles: 45,
    color: 'text-blue-600'
  },
  {
    icon: Globe,
    title: 'Domain Management',
    description: 'Domain registration, DNS, and domain transfers',
    articles: 32,
    color: 'text-green-600'
  },
  {
    icon: CreditCard,
    title: 'Billing & Payments',
    description: 'Invoices, payment methods, and billing cycles',
    articles: 28,
    color: 'text-purple-600'
  },
  {
    icon: Settings,
    title: 'Control Panel',
    description: 'cPanel, file manager, and account settings',
    articles: 38,
    color: 'text-orange-600'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'SSL certificates, backups, and security features',
    articles: 25,
    color: 'text-red-600'
  },
  {
    icon: Wrench,
    title: 'Technical Support',
    description: 'Advanced configurations and troubleshooting',
    articles: 42,
    color: 'text-indigo-600'
  }
];

export function SupportCategories() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
        <div className="absolute inset-0 bg-neural-network opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Browse Help Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions organized by topic. Can't find what you're looking for? 
            Contact our support team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md bg-white/80 backdrop-blur-sm group">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className="bg-gray-100 rounded-full p-3 group-hover:bg-gray-50 transition-colors"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className={`h-8 w-8 ${category.color}`} />
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <p className="text-sm text-gray-500">{category.articles} articles</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}