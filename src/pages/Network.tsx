import { CTAButton } from "../components/CTAButton";
import { SectionContainer } from "../components/SectionContainer";

const steps = [
  {
    number: "01",
    title: "Deposit",
    description:
      "Send stablecoins into the protocol — no minimums, no lockups, no friction.",
  },
  {
    number: "02",
    title: "Auto-Route",
    description:
      "Smart contracts allocate capital across vetted DeFi strategies in real time.",
  },
  {
    number: "03",
    title: "Earn",
    description:
      "Rewards accrue to your balance automatically — withdraw anytime, anywhere.",
  },
];

const chains = [
  {
    name: "Ethereum",
    description:
      "The settlement layer — deep liquidity and battle-tested security.",
  },
  {
    name: "Arbitrum",
    description: "Low-cost execution with Ethereum-grade finality.",
  },
  {
    name: "Optimism",
    description: "Superchain-native scaling for seamless composability.",
  },
  {
    name: "Base",
    description: "Coinbase-incubated L2 built for mainstream adoption.",
  },
  {
    name: "Polygon",
    description: "High-throughput bridging for global reach.",
  },
  {
    name: "Avalanche",
    description: "Sub-second finality for latency-sensitive flows.",
  },
];

const stats = [
  { value: "$1.2B+", label: "Total Value Locked" },
  { value: "4.8M", label: "Transactions" },
  { value: "312K", label: "Active Wallets" },
  { value: "99.98%", label: "Uptime" },
];

export function Network() {
  return (
    <>
      {/* Page Hero */}
      <SectionContainer>
        <div className="max-w-3xl">
          <span className="text-black/60 text-sm mb-2 block">
            Infrastructure
          </span>
          <h1
            className="text-black text-5xl md:text-6xl font-medium leading-tight mb-6"
            style={{ letterSpacing: "-0.04em" }}
          >
            The Network
          </h1>
          <p className="text-black/70 text-lg md:text-xl leading-relaxed max-w-xl">
            A decentralized backbone that moves capital where it works hardest —
            across chains, protocols, and strategies — so every dollar earns
            without downtime.
          </p>
        </div>
      </SectionContainer>

      {/* How It Works */}
      <SectionContainer py="py-12">
        <span className="text-black/60 text-sm mb-2 block">How It Works</span>
        <h2
          className="text-black text-4xl md:text-5xl font-medium leading-tight mb-12"
          style={{ letterSpacing: "-0.03em" }}
        >
          Three steps. Zero effort.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#2B2644] rounded-2xl p-7 min-h-64 flex flex-col justify-between"
            >
              <span className="text-white/40 text-sm font-medium">
                {step.number}
              </span>
              <div>
                <h3
                  className="text-white text-2xl font-medium mb-3"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {step.title}
                </h3>
                <p className="text-white/60 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Supported Chains */}
      <SectionContainer>
        <span className="text-black/60 text-sm mb-2 block">Multichain</span>
        <h2
          className="text-black text-4xl md:text-5xl font-medium leading-tight mb-12"
          style={{ letterSpacing: "-0.03em" }}
        >
          Supported Chains
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chains.map((chain) => (
            <div
              key={chain.name}
              className="bg-white rounded-2xl p-7 transition-colors duration-200 hover:bg-white/70"
            >
              <h3
                className="text-black text-2xl font-medium mb-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                {chain.name}
              </h3>
              <p className="text-black/60 text-base leading-relaxed">
                {chain.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Network Stats */}
      <SectionContainer py="py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3
                className="text-black text-4xl md:text-5xl font-medium leading-tight mb-2"
                style={{ letterSpacing: "-0.03em" }}
              >
                {stat.value}
              </h3>
              <p className="text-black/50 text-base">{stat.label}</p>
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
            Join the Network
          </h2>
          <p className="text-black/70 text-lg leading-relaxed max-w-md mx-auto mb-10">
            Put your dollars to work on the infrastructure built for yield.
          </p>
          <CTAButton label="Get started" variant="with-arrow" />
        </div>
      </SectionContainer>
    </>
  );
}
