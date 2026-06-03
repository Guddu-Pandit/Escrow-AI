import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StatsBand } from "./components/StatsBand";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { Reviews } from "./components/Reviews";
import { Pricing } from "./components/Pricing";
import { CTABlock } from "./components/CTABlock";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <h2 className="sr-only">
        EscrowAI homepage — AI contracts, Solana escrow, and verified freelancer reviews
      </h2>
      <Navbar />
      <Hero />
      <StatsBand />
      <HowItWorks />
      <Features />
      <Reviews />
      <Pricing />
      <CTABlock />
      <Footer />
    </main>
  );
}
