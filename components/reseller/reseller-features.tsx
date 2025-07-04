'use client';

import { Users, DollarSign, Settings, Shield, Headphones, Award, Globe, Zap } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'White Label Branding',
    description: 'Complete white label solution with your own branding and custom control panels.',
    color: 'text-green-600'
  },
  {
    icon: DollarSign,
    title: 'High Profit Margins',
    description: 'Competitive wholesale pricing allows for excellent profit margins on your hosting services.',
    color: 'text-blue-600'
  },
  {
    icon: Settings,
    title: 'Easy Management',
    description: 'WHMCS billing system included with automated provisioning and account management.',
    color: 'text-purple-600'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced security features including CloudLinux OS and LiteSpeed web server.',
    color: 'text-red-600'
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: '24/7 technical support for you and white-label support options for your customers.',
    color: 'text-orange-600'
  },
  {
    icon: Award,
    title: 'Industry Leading',
    description: 'Award-winning infrastructure with 99.9% uptime guarantee and premium hardware.',
    color: 'text-indigo-600'
  },
  {
    icon: Globe,
    title: 'Private Name Servers',
    description: 'Your own branded name servers for a professional appearance to your customers.',
    color: 'text-teal-600'
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'SSD storage, LiteSpeed servers, and global CDN for maximum website performance.',
    color: 'text-yellow-600'
  }
];

export function ResellerFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our reseller hosting platform provides all the tools and features you need 
            to build a successful hosting business.
          </p>
        </div>

        <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white rounded-full p-4 shadow-sm group-hover:shadow-md transition-shadow">
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