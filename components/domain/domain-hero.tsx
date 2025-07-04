'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Search, Shield, ArrowRight, Dna as Dns, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export function DomainHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-teal-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* 3D Domain Elements */}
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
              y: [-25, 25, -25],
              x: [-12, 12, -12],
              rotate: [0, 360],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500/30 to-blue-500/30 rounded-full backdrop-blur-sm border border-white/20 shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                {i % 4 === 0 && <Globe className="h-6 w-6 text-teal-400/80" />}
                {i % 4 === 1 && <Dns className="h-6 w-6 text-blue-400/80" />}
                {i % 4 === 2 && <LinkIcon className="h-6 w-6 text-indigo-400/80" />}
                {i % 4 === 3 && <Search className="h-6 w-6 text-cyan-400/80" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Domain Extensions */}
      <div className="absolute inset-0 overflow-hidden">
        {['.com', '.net', '.org', '.io', '.dev', '.app', '.tech', '.store'].map((ext, i) => (
          <motion.div
            key={ext}
            className="absolute text-white/30 font-bold text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          >
            {ext}
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
            <Badge className="bg-teal-600 text-white mb-6">
              500+ Domain Extensions
            </Badge>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Domain Registration
            <motion.span
              className="block bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Find Your Perfect Domain
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Secure your perfect domain name with competitive pricing, free WHOIS privacy, 
            and easy management tools.
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
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg" asChild>
                <Link href="#domain-search">
                  Search Domains
                  <Search className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg" asChild>
                <Link href="#pricing">
                  View Pricing
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
                icon: Globe,
                title: "500+ Extensions",
                description: "All popular TLDs available",
                gradient: "from-teal-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Free Privacy",
                description: "WHOIS privacy protection",
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                icon: Search,
                title: "Easy Management",
                description: "Intuitive control panel",
                gradient: "from-indigo-500 to-purple-500"
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
                  <p className="text-blue-100">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}