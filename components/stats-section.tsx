'use client';

import { Users, Server, Globe, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '100,000+',
    label: 'Happy Customers',
    color: 'text-blue-600'
  },
  {
    icon: Server,
    value: '99.9%',
    label: 'Uptime Guarantee',
    color: 'text-green-600'
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Data Centers',
    color: 'text-purple-600'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience',
    color: 'text-orange-600'
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="animate-stagger grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-gray-100 rounded-full p-4">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}