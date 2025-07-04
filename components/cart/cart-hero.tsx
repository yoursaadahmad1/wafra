'use client';

import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Shield, CreditCard } from 'lucide-react';

export function CartHero() {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-blue-600 text-white mb-6 animate-fade-in">
            Secure Checkout
          </Badge>
          
          <h1 className="animate-fade-in text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Your Cart
          </h1>

          <p className="animate-fade-in text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Review your selected services and complete your order with our secure checkout process.
          </p>

          <div className="animate-stagger grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-500/20 rounded-full p-4 mb-4">
                <ShoppingCart className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-sm font-semibold text-white">Easy Ordering</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-500/20 rounded-full p-4 mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-sm font-semibold text-white">Secure Payment</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-500/20 rounded-full p-4 mb-4">
                <CreditCard className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-sm font-semibold text-white">Instant Setup</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}