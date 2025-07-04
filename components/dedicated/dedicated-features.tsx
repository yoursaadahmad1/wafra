'use client';

import { Server, Shield, Zap, Settings, Database, Globe, Clock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Server,
    title: 'Bare Metal Performance',
    description: '100% dedicated hardware resources with no virtualization overhead for maximum performance.',
    color: 'text-red-600'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced DDoS protection, hardware firewalls, and secure remote management.',
    color: 'text-blue-600'
  },
  {
    icon: Zap,
    title: 'NVMe Storage',
    description: 'Ultra-fast NVMe SSD storage for exceptional I/O performance and data access speeds.',
    color: 'text-yellow-600'
  },
  {
    icon: Settings,
    title: 'Full Customization',
    description: 'Complete control over hardware configuration, OS installation, and server management.',
    color: 'text-green-600'
  },
  {
    icon: Database,
    title: 'Enterprise Hardware',
    description: 'Latest Intel Xeon and AMD EPYC processors with ECC memory and redundant components.',
    color: 'text-purple-600'
  },
  {
    icon: Globe,
    title: 'Global Data Centers',
    description: 'Multiple tier-3 data centers worldwide with redundant network connections.',
    color: 'text-indigo-600'
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description: 'Fast server provisioning and deployment with automated OS installation.',
    color: 'text-orange-600'
  },
  {
    icon: Headphones,
    title: 'Premium Support',
    description: 'Dedicated support team with hardware replacement and remote hands service.',
    color: 'text-teal-600'
  }
];

export function DedicatedFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Dedicated Servers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the ultimate in performance, security, and control with our 
            premium dedicated server hosting solutions.
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