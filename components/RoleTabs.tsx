'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Briefcase, Target, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const roles = [
  {
    id: 'em',
    title: 'Engineering Manager',
    icon: <Briefcase className="w-5 h-5" />,
    outcome: "Regain 6 hours/week of management overhead.",
    points: [
      "Auto-detect technical blockers in Slack threads",
      "Generate sprint summaries for stakeholders instantly",
      "Eliminate manual 'What's the status?' pings"
    ]
  },
  {
    id: 'ops',
    title: 'Product Ops',
    icon: <Target className="w-5 h-5" />,
    outcome: "Standardize reporting across every squad.",
    points: [
      "Consistent brief format for high-level visibility",
      "Automatic linking of conversations to Jira tickets",
      "Audit trail of team decisions and approvals"
    ]
  },
  {
    id: 'exec',
    title: 'Executive',
    icon: <TrendingUp className="w-5 h-5" />,
    outcome: "Instant clarity on project health without the noise.",
    points: [
      "High-level pulse check on all active workstreams",
      "Confidence in delivery timelines with data-backed briefs",
      "Reduced meeting load by 30% company-wide"
    ]
  }
];

export function RoleTabs() {
  return (
    <section className="py-16 bg-white" id="roles">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Built for how you work
          </h2>
          <p className="text-slate-500 text-base">
            Choose your role and see the impact.
          </p>
        </div>

        <Tabs defaultValue="em" className="w-full">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Tab Sidebar */}
            <TabsList className="w-full lg:w-1/3 flex flex-col h-auto bg-transparent items-stretch space-y-2 p-0">
              {roles.map((role) => (
                <TabsTrigger
                  key={role.id}
                  value={role.id}
                  className={cn(
                    "flex items-center justify-start space-x-4 p-4 rounded-2xl transition-all text-left border-2 data-[state=active]:bg-brand-orange/5 data-[state=active]:border-brand-orange data-[state=active]:shadow-sm border-transparent hover:bg-slate-50 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 data-[state=active]:grayscale-0 data-[state=active]:opacity-100 font-sans"
                  )}
                >
                  <div className="p-2 rounded-xl bg-slate-100 text-slate-500 group-data-[state=active]:bg-brand-orange group-data-[state=active]:text-white transition-colors">
                    {role.icon}
                  </div>
                  <span className="font-bold text-base text-navy">{role.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tab Content */}
            <div className="w-full lg:w-2/3">
              {roles.map((role) => (
                <TabsContent key={role.id} value={role.id} className="mt-0">
                  <Card className="bg-slate-50 border rounded-3xl p-8 sm:p-12 relative overflow-hidden min-h-[400px] shadow-none">
                    <CardHeader className="p-0 mb-8 space-y-4 relative z-10">
                      <div>
                        <Badge className="bg-white border-brand-orange/20 text-brand-orange hover:bg-white shadow-sm px-3 py-1 mb-4 uppercase tracking-widest text-[10px] font-bold">
                          The Outcome
                        </Badge>
                        <CardTitle className="text-xl sm:text-2xl font-bold text-navy leading-tight">
                          {role.outcome}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 relative z-10">
                      <div className="space-y-6">
                        {role.points.map((point, i) => (
                          <div key={i} className="flex items-start space-x-4">
                            <div className="mt-1 p-1 bg-brand-orange/10 rounded-full text-brand-orange flex-shrink-0">
                              <CheckCircle2 size={16} />
                            </div>
                            <p className="text-base text-navy font-bold">{point}</p>
                          </div>
                        ))}
                      </div>

                      <Button variant="outline" className="mt-8 px-8 py-6 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-2xl hover:border-primary hover:text-primary transition-all">
                        See {role.title} Guide
                      </Button>
                    </CardContent>
                    
                    {/* Background Accent */}
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0 translate-x-1/2 translate-y-1/2" />
                  </Card>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
