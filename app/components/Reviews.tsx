"use client";

import { REVIEWS } from "@/app/lib/constants";

export function Reviews() {
  return (
    <section className="py-[72px] px-10">
      {/* Header */}
      <div className="text-[11px] font-semibold text-[#1ABC9C] tracking-widest uppercase mb-2.5 font-heading">
        TRUSTED BY FREELANCERS
      </div>
      <h2 className="font-heading text-[34px] font-bold text-white tracking-tight leading-tight mb-2">
        Loved by the people who use it.
      </h2>
      <p className="text-sm text-white/45 leading-relaxed max-w-[480px] font-light mb-10">
        From solo designers to dev agencies — EscrowAI works for everyone.
      </p>

      {/* Reviews grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {REVIEWS.map((review) => (
          <div
            key={review.name}
            className="bg-white/4 border border-white/7 rounded-2xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            <p className="text-sm text-white/70 leading-relaxed mb-5 italic">
              &ldquo;{review.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold flex-shrink-0 text-white"
                style={{ background: review.bgColor }}
              >
                {review.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{review.name}</div>
                <div className="text-xs text-white/40 mt-0.5">{review.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
