'use client';

import React from 'react';
import { Zap, Shield, Cpu, MessageSquare, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const values = [
  {
    icon: <Zap className="w-5 h-5" />,
    label: "Auto-briefs in seconds, not hours"
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    label: "Syncs directly with Slack threads"
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    label: "Context-aware AI summary engine"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    label: "Enterprise grade security"
  }
];

export function ValueStrip() {
  return (
    <div className="py-12 border-y bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
            {values.map((v, i) => (
              <Card 
                key={i}
                className="bg-white border-slate-200 shadow-sm hover:border-brand-orange/30 transition-all rounded-2xl group"
              >
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="flex-shrink-0 p-2 bg-navy/5 rounded-xl text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    {v.icon}
                  </div>
                  <span className="text-sm font-bold text-navy leading-tight">
                    {v.label}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex-shrink-0">
            <Link 
              href="#hero" 
              className={cn(buttonVariants({ variant: "link" }), "text-brand-orange font-black group px-0 uppercase tracking-widest text-[10px]")}
            >
              Get Beta Access
              <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
