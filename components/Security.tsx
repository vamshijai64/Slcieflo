'use client';

import React from 'react';
import { ShieldAlert, Fingerprint, Lock, ShieldCheck, FileCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const securityPoints = [
  {
    icon: <Fingerprint className="w-5 h-5 text-primary" />,
    title: "No Data Training",
    description: "We never use your private workspace data or Slack threads to train our AI models."
  },
  {
    icon: <Lock className="w-5 h-5 text-primary" />,
    title: "AES-256 Encryption",
    description: "All data is encrypted in transit and at rest using enterprise-grade standards."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    title: "SOC 2 (Planned)",
    description: "We are actively moving towards SOC 2 Type II compliance to meet security mandates."
  },
  {
    icon: <FileCheck className="w-5 h-5 text-primary" />,
    title: "GDPR Ready",
    description: "Full compliance with data privacy regulations to ensure your peace of mind."
  }
];

export function Security() {
  return (
    <section className="py-16 bg-slate-50 border-y" id="security">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <Badge variant="outline" className="bg-green-50 border-green-100 text-green-700 px-3 py-0.5 space-x-2 text-[10px]">
              <ShieldAlert size={12} />
              <span>Enterprise Grade Security</span>
            </Badge>
            
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              Your data belongs to you.<br />
              <span className="text-navy italic">Always.</span>
            </h2>
            
            <p className="text-slate-500 text-base leading-relaxed">
              We built SliceFlo with a security-first mindset. Your internal communications are your most sensitive asset.
            </p>

            <Button variant="outline" size="lg" className="px-6 py-5 bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-xl hover:border-navy hover:text-navy transition-all shadow-sm h-auto text-sm">
              Request Security Brief
            </Button>
          </div>

          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6 w-full">
            {securityPoints.map((point, i) => (
              <Card key={i} className="bg-white border rounded-3xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <CardContent className="p-6">
                  <div className="p-3 bg-blue-50 rounded-2xl w-fit mb-4">
                    {point.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
