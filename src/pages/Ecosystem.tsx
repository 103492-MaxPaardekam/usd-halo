import { CTAButton } from "../components/CTAButton";
import { SectionContainer } from "../components/SectionContainer";

const categories = [
  {
    title: "DeFi Protocols",
    description:
      "Lending, borrowing, and liquidity venues where USD Halo earns native yield — fully composable, fully on-chain.",
  },
  {
    title: "Wallets & Exchanges",
    description:
      "On-ramps, custodians, and self-custody wallets that make holding and moving Halo effortless.",
  },
  {
    title: "Infrastructure",
    description:
      "Oracles, bridges, and data layers that keep the protocol accurate, auditable, and cross-chain ready.",
  },
];

const partners = [
  {
    name: "Aave",
    category: "Lending Protocol",
    description:
      "Supply and borrow USD Halo across Aave markets — deep liquidity with variable and stable rate options.",
  },
  {
    name: "Uniswap",
    category: "Decentralized Exchange",
    description:
      "Trade and provide liquidity for Halo pairs on the world's most active decentralized exchange.",
  },
  {
    name: "Compound",
    category: "Lending Protocol",
    description:
      "Earn supply interest on Halo deposits while maintaining full withdrawal flexibility at any time.",
  },
  {
    name: "Chainlink",
    category: "Oracle Network",
    description:
      "Real-time price feeds and proof-of-reserve attestations — keeping Halo's peg transparent and verifiable.",
  },
  {
    name: "Lido",
    category: "Liquid Staking",
    description:
      "Pair Halo with staked assets for delta-neutral strategies that compound yield across protocols.",
  },
  {
    name: "Curve",
    category: "Stableswap AMM",
    description:
      "Low-slippage swaps between Halo and other stablecoins in purpose-built Curve pools.",
  },
];

const stats = [
  { value: "24+", label: "Protocols Integrated" },
  { value: "6", label: "Chains Supported" },
  { value: "$840M", label: "Monthly Volume" },
  { value: "38", label: "Partners" },
];

export function Ecosystem() {
  return (
    <>
      {/* Page Hero */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-black/60 text-sm mb-2 block">
              Partners & Integrations
            </span>
            <h1
              className="text-black text-5xl md:text-6xl font-medium leading-tight"
              style={{ letterSpacing: "-0.04em" }}
            >
              Ecosystem
            </h1>
          </div>
          <div>
            <p className="text-black/70 text-2xl md:text-3xl leading-relaxed">
              USD Halo plugs into the protocols, wallets, and infrastructure you
              already use — so every integration amplifies what your dollar can
              do.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Integration Categories */}
      <SectionContainer py="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between"
            >
              <h3
                className="text-white text-2xl font-medium"
                style={{ letterSpacing: "-0.02em" }}
              >
                {cat.title}
              </h3>
              <p className="text-white/60 text-base leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Partner Showcase */}
      <SectionContainer>
        <span className="text-black/60 text-sm mb-2 block">Partners</span>
        <h2
          className="text-black text-4xl md:text-5xl font-medium leading-tight mb-12"
          style={{ letterSpacing: "-0.03em" }}
        >
          Built with the best.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-2xl p-7 transition-colors duration-200 hover:bg-white/70"
            >
              <span className="text-black/50 text-sm mb-3 block">
                {partner.category}
              </span>
              <h3
                className="text-black text-2xl font-medium mb-3"
                style={{ letterSpacing: "-0.02em" }}
              >
                {partner.name}
              </h3>
              <p className="text-black/60 text-base leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Ecosystem Numbers */}
      <SectionContainer py="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              Growing every day.
            </h2>
            <CTAButton label="View all partners" variant="with-arrow" />
          </div>
          <div className="grid grid-cols-2 gap-8">
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
        </div>
      </SectionContainer>

      {/* Bottom CTA */}
      <SectionContainer>
        <div className="text-center">
          <h2
            className="text-black text-4xl md:text-5xl font-medium leading-tight mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Build with Halo
          </h2>
          <p className="text-black/70 text-lg leading-relaxed max-w-md mx-auto mb-10">
            Integrate a yield-bearing stablecoin into your protocol — and give
            your users a dollar that works harder.
          </p>
          <CTAButton label="Start integrating" variant="with-arrow" />
        </div>
      </SectionContainer>
    </>
  );
}
