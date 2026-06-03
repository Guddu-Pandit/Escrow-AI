"use client";

import { STATS } from "@/app/lib/constants";

export function StatsBand() {
  return (
    <div className="bg-card border-y border-white/6 grid grid-cols-1 md:grid-cols-4">
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={`py-7 px-5 text-center ${
            i < STATS.length - 1 ? "md:border-r border-white/6" : ""
          } border-b md:border-b-0 last:border-b-0`}
        >
          <div className="font-heading text-[26px] font-extrabold text-white tracking-tight mb-1">
            {stat.value.split(/(\$|\d[\d,.]*[A-Za-z%+]?)/).map((part, j) =>
              part.match(/[\d.]/) ? (
                <span key={j} className="text-brand">{part}</span>
              ) : (
                <span key={j}>{part}</span>
              )
            )}
          </div>
          <div className="text-xs text-white/35">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
