import { useState } from "react";
import { Sparkles, Vote, Gift } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { SectionContainer } from "../components/SectionContainer";
import { submitWaitlistSignup } from "../services/waitlist";

type JoinFormStatus = "idle" | "submitting" | "success" | "error";

const benefits = [
  {
    icon: Sparkles,
    title: "Early access",
    description:
      "Be the first to try new features, vaults, and integrations — before they go live to the public.",
  },
  {
    icon: Vote,
    title: "Governance",
    description:
      "Shape the protocol's future. Vote on fee structures, collateral types, and treasury allocation.",
  },
  {
    icon: Gift,
    title: "Exclusive rewards",
    description:
      "Early members earn boosted yields and bonus incentives — a thank-you for believing early.",
  },
];

const steps = [
  {
    number: "1",
    title: "Connect your wallet",
    description:
      "Link MetaMask, Coinbase Wallet, or any WalletConnect-compatible wallet in seconds.",
  },
  {
    number: "2",
    title: "Deposit any amount",
    description:
      "No minimums, no paperwork. Send USDC into the protocol and you're in.",
  },
  {
    number: "3",
    title: "Start earning rewards",
    description:
      "Rewards accrue daily — automatically compounded so your balance grows without lifting a finger.",
  },
];

export function Join() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<JoinFormStatus>("idle");
  const [message, setMessage] = useState("");

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      // Keep a tiny delay so users perceive successful submission feedback.
      await new Promise((resolve) => setTimeout(resolve, 400));
      const result = await submitWaitlistSignup(email);

      setStatus("success");
      setMessage(
        result === "exists"
          ? "You're already on the waitlist. We'll keep you posted."
          : "You're on the waitlist. We'll send updates soon.",
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Page Hero */}
      <SectionContainer>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-black/60 text-sm mb-2 block">Community</span>
          <h1
            className="text-black text-5xl md:text-6xl font-medium leading-tight mb-6"
            style={{ letterSpacing: "-0.04em" }}
          >
            Join the Halo community.
          </h1>
          <p className="text-black/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            The future of digital dollars is being built in the open — and
            there's a seat at the table for you.
          </p>
        </div>
      </SectionContainer>

      {/* Benefits Grid */}
      <SectionContainer py="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between"
            >
              <benefit.icon className="w-6 h-6 text-white/60" />
              <div>
                <h3
                  className="text-white text-2xl font-medium mb-2"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* How to Join */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-black text-4xl md:text-5xl font-medium leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Three steps to start.
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl p-7">
                <span className="text-black/50 text-sm block mb-2">
                  Step {step.number}
                </span>
                <h3
                  className="text-black text-2xl font-medium mb-2"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {step.title}
                </h3>
                <p className="text-black/70 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Newsletter / Waitlist */}
      <SectionContainer py="py-12">
        <div className="bg-[#2B2644] rounded-2xl p-12 text-center">
          <h2
            className="text-white text-4xl md:text-5xl font-medium leading-tight mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Stay ahead.
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            Get updates on launches, rewards, and governance votes.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") {
                  setStatus("idle");
                  setMessage("");
                }
              }}
              aria-label="Email address"
              aria-invalid={status === "error"}
              className="bg-white/10 text-white placeholder:text-white/40 rounded-full px-6 py-2.5 text-base flex-1 max-w-sm outline-none focus-visible:bg-white/15 transition-colors duration-200"
              placeholder="Your email"
              autoComplete="email"
              required
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-white text-black text-base font-medium px-7 py-2.5 rounded-full hover:bg-white/90 transition-colors duration-200 disabled:bg-white/80"
            >
              {status === "submitting" ? "Joining..." : "Join waitlist"}
            </button>
          </form>
          {message ? (
            <p
              className="text-white/60 text-base leading-relaxed mt-4"
              role={status === "error" ? "alert" : "status"}
              aria-live={status === "error" ? "assertive" : "polite"}
            >
              {message}
            </p>
          ) : null}
        </div>
      </SectionContainer>

      {/* Bottom CTA */}
      <SectionContainer>
        <div className="text-center">
          <CTAButton label="Open Wallet" variant="with-arrow" to="/wallet" />
        </div>
      </SectionContainer>
    </>
  );
}
