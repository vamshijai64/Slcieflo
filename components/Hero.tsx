'use client';

import React from 'react';
import { Mail, ArrowRight, ShieldCheck, CheckCircle2, Zap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-white" id="hero">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-grid -z-10 pointer-events-none opacity-[0.03]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.02),transparent_60%)] -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-6 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-50 border border-navy/5">
              <Badge variant="orange" className="px-1.5 py-0 rounded-full text-[10px] font-bold">ALPHA</Badge>
              <span className="text-[10px] font-bold text-navy/60 uppercase tracking-widest">Waitlist now open</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] text-navy">
                Stop digging.<br />
                <span className="text-brand-orange">Start shipping.</span>
              </h2>
              <p className="text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
                SliceFlo turns Jira + Slack noise into an actionable daily brief. 
                Reclaim your team's time from endless status meetings.
              </p>
            </div>

            {/* Simple Email Form */}
            <div className="max-w-md mx-auto lg:mx-0 space-y-4">
              <form className="flex flex-col sm:flex-row gap-3 p-1.5 bg-white border border-slate-200 rounded-full shadow-sm focus-within:border-brand-orange/30 transition-all">
                <div className="relative flex-grow flex items-center">
                  <Mail className="absolute left-4 text-slate-400 w-4 h-4" />
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    className="pl-11 border-none bg-transparent shadow-none focus-visible:ring-0 text-navy font-medium placeholder:text-slate-400 h-10"
                    required
                  />
                </div>
                <Button
                  variant="orange"
                  size="lg"
                  className="rounded-full font-bold px-8 h-10"
                >
                  Join Waitlist
                </Button>
              </form>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-1">
                <div className="flex items-center space-x-2 text-[10px] font-bold text-navy/40 uppercase tracking-widest">
                  <ShieldCheck size={12} className="text-brand-orange" />
                  <span>No data training</span>
                </div>
                <div className="flex items-center space-x-2 text-[10px] font-bold text-navy/40 uppercase tracking-widest">
                  <Zap size={12} className="text-brand-orange" />
                  <span>2-min setup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean UI Mock */}
          <div className="relative group">
            {/* Main Mock */}
            <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden animate-float">
              {/* Header */}
              <div className="bg-navy p-4 flex items-center justify-between">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <span className="text-[9px] font-bold text-white/50 uppercase tracking-widest">SliceFlo.AI</span>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                <div className="h-4 w-32 bg-slate-100 rounded-full" />
                
                <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-brand-orange" />
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                       <div className="h-3 w-40 bg-navy/10 rounded" />
                       <span className="text-[10px] font-bold text-brand-orange">SF-901</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-2 w-full bg-navy/5 rounded" />
                      <div className="h-2 w-3/4 bg-navy/5 rounded" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex -space-x-2">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200" />
                       ))}
                   </div>
                   <div className="flex items-center space-x-2">
                      <Clock size={12} className="text-brand-orange" />
                      <span className="text-[10px] font-bold text-navy/30 uppercase tracking-widest">+4h Saved</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Simple Overlay */}
            <div className="absolute -bottom-6 -right-6 w-40 p-3 bg-white border border-slate-100 rounded-2xl shadow-lg z-10 animate-float [animation-delay:-2s]">
               <div className="flex items-center space-x-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[8px] font-bold text-navy/40 uppercase tracking-widest">Status</span>
               </div>
               <p className="text-[10px] font-bold text-navy">Briefing Ready</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
