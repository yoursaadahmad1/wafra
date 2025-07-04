'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, Heart } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* 3D About Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              rotate: [0, 360],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                {i % 4 === 0 && <Users className="h-10 w-10 text-emerald-400/80" />}
                {i % 4 === 1 && <Award className="h-10 w-10 text-teal-400/80" />}
                {i % 4 === 2 && <Globe className="h-10 w-10 text-cyan-400/80" />}
                {i % 4 === 3 && <Heart className="h-10 w-10 text-emerald-300/80" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-emerald-600 text-white mb-6">
              Our Story
            </Badge>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About WAFRA
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We&apos;re passionate about providing reliable, fast, and secure hosting solutions 
            that help businesses grow and succeed online.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '100K+', label: 'Happy Customers' },
              { number: '99.9%', label: 'Uptime Guarantee' },
              { number: '24/7', label: 'Expert Support' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-emerald-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}