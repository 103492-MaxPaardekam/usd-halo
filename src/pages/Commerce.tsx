import { CTAButton } from "../components/CTAButton";
import { SectionContainer } from "../components/SectionContainer";

const integrationSteps = [
  {
    number: "1",
    title: "Get API keys",
    description:
      "Create a merchant account and generate your keys — sandbox and production, ready in under a minute.",
  },
  {
    number: "2",
    title: "Add payment flow",
    description:
      "Drop our SDK into your checkout. A single endpoint handles quotes, authorization, and settlement.",
  },
  {
    number: "3",
    title: "Go live",
    description:
      "Flip the switch from sandbox to production. Payments flow instantly — no review queue, no waiting.",
  },
];

const caseStudies = [
  {
    title: "E-commerce platform",
    stat: "30% increase in repeat purchases",
    description:
      "Customers who earned rewards on every order came back faster and spent more per visit.",
  },
  {
    title: "SaaS billing",
    stat: "Reduced churn with reward incentives",
    description:
      "Subscribers who earned yield on prepaid balances renewed at nearly double the rate.",
  },
  {
    title: "Marketplace",
    stat: "Higher average order value",
    description:
      "Buyers consolidated purchases to maximize reward accrual — lifting AOV by 18% in the first quarter.",
  },
];

const commerceDataStates = [
  {
    name: "Loading state",
    title: "Fetching integration health",
    description:
      "Use while commerce endpoints, settlement status, and webhook delivery metrics are loading.",
  },
  {
    name: "Empty state",
    title: "No transactions yet",
    description:
      "Use when a merchant account is connected but has not processed any Halo payments.",
  },
  {
    name: "Error state",
    title: "Integration status unavailable",
    description:
      "Use when payment diagnostics fail and surface a retry path for developers.",
  },
];

export function Commerce() {
  return (
    <>
      {/* Page Hero */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-black/60 text-sm mb-2 block">Use Case</span>
            <h1
              className="text-black text-5xl md:text-6xl font-medium leading-tight"
              style={{ letterSpacing: "-0.04em" }}
            >
              Commerce
            </h1>
          </div>
          <div>
            <p
              className="text-black/70 text-2xl md:text-3xl leading-relaxed"
              style={{ letterSpacing: "-0.02em" }}
            >
              Your customers earn while they spend — every transaction builds
              loyalty without lifting a finger. Integrate Halo and turn payments
              into a growth engine.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Merchant Benefits — Bento Grid */}
      <SectionContainer py="py-12">
        <h2
          className="text-black text-4xl md:text-5xl font-medium leading-tight mb-12"
          style={{ letterSpacing: "-0.03em" }}
        >
          Why merchants choose Halo
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Wide light card */}
          <div className="sm:col-span-2 bg-white rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3
              className="text-black text-2xl font-medium leading-snug"
              style={{ letterSpacing: "-0.02em" }}
            >
              Boost retention
            </h3>
            <div>
              <p className="text-black/70 text-base leading-relaxed max-w-sm mb-4">
                Customers come back because their balance grows between
                purchases. Every dollar held with Halo is a reason to return —
                no points programs, no gimmicks.
              </p>
              <p className="text-black/60 text-base leading-relaxed max-w-sm">
                Loyalty that compounds automatically, just like the yield behind
                it.
              </p>
            </div>
          </div>

          {/* Dark card — Zero integration friction */}
          <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3
              className="text-white text-2xl font-medium whitespace-pre-line"
              style={{ letterSpacing: "-0.02em" }}
            >
              Zero integration{"\n"}friction
            </h3>
            <p className="text-white/60 text-base leading-relaxed">
              A simple REST API and a lightweight SDK — plug Halo into any
              checkout in an afternoon, not a quarter.
            </p>
          </div>

          {/* Dark card — Real-time settlement */}
          <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3
              className="text-white text-2xl font-medium whitespace-pre-line"
              style={{ letterSpacing: "-0.02em" }}
            >
              Real-time{"\n"}settlement
            </h3>
            <p className="text-white/60 text-base leading-relaxed">
              Payments settle instantly in dollar-denominated value. No batch
              windows, no next-day delays — funds arrive the moment they're
              sent.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* API Placeholder States */}
      <SectionContainer py="py-12">
        <span className="text-black/60 text-sm mb-2 block">
          Integration readiness
        </span>
        <h2
          className="text-black text-4xl md:text-5xl font-medium leading-tight mb-12"
          style={{ letterSpacing: "-0.03em" }}
        >
          Commerce data states.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {commerceDataStates.map((state) => (
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

      {/* Integration Steps */}
      <SectionContainer>
        <h2
          className="text-black text-4xl md:text-5xl font-medium leading-tight mb-12"
          style={{ letterSpacing: "-0.03em" }}
        >
          Integrate in minutes.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {integrationSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-7 min-h-64 flex flex-col justify-between"
            >
              <span className="text-black/50 text-sm font-medium">
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

      {/* Case Studies */}
      <SectionContainer py="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="text-black text-4xl md:text-5xl font-medium leading-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              Already trusted.
            </h2>
            <p className="text-black/70 text-lg leading-relaxed max-w-md">
              From independent storefronts to enterprise platforms, businesses
              are adopting Halo to reduce payment friction and reward customers
              without adding operational complexity.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {caseStudies.map((study) => (
              <div key={study.title} className="bg-[#2B2644] rounded-2xl p-7">
                <h3
                  className="text-white text-2xl font-medium mb-2"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {study.title}
                </h3>
                <p className="text-white text-base font-medium mb-2">
                  {study.stat}
                </p>
                <p className="text-white/60 text-base leading-relaxed">
                  {study.description}
                </p>
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
            Start building
          </h2>
          <p className="text-black/70 text-lg leading-relaxed max-w-md mx-auto mb-10">
            Everything you need to accept Halo payments — docs, SDKs, and
            sandbox access, all in one place.
          </p>
          <CTAButton
            label="Start building"
            variant="with-arrow"
            to="/ecosystem"
          />
        </div>
      </SectionContainer>
    </>
  );
}
