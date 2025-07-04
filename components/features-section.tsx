'use client';

import { Shield, Zap, Globe, Clock, Headphones, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Advanced Security',
    description: 'DDoS protection, SSL certificates, and daily malware scanning to keep your site secure.',
    color: 'text-blue-600'
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'SSD storage, CDN integration, and optimized servers for maximum speed.',
    color: 'text-yellow-600'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: '15+ data centers worldwide ensuring low latency for your global audience.',
    color: 'text-green-600'
  },
  {
    icon: Clock,
    title: '99.9% Uptime',
    description: 'Guaranteed uptime with redundant infrastructure and automatic failover.',
    color: 'text-purple-600'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert support team available around the clock via live chat, phone, and email.',
    color: 'text-red-600'
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Award-winning hosting services trusted by over 100,000 customers worldwide.',
    color: 'text-orange-600'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose WAFRA?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide enterprise-grade hosting solutions with the reliability and performance 
            your business deserves.
          </p>
        </div>

        <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white rounded-full p-3 shadow-sm group-hover:shadow-md transition-shadow">
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}