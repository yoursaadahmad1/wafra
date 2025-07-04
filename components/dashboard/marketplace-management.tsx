'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search,
  Shield, 
  Mail, 
  Globe, 
  Code,
  Database,
  Zap,
  Star,
  ShoppingCart
} from 'lucide-react';

const categories = [
  { name: 'Security', icon: Shield, count: 12, color: 'text-red-600' },
  { name: 'Email', icon: Mail, count: 8, color: 'text-blue-600' },
  { name: 'Domains', icon: Globe, count: 15, color: 'text-green-600' },
  { name: 'Development', icon: Code, count: 10, color: 'text-purple-600' },
  { name: 'Databases', icon: Database, count: 6, color: 'text-orange-600' },
  { name: 'Performance', icon: Zap, count: 9, color: 'text-yellow-600' }
];

const featuredProducts = [
  {
    id: 1,
    name: 'SSL Certificate Pro',
    description: 'Premium SSL certificate with extended validation',
    price: '$29.99',
    period: '/year',
    rating: 4.9,
    reviews: 1250,
    category: 'Security',
    features: ['256-bit Encryption', 'Browser Trust', '$1M Warranty']
  },
  {
    id: 2,
    name: 'Professional Email Suite',
    description: 'Business email hosting with advanced collaboration tools',
    price: '$9.99',
    period: '/month',
    rating: 4.8,
    reviews: 890,
    category: 'Email',
    features: ['50GB Storage', 'Mobile Sync', 'Team Collaboration']
  },
  {
    id: 3,
    name: 'CDN Pro',
    description: 'Global content delivery network for faster loading',
    price: '$19.99',
    period: '/month',
    rating: 4.9,
    reviews: 780,
    category: 'Performance',
    features: ['Global Network', 'DDoS Protection', 'Real-time Analytics']
  },
  {
    id: 4,
    name: 'Automated Backups Plus',
    description: 'Advanced backup solution with instant restore',
    price: '$14.99',
    period: '/month',
    rating: 4.7,
    reviews: 1450,
    category: 'Security',
    features: ['Hourly Backups', 'One-Click Restore', '90-Day Retention']
  }
];

export function MarketplaceManagement() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketplace</h1>
        <p className="text-gray-600">Discover and purchase add-ons to enhance your hosting experience</p>
      </div>

      {/* Search */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for add-ons, services, and tools..."
              className="pl-10 text-lg py-6 bg-gray-50/50 border-gray-200/50"
            />
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 animate-stagger">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md bg-white/80 backdrop-blur-sm group">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-100 rounded-full p-4 group-hover:bg-gray-50 transition-colors">
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.count} products</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Featured Products */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-stagger">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                    <CardDescription className="text-gray-600 mb-3">
                      {product.description}
                    </CardDescription>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{product.price}</div>
                    <div className="text-sm text-gray-500">{product.period}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-3">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}