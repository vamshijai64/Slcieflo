import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ValueStrip } from '@/components/ValueStrip';
import { PulseGallery } from '@/components/PulseGallery';
import { BeforeAfter } from '@/components/BeforeAfter';
import { HowItWorks } from '@/components/HowItWorks';
import { RoleTabs } from '@/components/RoleTabs';
import { Features } from '@/components/Features';
import { SocialProof } from '@/components/SocialProof';
import { Security } from '@/components/Security';
import { PricingTeaser } from '@/components/PricingTeaser';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Sticky Navbar (contains integrated ribbon) */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-2"> 
        <Hero />
      </div>

      {/* Value Strip */}
      <ValueStrip />

      {/* The Daily Pulse Insights Gallery */}
      <PulseGallery />

      {/* Comparison Section */}
      <BeforeAfter />

      {/* How It Works */}
      <HowItWorks />

      {/* Role-Based Content */}
      <RoleTabs />

      {/* Feature Grid */}
      <Features />

      {/* Social Proof & Metrics */}
      <SocialProof />

      {/* Security & Trust */}
      <Security />

      {/* Pricing / Beta Offer */}
      <PricingTeaser />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Closing CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
