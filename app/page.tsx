'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Manrope, Inter } from 'next/font/google';

// --- Fonts Configuration (Modern, Geometric, Tech) ---
const headingFont = Manrope({ subsets: ['latin'], weight: ['600', '800'] });
const bodyFont = Inter({ subsets: ['latin'], weight: ['400', '500'] });

// --- Components ---

// 1. Floating Glass Navbar (More compact)
const Navbar = () => (
  <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
    <div className="pointer-events-auto flex items-center justify-between px-6 py-3 bg-white/60 backdrop-blur-xl border border-white/40 rounded-full shadow-sm w-auto gap-12 transition-all duration-300 hover:bg-white/90">
      <div className={`${headingFont.className} font-extrabold text-lg tracking-tighter text-neutral-900`}>
        tryfly<span className="text-neutral-400">.</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
        {['Services', 'Method', 'Pricing', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black transition-colors">
            {item}
          </a>
        ))}
      </div>
      <button className={`${bodyFont.className} text-xs font-semibold bg-[#111] text-white px-5 py-2.5 rounded-full hover:scale-105 transition-transform`}>
        Book Call
      </button>
    </div>
  </nav>
);

// 2. Centered Text Reveal Animation
const AnimatedHeading = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const container = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: '100%', rotateZ: 2, opacity: 0 },
        {
          y: '0%',
          rotateZ: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: delay,
          scrollTrigger: {
            trigger: container.current,
            start: 'top 90%',
          },
        }
      );
    }, container);
    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={container} className="overflow-hidden inline-block align-bottom">
      <div ref={textRef} className={`will-change-transform ${className}`}>
        {text}
      </div>
    </div>
  );
};

// 3. Minimal Service Row
const ServiceRow = ({ title, tags }: { title: string; tags: string[] }) => {
  const rowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        rowRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: rowRef.current,
            start: 'top 95%',
          },
        }
      );
    }, rowRef);
    return () => ctx.revert();
  });

  return (
    <div ref={rowRef} className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-neutral-200 hover:border-neutral-400 transition-colors duration-300">
      <h3 className={`${headingFont.className} text-2xl md:text-3xl font-semibold text-neutral-800 tracking-tight`}>
        {title}
      </h3>
      <div className="flex gap-3 mt-3 md:mt-0">
        {tags.map((tag) => (
          <span key={tag} className={`${bodyFont.className} text-xs bg-neutral-100 text-neutral-500 px-3 py-1 rounded-md`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// 4. Premium Pricing Section (NEW ADDITION)
const PricingSection = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".glass-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={containerRef} className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className={`${bodyFont.className} text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4 block`}>
            Investment
          </span>
          <h2 className={`${headingFont.className} text-4xl md:text-5xl font-bold tracking-tight text-neutral-900`}>
            Transparent Pricing
          </h2>
        </div>

        {/* --- MAIN CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* 1. Static Website Card */}
          <div className="glass-card bg-white/60 backdrop-blur-xl border border-white/50 p-8 md:p-10 rounded-[2.5rem] hover:bg-white/80 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className={`${headingFont.className} text-2xl font-bold text-neutral-900`}>Static Website</h3>
                <p className={`${bodyFont.className} text-sm text-neutral-500 mt-1`}>Professional Digital Presence</p>
              </div>
              <div className={`${bodyFont.className} px-4 py-1 rounded-full bg-neutral-200/50 text-xs font-semibold uppercase tracking-wider`}>
                Identity
              </div>
            </div>
            
            <div className={`${headingFont.className} text-4xl md:text-5xl font-extrabold text-neutral-900 mb-8 tracking-tight`}>
              ₹50,000<span className="text-lg font-medium text-neutral-400">/-</span>
            </div>

            <ul className="space-y-3 mb-10">
              {[
                "Modern & clean design",
                "Fast-loading lightweight pages",
                "Mobile-responsive (All Devices)",
                "SEO-friendly structure",
                "SSL certificate (Security)",
                "Seamless user experience",
                "Domain & hosting setup"
              ].map((item, i) => (
                <li key={i} className={`${bodyFont.className} flex items-center gap-3 text-sm text-neutral-600`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className={`${bodyFont.className} text-xs text-neutral-400 mb-8 border-t border-neutral-200 pt-4 italic`}>
              Ideal for: Business profiles, brochures, and info-sites.
            </p>
          </div>

          {/* 2. Dynamic Website Card */}
          <div className="glass-card bg-white/70 backdrop-blur-2xl border border-white/60 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-black/5">
            {/* Subtle Gradient Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-neutral-200/50 rounded-full blur-3xl pointer-events-none" />

            <div className="flex justify-between items-start mb-6 relative">
              <div>
                <h3 className={`${headingFont.className} text-2xl font-bold text-neutral-900`}>Dynamic Website</h3>
                <p className={`${bodyFont.className} text-sm text-neutral-500 mt-1`}>Scalable Content Solution</p>
              </div>
              <div className={`${bodyFont.className} px-4 py-1 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider`}>
                Recommended
              </div>
            </div>

            <div className={`${headingFont.className} text-4xl md:text-5xl font-extrabold text-neutral-900 mb-8 tracking-tight relative`}>
              ₹80,000<span className="text-lg font-medium text-neutral-400">/-</span>
            </div>

            <ul className="space-y-3 mb-10 relative">
              {[
                "Secure Admin Dashboard",
                "Role-based access (Admin/Editor)",
                "Edit content easily (Text/Img)",
                "Contact forms + Email alerts",
                "Content Management System",
                "Google Analytics Integration",
                "Advanced SEO handling"
              ].map((item, i) => (
                <li key={i} className={`${bodyFont.className} flex items-center gap-3 text-sm text-neutral-800 font-medium`}>
                   <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <p className={`${bodyFont.className} text-xs text-neutral-500 mb-8 border-t border-neutral-200 pt-4 italic relative`}>
              Ideal for: Businesses needing regular updates & control.
            </p>
          </div>
        </div>

        {/* --- BOTTOM GRID (Payment & Contact) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Payment Schedule */}
          <div className="glass-card md:col-span-1 bg-white/40 backdrop-blur-md border border-white/40 p-8 rounded-[2rem]">
             <h4 className={`${bodyFont.className} text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6`}>Payment Schedule</h4>
             <div className="space-y-6 relative">
                {/* Connecting Line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-neutral-200" />
                
                {[
                  { label: "Advance", val: "40%", desc: "To initiate project" },
                  { label: "Milestone", val: "30%", desc: "Upon design approval" },
                  { label: "Completion", val: "30%", desc: "Before final go-live" }
                ].map((step, i) => (
                  <div key={i} className="relative pl-6">
                     <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-neutral-300 bg-white" />
                     <div className="flex justify-between items-baseline">
                        <span className={`${headingFont.className} font-bold text-neutral-900`}>{step.val}</span>
                        <span className={`${bodyFont.className} text-xs font-semibold uppercase text-neutral-500`}>{step.label}</span>
                     </div>
                     <p className={`${bodyFont.className} text-xs text-neutral-400 mt-1`}>{step.desc}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* Commitment & Contact */}
          <div className="glass-card md:col-span-2 bg-[#171717] text-white p-8 rounded-[2rem] flex flex-col justify-between relative overflow-hidden">
             {/* Abstract Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

             <div className="relative z-10">
               <h4 className={`${bodyFont.className} text-sm font-bold uppercase tracking-widest text-neutral-500 mb-4`}>Our Commitment</h4>
               <p className={`${headingFont.className} text-lg md:text-xl font-light leading-relaxed text-neutral-200 max-w-lg`}>
                 We believe in perfection. Includes up to <span className="text-white font-semibold underline decoration-neutral-600 underline-offset-4">3 rounds of Revisions</span> to ensure the final product matches your vision exactly.
               </p>
             </div>

             <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
                <div>
                   <span className={`${bodyFont.className} text-xs text-neutral-500 uppercase tracking-widest block mb-2`}>Lead Developers</span>
                   <div className="flex gap-8">
                      <div>
                        <p className={`${headingFont.className} font-bold text-white`}>Nemish Bhuva</p>
                        <a href="tel:+919510891456" className={`${bodyFont.className} text-sm text-neutral-400 hover:text-white transition-colors`}>+91 95108 91456</a>
                      </div>
                      <div>
                        <p className={`${headingFont.className} font-bold text-white`}>Jeet Bherwani</p>
                        <a href="tel:+918469680090" className={`${bodyFont.className} text-sm text-neutral-400 hover:text-white transition-colors`}>+91 84696 80090</a>
                      </div>
                   </div>
                </div>
                <div className="text-right">
                   <p className={`${bodyFont.className} text-xs text-neutral-600`}>
                     *Domain & server hosting costs borne by client.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main Page ---
export default function LandingPage() {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Background color subtle shift
    gsap.to(mainRef.current, {
      backgroundColor: "#ffffff",
      scrollTrigger: {
        trigger: "#services",
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse"
      }
    })
  }, []);

  return (
    <main ref={mainRef} className="bg-[#F5F5F7] min-h-screen selection:bg-black selection:text-white transition-colors duration-1000">
      <Navbar />

      {/* HERO SECTION - Centered & Tight */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-4xl w-full text-center flex flex-col items-center z-10">
          
          {/* Label */}
          <div className="overflow-hidden mb-8">
            <div className={`${bodyFont.className} text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 animate-slide-up`}>
              Est. 2024 — Worldwide
            </div>
          </div>

          {/* Main Headline - Centered */}
          <div className={`${headingFont.className} flex flex-col items-center text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-neutral-900`}>
            <div className="flex gap-3 md:gap-5 flex-wrap justify-center">
              <AnimatedHeading text="Digital" delay={0.1} />
              <AnimatedHeading text="products" delay={0.2} />
            </div>
            <div className="flex gap-3 md:gap-5 flex-wrap justify-center text-neutral-400">
              <AnimatedHeading text="for" delay={0.3} />
              <span className="text-neutral-900">
                <AnimatedHeading text="visionaries." delay={0.4} />
              </span>
            </div>
          </div>

          {/* Subtext */}
          <p className={`${bodyFont.className} mt-12 max-w-lg text-neutral-500 text-center text-lg leading-relaxed opacity-0 animate-fade-in delay-700 fill-mode-forwards`}>
            TryFlySolutions engineers high-performance web applications and brand experiences. Minimalist code. Maximum impact.
          </p>

          {/* Scroll Indicator */}
          <div className="mt-24 h-16 w-[1px] bg-gradient-to-b from-neutral-300 to-transparent"></div>
        </div>
      </section>

      {/* PHILOSOPHY - Narrow Column */}
      <section id="method" className="py-40 px-6">
        <div className="max-w-2xl mx-auto">
           <span className={`${bodyFont.className} text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 block`}>
             The Method
           </span>
           <h2 className={`${headingFont.className} text-3xl md:text-4xl leading-tight font-semibold text-neutral-800`}>
             We strip away the unnecessary. In a world of digital noise, we build <span className="text-neutral-400">clarity</span>. Our software is designed to be felt, not just seen.
           </h2>
        </div>
      </section>

      {/* SERVICES - Centric Grid */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className={`${headingFont.className} text-4xl font-bold tracking-tight text-neutral-900`}>
              Expertise
            </h2>
            <span className={`${bodyFont.className} text-sm text-neutral-400`}>
              (03) Services
            </span>
          </div>

          <div className="flex flex-col">
            <ServiceRow 
              title="Web App Development" 
              tags={['Next.js', 'Typescript', 'SaaS']} 
            />
            <ServiceRow 
              title="Site Development" 
              tags={['WebGL', 'Interaction', 'CMS']} 
            />
            <ServiceRow 
              title="Social Media Mgmt" 
              tags={['Strategy', 'Content', 'Analytics']} 
            />
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION ADDED HERE --- */}
      <PricingSection />

      {/* WORK / SHOWCASE (Optional Visual Break) */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto h-[60vh] bg-[#E5E5E5] rounded-3xl overflow-hidden relative group">
           <div className="absolute inset-0 flex items-center justify-center">
              <p className={`${bodyFont.className} text-neutral-500 text-sm`}>Selected Works Reel</p>
           </div>
           {/* Simulate a minimal video/image container */}
           <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-neutral-900/0 transition-colors duration-500" />
        </div>
      </section>

      {/* FOOTER - Clean & Centered */}
      <footer id="contact" className="py-32 px-6 bg-white border-t border-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${headingFont.className} text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-neutral-900`}>
            Let's build.
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            <a href="mailto:hello@tryfly.solutions" className={`${bodyFont.className} text-xl text-neutral-500 hover:text-black transition-colors border-b border-transparent hover:border-black pb-1`}>
              hello@tryfly.solutions
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-neutral-100">
             <span className={`${headingFont.className} font-bold text-lg tracking-tighter`}>tryfly.</span>
             <div className={`${bodyFont.className} text-sm text-neutral-400 mt-4 md:mt-0`}>
                © 2024 TryFlySolutions Inc.
             </div>
          </div>
        </div>
      </footer>
    </main>
  );
}