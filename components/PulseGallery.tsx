'use client';

import React from 'react';
import { Target, Zap, AlertTriangle, ShieldCheck, Sparkles, ArrowRight, Activity } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const insights = [
  {
    title: "Shadow Task",
    category: "Blocker Risk",
    description: "Mike discussed 'infra-refactor' for 3h in Slack - no Jira ticket. Auto-logged.",
    icon: <AlertTriangle size={18} />,
    status: "CRITICAL",
    accent: "brand-orange",
  },
  {
    title: "Dependency Risk",
    category: "Timeline",
    description: "Frontend waiting on Team Alpha's API merge. Expected 24h delay detected.",
    icon: <Target size={18} />,
    status: "RISK",
    accent: "navy",
  },
  {
    title: "Velocity Win",
    category: "Team Win",
    description: "Auth bug fixed at 2:14 PM unblocking the 3.0 Release track.",
    icon: <Zap size={18} />,
    status: "SUCCESS",
    accent: "brand-orange",
  }
];

export function PulseGallery() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="insights">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 space-y-3">
          <Badge variant="outline" className="px-3 py-0.5 rounded-full text-brand-orange border-brand-orange/20 uppercase tracking-[0.15em] text-[9px] font-bold">
            Actionable Intelligence
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-navy tracking-tight leading-none">
            Intelligence for <span className="text-brand-orange">modern teams.</span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto font-medium leading-relaxed">
            SliceFlo surfaces critical updates before they become status meetings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((item, i) => (
            <div 
              key={i}
              className="group relative bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={cn(
                  "p-2.5 rounded-xl border transition-colors",
                  item.accent === 'brand-orange' ? "bg-brand-orange/5 border-brand-orange/10 text-brand-orange" : "bg-navy/5 border-navy/10 text-navy"
                )}>
                  {item.icon}
                </div>
                <div className="flex items-center space-x-1.5">
                   <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", 
                     item.status === 'CRITICAL' ? 'bg-red-500' : 
                     item.status === 'SUCCESS' ? 'bg-green-500' : 'bg-brand-orange'
                   )} />
                   <span className="text-[9px] font-bold text-navy/30 uppercase tracking-widest">{item.status}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-[9px] font-bold text-navy/40 uppercase tracking-widest">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-navy tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                  "{item.description}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                 <div className="flex items-center space-x-1.5">
                    <Sparkles size={12} className="text-brand-orange" />
                    <span className="text-[9px] font-bold text-navy/30 uppercase tracking-widest">98% Conf.</span>
                 </div>
                 <ArrowRight size={14} className="text-brand-orange group-hover:translate-x-1 transition-transform cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
