'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I get started with hosting?',
    answer: 'Getting started is easy! Choose a hosting plan that fits your needs, complete the signup process, and you\'ll receive your login credentials within minutes. Our setup wizard will guide you through the initial configuration.'
  },
  {
    question: 'What is the difference between shared and VPS hosting?',
    answer: 'Shared hosting means your website shares server resources with other websites, making it cost-effective for smaller sites. VPS hosting gives you dedicated resources and more control, ideal for growing websites with higher traffic.'
  },
  {
    question: 'Do you provide website migration services?',
    answer: 'Yes! We offer free website migration for all new customers. Our technical team will handle the entire migration process to ensure your website is transferred safely without any downtime.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our support team consists of experienced hosting professionals who can help with any technical issues.'
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: 'Yes, we offer a 30-day money-back guarantee on all hosting plans. If you\'re not satisfied with our service, you can cancel within 30 days for a full refund.'
  },
  {
    question: 'How often do you backup websites?',
    answer: 'We perform automated daily backups of all websites. Backups are stored securely and can be restored with just a few clicks from your control panel. We also offer additional backup options for enhanced protection.'
  }
];

export function SupportFAQ() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-green-900">
        <div className="absolute inset-0 bg-data-flow opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Quick answers to the most common questions about our hosting services.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass-morphism border border-white/10 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-white">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-blue-100 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}