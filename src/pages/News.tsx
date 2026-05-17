import { ArrowRight } from "lucide-react";
import { SectionContainer } from "../components/SectionContainer";

const articles = [
  {
    date: "May 2026",
    title: "Reserve Transparency Report: Q1 2026",
    category: "Transparency",
    excerpt:
      "A detailed breakdown of USD Halo's reserve composition, on-chain attestations, and third-party audit results for the first quarter.",
  },
  {
    date: "April 2026",
    title: "USD Halo Integrates with Aave v4",
    category: "Integration",
    excerpt:
      "Holders can now supply USD Halo directly into Aave v4 markets, unlocking additional yield layers without leaving the ecosystem.",
  },
  {
    date: "March 2026",
    title: "Introducing Halo Rewards v2",
    category: "Product",
    excerpt:
      "A redesigned rewards engine that compounds daily, distributes more efficiently, and supports multi-chain accrual from day one.",
  },
  {
    date: "February 2026",
    title: "Partnership: Stripe Now Supports USD Halo",
    category: "Partnership",
    excerpt:
      "Merchants using Stripe can accept and settle in USD Halo, bridging traditional commerce with on-chain yield.",
  },
  {
    date: "February 2026",
    title: "Protocol Governance Goes Live",
    category: "Governance",
    excerpt:
      "Token holders can now vote on reserve allocation strategies, fee parameters, and network expansion proposals.",
  },
  {
    date: "January 2026",
    title: "Security Audit Completed by OpenZeppelin",
    category: "Security",
    excerpt:
      "USD Halo's core contracts have passed a comprehensive audit with zero critical findings. Full report available on-chain.",
  },
];

export function News() {
  return (
    <>
      {/* Page Hero */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="md:pt-4">
            <span className="text-black/60 text-sm mb-2 block">Updates</span>
            <h1
              className="text-black text-5xl md:text-6xl font-medium leading-tight mb-6"
              style={{ letterSpacing: "-0.04em" }}
            >
              News
            </h1>
            <p className="text-black/70 text-lg md:text-xl leading-relaxed max-w-md">
              Protocol updates, partnership announcements, and everything
              happening across the USD Halo ecosystem.
            </p>
          </div>

          {/* Featured Article */}
          <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <div>
              <span className="text-white/50 text-sm">May 2026</span>
              <h3
                className="text-white text-2xl font-medium mt-3 mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                USD Halo Launches on Base
              </h3>
              <p className="text-white/60 text-base leading-relaxed max-w-sm">
                The protocol is now live on Base, bringing near-zero gas fees and
                sub-second finality to every holder. Mint, redeem, and earn
                rewards on Coinbase's L2 from day one.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-3 text-white text-base font-medium group"
              >
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                Read more
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Article Grid */}
      <SectionContainer py="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.map((article) => (
            <div
              key={article.title}
              className="bg-white rounded-2xl p-7 min-h-64 flex flex-col justify-between"
            >
              <div>
                <span className="text-black/50 text-sm">{article.date}</span>
                <h3
                  className="text-black text-2xl font-medium mt-3 leading-tight"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {article.title}
                </h3>
              </div>
              <div className="flex items-center justify-between mt-6">
                <span className="text-black/50 text-sm">{article.category}</span>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-black text-base font-medium group"
                >
                  <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors duration-200">
                    <ArrowRight className="w-4 h-4 text-black" />
                  </div>
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Newsletter Signup */}
      <SectionContainer>
        <div className="bg-[#2B2644] rounded-2xl p-12">
          <h2
            className="text-white text-4xl md:text-5xl font-medium leading-tight mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Stay in the loop.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
            Get protocol updates, partnership news, and reward announcements
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              className="bg-white/10 text-white placeholder:text-white/40 rounded-full px-6 py-2.5 text-base flex-1 max-w-sm outline-none border border-white/10 focus:border-white/30 transition-colors duration-200"
              placeholder="Your email"
            />
            <button className="bg-white text-black text-base font-medium px-7 py-2.5 rounded-full hover:bg-white/90 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
