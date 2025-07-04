'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust WAFRA IT SOlutions for their hosting needs. 
            Start your free trial today with our 30-day money-back guarantee.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <Link href="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg" asChild>
              <Link href="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-6 w-6 text-green-400" />
              <span className="text-white">30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Zap className="h-6 w-6 text-yellow-400" />
              <span className="text-white">Setup in Under 5 Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}