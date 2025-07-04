'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const domainPricing = [
  {
    category: 'Popular Domains',
    domains: [
      { ext: '.com', price: '$12.99', renewal: '$14.99', popular: true },
      { ext: '.net', price: '$14.99', renewal: '$16.99', popular: false },
      { ext: '.org', price: '$13.99', renewal: '$15.99', popular: false },
      { ext: '.info', price: '$9.99', renewal: '$19.99', popular: false },
    ]
  },
  {
    category: 'Business Domains',
    domains: [
      { ext: '.biz', price: '$11.99', renewal: '$19.99', popular: false },
      { ext: '.co', price: '$24.99', renewal: '$29.99', popular: true },
      { ext: '.company', price: '$19.99', renewal: '$24.99', popular: false },
      { ext: '.business', price: '$15.99', renewal: '$20.99', popular: false },
    ]
  },
  {
    category: 'Tech Domains',
    domains: [
      { ext: '.tech', price: '$39.99', renewal: '$49.99', popular: true },
      { ext: '.io', price: '$49.99', renewal: '$59.99', popular: false },
      { ext: '.dev', price: '$19.99', renewal: '$24.99', popular: false },
      { ext: '.app', price: '$14.99', renewal: '$19.99', popular: false },
    ]
  },
  {
    category: 'Creative Domains',
    domains: [
      { ext: '.design', price: '$39.99', renewal: '$49.99', popular: false },
      { ext: '.art', price: '$19.99', renewal: '$24.99', popular: false },
      { ext: '.studio', price: '$24.99', renewal: '$29.99', popular: true },
      { ext: '.creative', price: '$29.99', renewal: '$34.99', popular: false },
    ]
  }
];

export function DomainPricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Domain Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Competitive pricing on all popular domain extensions with no hidden fees.
          </p>
        </div>

        <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domainPricing.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.domains.map((domain, domainIndex) => (
                  <div key={domainIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-gray-900">{domain.ext}</span>
                      {domain.popular && (
                        <Badge className="bg-teal-600 text-white text-xs">Popular</Badge>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-teal-600">{domain.price}</div>
                      <div className="text-xs text-gray-500">Renews at {domain.renewal}</div>
                    </div>
                  </div>
                ))}
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-600 mb-4">
            All domains include free WHOIS privacy protection and DNS management
          </p>
          <Button variant="outline" size="lg">
            View All Extensions
          </Button>
        </div>
      </div>
    </section>
  );
}