'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle, Phone, Mail, Headphones, HelpCircle, Book } from 'lucide-react';

export function SupportHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-900 via-blue-900 to-teal-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* 3D Support Elements */}
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
              y: [-25, 25, -25],
              x: [-12, 12, -12],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-500/30 to-teal-500/30 rounded-xl backdrop-blur-sm border border-white/20 shadow-xl">
              <div className="w-full h-full flex items-center justify-center">
                {i % 5 === 0 && <Headphones className="h-8 w-8 text-green-400/80" />}
                {i % 5 === 1 && <HelpCircle className="h-8 w-8 text-teal-400/80" />}
                {i % 5 === 2 && <Book className="h-8 w-8 text-blue-400/80" />}
                {i % 5 === 3 && <MessageCircle className="h-8 w-8 text-green-300/80" />}
                {i % 5 === 4 && <Phone className="h-8 w-8 text-teal-300/80" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            How Can We Help You?
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find answers to your questions, get technical support, or contact our expert team. 
            We're here to help 24/7.
          </motion.p>

          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Search for help articles, tutorials, or FAQs..."
                className="text-lg py-6 bg-white/90 backdrop-blur-sm"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700 px-8">
                  <Search className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Instant support available",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: Phone,
                title: "Phone Support",
                description: "24/7 technical assistance",
                gradient: "from-blue-500 to-teal-500"
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Detailed technical help",
                gradient: "from-teal-500 to-cyan-500"
              }
            ].map((support, index) => {
              const Icon = support.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className={`bg-gradient-to-br ${support.gradient} rounded-2xl p-4 mb-4`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{support.title}</h3>
                  <p className="text-green-100">{support.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}