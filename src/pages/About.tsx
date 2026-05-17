import { CTAButton } from "../components/CTAButton";
import { SectionContainer } from "../components/SectionContainer";

export function About() {
  return (
    <>
      {/* Page Hero */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-black/60 text-sm mb-2 block">
              About USD Halo
            </span>
            <h1
              className="text-black text-5xl md:text-6xl font-medium leading-tight mb-6"
              style={{ letterSpacing: "-0.04em" }}
            >
              Discover Halo.
            </h1>
            <p className="text-black/70 text-base leading-relaxed max-w-md">
              We set out to solve one of DeFi's oldest problems — idle dollars.
              USD Halo is a stablecoin engineered to put every dollar to work the
              moment it enters your wallet, without asking you to lift a finger.
            </p>
          </div>
          <div>
            <p className="text-black/70 text-2xl md:text-3xl leading-relaxed">
              A reward-bearing digital dollar that automatically routes into
              vetted DeFi strategies — so your savings compound around the clock
              while staying fully pegged to $1. No lockups, no manual
              rebalancing, no complexity.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* How It Works */}
      <SectionContainer py="py-12">
        <h2
          className="text-black text-4xl md:text-5xl font-medium leading-tight mb-12"
          style={{ letterSpacing: "-0.03em" }}
        >
          How it works.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Wide card — Dollar-pegged stability */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3
              className="text-black text-2xl font-medium leading-snug"
              style={{ letterSpacing: "-0.02em" }}
            >
              Dollar-pegged stability
            </h3>
            <p className="text-black/70 text-base max-w-sm">
              Every USD Halo token is backed 1 : 1 by audited reserves held in
              short-duration treasuries and on-chain liquidity pools — keeping
              the peg tight even when markets move.
            </p>
          </div>

          {/* Dark card — Auto-routing engine */}
          <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3
              className="text-white text-2xl font-medium whitespace-pre-line"
              style={{ letterSpacing: "-0.02em" }}
            >
              Auto-routing{"\n"}engine
            </h3>
            <p className="text-white/60 text-base">
              Idle funds are continuously allocated across battle-tested lending
              and liquidity protocols — optimised for yield, weighted for risk.
            </p>
          </div>

          {/* Dark card — Transparent reserves */}
          <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3
              className="text-white text-2xl font-medium whitespace-pre-line"
              style={{ letterSpacing: "-0.02em" }}
            >
              Transparent{"\n"}reserves
            </h3>
            <p className="text-white/60 text-base">
              On-chain proof of reserves is published in real time. Every dollar
              is accounted for — verify it yourself, any time.
            </p>
          </div>

          {/* Light card — Instant redemption */}
          <div className="lg:col-span-2 sm:col-span-2 bg-white rounded-2xl p-7 min-h-60 flex flex-col justify-between">
            <h3
              className="text-black text-2xl font-medium leading-snug"
              style={{ letterSpacing: "-0.02em" }}
            >
              Instant redemption
            </h3>
            <p className="text-black/70 text-base max-w-sm">
              Withdraw at $1 whenever you need to — no cooldowns, no exit
              penalties. Liquidity is always there when you are.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* The Vision */}
      <SectionContainer py="py-12">
        <div className="bg-[#2B2644] rounded-3xl p-12 md:p-16 flex flex-col items-center text-center">
          <h2
            className="text-white text-4xl md:text-5xl font-medium leading-tight mb-6 max-w-3xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            A dollar that works as hard as you do.
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            We believe stablecoins shouldn't just sit still. The long-term
            vision for USD Halo is a universally accepted digital dollar that
            earns from day one — bridging traditional savings with the
            permissionless power of decentralised finance, for everyone.
          </p>
          <CTAButton label="Join us" variant="with-arrow" to="/join" />
        </div>
      </SectionContainer>

      {/* By the Numbers */}
      <SectionContainer>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "1:1", label: "Dollar peg" },
            { value: "24/7", label: "Always available" },
            { value: "$0", label: "No fees to earn" },
            { value: "100%", label: "Non-custodial" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-black text-5xl md:text-6xl font-medium leading-tight mb-2"
                style={{ letterSpacing: "-0.04em" }}
              >
                {stat.value}
              </p>
              <p className="text-black/60 text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Bottom CTA */}
      <SectionContainer py="py-12">
        <div className="flex justify-center">
          <CTAButton
            label="Open Wallet"
            variant="with-arrow"
            to="/wallet"
          />
        </div>
      </SectionContainer>
    </>
  );
}
