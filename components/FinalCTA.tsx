'use client';

import React from 'react';
import { Mail, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-navy">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-orange/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="space-y-10">
          <Badge variant="outline" className="bg-white/5 border-white/10 px-4 py-1.5 text-brand-orange uppercase tracking-wider text-[10px] font-bold rounded-full">
            <Zap size={14} className="text-brand-orange fill-current mr-2" />
            <span>Ready to reclaim your time?</span>
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight font-sans uppercase tracking-tight">
            Stop digging.<br />
            <span className="text-brand-orange">Start shipping.</span>
          </h2>
          
          <p className="text-slate-300 text-base max-w-xl mx-auto leading-relaxed font-medium">
            Join 2,000+ engineers already using SliceFlo to automate their daily briefing. 
            Beta access is free and takes 2 minutes to set up.
          </p>

          <div className="max-w-md mx-auto pt-4 relative z-10">
            <form className="flex flex-col sm:flex-row gap-3 p-2 bg-white/5 border border-white/10 rounded-[2rem]">
              <div className="relative flex-grow flex items-center">
                <Mail className="absolute left-4 text-slate-400 w-5 h-5 z-10" />
                <Input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full pl-12 border-none bg-transparent text-white focus-visible:ring-0 font-medium h-10"
                  required
                />
              </div>
              <Button
                variant="orange"
                size="lg"
                className="rounded-full font-bold px-8 shadow-lg shadow-brand-orange/20"
              >
                Join Beta
              </Button>
            </form>
            <p className="mt-4 text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">
              2,134 teams on the waitlist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
