'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Star, Gift, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ShopHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-pink-600 text-white mb-6 animate-fade-in">
            Premium Add-ons & Services
          </Badge>
          
          <h1 className="animate-fade-in text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            WAFRA Shop
            <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Enhance Your Hosting
            </span>
          </h1>

          <p className="animate-fade-in text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Discover premium add-ons, security services, and professional tools to 
            supercharge your hosting experience.
          </p>

          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg" asChild>
              <Link href="#products">
                Browse Products
                <ShoppingBag className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg" asChild>
              <Link href="/contact">
                Custom Solutions
              </Link>
            </Button>
          </div>

          <div className="animate-stagger grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-pink-500/20 rounded-full p-4 mb-4">
                <Star className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Premium Services</h3>
              <p className="text-purple-100">Professional add-ons</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-500/20 rounded-full p-4 mb-4">
                <Gift className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Special Offers</h3>
              <p className="text-purple-100">Exclusive deals & bundles</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-indigo-500/20 rounded-full p-4 mb-4">
                <ShoppingBag className="h-8 w-8 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Easy Shopping</h3>
              <p className="text-purple-100">One-click purchases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}