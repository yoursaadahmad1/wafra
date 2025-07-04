'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, DollarSign, Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ResellerHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-green-600 text-white mb-6 animate-fade-in">
            Start Your Hosting Business
          </Badge>
          
          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Reseller Hosting
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Build Your Empire
            </span>
          </h1>

          <p className="animate-fade-in text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Start your own hosting business with our white-label reseller hosting plans. 
            Everything you need to succeed in the hosting industry.
          </p>

          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg" asChild>
              <Link href="/cart">
                Start from $19.99/mo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg" asChild>
              <Link href="/contact">
                Learn More
              </Link>
            </Button>
          </div>

          <div className="animate-stagger grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-500/20 rounded-full p-4 mb-4">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">White Label</h3>
              <p className="text-blue-100">Your brand, your business</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500/20 rounded-full p-4 mb-4">
                <DollarSign className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Profitable</h3>
              <p className="text-blue-100">High profit margins</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-500/20 rounded-full p-4 mb-4">
                <Settings className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Full Control</h3>
              <p className="text-blue-100">Manage everything easily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}