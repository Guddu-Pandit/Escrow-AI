export default function Home() {
  return (
    <div className="min-h-screen bg-[#070a08] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(900px_500px_at_15%_10%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(900px_500px_at_85%_10%,rgba(16,185,129,0.10),transparent_60%),radial-gradient(1000px_700px_at_50%_90%,rgba(16,185,129,0.10),transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/15 ring-1 ring-emerald-400/25">
              <span className="h-3 w-3 rounded-sm bg-emerald-400" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-zinc-100">
              TrustChain
            </span>
          </div>

          <nav className="hidden items-center gap-7 text-xs text-zinc-400 md:flex">
            <a className="hover:text-zinc-200" href="#">
              How it works
            </a>
            <a className="hover:text-zinc-200" href="#">
              Features
            </a>
            <a className="hover:text-zinc-200" href="#">
              Reviews
            </a>
            <a className="hover:text-zinc-200" href="#">
              Pricing
            </a>
            <a className="hover:text-zinc-200" href="#">
              Docs
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-white/10 sm:inline-flex"
              href="#"
            >
              Connect Wallet
            </a>
            <a
              className="inline-flex rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-black shadow-[0_12px_30px_rgba(16,185,129,0.25)] hover:bg-emerald-400"
              href="#"
            >
              Get started
            </a>
          </div>
        </header>

        <main className="mt-10 grid items-start gap-10 pb-14 md:mt-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <section className="pt-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Now live on Solana mainnet
            </div>

            <h1 className="mt-6 text-[42px] font-semibold leading-[1.03] tracking-tight text-white md:text-[56px]">
              Freelance work,
              <br />
              <span className="text-emerald-400">secured</span> by AI
              <br />
              and blockchain.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400">
              Describe your project in plain language. AI generates the
              contract, Solana locks the funds, and payment releases the moment
              milestones are approved.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-500 px-5 text-xs font-semibold text-black hover:bg-emerald-400"
                href="#"
              >
                Post a project
              </a>
              <a
                className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-xs font-semibold text-zinc-200 hover:bg-white/10"
                href="#"
              >
                Find work
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#070a08] bg-emerald-500/25 text-[10px] font-semibold text-emerald-100">
                    AK
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#070a08] bg-sky-500/25 text-[10px] font-semibold text-sky-100">
                    MS
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#070a08] bg-fuchsia-500/25 text-[10px] font-semibold text-fuchsia-100">
                    SP
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#070a08] bg-amber-500/25 text-[10px] font-semibold text-amber-100">
                    JT
                  </span>
                </div>
                <span className="ml-3">2,400+ freelancers &amp; clients</span>
              </div>

              <div className="hidden h-4 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-emerald-300">
                  <span aria-hidden className="text-emerald-300">
                    ★★★★★
                  </span>
                </span>
                <span>4.8 / 5</span>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-semibold tracking-wide text-zinc-300">
                  AI CONTRACT GENERATOR
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-200 ring-1 ring-emerald-400/15">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Generating…
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-xs text-zinc-300">
                Design a mobile app UI for a fintech startup, 3 screens, 2
                revision rounds, deliver in 3 weeks for 4.5 SOL.
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="text-[11px] font-semibold tracking-wide text-emerald-200/80">
                  AI DRAFT PREVIEW
                </div>
                <p className="mt-2 text-xs leading-6 text-zinc-300">
                  Agreement between Client and Freelancer for mobile UI design
                  across 3 milestones. 4.5 SOL held in Solana escrow, releasing
                  per milestone approval.
                </p>

                <div className="mt-3 grid gap-2">
                  <MilestoneRow label="Wireframes" value="1.0 SOL" pct={28} />
                  <MilestoneRow label="UI designs" value="2.5 SOL" pct={70} />
                  <MilestoneRow label="Delivery" value="1.0 SOL" pct={28} />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/35 p-4">
                <div>
                  <div className="text-[11px] text-zinc-400">
                    Solana escrow vault
                  </div>
                  <div className="mt-0.5 text-sm font-semibold text-zinc-100">
                    4.5 SOL locked
                  </div>
                </div>
                <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-200 ring-1 ring-emerald-400/15">
                  Secured
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <section className="relative border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 md:gap-10">
          <Stat k="$1.2M+" v="secured in escrow" />
          <Stat k="2,400+" v="contracts completed" />
          <Stat k="98.4%" v="on-time payment rate" />
          <Stat k="1.4d" v="avg. payment release" />
        </div>
      </section>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">
      <div className="text-xl font-semibold tracking-tight text-emerald-300">
        {k}
      </div>
      <div className="mt-1 text-xs text-zinc-400">{v}</div>
    </div>
  );
}

function MilestoneRow({
  label,
  value,
  pct,
}: {
  label: string;
  value: string;
  pct: number;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
      <div className="text-[11px] text-zinc-300">{label}</div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-emerald-400/70"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="text-[11px] font-medium text-emerald-200">{value}</div>
    </div>
  );
}
