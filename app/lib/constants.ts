// ─── Design Tokens ───────────────────────────────────────────────
export const COLORS = {
  bg: "#080F0C",
  bgAlt: "#0A1510",
  card: "#0D1A14",
  brand: "#1D9E75",
  brandLight: "#5DCAA5",
  brandDark: "#085041",
  blue: "#378ADD",
  amber: "#EF9F27",
  purple: "#9945FF",
  textPrimary: "#FFFFFF",
  textSecondary: "rgba(255,255,255,0.65)",
  textMuted: "rgba(255,255,255,0.45)",
  textDim: "rgba(255,255,255,0.35)",
  border: "rgba(255,255,255,0.08)",
} as const;

// ─── Navigation ──────────────────────────────────────────────────
export const NAV_LINKS = ["How it works", "Features", "Reviews", "Pricing"] as const;

// ─── Hero ────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: "Now live on Solana mainnet",
  headline: { before: "Freelance work,", highlight: "secured by AI", after: "and blockchain." },
  description: "Describe your project in plain language. AI generates the contract, Solana locks the funds, and payment releases the moment milestones are approved.",
  ctas: [
    { label: "Post a project", icon: "ti-briefcase", variant: "primary" },
    { label: "Find work", icon: "ti-search", variant: "secondary" },
  ],
  trust: { count: "2,400+", label: "freelancers & clients", rating: "4.9" },
  demo: {
    prompt: "Design a mobile app UI for a fintech startup, 3 screens, 2 revision rounds, deliver in 3 weeks for 4.5 SOL",
    preview: 'Agreement between <strong>Client</strong> and <strong>Freelancer</strong> for <strong>mobile UI design</strong> across 3 milestones. <strong>4.5 SOL</strong> held in Solana escrow, releasing per milestone approval.',
    milestones: [
      { name: "Wireframes", amount: "1.0 SOL", progress: 100, color: COLORS.brand },
      { name: "UI designs", amount: "2.5 SOL", progress: 55, color: COLORS.blue },
      { name: "Delivery", amount: "1.0 SOL", progress: 0, color: "#888780" },
    ],
    escrow: { amount: "4.5 SOL", address: "5XjR3mPq...k2Wq · Devnet confirmed" },
  },
} as const;

// ─── Stats ───────────────────────────────────────────────────────
export const STATS = [
  { value: "$1.2M+", label: "secured in escrow" },
  { value: "2,400+", label: "contracts completed" },
  { value: "98.4%", label: "on-time payment rate" },
  { value: "1.4d", label: "avg. payment release" },
] as const;

// ─── How It Works ────────────────────────────────────────────────
export const STEPS = [
  { num: "01", icon: "ti-writing", title: "Describe the work", desc: "Write what you need in plain language — scope, timeline, deliverables. No legal templates." },
  { num: "02", icon: "ti-sparkles", title: "AI drafts the contract", desc: "AI generates a structured contract with milestones, payment terms, and revision rights." },
  { num: "03", icon: "ti-lock", title: "Fund the escrow", desc: "Client deposits SOL into a Solana smart contract vault. Funds locked until milestones are approved." },
  { num: "04", icon: "ti-circle-check", title: "Work done, funds release", desc: "AI reviews deliverables against contract. Payment auto-releases on-chain. No invoicing needed." },
] as const;

// ─── Features ────────────────────────────────────────────────────
export type FeatureColor = "teal" | "blue" | "amber";
export interface Feature {
  icon: string;
  title: string;
  desc: string;
  color: FeatureColor;
}

export const FEATURES: Feature[] = [
  { icon: "ti-writing", title: "AI contract generation", desc: "Describe your project in plain English. Get a structured contract with milestones and payment terms in seconds.", color: "teal" },
  { icon: "ti-lock", title: "Solana escrow vault", desc: "Non-custodial smart contract holds funds. Neither party can withdraw without meeting contract conditions.", color: "teal" },
  { icon: "ti-checklist", title: "Milestone tracking", desc: "AI monitors deliverable submissions against contract criteria and flags issues before releasing any payment.", color: "teal" },
  { icon: "ti-send", title: "Auto payment release", desc: "Payments release on-chain the moment a milestone is approved — no invoicing, no manual transfers.", color: "blue" },
  { icon: "ti-shield", title: "Dispute resolution", desc: "AI-assisted resolution uses the original contract as ground truth — fast, fair, and transparent.", color: "blue" },
  { icon: "ti-star", title: "Verified reviews", desc: "Only wallets that completed a contract can leave reviews. Every rating is cryptographically verified on-chain.", color: "amber" },
];

// ─── Reviews ─────────────────────────────────────────────────────
export interface Review {
  quote: string;
  name: string;
  role: string;
  initials: string;
  bgColor: string;
}

export const REVIEWS: Review[] = [
  { quote: "First time I've finished a project without a single payment argument. The escrow just works — and the AI contract caught scope creep I would've missed.", name: "Aisha R.", role: "UI Designer, Lagos", initials: "AR", bgColor: "#1D4034" },
  { quote: "I hired 3 contractors last month all through EscrowAI. Set up each contract in 2 minutes, funds released automatically. It's the future of hiring.", name: "Marcus K.", role: "Startup founder, Berlin", initials: "MK", bgColor: "#0C2A47" },
  { quote: "As a dev, I was skeptical — but the contract generation is genuinely impressive. It captured technical deliverables I wouldn't have known to include.", name: "Jade L.", role: "Full-stack developer, NYC", initials: "JL", bgColor: "#8B5A2B" },
];

// ─── Pricing ─────────────────────────────────────────────────────
export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  note: string;
  features: PricingFeature[];
  cta: string;
  variant: "outline" | "solid";
  highlighted?: boolean;
  badge?: string;
}

export const PLANS: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    period: "/ month",
    note: "+ 1.5% escrow fee per release",
    features: [
      { label: "1 active contract", included: true },
      { label: "AI contract drafting", included: true },
      { label: "Solana escrow vault", included: true },
      { label: "Verified reviews", included: true },
    ],
    cta: "Start for free",
    variant: "outline",
  },
  {
    name: "Pro",
    price: "$9",
    period: "/ month",
    note: "+ 1.5% escrow fee per release",
    features: [
      { label: "Unlimited contracts", included: true },
      { label: "Advanced AI tracking", included: true },
      { label: "Priority disputes", included: true },
      { label: "Analytics dashboard", included: true },
      { label: "Contract templates", included: true },
    ],
    cta: "Get Pro",
    variant: "solid",
    highlighted: true,
    badge: "Most popular",
  },
];

// ─── Footer ──────────────────────────────────────────────────────
export interface FooterSection {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Reviews", href: "#reviews" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Security", href: "#security" },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  { name: "Twitter", icon: "ti-brand-x", href: "https://twitter.com/escrowai" },
  { name: "GitHub", icon: "ti-brand-github", href: "https://github.com/escrowai" },
  { name: "Discord", icon: "ti-brand-discord", href: "https://discord.gg/escrowai" },
  { name: "LinkedIn", icon: "ti-brand-linkedin", href: "https://linkedin.com/company/escrowai" },
] as const;
