"use client";

import { FOOTER_LINKS } from "@/app/lib/constants";

export function Footer() {
  return (
    <footer className="py-6 px-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo */}
      <div className="flex items-center gap-2 font-heading text-sm font-bold text-white">
        <div className="w-6 h-6 bg-brand rounded-md flex items-center justify-center text-xs text-white">
          <i className="ti ti-shield-check" aria-hidden="true" />
        </div>
        EscrowAI
      </div>

      {/* Links */}
      <div className="flex gap-5 flex-wrap justify-center">
        {FOOTER_LINKS.map((link) => (
          <span
            key={link}
            className="text-xs text-white/30 cursor-pointer hover:text-white/60 transition-colors"
          >
            {link}
          </span>
        ))}
      </div>

      {/* Solana badge */}
      <div className="flex items-center gap-1.5 font-mono text-[10px] text-white/30 bg-white/4 border border-white/7 py-1.5 px-2.5 rounded-md">
        <div className="w-1.5 h-1.5 bg-[#9945FF] rounded-full" />
        Built on Solana
      </div>
    </footer>
  );
}
