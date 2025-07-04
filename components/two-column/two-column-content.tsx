'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Server, Shield, Zap, Globe, Clock, Headphones } from 'lucide-react';

const features = [
  { icon: Server, title: 'High Performance', description: 'Optimized servers for maximum speed' },
  { icon: Shield, title: 'Advanced Security', description: 'Enterprise-grade protection' },
  { icon: Zap, title: 'Lightning Fast', description: 'SSD storage and global CDN' },
  { icon: Globe, title: 'Global Network', description: '15+ data centers worldwide' },
  { icon: Clock, title: '99.9% Uptime', description: 'Guaranteed reliability' },
  { icon: Headphones, title: '24/7 Support', description: 'Expert assistance anytime' }
];

export function TwoColumnContent() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our Hosting Services?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide enterprise-grade hosting solutions with the reliability, performance, 
              and support your business needs to succeed online. Our platform is designed to 
              scale with your growth and provide the best possible experience for your visitors.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started Today
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="animate-fade-in">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Featured Plan</CardTitle>
                  <Badge className="bg-green-600 text-white">Most Popular</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">$7.99</div>
                  <div className="text-gray-500">per month</div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>50GB SSD Storage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Unlimited Bandwidth</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>10 Websites</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Free SSL Certificate</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>24/7 Support</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Choose This Plan
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help Choosing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our hosting experts are here to help you find the perfect solution for your needs.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Our Experts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}