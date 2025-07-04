'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Mail, Globe, Code, Database, Zap } from 'lucide-react';

const categories = [
  {
    icon: Shield,
    title: 'Security Services',
    description: 'SSL certificates, malware scanning, and advanced security tools',
    count: '12 Products',
    color: 'text-red-600'
  },
  {
    icon: Mail,
    title: 'Email Solutions',
    description: 'Professional email hosting and collaboration tools',
    count: '8 Products',
    color: 'text-blue-600'
  },
  {
    icon: Globe,
    title: 'Website Services',
    description: 'Website builders, templates, and design services',
    count: '15 Products',
    color: 'text-green-600'
  },
  {
    icon: Code,
    title: 'Developer Tools',
    description: 'APIs, development environments, and coding resources',
    count: '10 Products',
    color: 'text-purple-600'
  },
  {
    icon: Database,
    title: 'Backup Solutions',
    description: 'Automated backups, storage, and disaster recovery',
    count: '6 Products',
    color: 'text-orange-600'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'CDN services, caching, and optimization tools',
    count: '9 Products',
    color: 'text-yellow-600'
  }
];

export function ShopCategories() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect add-ons and services to enhance your hosting experience.
          </p>
        </div>

        <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-100 rounded-full p-4 group-hover:bg-gray-50 transition-colors">
                      <Icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="text-sm font-medium text-gray-500">{category.count}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}