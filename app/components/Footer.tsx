"use client";

import { FOOTER_SECTIONS, SOCIAL_LINKS } from "@/app/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080F0C]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 font-heading text-lg font-bold text-white mb-4">
              <div className="w-8 h-8 bg-brand rounded-md flex items-center justify-center text-sm text-white">
                <i className="ti ti-shield-check" aria-hidden="true" />
              </div>
              EscrowAI
            </div>
            <p className="text-sm text-white/45 mb-6 max-w-xs">
              Freelance work, secured by AI and blockchain. Smart contracts that actually work for everyone.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/4 border border-white/7 flex items-center justify-center text-white/40 hover:text-white/70 hover:bg-white/7 transition-all"
                  aria-label={social.name}
                >
                  <i className={`ti ${social.icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-white/70 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} EscrowAI. All rights reserved.
          </p>
          
          {/* Solana Badge */}
          <div className="flex items-center gap-2 font-mono text-xs text-white/35 bg-white/4 border border-white/7 py-2 px-3 rounded-md">
            <div className="w-2 h-2 bg-[#9945FF] rounded-full animate-pulse" />
            Built on Solana
          </div>
        </div>
      </div>
    </footer>
  );
}
