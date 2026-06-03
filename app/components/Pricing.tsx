"use client";

import { PLANS } from "@/app/lib/constants";

export function Pricing() {
  return (
    <section className="py-20 px-10 bg-card-alt text-center">
      <div className="text-[11px] font-semibold text-brand tracking-widest uppercase mb-2 font-heading">
        Pricing
      </div>
      <h2 className="font-heading text-[30px] font-bold text-white tracking-tight leading-tight mb-2">
        Simple, transparent pricing.
      </h2>
      <p className="text-sm text-white/40 leading-relaxed max-w-[400px] mx-auto font-light mt-2">
        We only earn when work gets done — 1.5% escrow fee on every successful payment release.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[680px] mx-auto mt-11">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`bg-card border rounded-[18px] p-8 px-7 flex flex-col text-left transition-all hover:-translate-y-0.5 ${
              plan.highlighted
                ? "border-brand/50 bg-gradient-to-br from-[#0B1810] to-card shadow-[0_0_0_1px_rgba(29,158,117,0.18),0_12px_40px_rgba(0,0,0,0.4)]"
                : "border-white/9"
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="inline-flex items-center gap-1.5 font-heading text-[10px] font-bold text-[#04342C] bg-brand-light py-1 px-3 rounded-full mb-4 tracking-wide uppercase w-fit">
                <i className="ti ti-star-filled text-[9px]" aria-hidden="true" />
                {plan.badge}
              </div>
            )}

            {/* Name */}
            <div className={`font-heading text-base font-bold mb-2.5 tracking-wide ${
              plan.highlighted ? "text-white" : "text-white/55"
            }`}>
              {plan.name}
            </div>

            {/* Price */}
            <div className="font-heading text-[44px] font-extrabold text-white tracking-[-1.5px] leading-none mb-1.5">
              {plan.price} <sub className="text-[15px] font-normal text-white/30 tracking-normal">{plan.period}</sub>
            </div>

            {/* Note */}
            <div className="text-xs text-white/35 mb-5">{plan.note}</div>

            {/* Divider */}
            <div className={`h-px my-4 ${plan.highlighted ? "bg-brand/20" : "bg-white/7"}`} />

            {/* Features */}
            <ul className="flex flex-col gap-2.5 mb-7 flex-1 list-none">
              {plan.features.map((feat) => (
                <li key={feat.label} className="text-[13px] text-white/60 flex items-center gap-2 leading-snug">
                  <i className={`ti ti-check text-sm flex-shrink-0 ${plan.highlighted ? "text-brand-light" : "text-brand"}`} aria-hidden="true" />
                  {feat.label}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              className={`w-full py-3 rounded-[10px] font-heading text-sm font-semibold cursor-pointer tracking-wide transition-opacity hover:opacity-85 ${
                plan.variant === "solid"
                  ? "bg-brand border-none text-white"
                  : "bg-transparent border border-white/12 text-white/60"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
