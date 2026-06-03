"use client";

export default function Home() {
  return (
    <>
      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        h2.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; }
        .tc { font-family: 'Inter', sans-serif; background: #080F0C; color: #E8F5EF; overflow: hidden; }
        .nav { display: flex; align-items: center; justify-content: space-between; padding: 16px 40px; border-bottom: 1px solid rgba(255,255,255,0.05); background: #080F0C; }
        .nav-logo { display: flex; align-items: center; gap: 9px; font-family: 'Syne', sans-serif; font-size: 17px; font-weight: 700; color: #fff; letter-spacing: -0.3px; }
        .nav-logo-mark { width: 30px; height: 30px; background: #1D9E75; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 15px; }
        .nav-links { display: flex; gap: 32px; }
        .nav-link { font-size: 13px; color: rgba(255,255,255,0.45); cursor: pointer; transition: color 0.2s; letter-spacing: 0.01em; }
        .nav-link:hover { color: #fff; }
        .nav-actions { display: flex; gap: 10px; align-items: center; }
        .btn-ghost { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 500; padding: 7px 15px; border: 1px solid rgba(255,255,255,0.12); border-radius: 7px; background: transparent; color: rgba(255,255,255,0.65); cursor: pointer; letter-spacing: 0.01em; }
        .btn-teal { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 600; padding: 7px 16px; border: none; border-radius: 7px; background: #1D9E75; color: #fff; cursor: pointer; }
        .hero { padding: 72px 40px 64px; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
        .hero-left {}
        .hero-eyebrow { display: inline-flex; align-items: center; gap: 7px; background: rgba(29,158,117,0.1); border: 1px solid rgba(29,158,117,0.25); border-radius: 20px; padding: 5px 12px; font-size: 11px; color: #5DCAA5; font-weight: 500; margin-bottom: 24px; font-family: 'Syne', sans-serif; letter-spacing: 0.04em; }
        .hero-dot { width: 5px; height: 5px; background: #1D9E75; border-radius: 50%; }
        .hero-h1 { font-family: 'Syne', sans-serif; font-size: 44px; font-weight: 800; line-height: 1.06; letter-spacing: -1.2px; color: #fff; margin-bottom: 18px; }
        .hero-h1 em { font-style: normal; color: #1D9E75; }
        .hero-p { font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.75; margin-bottom: 30px; font-weight: 300; max-width: 400px; }
        .hero-ctas { display: flex; gap: 10px; margin-bottom: 36px; }
        .btn-primary { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 600; padding: 11px 22px; background: #1D9E75; color: #fff; border: none; border-radius: 9px; cursor: pointer; display: flex; align-items: center; gap: 7px; letter-spacing: 0.01em; }
        .btn-secondary { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 500; padding: 11px 20px; background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.7); border: 1px solid rgba(255,255,255,0.1); border-radius: 9px; cursor: pointer; display: flex; align-items: center; gap: 7px; }
        .hero-trust { display: flex; align-items: center; gap: 14px; }
        .trust-avatars { display: flex; }
        .trust-av { width: 26px; height: 26px; border-radius: 50%; border: 2px solid #080F0C; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 600; margin-left: -7px; }
        .trust-av:first-child { margin-left: 0; }
        .trust-text { font-size: 12px; color: rgba(255,255,255,0.35); }
        .trust-text strong { color: rgba(255,255,255,0.65); font-weight: 500; }
        .trust-divider { width: 1px; height: 20px; background: rgba(255,255,255,0.1); }
        .trust-rating { display: flex; align-items: center; gap: 5px; font-size: 12px; color: rgba(255,255,255,0.35); }
        .trust-stars { color: #EF9F27; font-size: 11px; letter-spacing: 1px; }
        .hero-right { position: relative; }
        .hero-card { background: #0D1A14; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 18px; margin-bottom: 12px; }
        .hc-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
        .hc-label { font-family: 'Syne', sans-serif; font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.35); letter-spacing: 0.06em; text-transform: uppercase; }
        .hc-status { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #5DCAA5; background: rgba(29,158,117,0.1); padding: 3px 9px; border-radius: 20px; font-family: 'DM Mono', monospace; }
        .hc-status-dot { width: 5px; height: 5px; background: #1D9E75; border-radius: 50%; }
        .hc-input { background: #080F0C; border: 1px solid rgba(29,158,117,0.2); border-radius: 9px; padding: 11px 13px; display: flex; align-items: flex-start; gap: 9px; margin-bottom: 12px; }
        .hc-input-text { font-size: 12px; color: rgba(255,255,255,0.5); line-height: 1.6; flex: 1; }
        .hc-cursor { display: inline-block; width: 2px; height: 12px; background: #1D9E75; vertical-align: middle; animation: blink 1s infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .hc-ai-preview { background: rgba(29,158,117,0.06); border: 1px solid rgba(29,158,117,0.15); border-radius: 9px; padding: 12px; }
        .hc-ai-tag { font-size: 10px; font-weight: 600; color: #5DCAA5; letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 8px; font-family: 'Syne', sans-serif; }
        .hc-ai-text { font-size: 12px; color: rgba(255,255,255,0.5); line-height: 1.6; margin-bottom: 10px; }
        .hc-ai-text strong { color: #9FE1CB; font-weight: 500; }
        .hc-ms-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 7px; }
        .hc-ms { background: #080F0C; border: 1px solid rgba(255,255,255,0.06); border-radius: 7px; padding: 8px 10px; }
        .hc-ms-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
        .hc-ms-name { font-size: 10px; font-weight: 500; color: rgba(255,255,255,0.55); }
        .hc-ms-sol { font-family: 'DM Mono', monospace; font-size: 11px; color: #5DCAA5; font-weight: 500; }
        .hc-ms-bar { height: 3px; background: rgba(255,255,255,0.07); border-radius: 2px; overflow: hidden; }
        .hc-ms-fill { height: 100%; border-radius: 2px; }
        .hero-escrow { background: #0D1A14; border: 1px solid rgba(29,158,117,0.2); border-radius: 12px; padding: 14px 16px; display: flex; align-items: center; gap: 12px; }
        .he-icon { width: 36px; height: 36px; background: rgba(29,158,117,0.15); border-radius: 9px; display: flex; align-items: center; justify-content: center; color: #1D9E75; font-size: 18px; flex-shrink: 0; }
        .he-info { flex: 1; }
        .he-label { font-size: 10px; color: rgba(255,255,255,0.35); margin-bottom: 3px; font-weight: 500; letter-spacing: 0.03em; }
        .he-value { font-family: 'DM Mono', monospace; font-size: 16px; font-weight: 500; color: #fff; }
        .he-addr { font-family: 'DM Mono', monospace; font-size: 9px; color: rgba(255,255,255,0.25); margin-top: 2px; }
        .he-badge { font-size: 10px; font-weight: 600; color: #085041; background: #5DCAA5; padding: 4px 10px; border-radius: 6px; font-family: 'Syne', sans-serif; }
        .section { padding: 64px 40px; }
        .section-alt { background: #0A1510; }
        .sec-eyebrow { font-size: 11px; font-weight: 600; color: #1D9E75; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px; font-family: 'Syne', sans-serif; }
        .sec-h { font-family: 'Syne', sans-serif; font-size: 30px; font-weight: 700; color: #fff; letter-spacing: -0.5px; line-height: 1.2; margin-bottom: 8px; }
        .sec-p { font-size: 14px; color: rgba(255,255,255,0.4); line-height: 1.75; max-width: 400px; font-weight: 300; }
        .steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(255,255,255,0.06); border-radius: 14px; overflow: hidden; margin-top: 40px; }
        .step-box { background: #0A1510; padding: 24px 20px; }
        .step-num { font-family: 'DM Mono', monospace; font-size: 11px; color: rgba(255,255,255,0.18); margin-bottom: 16px; }
        .step-ico { width: 38px; height: 38px; background: rgba(29,158,117,0.1); border: 1px solid rgba(29,158,117,0.18); border-radius: 9px; display: flex; align-items: center; justify-content: center; color: #1D9E75; font-size: 17px; margin-bottom: 14px; }
        .step-t { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 600; color: #fff; margin-bottom: 6px; }
        .step-d { font-size: 12px; color: rgba(255,255,255,0.35); line-height: 1.65; }
        .feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 40px; }
        .feat-card { background: #0A1510; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 20px; transition: border-color 0.2s, background 0.2s; }
        .feat-card:hover { border-color: rgba(29,158,117,0.25); background: #0D1A14; }
        .feat-ico { width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 12px; font-size: 17px; }
        .fi-teal { background: rgba(29,158,117,0.12); color: #1D9E75; }
        .fi-blue { background: rgba(55,138,221,0.1); color: #378ADD; }
        .fi-amber { background: rgba(239,159,39,0.1); color: #EF9F27; }
        .feat-t { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 600; color: #fff; margin-bottom: 5px; }
        .feat-d { font-size: 12px; color: rgba(255,255,255,0.35); line-height: 1.6; }
        .reviews-section { padding: 64px 40px; }
        .reviews-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 36px; }
        .rating-big { display: flex; align-items: center; gap: 16px; }
        .rating-num { font-family: 'Syne', sans-serif; font-size: 52px; font-weight: 800; color: #fff; letter-spacing: -2px; line-height: 1; }
        .rating-stars-col { display: flex; flex-direction: column; gap: 5px; }
        .rating-stars { color: #EF9F27; font-size: 18px; letter-spacing: 2px; }
        .rating-count { font-size: 12px; color: rgba(255,255,255,0.35); }
        .reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .rcard { background: #0D1A14; border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 20px; position: relative; }
        .rcard-stars { color: #EF9F27; font-size: 13px; letter-spacing: 1px; margin-bottom: 12px; }
        .rcard-quote { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 18px; }
        .rcard-footer { display: flex; align-items: center; gap: 10px; }
        .rcard-av { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; flex-shrink: 0; }
        .rcard-name { font-size: 13px; font-weight: 500; color: #fff; }
        .rcard-role { font-size: 11px; color: rgba(255,255,255,0.3); margin-top: 1px; }
        .rcard-platform { position: absolute; top: 16px; right: 16px; font-family: 'DM Mono', monospace; font-size: 9px; color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.04); padding: 3px 8px; border-radius: 5px; border: 1px solid rgba(255,255,255,0.06); }
        .rcard-featured { border-color: rgba(29,158,117,0.3); background: #0B1810; }
        .bar-row { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
        .bar-label { font-size: 12px; color: rgba(255,255,255,0.35); width: 40px; flex-shrink: 0; font-family: 'DM Mono', monospace; }
        .bar-track { flex: 1; height: 5px; background: rgba(255,255,255,0.07); border-radius: 3px; overflow: hidden; }
        .bar-fill { height: 100%; background: #1D9E75; border-radius: 3px; }
        .bar-count { font-size: 11px; color: rgba(255,255,255,0.3); width: 20px; text-align: right; font-family: 'DM Mono', monospace; }
        .rv-eyebrow { font-size: 11px; font-weight: 600; color: #1ABC9C; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px; font-family: 'Syne', sans-serif; }
        .rv-h { font-family: 'Syne', sans-serif; font-size: 34px; font-weight: 700; color: #fff; letter-spacing: -0.6px; line-height: 1.2; margin-bottom: 8px; }
        .rv-sub { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.75; max-width: 480px; font-weight: 300; margin-bottom: 40px; }
        .rv-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 40px; }
        .rv-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 24px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.04); }
        .rv-quote { font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 22px; font-style: italic; }
        .rv-footer { display: flex; align-items: center; gap: 12px; }
        .rv-av { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; flex-shrink: 0; color: #fff; }
        .rv-name { font-size: 14px; font-weight: 600; color: #fff; }
        .rv-role { font-size: 12px; color: rgba(255,255,255,0.4); margin-top: 2px; }
        .rv-metrics { display: grid; grid-template-columns: repeat(4, 1fr); background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; overflow: hidden; }
        .rv-metric { padding: 28px 24px; text-align: center; border-right: 1px solid rgba(255,255,255,0.07); }
        .rv-metric:last-child { border-right: none; }
        .rv-metric-val { font-family: 'Syne', sans-serif; font-size: 30px; font-weight: 800; color: #1ABC9C; letter-spacing: -0.5px; margin-bottom: 4px; }
        .rv-metric-lbl { font-size: 13px; color: rgba(255,255,255,0.4); }
        .stats-band { background: #0D1A14; border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); display: grid; grid-template-columns: repeat(4, 1fr); }
        .band-stat { padding: 28px 20px; text-align: center; border-right: 1px solid rgba(255,255,255,0.06); }
        .band-stat:last-child { border-right: none; }
        .band-val { font-family: 'Syne', sans-serif; font-size: 26px; font-weight: 800; color: #fff; letter-spacing: -0.5px; margin-bottom: 4px; }
        .band-val span { color: #1D9E75; }
        .band-lbl { font-size: 12px; color: rgba(255,255,255,0.35); }
        .pricing-section { padding: 80px 40px; background: #0A1510; text-align: center; }
        .pricing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; max-width: 680px; margin: 44px auto 0; }
        .pcard { background: #0D1A14; border: 1px solid rgba(255,255,255,0.09); border-radius: 18px; padding: 32px 28px; display: flex; flex-direction: column; text-align: left; transition: border-color 0.2s, transform 0.2s; }
        .pcard:hover { transform: translateY(-3px); }
        .pcard-pro { border-color: rgba(29,158,117,0.5); background: linear-gradient(165deg, #0B1810 0%, #0D1A14 100%); box-shadow: 0 0 0 1px rgba(29,158,117,0.18), 0 12px 40px rgba(0,0,0,0.4); position: relative; }
        .pcard-badge { display: inline-flex; align-items: center; gap: 5px; font-family: 'Syne', sans-serif; font-size: 10px; font-weight: 700; color: #04342C; background: #5DCAA5; padding: 4px 11px; border-radius: 20px; margin-bottom: 16px; letter-spacing: 0.04em; text-transform: uppercase; width: fit-content; }
        .pcard-name { font-family: 'Syne', sans-serif; font-size: 16px; font-weight: 700; color: rgba(255,255,255,0.55); margin-bottom: 10px; letter-spacing: 0.01em; }
        .pcard-pro .pcard-name { color: #fff; }
        .pcard-price { font-family: 'Syne', sans-serif; font-size: 44px; font-weight: 800; color: #fff; letter-spacing: -1.5px; line-height: 1; margin-bottom: 6px; }
        .pcard-price sub { font-size: 15px; font-weight: 400; color: rgba(255,255,255,0.3); letter-spacing: 0; }
        .pcard-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 16px 0; }
        .pcard-note { font-size: 12px; color: rgba(255,255,255,0.35); margin-bottom: 20px; }
        .pcard-feats { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px; flex: 1; }
        .pcard-feat { font-size: 13px; color: rgba(255,255,255,0.6); display: flex; align-items: center; gap: 9px; line-height: 1.4; }
        .pcard-feat i { color: #1D9E75; font-size: 14px; flex-shrink: 0; }
        .pcard-pro .pcard-feat i { color: #5DCAA5; }
        .pcard-btn { width: 100%; padding: 12px; border-radius: 10px; font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer; letter-spacing: 0.02em; transition: opacity 0.2s; }
        .pcard-btn:hover { opacity: 0.85; }
        .pb-outline { background: transparent; border: 1px solid rgba(255,255,255,0.12); color: rgba(255,255,255,0.6); }
        .pb-solid { background: #1D9E75; border: none; color: #fff; }
        .cta-block { margin: 40px; background: #1D9E75; border-radius: 16px; padding: 52px 48px; text-align: center; }
        .cta-h { font-family: 'Syne', sans-serif; font-size: 32px; font-weight: 800; color: #fff; letter-spacing: -0.6px; line-height: 1.15; margin-bottom: 10px; }
        .cta-p { font-size: 15px; color: rgba(255,255,255,0.65); margin-bottom: 30px; font-weight: 300; }
        .cta-btns { display: flex; justify-content: center; gap: 10px; }
        .btn-cta-white { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 600; padding: 12px 26px; background: #fff; color: #085041; border: none; border-radius: 9px; cursor: pointer; display: flex; align-items: center; gap: 7px; }
        .btn-cta-outline { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 500; padding: 12px 22px; background: rgba(255,255,255,0.12); color: #fff; border: 1px solid rgba(255,255,255,0.25); border-radius: 9px; cursor: pointer; }
        .footer { padding: 24px 40px; border-top: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: space-between; }
        .footer-logo { display: flex; align-items: center; gap: 8px; font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 700; color: #fff; }
        .footer-lm { width: 24px; height: 24px; background: #1D9E75; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #fff; }
        .footer-links { display: flex; gap: 20px; }
        .fl { font-size: 12px; color: rgba(255,255,255,0.3); cursor: pointer; }
        .fl:hover { color: rgba(255,255,255,0.6); }
        .sol-badge { display: flex; align-items: center; gap: 6px; font-family: 'DM Mono', monospace; font-size: 10px; color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); padding: 5px 10px; border-radius: 6px; }
        .sol-dot { width: 6px; height: 6px; background: #9945FF; border-radius: 50%; }
        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr; padding: 40px 20px; }
          .nav { padding: 16px 20px; }
          .nav-links { display: none; }
          .section { padding: 40px 20px; }
          .steps-grid { grid-template-columns: 1fr; }
          .feat-grid { grid-template-columns: 1fr; }
          .reviews-grid { grid-template-columns: 1fr; }
          .rv-grid { grid-template-columns: 1fr; }
          .rv-metrics { grid-template-columns: 1fr 1fr; }
          .rv-metric { border-bottom: 1px solid rgba(255,255,255,0.07); }
          .stats-band { grid-template-columns: 1fr; }
          .band-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .pricing-grid { grid-template-columns: 1fr; }
          .footer { flex-direction: column; gap: 16px; padding: 24px 20px; }
          .footer-links { flex-wrap: wrap; justify-content: center; }
        }
      `}</style>
      <h2 className="sr-only">EscrowAI homepage — AI contracts, Solana escrow, and verified freelancer reviews</h2>
      <div className="tc">
        <nav className="nav">
          <div className="nav-logo">
            <div className="nav-logo-mark"><i className="ti ti-shield-check" aria-hidden="true"></i></div>
            EscrowAI
          </div>
          <div className="nav-links">
            <span className="nav-link">How it works</span>
            <span className="nav-link">Features</span>
            <span className="nav-link">Reviews</span>
            <span className="nav-link">Pricing</span>
          </div>
          <div className="nav-actions">
            <button className="btn-ghost"><i className="ti ti-wallet" style={{fontSize: '13px', verticalAlign: '-1px', marginRight: '4px'}} aria-hidden="true"></i> Connect Wallet</button>
            <button className="btn-teal">Get started</button>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-left">
            <div className="hero-eyebrow"><div className="hero-dot"></div> Now live on Solana mainnet</div>
            <h1 className="hero-h1">Freelance work,<br/><em>secured by AI</em><br/>and blockchain.</h1>
            <p className="hero-p">Describe your project in plain language. AI generates the contract, Solana locks the funds, and payment releases the moment milestones are approved.</p>
            <div className="hero-ctas">
              <button className="btn-primary"><i className="ti ti-briefcase" style={{fontSize: '14px'}} aria-hidden="true"></i> Post a project</button>
              <button className="btn-secondary"><i className="ti ti-search" style={{fontSize: '14px'}} aria-hidden="true"></i> Find work</button>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars">
                <div className="trust-av" style={{background: '#1D4034', color: '#5DCAA5'}}>AR</div>
                <div className="trust-av" style={{background: '#0C2A47', color: '#378ADD'}}>MK</div>
                <div className="trust-av" style={{background: '#3D1A0C', color: '#D85A30'}}>JL</div>
                <div className="trust-av" style={{background: '#2A1940', color: '#7F77DD'}}>SP</div>
                <div className="trust-av" style={{background: '#1D4034', color: '#5DCAA5'}}>+</div>
              </div>
              <span className="trust-text"><strong>2,400+</strong> freelancers &amp; clients</span>
              <div className="trust-divider"></div>
              <div className="trust-rating">
                <span className="trust-stars">★★★★★</span>
                <span><strong style={{color: 'rgba(255,255,255,0.65)'}}>4.9</strong> / 5</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <div className="hc-header">
                <span className="hc-label">AI contract generator</span>
                <span className="hc-status"><span className="hc-status-dot"></span> Generating...</span>
              </div>
              <div className="hc-input">
                <i className="ti ti-sparkles" style={{color: '#1D9E75', fontSize: '15px', flexShrink: 0, marginTop: '1px'}} aria-hidden="true"></i>
                <span className="hc-input-text">Design a mobile app UI for a fintech startup, 3 screens, 2 revision rounds, deliver in 3 weeks for 4.5 SOL<span className="hc-cursor"></span></span>
              </div>
              <div className="hc-ai-preview">
                <div className="hc-ai-tag"><i className="ti ti-robot" style={{fontSize: '11px', marginRight: '3px'}} aria-hidden="true"></i> AI draft preview</div>
                <div className="hc-ai-text">Agreement between <strong>Client</strong> and <strong>Freelancer</strong> for <strong>mobile UI design</strong> across 3 milestones. <strong>4.5 SOL</strong> held in Solana escrow, releasing per milestone approval.</div>
                <div className="hc-ms-row">
                  <div className="hc-ms">
                    <div className="hc-ms-top"><span className="hc-ms-name">Wireframes</span><span className="hc-ms-sol">1.0 SOL</span></div>
                    <div className="hc-ms-bar"><div className="hc-ms-fill" style={{width: '100%', background: '#1D9E75'}}></div></div>
                  </div>
                  <div className="hc-ms">
                    <div className="hc-ms-top"><span className="hc-ms-name">UI designs</span><span className="hc-ms-sol">2.5 SOL</span></div>
                    <div className="hc-ms-bar"><div className="hc-ms-fill" style={{width: '55%', background: '#378ADD'}}></div></div>
                  </div>
                  <div className="hc-ms">
                    <div className="hc-ms-top"><span className="hc-ms-name">Delivery</span><span className="hc-ms-sol">1.0 SOL</span></div>
                    <div className="hc-ms-bar"><div className="hc-ms-fill" style={{width: '0%', background: '#888780'}}></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-escrow">
              <div className="he-icon"><i className="ti ti-lock" aria-hidden="true"></i></div>
              <div className="he-info">
                <div className="he-label">Solana escrow vault</div>
                <div className="he-value">4.5 SOL locked</div>
                <div className="he-addr">5XjR3mPq...k2Wq · Devnet confirmed</div>
              </div>
              <div className="he-badge">Secured</div>
            </div>
          </div>
        </section>

        <div className="stats-band">
          <div className="band-stat"><div className="band-val">$<span>1.2M</span>+</div><div className="band-lbl">secured in escrow</div></div>
          <div className="band-stat"><div className="band-val"><span>2,400</span>+</div><div className="band-lbl">contracts completed</div></div>
          <div className="band-stat"><div className="band-val"><span>98.4</span>%</div><div className="band-lbl">on-time payment rate</div></div>
          <div className="band-stat"><div className="band-val"><span>1.4</span>d</div><div className="band-lbl">avg. payment release</div></div>
        </div>

        <section className="section section-alt">
          <div className="sec-eyebrow">How it works</div>
          <h2 className="sec-h">Four steps from agreement<br/>to payment.</h2>
          <p className="sec-p" style={{marginTop: '8px', marginBottom: '0'}}>No legal jargon, no manual invoicing, no payment chasing. Just describe the work and let EscrowAI handle everything else.</p>
          <div className="steps-grid">
            <div className="step-box">
              <div className="step-num">01</div>
              <div className="step-ico"><i className="ti ti-writing" aria-hidden="true"></i></div>
              <div className="step-t">Describe the work</div>
              <div className="step-d">Write what you need in plain language — scope, timeline, deliverables. No legal templates.</div>
            </div>
            <div className="step-box">
              <div className="step-num">02</div>
              <div className="step-ico"><i className="ti ti-sparkles" aria-hidden="true"></i></div>
              <div className="step-t">AI drafts the contract</div>
              <div className="step-d">AI generates a structured contract with milestones, payment terms, and revision rights.</div>
            </div>
            <div className="step-box">
              <div className="step-num">03</div>
              <div className="step-ico"><i className="ti ti-lock" aria-hidden="true"></i></div>
              <div className="step-t">Fund the escrow</div>
              <div className="step-d">Client deposits SOL into a Solana smart contract vault. Funds locked until milestones are approved.</div>
            </div>
            <div className="step-box">
              <div className="step-num">04</div>
              <div className="step-ico"><i className="ti ti-circle-check" aria-hidden="true"></i></div>
              <div className="step-t">Work done, funds release</div>
              <div className="step-d">AI reviews deliverables against contract. Payment auto-releases on-chain. No invoicing needed.</div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="sec-eyebrow">Features</div>
          <h2 className="sec-h">Built for the future<br/>of freelance work.</h2>
          <p className="sec-p" style={{marginTop: '8px', marginBottom: '0'}}>Everything you need to work with confidence — for both clients and freelancers.</p>
          <div className="feat-grid">
            <div className="feat-card">
              <div className="feat-ico fi-teal"><i className="ti ti-writing" aria-hidden="true"></i></div>
              <div className="feat-t">AI contract generation</div>
              <div className="feat-d">Describe your project in plain English. Get a structured contract with milestones and payment terms in seconds.</div>
            </div>
            <div className="feat-card">
              <div className="feat-ico fi-teal"><i className="ti ti-lock" aria-hidden="true"></i></div>
              <div className="feat-t">Solana escrow vault</div>
              <div className="feat-d">Non-custodial smart contract holds funds. Neither party can withdraw without meeting contract conditions.</div>
            </div>
            <div className="feat-card">
              <div className="feat-ico fi-teal"><i className="ti ti-checklist" aria-hidden="true"></i></div>
              <div className="feat-t">Milestone tracking</div>
              <div className="feat-d">AI monitors deliverable submissions against contract criteria and flags issues before releasing any payment.</div>
            </div>
            <div className="feat-card">
              <div className="feat-ico fi-blue"><i className="ti ti-send" aria-hidden="true"></i></div>
              <div className="feat-t">Auto payment release</div>
              <div className="feat-d">Payments release on-chain the moment a milestone is approved — no invoicing, no manual transfers.</div>
            </div>
            <div className="feat-card">
              <div className="feat-ico fi-blue"><i className="ti ti-shield" aria-hidden="true"></i></div>
              <div className="feat-t">Dispute resolution</div>
              <div className="feat-d">AI-assisted resolution uses the original contract as ground truth — fast, fair, and transparent.</div>
            </div>
            <div className="feat-card">
              <div className="feat-ico fi-amber"><i className="ti ti-star" aria-hidden="true"></i></div>
              <div className="feat-t">Verified reviews</div>
              <div className="feat-d">Only wallets that completed a contract can leave reviews. Every rating is cryptographically verified on-chain.</div>
            </div>
          </div>
        </section>

        <section className="reviews-section" style={{padding: '72px 40px'}}>
          <div className="rv-eyebrow">TRUSTED BY FREELANCERS</div>
          <h2 className="rv-h">Loved by the people who use it.</h2>
          <p className="rv-sub">From solo designers to dev agencies — EscrowAI works for everyone.</p>

          <div className="rv-grid">
            <div className="rv-card">
              <p className="rv-quote">"First time I've finished a project without a single payment argument. The escrow just works — and the AI contract caught scope creep I would've missed."</p>
              <div className="rv-footer">
                <div className="rv-av" style={{background: '#1D4034'}}>AR</div>
                <div><div className="rv-name">Aisha R.</div><div className="rv-role">UI Designer, Lagos</div></div>
              </div>
            </div>
            <div className="rv-card">
              <p className="rv-quote">"I hired 3 contractors last month all through EscrowAI. Set up each contract in 2 minutes, funds released automatically. It's the future of hiring."</p>
              <div className="rv-footer">
                <div className="rv-av" style={{background: '#0C2A47'}}>MK</div>
                <div><div className="rv-name">Marcus K.</div><div className="rv-role">Startup founder, Berlin</div></div>
              </div>
            </div>
            <div className="rv-card">
              <p className="rv-quote">"As a dev, I was skeptical — but the contract generation is genuinely impressive. It captured technical deliverables I wouldn't have known to include."</p>
              <div className="rv-footer">
                <div className="rv-av" style={{background: '#8B5A2B'}}>JL</div>
                <div><div className="rv-name">Jade L.</div><div className="rv-role">Full-stack developer, NYC</div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <div className="sec-eyebrow">Pricing</div>
          <h2 className="sec-h">Simple, transparent pricing.</h2>
          <p className="sec-p" style={{marginTop: '8px', marginLeft: 'auto', marginRight: 'auto'}}>We only earn when work gets done — 1.5% escrow fee on every successful payment release.</p>
          <div className="pricing-grid">
            <div className="pcard">
              <div className="pcard-name">Free</div>
              <div className="pcard-price">$0 <sub>/ month</sub></div>
              <div className="pcard-note">+ 1.5% escrow fee per release</div>
              <div className="pcard-divider"></div>
              <ul className="pcard-feats">
                <li className="pcard-feat"><i className="ti ti-check" aria-hidden="true"></i> 1 active contract</li>
                <li className="pcard-feat"><i className="ti ti-check" aria-hidden="true"></i> AI contract drafting</li>
                <li className="pcard-feat"><i className="ti ti-check" aria-hidden="true"></i> Solana escrow vault</li>
                <li className="pcard-feat"><i className="ti ti-check" aria-hidden="true"></i> Verified reviews</li>
              </ul>
              <button className="pcard-btn pb-outline">Start for free</button>
            </div>
            <div className="pcard pcard-pro">
              <div className="pcard-badge"><i className="ti ti-star-filled" style={{fontSize: '9px'}} aria-hidden="true"></i> Most popular</div>
              <div className="pcard-name">Pro</div>
              <div className="pcard-price">$9 <sub>/ month</sub></div>
              <div className="pcard-note">+ 1.5% escrow fee per release</div>
              <div className="pcard-divider" style={{background: 'rgba(29,158,117,0.2)'}}></div>
              <ul className="pcard-feats">
                <li className="pcard-feat"><i className="ti ti-check" aria-hidden="true"></i> Unlimited contracts</li>
                <li className="pcard-feat"><i className="ti ti-check" aria-hidden="true"></i> Advanced AI tracking</li>
                <li className="pcard-feat"><i className="ti ti-check" aria-hidden="true"></i> Priority disputes</li>
                <li className="pcard-feat"><i className="ti ti-check" aria-hidden="true"></i> Analytics dashboard</li>
                <li className="pcard-feat"><i className="ti ti-check" aria-hidden="true"></i> Contract templates</li>
              </ul>
              <button className="pcard-btn pb-solid">Get Pro</button>
            </div>
          </div>
        </section>

        <div className="cta-block">
          <h2 className="cta-h">Ready to work without worry?</h2>
          <p className="cta-p">Join 2,400+ freelancers and clients who've left payment disputes behind for good.</p>
          <div className="cta-btns">
            <button className="btn-cta-white"><i className="ti ti-rocket" style={{fontSize: '14px', verticalAlign: '-2px', marginRight: '5px'}} aria-hidden="true"></i> Start for free</button>
            <button className="btn-cta-outline">Read the docs</button>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-logo">
            <div className="footer-lm"><i className="ti ti-shield-check" style={{fontSize: '12px'}} aria-hidden="true"></i></div>
            EscrowAI
          </div>
          <div className="footer-links">
            <span className="fl">About</span>
            <span className="fl">Twitter</span>
            <span className="fl">GitHub</span>
            <span className="fl">Privacy</span>
          </div>
          <div className="sol-badge"><div className="sol-dot"></div> Built on Solana</div>
        </footer>
      </div>
    </>
  );
}
