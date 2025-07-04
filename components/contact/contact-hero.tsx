'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Phone, Mail, MapPin, Clock, Headphones, Globe, Zap } from 'lucide-react';
import { useLanguage } from '@/components/language-toggle';

export function ContactHero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* 3D Contact Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
              rotateY: [0, 360],
              rotateX: [-10, 10, -10],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 12 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500/40 to-pink-500/40 rounded-2xl backdrop-blur-sm border border-white/30 shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                {i % 6 === 0 && <MessageCircle className="h-10 w-10 text-indigo-400/90" />}
                {i % 6 === 1 && <Phone className="h-10 w-10 text-purple-400/90" />}
                {i % 6 === 2 && <Mail className="h-10 w-10 text-pink-400/90" />}
                {i % 6 === 3 && <MapPin className="h-10 w-10 text-indigo-300/90" />}
                {i % 6 === 4 && <Headphones className="h-10 w-10 text-purple-300/90" />}
                {i % 6 === 5 && <Globe className="h-10 w-10 text-pink-300/90" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Communication Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {['24/7', 'CHAT', 'CALL', 'EMAIL', 'HELP'].map((text, i) => (
          <motion.div
            key={text}
            className="absolute text-white/20 font-bold text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-25, 25, -25],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.3, 0.8],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
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
            <Badge className="bg-indigo-600 text-white mb-6 animate-pulse">
              <Zap className="h-4 w-4 mr-2" />
              {t('support247')}
            </Badge>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('getInTouch')}
            <motion.span
              className="block bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We're Here to Help
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('contactDescription')}
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              {
                icon: MessageCircle,
                title: t('liveChat'),
                description: t('instantSupport'),
                detail: "Average response: 30 seconds",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: Phone,
                title: t('phoneSupport'),
                description: t('technicalAssistance'),
                detail: "+1 (555) 123-4567",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Mail,
                title: t('emailSupport'),
                description: t('detailedHelp'),
                detail: "support@wafra.net",
                gradient: "from-pink-500 to-indigo-500"
              }
            ].map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center glass-morphism rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <motion.div
                    className={`bg-gradient-to-br ${contact.gradient} rounded-2xl p-4 mb-4 shadow-xl`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{contact.title}</h3>
                  <p className="text-purple-100 mb-2">{contact.description}</p>
                  <p className="text-sm text-indigo-200 font-medium">{contact.detail}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}