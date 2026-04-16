'use client';

import React from 'react';
import Link from 'next/link';
import { Code, Globe, Briefcase, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-navy flex items-center font-sans">
              Slice<span className="text-brand-orange">Flo.</span>
            </Link>
            <p className="mt-4 text-slate-500 max-w-xs leading-relaxed font-medium">
              The high-velocity briefing engine for modern engineering teams. 
              Turn noise into clarity.
            </p>
            <div className="mt-6 flex space-x-2">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-brand-orange transition-colors">
                <Globe size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-brand-orange transition-colors">
                <Code size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-brand-orange transition-colors">
                <Briefcase size={18} />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-navy uppercase tracking-widest font-sans">Product</h4>
            <ul className="space-y-3">
              <li><Link href="#how-it-works" className="text-slate-500 hover:text-brand-orange text-sm transition-colors font-bold uppercase tracking-widest text-[10px]">How it works</Link></li>
              <li><Link href="#features" className="text-slate-500 hover:text-brand-orange text-sm transition-colors font-bold uppercase tracking-widest text-[10px]">Features</Link></li>
              <li><Link href="#security" className="text-slate-500 hover:text-brand-orange text-sm transition-colors font-bold uppercase tracking-widest text-[10px]">Security</Link></li>
              <li><Link href="#pricing" className="text-slate-500 hover:text-brand-orange text-sm transition-colors font-bold uppercase tracking-widest text-[10px]">Pricing</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-navy uppercase tracking-widest font-sans">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-slate-500 hover:text-brand-orange text-sm transition-colors font-bold uppercase tracking-widest text-[10px]">Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-brand-orange text-sm transition-colors font-bold uppercase tracking-widest text-[10px]">Terms of Service</Link></li>
              <li><Link href="#" className="text-slate-500 hover:text-brand-orange text-sm transition-colors font-bold uppercase tracking-widest text-[10px]">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Lead Magnet */}
        <div className="border border-navy/5 bg-slate-50 rounded-[2rem] p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.05),transparent)]">
          <div className="flex items-center space-x-5 text-center md:text-left">
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-navy/5 text-brand-orange">
              <Mail size={24} />
            </div>
            <div>
              <h5 className="font-bold text-navy text-lg">Get the "Meetingless Standup" Guide</h5>
              <p className="text-sm text-slate-500 font-medium tracking-tight">A free 12-page PDF for engineering leaders.</p>
            </div>
          </div>
          <Button variant="orange" size="lg" className="whitespace-nowrap px-8 py-4 font-bold rounded-full h-auto shadow-md">
            Download PDF
          </Button>
        </div>

        {/* Bottom */}
        <Separator className="mb-10 opacity-50" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-navy/30 uppercase tracking-widest font-sans">
          <p>© {currentYear} <span className="text-navy">SLICE</span><span className="text-brand-orange">Flo</span> Inc. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-1.5">
             <div className="flex items-center space-x-1">
               <span className="text-navy/40">Powered by</span>
               <Link href="/" className="hover:underline font-bold text-navy">
                 SLICE<span className="text-brand-orange">Flo</span>
               </Link>
               <span className="text-navy/40">— The new standard for meetingless engineering standups.</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
