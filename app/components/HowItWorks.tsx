"use client";

import { STEPS } from "@/app/lib/constants";

export function HowItWorks() {
  return (
    <section className="py-16 px-10 bg-card-alt">
      <div className="text-[11px] font-semibold text-brand tracking-widest uppercase mb-2 font-heading">
        How it works
      </div>
      <h2 className="font-heading text-[30px] font-bold text-white tracking-tight leading-tight mb-2">
        Four steps from agreement<br />to payment.
      </h2>
      <p className="text-sm text-white/40 leading-relaxed max-w-[400px] font-light mt-2">
        No legal jargon, no manual invoicing, no payment chasing. Just describe the work and let EscrowAI handle everything else.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/6 rounded-[14px] overflow-hidden mt-10">
        {STEPS.map((step) => (
          <div key={step.num} className="bg-card-alt p-6 px-5">
            <div className="font-mono text-[11px] text-white/18 mb-4">{step.num}</div>
            <div className="w-[38px] h-[38px] bg-brand/10 border border-brand/18 rounded-lg flex items-center justify-center text-brand text-[17px] mb-3.5">
              <i className={`ti ${step.icon}`} aria-hidden="true" />
            </div>
            <div className="font-heading text-[13px] font-semibold text-white mb-1.5">{step.title}</div>
            <div className="text-xs text-white/35 leading-relaxed">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
