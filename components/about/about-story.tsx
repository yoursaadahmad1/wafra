'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Rocket, Users, Trophy } from 'lucide-react';

const milestones = [
  {
    year: '2009',
    title: 'The Beginning',
    description: 'Founded with a vision to provide reliable and affordable hosting solutions.',
    icon: Lightbulb,
    color: 'text-yellow-600'
  },
  {
    year: '2012',
    title: 'Rapid Growth',
    description: 'Expanded our infrastructure and reached 10,000 satisfied customers.',
    icon: Rocket,
    color: 'text-blue-600'
  },
  {
    year: '2018',
    title: 'Global Expansion',
    description: 'Opened data centers worldwide to serve customers globally.',
    icon: Users,
    color: 'text-green-600'
  },
  {
    year: '2024',
    title: 'Industry Leader',
    description: 'Recognized as one of the top hosting providers with 100K+ customers.',
    icon: Trophy,
    color: 'text-purple-600'
  }
];

export function AboutStory() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-neural-network opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small startup to a global hosting provider, here's how we've grown 
            to serve over 100,000 customers worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-gray-100 rounded-full p-4">
                        <Icon className={`h-8 w-8 ${milestone.color}`} />
                      </div>
                    </motion.div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}