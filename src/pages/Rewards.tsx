import { CTAButton } from "../components/CTAButton";
import { SectionContainer } from "../components/SectionContainer";
import { SectionJumpNav } from "../components/SectionJumpNav";

const steps = [
  {
    number: "01",
    title: "Connect Wallet",
    description:
      "Link any major wallet in seconds — MetaMask, Coinbase Wallet, Rainbow, or WalletConnect-compatible.",
  },
  {
    number: "02",
    title: "Deposit USDC",
    description:
      "Send USDC into the protocol. No minimums, no paperwork, no waiting period.",
  },
  {
    number: "03",
    title: "Watch it grow",
    description:
      "Rewards accrue to your balance every day — sit back and let the protocol do the work.",
  },
];

const comparisons = [
  {
    name: "USD Halo",
    apy: "~7.2 %",
    highlight: true,
    detail: "Auto-compounding DeFi yield, updated daily.",
  },
  {
    name: "Traditional Savings",
    apy: "~0.5 %",
    highlight: false,
    detail: "National average APY on standard U.S. savings accounts.",
  },
  {
    name: "Money Market Fund",
    apy: "~4.8 %",
    highlight: false,
    detail: "Institutional money markets — often gated with minimums.",
  },
];

const rewardsDataStates = [
  {
    name: "Loading state",
    title: "Calculating live APY",
    description:
      "Use while strategy data and reserve metrics are being fetched from external providers.",
  },
  {
    name: "Empty state",
    title: "No rewards available yet",
    description:
      "Use when a connected wallet has no eligible balance and has not started accrual.",
  },
  {
    name: "Error state",
    title: "Reward feed unavailable",
    description:
      "Use when reward services fail, with retry and support guidance for next action.",
  },
];

const rewardsJumpItems = [
  { label: "Mechanics", href: "#rewards-mechanics" },
  { label: "Compare", href: "#rewards-compare" },
  { label: "States", href: "#rewards-states" },
  { label: "Start", href: "#rewards-start" },
];

export function Rewards() {
  return (
    <>
      {/* Page Hero */}
      <SectionContainer>
        <div className="max-w-3xl">
          <span className="text-black/60 text-sm mb-2 block">
            Earning with Halo
          </span>
          <h1
            className="text-black text-5xl md:text-6xl font-medium leading-tight mb-6"
            style={{ letterSpacing: "-0.04em" }}
          >
            Rewards
          </h1>
          <p className="text-black/70 text-lg md:text-xl leading-relaxed max-w-xl">
            Hold USD Halo and earn automatic, passive yield — no staking, no
            lockups, no manual claiming. Your balance grows every single day.
          </p>
          <SectionJumpNav items={rewardsJumpItems} className="mt-10" />
        </div>
      </SectionContainer>

      {/* Reward Mechanics — Bento Grid */}
      <SectionContainer py="py-12" className="scroll-mt-24">
        <div id="rewards-mechanics" className="sr-only" />
        <span className="text-black/60 text-sm mb-2 block">
          Reward Mechanics
        </span>
        <h2
          className="text-black text-4xl md:text-5xl font-medium leading-tight mb-12"
          style={{ letterSpacing: "-0.03em" }}
        >
          How rewards work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Wide card */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3
              className="text-black text-2xl font-medium leading-snug"
              style={{ letterSpacing: "-0.02em" }}
            >
              How you earn
            </h3>
            <div>
              <p className="text-black/70 text-base leading-relaxed max-w-sm mb-4">
                When you hold USD Halo, the protocol automatically routes
                underlying reserves into diversified, battle-tested DeFi
                strategies — lending markets, liquidity pools, and real-world
                asset vaults.
              </p>
              <p className="text-black/60 text-base leading-relaxed max-w-sm">
                Yield flows back to every holder proportionally. No buttons to
                click, no positions to manage.
              </p>
            </div>
          </div>

          {/* Dark card — Daily accrual */}
          <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3
              className="text-white text-2xl font-medium whitespace-pre-line"
              style={{ letterSpacing: "-0.02em" }}
            >
              Daily{"\n"}accrual
            </h3>
            <p className="text-white/60 text-base leading-relaxed">
              Rewards are calculated and applied to your balance every 24 hours
              — compounding automatically so your yield earns yield.
            </p>
          </div>

          {/* Dark card — No lockups */}
          <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3
              className="text-white text-2xl font-medium whitespace-pre-line"
              style={{ letterSpacing: "-0.02em" }}
            >
              No{"\n"}lockups
            </h3>
            <p className="text-white/60 text-base leading-relaxed">
              Withdraw any amount, any time. There are no bonding periods,
              cooldowns, or penalties — your capital stays fully liquid.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* APY Comparison */}
      <SectionContainer className="scroll-mt-24">
        <div id="rewards-compare" className="sr-only" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-black/60 text-sm mb-2 block">
              Yield Comparison
            </span>
            <h2
              className="text-black text-4xl md:text-5xl font-medium leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Better than{"\n"}a bank.
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {comparisons.map((item) => (
              <div
                key={item.name}
                className={`rounded-2xl p-7 transition-colors duration-200 ${
                  item.highlight ? "bg-[#2B2644]" : "bg-white hover:bg-white/70"
                }`}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3
                    className={`text-2xl font-medium ${
                      item.highlight ? "text-white" : "text-black"
                    }`}
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {item.name}
                  </h3>
                  <span
                    className={`text-2xl font-medium ${
                      item.highlight ? "text-white" : "text-black"
                    }`}
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {item.apy}
                  </span>
                </div>
                <p
                  className={`text-base leading-relaxed ${
                    item.highlight ? "text-white/60" : "text-black/60"
                  }`}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* API Placeholder States */}
      <SectionContainer className="scroll-mt-24">
        <div id="rewards-states" className="sr-only" />
        <span className="text-black/60 text-sm mb-2 block">
          Integration readiness
        </span>
        <h2
          className="text-black text-4xl md:text-5xl font-medium leading-tight mb-12"
          style={{ letterSpacing: "-0.03em" }}
        >
          Reward data states.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {rewardsDataStates.map((state) => (
            <div
              key={state.name}
              className="bg-white rounded-2xl p-7 min-h-64 flex flex-col justify-between"
            >
              <span className="text-black/50 text-sm block mb-3">
                {state.name}
              </span>
              <div>
                <h3
                  className="text-black text-2xl font-medium mb-3"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {state.title}
                </h3>
                <p className="text-black/60 text-base leading-relaxed">
                  {state.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* How to Start */}
      <SectionContainer py="py-12" className="scroll-mt-24">
        <div id="rewards-start" className="sr-only" />
        <span className="text-black/60 text-sm mb-2 block">
          Getting Started
        </span>
        <h2
          className="text-black text-4xl md:text-5xl font-medium leading-tight mb-12"
          style={{ letterSpacing: "-0.03em" }}
        >
          Three steps to yield.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-7 min-h-64 flex flex-col justify-between"
            >
              <span className="text-black/40 text-sm font-medium">
                {step.number}
              </span>
              <div>
                <h3
                  className="text-black text-2xl font-medium mb-3"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {step.title}
                </h3>
                <p className="text-black/60 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Bottom CTA */}
      <SectionContainer>
        <div className="text-center">
          <h2
            className="text-black text-4xl md:text-5xl font-medium leading-tight mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Start earning
          </h2>
          <p className="text-black/70 text-lg leading-relaxed max-w-md mx-auto mb-10">
            Put your dollars to work today — passive yield, zero effort, full
            liquidity.
          </p>
          <CTAButton label="Start earning" variant="with-arrow" />
        </div>
      </SectionContainer>
    </>
  );
}
