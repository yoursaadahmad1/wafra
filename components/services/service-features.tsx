'use client';

import { Zap, Shield, Globe, Clock, Headphones, Award, Server, Database } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description: 'SSD storage, optimized servers, and global CDN ensure your website loads in milliseconds.',
    color: 'text-yellow-600'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced DDoS protection, SSL certificates, and malware scanning keep your site secure.',
    color: 'text-blue-600'
  },
  {
    icon: Globe,
    title: 'Global Infrastructure',
    description: '15+ data centers worldwide with 99.9% uptime guarantee and automatic failover.',
    color: 'text-green-600'
  },
  {
    icon: Clock,
    title: 'Instant Deployment',
    description: 'Get your hosting account activated and websites deployed in under 5 minutes.',
    color: 'text-purple-600'
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: '24/7 technical support from hosting experts via live chat, phone, and email.',
    color: 'text-red-600'
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Award-winning hosting platform trusted by over 100,000 websites worldwide.',
    color: 'text-orange-600'
  },
  {
    icon: Server,
    title: 'Scalable Solutions',
    description: 'Easily upgrade your resources as your website grows without any downtime.',
    color: 'text-indigo-600'
  },
  {
    icon: Database,
    title: 'Advanced Tools',
    description: 'One-click installs, staging environments, and developer-friendly tools included.',
    color: 'text-teal-600'
  }
];

export function ServiceFeatures() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Our Services Stand Out
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with exceptional service to deliver 
            hosting solutions that exceed expectations.
          </p>
        </div>

        <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-100 rounded-full p-4 group-hover:bg-gray-50 transition-colors">
                    <Icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}