'use client';

import { motion } from 'framer-motion';
import { Shield, Heart, Zap, Users, Award, Globe } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Reliability',
    description: 'We guarantee 99.9% uptime and provide robust, secure hosting infrastructure.',
    color: 'text-blue-600',
    bgGradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Our customers are at the heart of everything we do. Your success is our success.',
    color: 'text-red-600',
    bgGradient: 'from-red-500/20 to-pink-500/20'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'We continuously innovate to provide cutting-edge hosting solutions.',
    color: 'text-yellow-600',
    bgGradient: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Our diverse team works together to deliver exceptional hosting experiences.',
    color: 'text-green-600',
    bgGradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our hosting services.',
    color: 'text-purple-600',
    bgGradient: 'from-purple-500/20 to-indigo-500/20'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'We serve customers worldwide with our global network of data centers.',
    color: 'text-indigo-600',
    bgGradient: 'from-indigo-500/20 to-blue-500/20'
  }
];

export function AboutValues() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-data-flow opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 bg-gradient-to-br ${values[i % values.length]?.bgGradient || 'from-blue-500/10 to-purple-500/10'} rounded-3xl blur-xl`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            These core values guide everything we do and shape our commitment to providing 
            exceptional hosting services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                className="group text-center p-6 rounded-2xl glass-morphism border border-white/10 hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`bg-gradient-to-br ${value.bgGradient} rounded-full p-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <Icon className={`h-8 w-8 ${value.color}`} />
                  </div>
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}