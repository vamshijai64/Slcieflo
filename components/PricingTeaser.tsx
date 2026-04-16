'use client';

import React from 'react';
import { Star, Sparkles, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function PricingTeaser() {
  return (
    <section className="py-16 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy uppercase">
            Transparent for early adopters
          </h2>
          <p className="text-slate-500 text-base">
            No complex tiers. Just early access for people who want to move faster.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative p-1 rounded-[1.5rem] bg-navy/5 shadow-md">
            <Card className="rounded-[1.3rem] border-none text-center relative overflow-hidden bg-white shadow-none">
              <CardHeader className="p-8 sm:p-12 pb-0">
                {/* Founding Perks Badge */}
                <div className="absolute top-6 right-6">
                  <Badge variant="outline" className="flex items-center space-x-1 bg-brand-50 border-brand-200 px-3 py-1 text-[10px] font-black text-brand-orange uppercase tracking-widest shadow-sm rounded-full">
                    <Star size={10} className="fill-current" />
                    <span>Founding Perks</span>
                  </Badge>
                </div>

                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center p-3 bg-brand-50 rounded-2xl mb-4 mx-auto border border-brand-orange/10">
                    <Sparkles className="w-8 h-8 text-brand-orange" />
                  </div>
                  
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-bold text-navy leading-none">FREE</h3>
                    <div className="text-xs font-bold text-brand-orange mt-2 uppercase tracking-[0.2em]">During Beta</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8 sm:p-12 pt-0">
                <div className="py-8 border-y border-slate-100 flex flex-col items-center space-y-4">
                  {[
                    "Unlimited integrations",
                    "Unlimited auto-briefs",
                    "Beta-only feature requests",
                    "Lock-in founding member pricing"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-slate-600 font-bold text-sm">
                      <Check size={18} className="text-brand-orange" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-8">
                  <p className="text-xs text-slate-500 italic leading-relaxed font-medium">
                    Note: We will transition to seat-based pricing at GA. 
                    All beta partners will receive a 50% lifetime discount.
                  </p>
                  <Link 
                    href="#hero"
                    className={cn(buttonVariants({ variant: "orange", size: "lg" }), "w-full py-6 text-lg font-bold rounded-xl h-auto")}
                  >
                    Get Early Access Now
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
