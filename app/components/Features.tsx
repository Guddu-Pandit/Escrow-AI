"use client";

import { FEATURES, type FeatureColor } from "@/app/lib/constants";

const colorMap: Record<FeatureColor, { bg: string; text: string }> = {
  teal: { bg: "bg-brand/12", text: "text-brand" },
  blue: { bg: "bg-[#378ADD]/10", text: "text-[#378ADD]" },
  amber: { bg: "bg-[#EF9F27]/10", text: "text-[#EF9F27]" },
};

export function Features() {
  return (
    <section className="py-16 px-10">
      <div className="text-[11px] font-semibold text-brand tracking-widest uppercase mb-2 font-heading">
        Features
      </div>
      <h2 className="font-heading text-[30px] font-bold text-white tracking-tight leading-tight mb-2">
        Built for the future<br />of freelance work.
      </h2>
      <p className="text-sm text-white/40 leading-relaxed max-w-[400px] font-light mt-2">
        Everything you need to work with confidence — for both clients and freelancers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
        {FEATURES.map((feat) => {
          const colors = colorMap[feat.color];
          return (
            <div
              key={feat.title}
              className="bg-card-alt border border-white/6 rounded-xl p-5 transition-all hover:border-brand/25 hover:bg-card"
            >
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 text-[17px] ${colors.bg} ${colors.text}`}>
                <i className={`ti ${feat.icon}`} aria-hidden="true" />
              </div>
              <div className="font-heading text-[13px] font-semibold text-white mb-1.5">{feat.title}</div>
              <div className="text-xs text-white/35 leading-relaxed">{feat.desc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
