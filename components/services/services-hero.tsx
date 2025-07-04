'use client';

import { motion } from 'framer-motion';
import { Server, Cloud, Database, Shield, Globe, Zap } from 'lucide-react';

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* 3D Service Elements */}
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
              y: [-30, 30, -30],
              x: [-15, 15, -15],
              rotate: [0, 360],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 12 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                {i % 6 === 0 && <Server className="h-10 w-10 text-blue-400/80" />}
                {i % 6 === 1 && <Cloud className="h-10 w-10 text-purple-400/80" />}
                {i % 6 === 2 && <Database className="h-10 w-10 text-indigo-400/80" />}
                {i % 6 === 3 && <Shield className="h-10 w-10 text-cyan-400/80" />}
                {i % 6 === 4 && <Globe className="h-10 w-10 text-blue-300/80" />}
                {i % 6 === 5 && <Zap className="h-10 w-10 text-purple-300/80" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Hosting Services
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive hosting solutions designed to meet every business need, 
            from startups to enterprise-level applications.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { icon: Server, title: "Shared Hosting", gradient: "from-blue-500 to-cyan-500" },
              { icon: Cloud, title: "VPS Hosting", gradient: "from-purple-500 to-pink-500" },
              { icon: Database, title: "Dedicated Servers", gradient: "from-green-500 to-emerald-500" },
              { icon: Shield, title: "Cloud Hosting", gradient: "from-orange-500 to-red-500" }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-4 mb-4`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-white font-semibold">{service.title}</h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}