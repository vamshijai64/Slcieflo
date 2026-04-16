'use client';

import React from 'react';
import { XCircle, CheckCircle2, TrendingDown, Minus, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const beforePoints = [
  "Endless Slack scrolling to find context",
  "Hour-long daily standups for 'updates'",
  "Missing critical Jira ticket updates",
  "Manual summary drafting taking 2hrs/week"
];

const afterPoints = [
  "Auto-briefs delivered directly to your inbox",
  "Standups shifted to high-value blockers only",
  "Jira + Slack sync automated with AI",
  "Brief generation happens in real-time"
];

export function BeforeAfter() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="border-brand-orange text-brand-orange font-black text-[10px] uppercase tracking-[0.2em] px-3 py-1 mb-4 rounded-full">Evolution</Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-navy">
            Why change your workflow?
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            We don't just summarize; we give you back the hours lost to "keeping up."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Before */}
          <Card className="relative border-slate-200 bg-slate-50/50 shadow-none rounded-3xl overflow-visible">
            <CardHeader className="pb-2 text-center sm:text-left">
              <div className="mx-auto sm:mx-0 bg-slate-200 p-3 rounded-2xl shadow-sm border border-slate-300 w-fit">
                <XCircle className="w-6 h-6 text-slate-500" />
              </div>
              <CardTitle className="text-xl font-bold text-slate-900 pt-4 uppercase tracking-tighter">The chaotic old way</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {beforePoints.map((p, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-500 text-sm font-medium">
                    <Minus size={14} className="mt-1 flex-shrink-0 text-slate-300" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-6 border-t border-slate-200">
                <div className="flex items-center space-x-2 justify-center sm:justify-start">
                  <TrendingDown className="text-slate-400 w-5 h-5" />
                  <span className="text-2xl font-black text-slate-900 leading-none">3 meetings/week</span>
                </div>
                <div className="mt-2 text-center sm:text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Wasted on synchronization
                </div>
              </div>
            </CardContent>
          </Card>

          {/* After */}
          <Card className="relative border-navy bg-navy shadow-2xl shadow-navy/20 rounded-3xl overflow-visible">
            <CardHeader className="pb-2 text-center sm:text-left">
              <div className="mx-auto sm:mx-0 bg-brand-orange p-3 rounded-2xl shadow-lg border-2 border-white/10 w-fit">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-white pt-4 uppercase tracking-tighter">The SliceFlo way</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {afterPoints.map((p, i) => (
                  <li key={i} className="flex items-start space-x-3 text-white/90 font-medium text-sm">
                    <Plus size={14} className="mt-1 flex-shrink-0 text-brand-orange" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2 justify-center sm:justify-start">
                  <CheckCircle2 className="text-brand-orange w-5 h-5" />
                  <span className="text-2xl font-black text-white leading-none">1 auto brief</span>
                </div>
                <Badge className="mt-2 bg-brand-orange text-white border-none uppercase tracking-widest text-[10px] font-black">
                  The only update you need
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
