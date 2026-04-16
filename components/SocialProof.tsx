'use client';

import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Engineering Manager @ TechFlow",
    text: "SliceFlo turned our chaotic Monday mornings into a 5-minute read. It's the first tool that actually reduced my meeting load.",
    avatar: "AR"
  },
  {
    name: "Sarah Chen",
    role: "Head of Product @ BuildSync",
    text: "The way it links Slack threads to Jira tickets is pure magic. No more manually hunting for context before every sprint planning.",
    avatar: "SC"
  }
];

export function SocialProof() {
  return (
    <section className="py-16 bg-white" id="social-proof">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 border rounded-2xl p-6 sm:p-10 shadow-sm bg-slate-50/50">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-navy">-30%</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Status Pings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-brand-orange">+22%</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">On-time delivery</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-navy">12k+</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Briefs created</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-brand-orange">4.9/5</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">User Rating</div>
          </div>
        </div>

        {/* Highlighted Quote */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <Quote className="w-8 h-8 text-primary/10 mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 italic leading-tight">
            "We finally stopped asking 'what are we working on' and started actually working on it."
          </h3>
          <p className="mt-4 text-slate-500 font-bold uppercase tracking-widest text-[10px]">— Jason Burke, CTO at PrismDraft</p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-8 rounded-3xl border bg-white shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
              <CardContent className="p-0">
                <div className="flex items-center space-x-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg text-slate-700 font-medium mb-8 leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-primary font-bold border border-brand-200">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500 font-medium">{t.role}</div>
                  </div>
                </div>
              </CardContent>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/5 transition-colors" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
