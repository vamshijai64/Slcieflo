'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Code, Menu, MessageSquare, Server, Users, X } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';

const navLinks = [
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Features', href: '#features' },
  { name: 'Security', href: '#security' },
  { name: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b'
          : 'bg-transparent'
      )}
    >
      {/* Integrated Proof Ribbon */}
      {isVisible && (
        <div className="bg-navy border-b border-white/10 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center justify-between text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest leading-none">
              <div className="flex items-center space-x-4 sm:space-x-8 overflow-x-auto no-scrollbar whitespace-nowrap py-1">
                <span className="flex items-center">
                  <Users size={12} className="mr-2 text-brand-orange" />
                  <span>2,134 teams on waitlist</span>
                </span>
                <span className="h-3 w-px bg-white/20 hidden sm:block"></span>
                <span className="flex items-center opacity-80">
                  Syncs with:
                  <div className="flex items-center space-x-3 ml-3">
                    <MessageSquare size={12} className="text-brand-orange" />
                    <Code size={12} className="text-brand-orange" />
                    <Server size={12} className="text-brand-orange" />
                    <span className="font-extrabold text-brand-orange tracking-tighter">Jira</span>
                  </div>
                </span>
              </div>

              <button
                onClick={() => setIsVisible(false)}
                className="ml-4 p-1 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Dismiss"
              >
                <X size={12} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex justify-between items-center transition-all duration-300",
          isScrolled ? "h-16" : "h-20"
        )}>
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-navy flex items-center">
              Slice<span className="text-brand-orange">Flo.</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-navy transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="#beta"
              className={cn(buttonVariants({ variant: "orange" }), "rounded-full h-10 px-8")}
            >
              Get Beta Access
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b animate-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-bold text-slate-600 hover:text-navy"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Link
                href="#beta"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(buttonVariants({ variant: "orange" }), "w-full rounded-2xl py-6 text-lg h-auto")}
              >
                Get Beta Access
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
