'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useGSAP() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scrolling
    gsap.config({
      autoSleep: 60,
      force3D: false,
      nullTargetWarn: false,
    });

    // Fade in animations with enhanced easing
    gsap.utils.toArray('.animate-fade-in').forEach((element: any) => {
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Slide in from left with bounce
    gsap.utils.toArray('.animate-slide-left').forEach((element: any) => {
      gsap.fromTo(element,
        { 
          opacity: 0, 
          x: -120,
          rotation: -5
        },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.4,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Slide in from right with bounce
    gsap.utils.toArray('.animate-slide-right').forEach((element: any) => {
      gsap.fromTo(element,
        { 
          opacity: 0, 
          x: 120,
          rotation: 5
        },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.4,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Scale animations with elastic effect
    gsap.utils.toArray('.animate-scale').forEach((element: any) => {
      gsap.fromTo(element,
        { 
          opacity: 0, 
          scale: 0.6,
          rotation: 10
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.6,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Enhanced stagger animations
    gsap.utils.toArray('.animate-stagger').forEach((container: any) => {
      const children = container.children;
      gsap.fromTo(children,
        { 
          opacity: 0, 
          y: 80,
          scale: 0.8,
          rotationX: 45
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1,
          stagger: {
            amount: 0.8,
            from: "start",
            ease: "power2.out"
          },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Zoom in animations
    gsap.utils.toArray('.animate-zoom-in').forEach((element: any) => {
      gsap.fromTo(element,
        { 
          opacity: 0, 
          scale: 0.3,
          transformOrigin: "center center"
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Zoom out animations
    gsap.utils.toArray('.animate-zoom-out').forEach((element: any) => {
      gsap.fromTo(element,
        { 
          opacity: 0, 
          scale: 1.5,
          transformOrigin: "center center"
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Parallax effect for background elements
    gsap.utils.toArray('.parallax-bg').forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Floating animation for hero elements
    gsap.utils.toArray('.animate-float').forEach((element: any, index: number) => {
      gsap.to(element, {
        y: -20,
        duration: 2 + index * 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}