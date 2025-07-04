'use client';

import { Badge } from '@/components/ui/badge';

export function TwoColumnHero() {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-indigo-600 text-white mb-6 animate-fade-in">
            Flexible Layout
          </Badge>
          
          <h1 className="animate-fade-in text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Two Column Layout
          </h1>

          <p className="animate-fade-in text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            A flexible two-column layout perfect for showcasing content with sidebars, 
            comparisons, or detailed information sections.
          </p>
        </div>
      </div>
    </section>
  );
}