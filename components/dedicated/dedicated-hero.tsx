'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Server, Cpu, HardDrive, ArrowRight, Database, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export function DedicatedHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* 3D Dedicated Server Elements */}
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
              y: [-40, 40, -40],
              x: [-20, 20, -20],
              rotateY: [0, 360],
              rotateX: [-15, 15, -15],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          >
            <div className="w-24 h-32 bg-gradient-to-br from-red-500/40 to-orange-500/40 rounded-xl backdrop-blur-sm border border-white/30 shadow-2xl">
              <div className="w-full h-full flex flex-col items-center justify-center space-y-2">
                {i % 5 === 0 && <Server className="h-8 w-8 text-red-400/90" />}
                {i % 5 === 1 && <Database className="h-8 w-8 text-orange-400/90" />}
                {i % 5 === 2 && <Cpu className="h-8 w-8 text-yellow-400/90" />}
                {i % 5 === 3 && <HardDrive className="h-8 w-8 text-red-300/90" />}
                {i % 5 === 4 && <Shield className="h-8 w-8 text-orange-300/90" />}
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                </div>
                <div className="text-xs text-white/70 font-mono">DEDICATED</div>
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
            <Badge className="bg-red-600 text-white mb-6">
              Maximum Performance
            </Badge>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dedicated Servers
            <motion.span
              className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Ultimate Power
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Get the ultimate in performance and control with our bare-metal dedicated servers. 
            Perfect for high-traffic websites and resource-intensive applications.
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
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg" asChild>
                <Link href="/cart">
                  Start from $99.99/mo
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
                  Custom Configuration
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
                icon: Server,
                title: "Bare Metal",
                description: "100% dedicated hardware",
                gradient: "from-red-500 to-orange-500"
              },
              {
                icon: Cpu,
                title: "Enterprise CPUs",
                description: "Latest Intel & AMD processors",
                gradient: "from-orange-500 to-yellow-500"
              },
              {
                icon: HardDrive,
                title: "NVMe Storage",
                description: "Ultra-fast NVMe SSD drives",
                gradient: "from-yellow-500 to-red-500"
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
                  <p className="text-orange-100">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}