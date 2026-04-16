'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does SliceFlo access my Slack and Jira data?",
    answer: "We connect via official OAuth apps. You grant specific permissions to read-only message threads and ticket descriptions. We never store your entire history – only the context needed to generate specific briefs."
  },
  {
    question: "Do you train AI models on my data?",
    answer: "Absolutely not. We use enterprise-level LLM providers with 'Zero Data Retention' policies. Your proprietary technical discussions remain yours and are never used for training."
  },
  {
    question: "How much time does setup actually take?",
    answer: "Most teams are up and running in under 5 minutes. You just need to authorize Slack and Jira, and our engine automatically starts mapping relationships between the two."
  },
  {
    question: "Who is the 'Human Approval' layer for?",
    answer: "It's for the person responsible for the brief (usually an EM or PM). SliceFlo generates a high-quality draft, and you simply hit 'Approve' to sync it back to Jira or broadcast it to a channel."
  },
  {
    question: "Can I use SliceFlo as a solo developer?",
    answer: "Yes! While built for teams, solo devs use it to keep their own project documentation and status updates in sync without manual overhead."
  },
  {
    question: "What happens after the beta period?",
    answer: "We'll transition to a per-seat monthly subscription. However, all Beta Design Partners will receive a permanent 50% discount as a 'thank you' for the early feedback."
  }
];

export function FAQ() {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-base">
            Everything you need to know about the beta.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-brand-orange">-30%</div>
            <div className="text-[9px] font-bold text-navy/40 uppercase tracking-[0.2em] mt-1">Status Pings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-brand-orange">+22%</div>
            <div className="text-[9px] font-bold text-navy/40 uppercase tracking-[0.2em] mt-1">On-time delivery</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-navy">12k+</div>
            <div className="text-[9px] font-bold text-navy/40 uppercase tracking-[0.2em] mt-1">Briefs created</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-brand-orange">4.9/5</div>
            <div className="text-[9px] font-bold text-navy/40 uppercase tracking-[0.2em] mt-1">User Rating</div>
          </div>
        </div>

        <Accordion className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="group rounded-3xl border bg-white px-2 sm:px-4 py-2 hover:border-brand-orange/30 data-[state=open]:border-brand-orange data-[state=open]:shadow-lg data-[state=open]:shadow-brand-orange/5 transition-all duration-300"
            >
              <AccordionTrigger className="hover:no-underline p-3 text-left font-bold text-base text-navy pr-8 font-sans">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-4 pt-2 border-t border-slate-100 italic text-slate-600 leading-relaxed font-medium">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
