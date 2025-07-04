'use client';

import { BlogHero } from '@/components/blog/blog-hero';
import { BlogList } from '@/components/blog/blog-list';
import { useGSAP } from '@/hooks/use-gsap';

export default function Blog() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <BlogHero />
      <BlogList />
    </div>
  );
}