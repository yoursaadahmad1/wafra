'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is included in all hosting plans?',
    answer: 'All our hosting plans include SSD storage, unlimited bandwidth, free SSL certificates, daily backups, email accounts, one-click WordPress installation, and 24/7 customer support.'
  },
  {
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer: 'Yes, you can upgrade or downgrade your hosting plan at any time. Upgrades are instant, and downgrades take effect at your next billing cycle. We\'ll prorate any charges accordingly.'
  },
  {
    question: 'Do you offer a money-back guarantee?',
    answer: 'Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you\'re not satisfied with our service, you can cancel within 30 days for a full refund.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise customers, we also offer invoice-based billing.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no setup fees for any of our hosting plans. You only pay the monthly or yearly hosting fee based on your chosen plan.'
  },
  {
    question: 'How long does it take to set up my hosting account?',
    answer: 'Your hosting account is typically activated within 5 minutes of payment confirmation. You\'ll receive your login credentials and setup instructions via email immediately.'
  },
  {
    question: 'Can I host multiple websites on one account?',
    answer: 'Yes, depending on your plan. The Starter plan allows 1 website, Professional allows 10 websites, and Business/Enterprise plans allow unlimited websites.'
  },
  {
    question: 'Do you provide website migration services?',
    answer: 'Yes, we offer free website migration services for all new customers. Our technical team will handle the migration process to ensure your website is transferred safely and efficiently.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our support team consists of experienced hosting professionals who can help with any technical issues.'
  },
  {
    question: 'Are there any bandwidth or traffic limits?',
    answer: 'All our hosting plans come with unlimited bandwidth. However, we do have fair usage policies in place to ensure optimal performance for all customers.'
  }
];

export function PricingFAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions about our pricing or hosting plans? Find answers to the most commonly asked questions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@wafra.net"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Email Support
            </a>
            <a
              href="tel:+1-555-123-4567"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Call Us: +1 (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}