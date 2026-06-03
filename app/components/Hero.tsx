"use client";

import { HERO, COLORS } from "@/app/lib/constants";

function MilestoneBar({ name, amount, progress, color }: {
  name: string;
  amount: string;
  progress: number;
  color: string;
}) {
  return (
    <div className="bg-background border border-white/6 rounded-md px-2.5 py-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-medium text-white/55">{name}</span>
        <span className="font-mono text-[11px] text-brand-light font-medium">{amount}</span>
      </div>
      <div className="h-[3px] bg-white/7 rounded-sm overflow-hidden">
        <div
          className="h-full rounded-sm transition-all duration-500"
          style={{ width: `${progress}%`, background: color }}
        />
      </div>
    </div>
  );
}

function TrustBadge() {
  const avatars = [
    { initials: "AR", bg: "#1D4034", color: COLORS.brandLight },
    { initials: "MK", bg: "#0C2A47", color: COLORS.blue },
    { initials: "JL", bg: "#3D1A0C", color: "#D85A30" },
    { initials: "SP", bg: "#2A1940", color: "#7F77DD" },
    { initials: "+", bg: "#1D4034", color: COLORS.brandLight },
  ];

  return (
    <div className="flex items-center gap-3.5">
      <div className="flex">
        {avatars.map((av) => (
          <div
            key={av.initials}
            className="w-[26px] h-[26px] rounded-full border-2 border-background flex items-center justify-center text-[9px] font-semibold -ml-1.5 first:ml-0"
            style={{ background: av.bg, color: av.color }}
          >
            {av.initials}
          </div>
        ))}
      </div>
      <span className="text-xs text-white/35">
        <strong className="text-white/65 font-medium">{HERO.trust.count}</strong> {HERO.trust.label}
      </span>
      <div className="w-px h-5 bg-white/10" />
      <div className="flex items-center gap-1.5 text-xs text-white/35">
        <span className="text-[#EF9F27] text-[11px] tracking-wider">★★★★★</span>
        <span><strong className="text-white/65">{HERO.trust.rating}</strong> / 5</span>
      </div>
    </div>
  );
}

function DemoCard() {
  return (
    <>
      <div className="bg-card border border-white/8 rounded-2xl p-[18px] mb-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-3.5">
          <span className="font-heading text-[11px] font-semibold text-white/35 tracking-widest uppercase">
            AI contract generator
          </span>
          <span className="flex items-center gap-1.5 text-[11px] text-brand-light bg-brand/10 py-1 px-2.5 rounded-full font-mono">
            <span className="w-1.5 h-1.5 bg-brand rounded-full" />
            Generating...
          </span>
        </div>

        {/* Prompt input */}
        <div className="bg-background border border-brand/20 rounded-lg px-3 py-2.5 flex items-start gap-2 mb-3">
          <i className="ti ti-sparkles text-brand text-[15px] flex-shrink-0 mt-px" aria-hidden="true" />
          <span className="text-xs text-white/50 leading-relaxed flex-1">
            {HERO.demo.prompt}
            <span className="inline-block w-0.5 h-3 bg-brand align-middle animate-blink" />
          </span>
        </div>

        {/* AI preview */}
        <div className="bg-brand/6 border border-brand/15 rounded-lg p-3">
          <div className="text-[10px] font-semibold text-brand-light tracking-widest uppercase mb-2 font-heading">
            <i className="ti ti-robot text-[11px] mr-1" aria-hidden="true" />
            AI draft preview
          </div>
          <p
            className="text-xs text-white/50 leading-relaxed mb-2.5"
            dangerouslySetInnerHTML={{ __html: HERO.demo.preview }}
          />
          <div className="grid grid-cols-3 gap-2">
            {HERO.demo.milestones.map((ms) => (
              <MilestoneBar key={ms.name} {...ms} />
            ))}
          </div>
        </div>
      </div>

      {/* Escrow badge */}
      <div className="bg-card border border-brand/20 rounded-xl px-4 py-3.5 flex items-center gap-3">
        <div className="w-9 h-9 bg-brand/15 rounded-lg flex items-center justify-center text-brand text-lg flex-shrink-0">
          <i className="ti ti-lock" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <div className="text-[10px] text-white/35 mb-0.5 font-medium tracking-wide">Solana escrow vault</div>
          <div className="font-mono text-base font-medium text-white">{HERO.demo.escrow.amount} locked</div>
          <div className="font-mono text-[9px] text-white/25 mt-0.5">{HERO.demo.escrow.address}</div>
        </div>
        <div className="text-[10px] font-semibold text-brand-dark bg-brand-light py-1 px-2.5 rounded-md font-heading">
          Secured
        </div>
      </div>
    </>
  );
}

export function Hero() {
  return (
    <section className="px-10 pt-[72px] pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left column */}
      <div>
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/25 rounded-full py-1.5 px-3 text-[11px] text-brand-light font-medium mb-6 font-heading tracking-wide">
          <div className="w-1.5 h-1.5 bg-brand rounded-full" />
          {HERO.eyebrow}
        </div>

        {/* Headline */}
        <h1 className="font-heading text-[44px] font-extrabold leading-[1.06] tracking-[-1.2px] text-white mb-4">
          {HERO.headline.before}<br />
          <em className="not-italic text-brand">{HERO.headline.highlight}</em><br />
          {HERO.headline.after}
        </h1>

        {/* Description */}
        <p className="text-[15px] text-white/45 leading-[1.75] mb-7 font-light max-w-[400px]">
          {HERO.description}
        </p>

        {/* CTAs */}
        <div className="flex gap-2.5 mb-9">
          {HERO.ctas.map((cta) => (
            <button
              key={cta.label}
              className={`font-heading text-[13px] py-2.5 px-5 rounded-lg cursor-pointer flex items-center gap-2 transition-all ${
                cta.variant === "primary"
                  ? "font-semibold bg-brand text-white border-none hover:opacity-90"
                  : "font-medium bg-white/5 text-white/70 border border-white/10 hover:bg-white/8"
              }`}
            >
              <i className={`ti ${cta.icon} text-sm`} aria-hidden="true" />
              {cta.label}
            </button>
          ))}
        </div>

        {/* Trust badge */}
        <TrustBadge />
      </div>

      {/* Right column */}
      <div className="relative">
        <DemoCard />
      </div>
    </section>
  );
}
