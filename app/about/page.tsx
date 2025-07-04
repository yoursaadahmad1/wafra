'use client';

import { AboutHero } from '@/components/about/about-hero';
import { AboutStory } from '@/components/about/about-story';
import { AboutTeam } from '@/components/about/about-team';
import { AboutValues } from '@/components/about/about-values';
import { useGSAP } from '@/hooks/use-gsap';

export default function About() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
    </div>
  );
}