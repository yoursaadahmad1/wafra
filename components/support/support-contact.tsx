'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react';

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    availability: '24/7 Available',
    action: 'Start Chat',
    color: 'text-green-600'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    availability: '24/7 Available',
    action: 'Call Now: +1 (555) 123-4567',
    color: 'text-blue-600'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive answers',
    availability: 'Response within 2 hours',
    action: 'Send Email',
    color: 'text-purple-600'
  }
];

export function SupportContact() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Our Support Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your preferred way to get in touch with our expert support team.
          </p>
        </div>

        <div className="animate-stagger grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-gray-100 rounded-full p-4">
                      <Icon className={`h-8 w-8 ${method.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{method.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{method.availability}</span>
                  </div>
                  <Button className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-white rounded-lg p-8 shadow-sm border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Emergency Support
            </h3>
            <p className="text-gray-600 mb-6">
              For critical issues affecting your live website or server, contact our emergency support line.
            </p>
            <Button size="lg" variant="outline" className="border-red-500 text-red-600 hover:bg-red-50">
              Emergency Hotline: +1 (555) 911-HELP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}