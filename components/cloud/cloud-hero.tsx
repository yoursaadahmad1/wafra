'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cloud, Zap, Globe, ArrowRight, Server, Database, Shield } from 'lucide-react';
import Link from 'next/link';

export function CloudHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* 3D Cloud Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-40, 40, -40],
              x: [-20, 20, -20],
              rotateY: [0, 360],
              rotateX: [-15, 15, -15],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          >
            <div className="w-28 h-20 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-3xl backdrop-blur-sm border border-white/30 shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                {i % 4 === 0 && <Cloud className="h-10 w-10 text-cyan-400/90" />}
                {i % 4 === 1 && <Server className="h-10 w-10 text-blue-400/90" />}
                {i % 4 === 2 && <Database className="h-10 w-10 text-indigo-400/90" />}
                {i % 4 === 3 && <Shield className="h-10 w-10 text-cyan-300/90" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Cloud Keywords */}
      <div className="absolute inset-0 overflow-hidden">
        {['SCALABLE', 'ELASTIC', 'AUTO-SCALE', 'LOAD BALANCE', 'REDUNDANT'].map((text, i) => (
          <motion.div
            key={text}
            className="absolute text-white/20 font-bold text-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.3, 0.8],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          >
            {text}
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
            <Badge className="bg-cyan-600 text-white mb-6">
              Auto-Scaling Infrastructure
            </Badge>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cloud Hosting
            <motion.span
              className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Infinite Scalability
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the future of hosting with our elastic cloud infrastructure. 
            Scale automatically, pay only for what you use, and enjoy 99.99% uptime.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg" asChild>
                <Link href="/cart">
                  Start from $0.01/hour
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg" asChild>
                <Link href="/contact">
                  Enterprise Solutions
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              {
                icon: Zap,
                title: "Auto-Scaling",
                description: "Resources scale automatically",
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                icon: Globe,
                title: "Global Network",
                description: "Worldwide edge locations",
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                icon: Cloud,
                title: "Pay-as-you-use",
                description: "Only pay for resources used",
                gradient: "from-indigo-500 to-cyan-500"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-4 mb-4`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-cyan-100">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}