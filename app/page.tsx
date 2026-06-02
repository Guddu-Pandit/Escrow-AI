"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean;
      publicKey?: { toString: () => string };
      connect?: () => Promise<void>;
      disconnect?: () => Promise<void>;
    };
  }
}

const BRAND_BG = "#0B1A14";
const BRAND_TEAL = "#1D9E75";
const CARD_BG = "#111F18";

export default function Home() {
  const phantomDetected = typeof window !== "undefined" && !!window.solana;
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const shortWallet = useMemo(() => {
    if (!walletAddress) return null;
    return `${walletAddress.slice(0, 4)}…${walletAddress.slice(-4)}`;
  }, [walletAddress]);

  function onConnectWallet() {
    // Stub behavior. If Phantom is present, we still avoid real RPC and just
    // surface a plausible address for UI purposes.
    if (walletAddress) {
      setWalletAddress(null);
      return;
    }

    const phantomKey = window.solana?.publicKey?.toString?.();
    setWalletAddress(phantomKey ?? "9fA3…kQ2V7rQX7yqk5b6c7d8e9f0a1b2c3d4e5f6");
  }

  return (
    <div
      className="min-h-screen text-zinc-100"
      style={{ backgroundColor: BRAND_BG }}
    >
      {/* ambient teal glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_650px_at_15%_8%,rgba(29,158,117,0.22),transparent_60%),radial-gradient(900px_500px_at_85%_10%,rgba(29,158,117,0.14),transparent_60%),radial-gradient(1100px_750px_at_50%_95%,rgba(29,158,117,0.12),transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative">
        <Container>
          <Navbar
            walletLabel={shortWallet ? `Connected: ${shortWallet}` : undefined}
            onConnectWallet={onConnectWallet}
          />

          <motion.main
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="pt-10 md:pt-16"
          >
            <section className="grid items-start gap-10 pb-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:pb-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-200">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: BRAND_TEAL }}
                  />
                  <span className="text-zinc-200/90">
                    Now live on Solana mainnet
                  </span>
                </div>

                <h1 className="mt-6 text-[40px] leading-[1.04] tracking-tight text-white md:text-[52px] font-[800] font-[var(--font-syne)]">
                  Freelance work, secured by{" "}
                  <span style={{ color: BRAND_TEAL }}>AI</span> and blockchain.
                </h1>

                <p className="mt-6 max-w-xl text-[15px] leading-7 text-zinc-300/80">
                  TrustChain turns plain-language project briefs into milestone
                  contracts. AI drafts the agreement, escrow is funded on Solana,
                  and payments auto-release as work is approved.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#pricing"
                    className="inline-flex h-11 items-center justify-center rounded-full px-5 text-xs font-semibold text-black shadow-[0_18px_40px_rgba(29,158,117,0.30)]"
                    style={{ backgroundColor: BRAND_TEAL }}
                  >
                    Post a project
                  </a>
                  <a
                    href="#features"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-xs font-semibold text-zinc-100 hover:bg-white/10"
                  >
                    Find work
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-zinc-300/70">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      <AvatarBubble label="AK" tint="rgba(29,158,117,0.25)" />
                      <AvatarBubble label="MS" tint="rgba(59,130,246,0.22)" />
                      <AvatarBubble label="SP" tint="rgba(217,70,239,0.22)" />
                      <AvatarBubble label="JT" tint="rgba(245,158,11,0.22)" />
                    </div>
                    <span className="ml-3">2,400+ freelancers &amp; clients</span>
                  </div>
                  <div className="hidden h-4 w-px bg-white/10 sm:block" />
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-200">★★★★★</span>
                    <span>4.8 / 5</span>
                  </div>
                  {phantomDetected ? (
                    <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: BRAND_TEAL }}
                      />
                      Phantom detected
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="relative">
                <ChromeMock />
              </div>
            </section>
          </motion.main>
        </Container>

        {/* Stats bar: 4 columns with borders */}
        <section className="border-y border-white/10 bg-white/[0.02]">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4">
              <StatCell k="$1.2M+" v="escrow secured" />
              <StatCell k="2,400+" v="contracts" />
              <StatCell k="98.4%" v="on-time" />
              <StatCell k="1.4 days" v="avg release" />
            </div>
          </Container>
        </section>

        {/* Below stats: full-width chrome mockup (spec) */}
        <section className="py-12 md:py-16">
          <Container>
            <Reveal>
              <div className="mx-auto max-w-5xl">
                <ChromeMock variant="wide" />
              </div>
            </Reveal>
          </Container>
        </section>

        {/* How it works */}
        <section id="how" className="py-12 md:py-16">
          <Container>
            <SectionHeading
              eyebrow="How it works"
              title="Four steps. Zero ambiguity."
              subtitle="From brief to escrowed milestones, automated end-to-end."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <HowStep
                n="01"
                icon={<IconWriting />}
                title="Describe"
                desc="Write your scope, timeline, and payment terms in plain language."
              />
              <HowStep
                n="02"
                icon={<IconChecklist />}
                title="AI drafts"
                desc="TrustChain generates a milestone contract you can edit and approve."
              />
              <HowStep
                n="03"
                icon={<IconWallet />}
                title="Fund escrow"
                desc="Deposit SOL into a program vault for each milestone."
              />
              <HowStep
                n="04"
                icon={<IconShield />}
                title="Auto-release"
                desc="Payments release as milestones are accepted—no chasing invoices."
              />
            </div>
          </Container>
        </section>

        {/* Features */}
        <section id="features" className="py-12 md:py-16">
          <Container>
            <SectionHeading
              eyebrow="Features"
              title="Built for trust at internet speed."
              subtitle="AI for clarity. Solana for settlement. A dark UI that keeps focus on the work."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<IconWriting />}
                title="Plain-language contracts"
                desc="Turn a short brief into clear deliverables, milestones, and acceptance criteria."
              />
              <FeatureCard
                icon={<IconLock />}
                title="Escrow by default"
                desc="Funds are locked before work starts—reducing risk for both sides."
              />
              <FeatureCard
                icon={<IconChecklist />}
                title="Milestone approvals"
                desc="Approve milestone-by-milestone with an auditable status trail."
              />
              <FeatureCard
                icon={<IconSend />}
                title="Instant settlement"
                desc="Release payments in seconds on Solana when work is accepted."
              />
              <FeatureCard
                icon={<IconShield />}
                title="Dispute-resilient"
                desc="Structured scopes and milestones minimize disagreement from day one."
              />
              <FeatureCard
                icon={<IconWallet />}
                title="Wallet-native"
                desc="Connect Phantom (stubbed) to preview a web3-first flow."
              />
            </div>
          </Container>
        </section>

        {/* Social proof */}
        <section id="proof" className="py-12 md:py-16">
          <Container>
            <SectionHeading
              eyebrow="Social proof"
              title="Teams shipping with confidence."
              subtitle="Freelancers get paid on time. Clients get predictable delivery."
            />

            <Reveal>
              <div
                className="mt-8 rounded-2xl border border-white/10 p-6 md:p-8"
                style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
              >
                <div className="grid gap-6 md:grid-cols-3">
                  <Testimonial
                    name="Amina K."
                    role="Product designer"
                    quote="The milestone structure stopped scope creep instantly. Escrow made it stress-free."
                    initials="AK"
                    tint="rgba(29,158,117,0.25)"
                  />
                  <Testimonial
                    name="Marco S."
                    role="Founder"
                    quote="AI drafting saved us hours. We posted, funded, and started work the same day."
                    initials="MS"
                    tint="rgba(59,130,246,0.22)"
                  />
                  <Testimonial
                    name="Sofia P."
                    role="Full-stack dev"
                    quote="Auto-release on approval is huge. No more awkward payment follow-ups."
                    initials="SP"
                    tint="rgba(217,70,239,0.22)"
                  />
                </div>

                <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-4">
                  <MiniStat k="4.8/5" v="average rating" />
                  <MiniStat k="24h" v="median contract draft" />
                  <MiniStat k="0" v="late escrow funding" />
                  <MiniStat k="99%" v="milestones approved" />
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-12 md:py-16">
          <Container>
            <SectionHeading
              eyebrow="Pricing"
              title="Start free. Upgrade when you grow."
              subtitle="Note: 1.5% escrow fee applies to all plans."
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <PricingCard
                name="Free"
                price="$0"
                cadence=""
                highlight={false}
                features={[
                  "AI contract draft (basic)",
                  "Milestone templates",
                  "Escrow tracking UI",
                  "Community support",
                ]}
              />
              <PricingCard
                name="Pro"
                price="$9"
                cadence="/mo"
                highlight
                badge="Most popular"
                features={[
                  "AI contract draft (advanced)",
                  "Custom milestone logic",
                  "Priority dispute support",
                  "Team workspaces",
                ]}
              />
            </div>

            <div className="mt-6 text-center text-xs text-zinc-300/70">
              1.5% escrow fee on all plans.
            </div>
          </Container>
        </section>

        {/* Teal CTA */}
        <section className="py-12 md:py-16">
          <div
            className="w-full"
            style={{ backgroundColor: BRAND_TEAL }}
          >
            <Container>
              <div className="py-12 md:py-14">
                <div className="grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr]">
                  <div>
                    <h2 className="text-[28px] leading-[1.1] text-white md:text-[34px] font-[800] font-[var(--font-syne)]">
                      Ready to work without worry?
                    </h2>
                    <p className="mt-3 max-w-xl text-sm text-white/85">
                      Draft a milestone contract, fund escrow, and ship with a
                      clear acceptance path.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 md:justify-end">
                    <a
                      href="#"
                      className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-xs font-semibold text-black hover:bg-white/90"
                    >
                      Get started
                    </a>
                    <button
                      type="button"
                      onClick={onConnectWallet}
                      className="inline-flex h-11 items-center justify-center rounded-full border border-white/70 bg-transparent px-5 text-xs font-semibold text-white hover:bg-white/10"
                    >
                      {walletAddress ? "Disconnect" : "Connect Wallet"}
                    </button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <LogoMark />
                <span className="text-sm font-semibold tracking-wide text-white font-[var(--font-syne)]">
                  TrustChain
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-300/70 md:justify-center">
                <a className="hover:text-zinc-100" href="#how">
                  How it works
                </a>
                <a className="hover:text-zinc-100" href="#features">
                  Features
                </a>
                <a className="hover:text-zinc-100" href="#pricing">
                  Pricing
                </a>
                <a className="hover:text-zinc-100" href="#">
                  Docs
                </a>
              </div>

              <div className="md:justify-end">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-100/90">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  Built on Solana
                </span>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Navbar({
  walletLabel,
  onConnectWallet,
}: {
  walletLabel?: string;
  onConnectWallet: () => void;
}) {
  return (
    <header className="flex items-center justify-between pt-6">
      <div className="flex items-center gap-2">
        <LogoMark />
        <span className="text-sm font-semibold tracking-wide text-white font-[var(--font-syne)]">
          TrustChain
        </span>
      </div>

      <nav className="hidden items-center gap-7 text-xs text-zinc-300/70 md:flex">
        <a className="hover:text-zinc-100" href="#how">
          How it works
        </a>
        <a className="hover:text-zinc-100" href="#features">
          Features
        </a>
        <a className="hover:text-zinc-100" href="#pricing">
          Pricing
        </a>
        <a className="hover:text-zinc-100" href="#">
          Docs
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onConnectWallet}
          className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-100 hover:bg-white/10 sm:inline-flex"
        >
          {walletLabel ?? "Connect Wallet"}
        </button>
        <a
          href="#pricing"
          className="inline-flex rounded-full px-4 py-2 text-xs font-semibold text-black shadow-[0_12px_30px_rgba(29,158,117,0.28)]"
          style={{ backgroundColor: BRAND_TEAL }}
        >
          Get started
        </a>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <span
      className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-white/10"
      style={{ backgroundColor: "rgba(29,158,117,0.18)" }}
      aria-hidden
    >
      <IconShield />
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Reveal>
      <div className="max-w-2xl">
        <div className="text-xs font-semibold tracking-[0.18em] text-zinc-300/70 uppercase">
          {eyebrow}
        </div>
        <h2 className="mt-3 text-[26px] leading-[1.12] text-white md:text-[32px] font-[800] font-[var(--font-syne)]">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-zinc-300/75">{subtitle}</p>
      </div>
    </Reveal>
  );
}

function StatCell({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-white/10 p-5 md:p-6 border-r last:border-r-0 border-b md:border-b-0">
      <div className="text-lg text-white font-[var(--font-dm-mono)]">{k}</div>
      <div className="mt-1 text-xs text-zinc-300/70">{v}</div>
    </div>
  );
}

function AvatarBubble({ label, tint }: { label: string; tint: string }) {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#0B1A14] text-[10px] font-semibold text-white/80"
      style={{ backgroundColor: tint }}
    >
      {label}
    </span>
  );
}

function HowStep({
  n,
  icon,
  title,
  desc,
}: {
  n: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
        <div className="flex items-center justify-between">
          <div className="text-xs text-zinc-300/55 font-[var(--font-dm-mono)]">
            {n}
          </div>
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ backgroundColor: BRAND_TEAL }}
          >
            <span className="text-black">{icon}</span>
          </span>
        </div>
        <div className="mt-4 text-sm font-semibold text-white font-[var(--font-syne)]">
          {title}
        </div>
        <div className="mt-2 text-sm leading-6 text-zinc-300/75">{desc}</div>
      </div>
    </Reveal>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Reveal>
      <div
        className="group rounded-2xl border border-white/10 p-5 transition"
        style={{ backgroundColor: CARD_BG }}
      >
        <div className="flex items-center justify-between">
          <span
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ backgroundColor: "rgba(29,158,117,0.18)" }}
          >
            <span style={{ color: BRAND_TEAL }}>{icon}</span>
          </span>
          <span className="h-2 w-2 rounded-full bg-white/10 group-hover:bg-white/20" />
        </div>
        <div className="mt-4 text-sm font-semibold text-white font-[var(--font-syne)]">
          {title}
        </div>
        <div className="mt-2 text-sm leading-6 text-zinc-300/75">{desc}</div>
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100 [box-shadow:0_0_0_1px_rgba(29,158,117,0.45),0_0_40px_rgba(29,158,117,0.12)]" />
      </div>
    </Reveal>
  );
}

function Testimonial({
  name,
  role,
  quote,
  initials,
  tint,
}: {
  name: string;
  role: string;
  quote: string;
  initials: string;
  tint: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="flex items-center gap-3">
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-white/85"
          style={{ backgroundColor: tint }}
        >
          {initials}
        </span>
        <div>
          <div className="text-sm font-semibold text-white">{name}</div>
          <div className="text-xs text-zinc-300/70">{role}</div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-zinc-200/75">“{quote}”</p>
    </div>
  );
}

function MiniStat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="text-base text-white font-[var(--font-dm-mono)]">{k}</div>
      <div className="mt-1 text-xs text-zinc-300/70">{v}</div>
    </div>
  );
}

function PricingCard({
  name,
  price,
  cadence,
  features,
  highlight,
  badge,
}: {
  name: string;
  price: string;
  cadence: string;
  features: string[];
  highlight: boolean;
  badge?: string;
}) {
  return (
    <Reveal>
      <div
        className="relative rounded-2xl border p-6 md:p-7"
        style={{
          backgroundColor: CARD_BG,
          borderColor: highlight ? "rgba(29,158,117,0.7)" : "rgba(255,255,255,0.10)",
          boxShadow: highlight ? "0 0 0 1px rgba(29,158,117,0.2), 0 30px 90px rgba(0,0,0,0.35)" : undefined,
        }}
      >
        {badge ? (
          <span
            className="absolute -top-3 left-6 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold text-black"
            style={{ backgroundColor: BRAND_TEAL }}
          >
            {badge}
          </span>
        ) : null}

        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-white font-[var(--font-syne)]">
              {name}
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl text-white font-[800] font-[var(--font-syne)]">
                {price}
              </span>
              {cadence ? (
                <span className="text-sm text-zinc-300/70">{cadence}</span>
              ) : null}
            </div>
          </div>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-200/80">
            1.5% fee
          </span>
        </div>

        <div className="mt-6 grid gap-3">
          {features.map((f) => (
            <div key={f} className="flex items-start gap-3 text-sm text-zinc-200/75">
              <span
                className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(29,158,117,0.18)" }}
                aria-hidden
              >
                <span style={{ color: BRAND_TEAL }}>
                  <IconCheck />
                </span>
              </span>
              <span>{f}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <a
            href="#"
            className="inline-flex h-11 flex-1 items-center justify-center rounded-full text-xs font-semibold text-black"
            style={{ backgroundColor: highlight ? BRAND_TEAL : "rgba(255,255,255,0.10)" }}
          >
            Choose {name}
          </a>
          {highlight ? (
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-transparent px-5 text-xs font-semibold text-zinc-100 hover:bg-white/5"
            >
              View docs
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}

function ChromeMock({ variant }: { variant?: "wide" }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="hidden md:block rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-zinc-300/80">
          trustchain.app/contracts/new
        </div>
        <div className="h-6 w-6 rounded-md bg-white/5" />
      </div>

      <div className="p-4 md:p-5">
        <div className={variant === "wide" ? "grid gap-4 lg:grid-cols-[1.1fr_0.9fr]" : "grid gap-4"}>
          <div className="rounded-xl border border-white/10 bg-black/25 p-4">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-semibold tracking-wide text-zinc-200/80">
                AI CONTRACT GENERATOR
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-zinc-100/80">
                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full"
                  style={{ backgroundColor: BRAND_TEAL }}
                />
                Generating…
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-200/80">
              Build a landing page, 6 sections, responsive, deliver in 10 days
              for <span className="font-[var(--font-dm-mono)]">4.5 SOL</span>.
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-[11px] font-semibold tracking-wide text-zinc-200/70">
                Milestones
              </div>
              <div className="mt-3 grid gap-2">
                <MilestoneCard
                  label="Design system"
                  value="1.0 SOL"
                  status="Funded"
                />
                <MilestoneCard
                  label="Implementation"
                  value="2.5 SOL"
                  status="In escrow"
                />
                <MilestoneCard
                  label="QA + Handoff"
                  value="1.0 SOL"
                  status="Pending"
                />
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/25 p-4">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-semibold tracking-wide text-zinc-200/80">
                Escrow status
              </div>
              <span
                className="rounded-full px-3 py-1 text-[11px] font-semibold text-black"
                style={{ backgroundColor: BRAND_TEAL }}
              >
                Secured
              </span>
            </div>

            <div className="mt-3 rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="text-[11px] text-zinc-300/70">
                Solana program vault
              </div>
              <div className="mt-1 text-lg font-semibold text-white">
                <span className="font-[var(--font-dm-mono)]">4.5 SOL</span>{" "}
                locked
              </div>
              <div className="mt-4 grid gap-3">
                <KeyValue
                  k="Client"
                  v="8v8m…Jx3Q"
                  mono
                />
                <KeyValue
                  k="Freelancer"
                  v="9fA3…kQ2V"
                  mono
                />
                <KeyValue k="Release" v="On approval" />
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="text-[11px] font-semibold tracking-wide text-zinc-200/70">
                Approval queue
              </div>
              <div className="mt-3 space-y-2">
                <QueueRow label="Design system" state="Approved" />
                <QueueRow label="Implementation" state="In review" />
                <QueueRow label="QA + Handoff" state="Waiting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KeyValue({
  k,
  v,
  mono,
}: {
  k: string;
  v: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="text-xs text-zinc-300/70">{k}</div>
      <div
        className={[
          "text-xs text-zinc-100/85",
          mono ? "font-[var(--font-dm-mono)]" : "",
        ].join(" ")}
      >
        {v}
      </div>
    </div>
  );
}

function QueueRow({ label, state }: { label: string; state: string }) {
  const color =
    state === "Approved"
      ? "rgba(29,158,117,0.22)"
      : state === "In review"
        ? "rgba(59,130,246,0.18)"
        : "rgba(255,255,255,0.08)";

  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-black/20 px-3 py-2">
      <div className="text-xs text-zinc-200/80">{label}</div>
      <span
        className="rounded-full px-2.5 py-1 text-[11px] text-zinc-100/80"
        style={{ backgroundColor: color }}
      >
        {state}
      </span>
    </div>
  );
}

function MilestoneCard({
  label,
  value,
  status,
}: {
  label: string;
  value: string;
  status: string;
}) {
  const statusTint =
    status === "Funded"
      ? "rgba(29,158,117,0.22)"
      : status === "In escrow"
        ? "rgba(29,158,117,0.14)"
        : "rgba(255,255,255,0.08)";

  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs font-semibold text-zinc-100/85">{label}</div>
        <div className="text-xs font-[var(--font-dm-mono)] text-zinc-100/80">
          {value}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full"
            style={{
              width: status === "Funded" ? "100%" : status === "In escrow" ? "66%" : "18%",
              backgroundColor: BRAND_TEAL,
              opacity: status === "Pending" ? 0.35 : 0.7,
            }}
          />
        </div>
        <span
          className="ml-3 shrink-0 rounded-full px-2.5 py-1 text-[11px] text-zinc-100/80"
          style={{ backgroundColor: statusTint }}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

// --- icons (simple inline SVG) ---
function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWriting() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0 0-3L16.5 4.5a2.1 2.1 0 0 0-3 0L3 15v5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 6.5l4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconLock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 11V8a5 5 0 0 1 10 0v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 11h12v10H6V11z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChecklist() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 6h11M9 12h11M9 18h11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4.5 6.5l1 1 2-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 12.5l1 1 2-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 18.5l1 1 2-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSend() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 2L11 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 2l-7 20-4-9-9-4 20-7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWallet() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 7h18v14H3V7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M3 7V5a2 2 0 0 1 2-2h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17 13h4v4h-4a2 2 0 0 1 0-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
