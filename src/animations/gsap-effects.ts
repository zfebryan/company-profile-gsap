"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeInUp = (element: Element | null, delay: number = 0) => {
  if (!element) return;
  
  gsap.fromTo(
    element,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const fadeInLeft = (element: Element | null, delay: number = 0) => {
  if (!element) return;
  
  gsap.fromTo(
    element,
    { opacity: 0, x: -60 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const fadeInRight = (element: Element | null, delay: number = 0) => {
  if (!element) return;
  
  gsap.fromTo(
    element,
    { opacity: 0, x: 60 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const scaleIn = (element: Element | null, delay: number = 0) => {
  if (!element) return;
  
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const staggerFadeInUp = (elements: Element[], stagger: number = 0.1) => {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: elements[0],
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const parallaxEffect = (element: Element | null, speed: number = 0.5) => {
  if (!element) return;
  
  gsap.to(element, {
    y: () => window.innerHeight * speed * -0.5,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

export const textReveal = (element: Element | null) => {
  if (!element) return;
  
  gsap.fromTo(
    element,
    { 
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
    },
    {
      opacity: 1,
      clipPath: "inset(0 0% 0 0)",
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
};

export const floatingAnimation = (element: Element | null) => {
  if (!element) return;
  
  gsap.to(element, {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
};

export const rotateAnimation = (element: Element | null, duration: number = 20) => {
  if (!element) return;
  
  gsap.to(element, {
    rotation: 360,
    duration,
    repeat: -1,
    ease: "none",
  });
};
