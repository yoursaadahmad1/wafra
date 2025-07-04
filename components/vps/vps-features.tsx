'use client';

import { Server, Shield, Zap, Settings, Database, Globe, Clock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Server,
    title: 'Dedicated Resources',
    description: 'Guaranteed CPU, RAM, and storage resources that are never shared with other users.',
    color: 'text-purple-600'
  },
  {
    icon: Shield,
    title: 'Full Root Access',
    description: 'Complete administrative control over your server with root SSH access.',
    color: 'text-blue-600'
  },
  {
    icon: Zap,
    title: 'SSD Storage',
    description: 'High-performance SSD storage for faster data access and improved performance.',
    color: 'text-yellow-600'
  },
  {
    icon: Settings,
    title: 'Choice of OS',
    description: 'Install your preferred operating system including Ubuntu, CentOS, Debian, and more.',
    color: 'text-green-600'
  },
  {
    icon: Database,
    title: 'KVM Virtualization',
    description: 'Industry-leading KVM virtualization technology for optimal performance and isolation.',
    color: 'text-red-600'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Multiple data center locations worldwide for optimal performance and redundancy.',
    color: 'text-indigo-600'
  },
  {
    icon: Clock,
    title: 'Instant Deployment',
    description: 'Your VPS is deployed and ready to use within 60 seconds of order completion.',
    color: 'text-orange-600'
  },
  {
    icon: Headphones,
    title: '24/7 Expert Support',
    description: 'Round-the-clock technical support from VPS specialists via multiple channels.',
    color: 'text-teal-600'
  }
];

export function VPSFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our VPS Hosting?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade VPS hosting with the performance, security, and control 
            your applications deserve.
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