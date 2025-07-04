'use client';

import { ShopHero } from '@/components/shop/shop-hero';
import { ShopCategories } from '@/components/shop/shop-categories';
import { ShopProducts } from '@/components/shop/shop-products';
import { useGSAP } from '@/hooks/use-gsap';

export default function Shop() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <ShopHero />
      <ShopCategories />
      <ShopProducts />
    </div>
  );
}