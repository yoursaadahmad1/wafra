'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Shield, Mail, Globe, Code, Database, Zap } from 'lucide-react';

const products = [
  {
    icon: Shield,
    name: 'SSL Certificate',
    description: 'Secure your website with premium SSL encryption',
    price: '$9.99',
    period: '/year',
    rating: 4.9,
    reviews: 1250,
    popular: true,
    features: ['256-bit Encryption', 'Browser Trust', 'Warranty Included']
  },
  {
    icon: Mail,
    name: 'Professional Email',
    description: 'Business email hosting with advanced features',
    price: '$4.99',
    period: '/month',
    rating: 4.8,
    reviews: 890,
    popular: false,
    features: ['25GB Storage', 'Mobile Sync', 'Spam Protection']
  },
  {
    icon: Globe,
    name: 'Website Builder Pro',
    description: 'Advanced website builder with premium templates',
    price: '$14.99',
    period: '/month',
    rating: 4.7,
    reviews: 2100,
    popular: true,
    features: ['500+ Templates', 'E-commerce Ready', 'SEO Tools']
  },
  {
    icon: Code,
    name: 'Developer Toolkit',
    description: 'Complete development environment and tools',
    price: '$29.99',
    period: '/month',
    rating: 4.9,
    reviews: 650,
    popular: false,
    features: ['Git Integration', 'SSH Access', 'Database Tools']
  },
  {
    icon: Database,
    name: 'Automated Backups',
    description: 'Daily automated backups with instant restore',
    price: '$7.99',
    period: '/month',
    rating: 4.8,
    reviews: 1450,
    popular: false,
    features: ['Daily Backups', 'One-Click Restore', '30-Day Retention']
  },
  {
    icon: Zap,
    name: 'CDN Pro',
    description: 'Global content delivery network for faster loading',
    price: '$19.99',
    period: '/month',
    rating: 4.9,
    reviews: 780,
    popular: true,
    features: ['Global Network', 'DDoS Protection', 'Real-time Analytics']
  }
];

export function ShopProducts() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular add-ons and services to enhance your hosting experience.
          </p>
        </div>

        <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${product.popular ? 'ring-2 ring-pink-500' : ''}`}>
                {product.popular && (
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-pink-600 text-white">Popular</Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-gray-100 rounded-full p-3">
                      <Icon className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-gray-500 ml-1">{product.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}