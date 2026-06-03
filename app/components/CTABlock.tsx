"use client";

export function CTABlock() {
  return (
    <div className="m-10 bg-brand rounded-2xl py-[52px] px-12 text-center">
      <h2 className="font-heading text-[32px] font-extrabold text-white tracking-tight leading-[1.15] mb-2.5">
        Ready to work without worry?
      </h2>
      <p className="text-[15px] text-white/65 mb-7 font-light">
        Join 2,400+ freelancers and clients who&apos;ve left payment disputes behind for good.
      </p>
      <div className="flex justify-center gap-2.5">
        <button className="font-heading text-sm font-semibold py-3 px-6 bg-white text-brand-dark border-none rounded-lg cursor-pointer flex items-center gap-2 hover:opacity-90 transition-opacity">
          <i className="ti ti-rocket text-sm align-[-2px] mr-1" aria-hidden="true" />
          Start for free
        </button>
        <button className="font-heading text-sm font-medium py-3 px-5 bg-white/12 text-white border border-white/25 rounded-lg cursor-pointer hover:bg-white/18 transition-colors">
          Read the docs
        </button>
      </div>
    </div>
  );
}
