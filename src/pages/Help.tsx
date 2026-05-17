import { useState } from "react";
import { Rocket, Wallet, TrendingUp, Shield, ChevronDown } from "lucide-react";
import { SectionContainer } from "../components/SectionContainer";

const categories = [
  {
    icon: Rocket,
    title: "Getting Started",
    description:
      "Learn how to create an account, connect a wallet, and make your first deposit into the protocol.",
  },
  {
    icon: Wallet,
    title: "Wallets & Deposits",
    description:
      "Supported wallets, deposit methods, network fees, and how to move funds in and out of USD Halo.",
  },
  {
    icon: TrendingUp,
    title: "Rewards & Yield",
    description:
      "How yield is generated, when rewards accrue, and what determines your effective APY.",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Audits, smart-contract architecture, reserve transparency, and how the protocol protects your funds.",
  },
];

const faqs = [
  {
    question: "What is USD Halo and how does it maintain its peg?",
    answer:
      "USD Halo is a yield-bearing stablecoin pegged 1 : 1 to the US dollar. The peg is maintained through fully collateralized reserves held in a diversified mix of high-quality liquid assets — including US Treasuries, institutional money-market instruments, and battle-tested DeFi lending markets. Reserve composition is published on-chain daily.",
  },
  {
    question: "How do I start earning rewards?",
    answer:
      "Simply hold USD Halo in a supported wallet. Rewards accrue automatically to your balance every 24 hours — no staking, no lockups, and no manual claiming required. Your yield compounds daily, so your balance grows without any action on your part.",
  },
  {
    question: "Is there a minimum deposit or lock-up period?",
    answer:
      "No. There is no minimum deposit amount and no lock-up period. You can deposit or withdraw any amount at any time with no penalties, cooldowns, or bonding requirements. Your capital remains fully liquid.",
  },
  {
    question: "How is the protocol secured?",
    answer:
      "The USD Halo smart contracts have been audited by multiple independent security firms. The protocol employs time-locked upgrades, multi-signature governance, and real-time monitoring. Reserve proof-of-reserves are published on-chain so anyone can verify backing at any time.",
  },
  {
    question: "Which wallets and networks are supported?",
    answer:
      "USD Halo supports MetaMask, Coinbase Wallet, Rainbow, and any WalletConnect-compatible wallet. The protocol is live on Ethereum mainnet, with additional network support rolling out over time. Deposits are accepted in USDC.",
  },
  {
    question: "How do withdrawals work?",
    answer:
      "Withdrawals are processed instantly on-chain. Connect your wallet, choose the amount you'd like to redeem, and confirm the transaction. Your USDC is returned to your wallet in the same block — no waiting period, no approval queue.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-7">
      <button
        onClick={() => setOpen((current) => !current)}
        className="w-full flex items-center justify-between text-left transition-colors duration-200 hover:text-black/70"
      >
        <span className="text-black text-lg font-medium pr-4">{question}</span>
        <ChevronDown className="w-5 h-5 text-black/50 shrink-0" />
      </button>
      {open ? (
        <div className="pt-5">
          <p className="text-black/70 text-base leading-relaxed max-w-2xl">
            {answer}
          </p>
        </div>
      ) : null}
    </div>
  );
}

export function Help() {
  const [query, setQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return true;
    }

    return (
      faq.question.toLowerCase().includes(normalizedQuery) ||
      faq.answer.toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <>
      {/* Page Hero */}
      <SectionContainer>
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-black/60 text-sm mb-2 block">Support</span>
          <h1
            className="text-black text-5xl md:text-6xl font-medium leading-tight mb-6"
            style={{ letterSpacing: "-0.04em" }}
          >
            How can we help?
          </h1>
          <p className="text-black/70 text-lg md:text-xl leading-relaxed">
            Browse common topics, explore our FAQ, or reach out to the team
            directly. We're here to make sure you get the most out of USD Halo.
          </p>
        </div>
      </SectionContainer>

      {/* Category Cards */}
      <SectionContainer py="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between"
            >
              <cat.icon className="w-6 h-6 text-white/60" />
              <div>
                <h3
                  className="text-white text-2xl font-medium mb-3"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {cat.title}
                </h3>
                <p className="text-white/60 text-base leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer>
        <h2
          className="text-black text-4xl md:text-5xl font-medium leading-tight mb-12"
          style={{ letterSpacing: "-0.03em" }}
        >
          Common questions.
        </h2>
        <div className="max-w-3xl mb-8">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search help questions"
            placeholder="Search questions"
            className="bg-white text-black placeholder:text-black/50 rounded-full px-6 py-2.5 text-base w-full outline-none transition-colors duration-200"
          />
          <p className="text-black/60 text-sm mt-3">
            {filteredFaqs.length} result{filteredFaqs.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="max-w-3xl">
          {filteredFaqs.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filteredFaqs.map((faq) => (
                <FAQItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-7">
              <p className="text-black/70 text-base leading-relaxed max-w-md">
                No matches found. Try another keyword or browse all questions.
              </p>
            </div>
          )}
        </div>
      </SectionContainer>

      {/* Contact CTA */}
      <SectionContainer>
        <div className="bg-[#2B2644] rounded-2xl p-12 text-center max-w-3xl mx-auto">
          <h2
            className="text-white text-4xl md:text-5xl font-medium leading-tight mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Still need help?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md mx-auto">
            Our support team is available around the clock. Send us a message
            and we'll get back to you within hours, not days.
          </p>
          <button className="bg-white text-black text-base font-medium px-7 py-2.5 rounded-full hover:bg-white/90 transition-colors duration-200">
            Contact us
          </button>
        </div>
      </SectionContainer>
    </>
  );
}
