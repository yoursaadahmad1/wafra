'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Globe, Headphones, MessageCircle, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/components/language-toggle';

export function ContactInfo() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('ourHeadquarters'),
      details: ['123 Tech Street', 'San Francisco, CA 94105', 'United States'],
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Phone,
      title: t('phoneNumbers'),
      details: ['+1 (555) 123-4567 (Sales)', '+1 (555) 987-6543 (Support)'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Mail,
      title: t('emailAddresses'),
      details: ['support@wafra.net', 'sales@wafra.net', 'billing@wafra.net'],
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Clock,
      title: t('businessHours'),
      details: ['Monday - Friday: 9:00 AM - 6:00 PM PST', 'Saturday: 10:00 AM - 4:00 PM PST', '24/7 Technical Support Available'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: t('liveChat'),
      description: 'Start chatting with our support team',
      action: 'Start Chat',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive help articles',
      action: 'Browse Articles',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ExternalLink,
      title: 'System Status',
      description: 'Check our current system status',
      action: 'View Status',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Contact Information Card */}
      <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
          <div className="absolute inset-0 bg-neural-network opacity-20"></div>
        </div>
        
        <CardHeader className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('contactInformation')}
            </CardTitle>
            <p className="text-gray-600 mt-2">Multiple ways to reach our team</p>
          </motion.div>
        </CardHeader>
        
        <CardContent className="space-y-6 relative z-10">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 hover:border-gray-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5, scale: 1.02 }}
              >
                <motion.div
                  className={`${info.bgColor} rounded-full p-3`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className={`h-6 w-6 ${info.color}`} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm leading-relaxed">{detail}</p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="space-y-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
            >
              <Card className={`border-0 shadow-lg bg-gradient-to-r ${action.gradient} text-white hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="h-8 w-8" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{action.title}</h3>
                      <p className="text-white/90 text-sm">{action.description}</p>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm">
                      {action.action}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Emergency Support */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Card className="border-0 shadow-lg bg-gradient-to-br from-red-600 to-orange-600 text-white">
          <CardContent className="p-6 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Headphones className="h-12 w-12 mx-auto mb-4" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">{t('emergencySupport')}</h3>
            <p className="text-red-100 mb-4 text-sm">
              For critical issues affecting your live website
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="bg-white text-red-600 hover:bg-red-50 font-bold">
                Call Emergency Line: +1 (555) 911-HELP
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}