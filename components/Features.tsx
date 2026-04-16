'use client';

import React from 'react';
import { Layers, MousePointer2, GitBranch, Zap, MessageSquare, Code, Server, Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    title: "Instant Integrations",
    description: "Connect your entire stack in minutes. We support Slack, Jira, GitHub, and Linear out of the box.",
    icon: <Layers className="w-6 h-6 text-brand-orange" />,
    logos: [<MessageSquare key="s" />, <Code key="g" />, <Server key="d" />, <Terminal key="t" />]
  },
  {
    title: "Zero Migration Required",
    description: "Keep your current workflow. We sit on top of your existing tools without requiring any data moves.",
    icon: <GitBranch className="w-6 h-6 text-brand-orange" />,
    badge: "Plug & Play"
  },
  {
    title: "AI Drafts + Human Approval",
    description: "Our AI does the heavy lifting, but you stay in control. One click to approve or refine any brief.",
    icon: <MousePointer2 className="w-6 h-6 text-brand-orange" />,
    badge: "Hybrid Control"
  },
  {
    title: "Context-Aware Summaries",
    description: "We don't just summarize text; we understand the relationships between tickets and threads.",
    icon: <Zap className="w-6 h-6 text-brand-orange" />,
    badge: "Smart Sync"
  }
];

export function Features() {
  return (
    <section className="py-16 bg-navy overflow-hidden relative" id="features">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.1),transparent)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white capitalize">
            Everything you need, nothing you don't.
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Powerful features designed to eliminate friction and maximize clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((f, i) => (
            <Card 
              key={i}
              className="group bg-white/5 border-white/10 hover:bg-white/10 transition-all hover:-translate-y-1 duration-300 rounded-3xl"
            >
              <CardHeader className="p-8 pb-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform">
                    {f.icon}
                  </div>
                  {f.badge && (
                    <Badge variant="secondary" className="text-[10px] font-bold text-slate-300 bg-white/10 px-2 py-1 rounded-full uppercase tracking-widest border-none">
                      {f.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-2">
                <CardTitle className="text-lg font-bold text-white mb-2 shadow-none">
                  {f.title}
                </CardTitle>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {f.description}
                </p>

                {f.logos && (
                  <div className="flex items-center space-x-4 pt-4 border-t border-white/5 opacity-50 group-hover:opacity-100 transition-opacity">
                    {f.logos.map((Logo, j) => (
                      <div key={j} className="text-white w-5 h-5">
                        {Logo}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
