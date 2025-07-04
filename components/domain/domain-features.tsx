'use client';

import { Shield, Globe, Settings, Clock, Headphones, Award, Lock, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Free WHOIS Privacy',
    description: 'Protect your personal information with complimentary WHOIS privacy protection.',
    color: 'text-teal-600'
  },
  {
    icon: Globe,
    title: 'DNS Management',
    description: 'Easy-to-use DNS management tools with advanced record types and global propagation.',
    color: 'text-blue-600'
  },
  {
    icon: Settings,
    title: 'Domain Forwarding',
    description: 'Redirect your domain to any URL with masked or unmasked forwarding options.',
    color: 'text-purple-600'
  },
  {
    icon: Clock,
    title: 'Auto-Renewal',
    description: 'Never lose your domain with automatic renewal and expiration notifications.',
    color: 'text-green-600'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert domain support available around the clock via multiple channels.',
    color: 'text-red-600'
  },
  {
    icon: Award,
    title: 'ICANN Accredited',
    description: 'Fully accredited domain registrar with direct access to all major registries.',
    color: 'text-orange-600'
  },
  {
    icon: Lock,
    title: 'Domain Lock',
    description: 'Protect against unauthorized transfers with domain lock security features.',
    color: 'text-indigo-600'
  },
  {
    icon: Zap,
    title: 'Instant Activation',
    description: 'Domains are activated instantly upon successful registration and payment.',
    color: 'text-yellow-600'
  }
];

export function DomainFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Domain Registration Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your domains effectively with professional tools and features.
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