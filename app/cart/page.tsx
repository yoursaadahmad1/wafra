'use client';

import { CartHero } from '@/components/cart/cart-hero';
import { CartItems } from '@/components/cart/cart-items';
import { CartSummary } from '@/components/cart/cart-summary';
import { useGSAP } from '@/hooks/use-gsap';

export default function Cart() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <CartHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <CartItems />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
}