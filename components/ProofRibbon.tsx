'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { X, Users, Code, MessageSquare, Server } from 'lucide-react';

export function ProofRibbon() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-navy border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between text-[10px] sm:text-xs font-bold text-white uppercase tracking-[0.2em]">
          <div className="flex items-center space-x-4 sm:space-x-8 overflow-x-auto no-scrollbar whitespace-nowrap">
            <span className="flex items-center">
              <Users size={12} className="mr-2 text-brand-orange" />
              <span>2,134 teams on waitlist</span>
            </span>
            <span className="h-3 w-px bg-white/20 hidden sm:block"></span>
            <span className="flex items-center">
              <span className="opacity-60 mr-2">Syncs with:</span>
              <div className="flex items-center space-x-3">
                <MessageSquare size={12} className="text-brand-orange" />
                <Code size={12} className="text-brand-orange" />
                <Server size={12} className="text-brand-orange" />
                <span className="font-black text-brand-orange tracking-tight">Jira</span>
              </div>
            </span>
          </div>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
