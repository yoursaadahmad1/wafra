'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Shield, Zap, Award } from 'lucide-react';

export function PricingHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* 3D Pricing Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1,
            }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="w-full h-full flex items-center justify-center">
                {i % 4 === 0 && <DollarSign className="h-8 w-8 text-blue-400/60" />}
                {i % 4 === 1 && <Shield className="h-8 w-8 text-purple-400/60" />}
                {i % 4 === 2 && <Zap className="h-8 w-8 text-indigo-400/60" />}
                {i % 4 === 3 && <Award className="h-8 w-8 text-cyan-400/60" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Price Tags */}
      <div className="absolute inset-0 overflow-hidden">
        {['$3.99', '$7.99', '$15.99', '$39.99', '$99.99'].map((price, i) => (
          <motion.div
            key={price}
            className="absolute text-white/20 font-bold text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-25, 25, -25],
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          >
            {price}
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
            <Badge className="bg-blue-600 text-white mb-6">
              30-Day Money Back Guarantee
            </Badge>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Choose the perfect hosting plan for your needs. All plans include our core features 
            with no hidden fees or surprises.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>99.9% Uptime SLA</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}