'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'WAFRA has been incredible for our startup. The performance is outstanding and their support team is always there when we need help.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Developer, WebCorp',
    avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The uptime has been perfect and the speed is amazing. I\'ve tried many hosting providers, but WAFRA is by far the best.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Blogger, LifeStyle',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'As a blogger, I need reliable hosting that won\'t break my budget. WAFRA provides excellent value with great features.',
    rating: 5
  },
  {
    name: 'David Wilson',
    role: 'CTO, InnovateLab',
    avatar: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The technical support is exceptional. They helped us migrate our complex application seamlessly. Highly recommended!',
    rating: 5
  },
  {
    name: 'Lisa Thompson',
    role: 'Designer, Creative Studio',
    avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Beautiful control panel and excellent performance. My clients\' websites load incredibly fast. Very satisfied with the service.',
    rating: 5
  },
  {
    name: 'James Miller',
    role: 'Entrepreneur, StartupX',
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Switched to WAFRA last year and haven\'t looked back. The reliability and customer service are top-notch.',
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our customers say about our hosting services.
          </p>
        </div>

        <div className="animate-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}