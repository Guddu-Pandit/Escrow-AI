"use client";

import { NAV_LINKS } from "@/app/lib/constants";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b border-white/5 bg-background">
      {/* Logo */}
      <div className="flex items-center gap-2 font-heading text-[17px] font-bold text-white tracking-tight">
        <div className="w-[30px] h-[30px] bg-brand rounded-lg flex items-center justify-center text-white text-[15px]">
          <i className="ti ti-shield-check" aria-hidden="true" />
        </div>
        EscrowAI
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[13px] text-white/45 cursor-pointer hover:text-white transition-colors tracking-wide no-underline"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2.5 items-center">
        <button className="font-heading text-[13px] font-medium py-1.5 px-4 border border-white/10 rounded-md bg-transparent text-white/65 cursor-pointer hover:border-white/20 transition-colors">
          <i className="ti ti-wallet text-[13px] align-[-1px] mr-1" aria-hidden="true" />
          Connect Wallet
        </button>
        <button className="font-heading text-[13px] font-semibold py-1.5 px-4 border-none rounded-md bg-brand text-white cursor-pointer hover:opacity-90 transition-opacity">
          Get started
        </button>
      </div>
    </nav>
  );
}
