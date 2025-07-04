'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, User, Mail, MessageSquare, Clock } from 'lucide-react';
import { useLanguage } from '@/components/language-toggle';

export function ContactForm() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-xl relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
          <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
        </div>
        
        <CardHeader className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center">
              <MessageSquare className="h-8 w-8 text-indigo-600 mr-3" />
              {t('sendMessage')}
            </CardTitle>
            <p className="text-gray-600 mt-2">We'll get back to you within 24 hours</p>
          </motion.div>
        </CardHeader>
        
        <CardContent className="space-y-6 relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center text-gray-700">
                <User className="h-4 w-4 mr-2" />
                {t('firstName')}
              </Label>
              <motion.div whileFocus={{ scale: 1.02 }}>
                <Input 
                  id="firstName" 
                  placeholder="John" 
                  className="bg-white/80 border-gray-200 focus:border-indigo-500 transition-all duration-300"
                />
              </motion.div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-gray-700">{t('lastName')}</Label>
              <motion.div whileFocus={{ scale: 1.02 }}>
                <Input 
                  id="lastName" 
                  placeholder="Doe" 
                  className="bg-white/80 border-gray-200 focus:border-indigo-500 transition-all duration-300"
                />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Label htmlFor="email" className="flex items-center text-gray-700">
              <Mail className="h-4 w-4 mr-2" />
              {t('emailAddress')}
            </Label>
            <motion.div whileFocus={{ scale: 1.02 }}>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                className="bg-white/80 border-gray-200 focus:border-indigo-500 transition-all duration-300"
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Label htmlFor="subject" className="text-gray-700">{t('subject')}</Label>
            <Select>
              <SelectTrigger className="bg-white/80 border-gray-200 focus:border-indigo-500">
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="technical">Technical Support</SelectItem>
                <SelectItem value="billing">Billing Question</SelectItem>
                <SelectItem value="sales">Sales Inquiry</SelectItem>
                <SelectItem value="migration">Website Migration</SelectItem>
                <SelectItem value="custom">Custom Solution</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
          
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Label htmlFor="message" className="text-gray-700">{t('message')}</Label>
            <motion.div whileFocus={{ scale: 1.01 }}>
              <Textarea 
                id="message" 
                placeholder="Tell us how we can help you..."
                rows={6}
                className="bg-white/80 border-gray-200 focus:border-indigo-500 transition-all duration-300 resize-none"
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                <Send className="h-5 w-5 mr-3" />
                {t('sendMessageBtn')}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center space-x-2 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Clock className="h-4 w-4" />
            <span>We typically respond within 2-4 hours</span>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}