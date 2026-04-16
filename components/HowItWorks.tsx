'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Link2, Sparkles, Rocket, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const steps = [
  {
    title: "Connect",
    description: "Securely link your Slack and Jira workspaces in just a few clicks.",
    icon: <Link2 className="w-6 h-6" />,
    chips: ["2-min setup", "OAuth Secure"],
    mock: (
      <Card className="border shadow-sm space-y-3 p-4 bg-white rounded-xl">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded bg-navy/5 flex items-center justify-center">
            <Sparkles size={12} className="text-brand-orange" />
          </div>
          <div className="h-2 w-24 bg-navy/5 rounded" />
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 w-full bg-navy/5 rounded" />
          <div className="h-1.5 w-3/4 bg-navy/5 rounded" />
        </div>
        <div className="pt-2">
          <div className="h-8 w-full bg-brand-orange/10 border border-brand-orange/20 rounded-lg flex items-center justify-center">
            <div className="h-2 w-16 bg-brand-orange/40 rounded shadow-sm" />
          </div>
        </div>
      </Card>
    )
  },
  {
    title: "Sync",
    description: "AI maps Slack threads to Jira tickets, resolving ambiguity automatically.",
    icon: <Sparkles className="w-6 h-6" />,
    chips: ["Context-aware", "No noise"],
    mock: (
      <Card className="bg-navy border-white/10 shadow-xl space-y-3 p-4 rounded-xl">
        <div className="flex items-center space-x-2">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          <div className="h-2 w-32 bg-white/20 rounded" />
        </div>
        <div className="bg-white/5 rounded-lg p-2.5 space-y-2">
          <div className="flex justify-between">
            <div className="h-1.5 w-12 bg-white/20 rounded" />
            <div className="h-1.5 w-8 bg-brand-orange rounded" />
          </div>
          <div className="h-1 w-full bg-white/10 rounded" />
          <div className="h-1 w-2/3 bg-white/10 rounded" />
        </div>
      </Card>
    )
  },
  {
    title: "Accelerate",
    description: "Get the auto-brief daily. One approve button, zero meetings required.",
    icon: <Rocket className="w-6 h-6" />,
    chips: ["Human approval", "Instant Sync"],
    mock: (
      <Card className="border-2 border-brand-orange/20 shadow-lg scale-105 space-y-3 p-4 rounded-xl bg-white relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-brand-orange" size={16} />
            <div className="h-2 w-16 bg-navy/10 rounded" />
          </div>
        </div>
        <div className="h-3 w-full bg-navy/5 rounded" />
        <div className="w-full py-2 bg-navy rounded-lg shadow-md shadow-navy/20 flex items-center justify-center">
          <div className="h-2 w-12 bg-white/50 rounded" />
        </div>
      </Card>
    )
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden" id="how-it-works">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(0,31,63,0.02),transparent)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 space-y-2">
          <Badge variant="outline" className="text-[9px] font-black tracking-[0.2em] text-navy uppercase bg-transparent border-navy/20 px-3 py-0.5 rounded-full">Engineering Velocity</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy uppercase">
            How it works
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-navy/5 -translate-y-1/2 -z-10" />
          
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-8 group">
              {/* Icon Circle */}
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 shadow-md flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white group-hover:scale-110 transition-all duration-300 z-10 relative">
                  {step.icon}
                </div>
                <div className="absolute inset-0 bg-brand-orange/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 -z-0" />
              </div>

              {/* Text */}
              <div className="space-y-4 px-4">
                <h3 className="text-xl font-bold text-navy uppercase tracking-tighter">{step.title}</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{step.description}</p>
                
                <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                  {step.chips.map((chip, j) => (
                    <Badge key={j} variant="secondary" className="text-[9px] font-black text-navy/60 bg-navy/5 px-2 py-0.5 border-none uppercase tracking-widest">
                      {chip}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Mock Card */}
              <div className="w-full max-w-[240px] pt-4 transform group-hover:translate-z-10 transition-transform duration-300">
                {step.mock}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
