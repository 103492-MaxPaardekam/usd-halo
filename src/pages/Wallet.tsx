import { useState } from "react";
import { Wallet as WalletIcon, Shield, Link2, Smartphone, HardDrive, Layers } from "lucide-react";
import { CTAButton } from "../components/CTAButton";
import { SectionContainer } from "../components/SectionContainer";

const wallets = [
  { name: "MetaMask", description: "The most popular browser extension wallet.", icon: Layers },
  { name: "WalletConnect", description: "Scan a QR code from any compatible mobile wallet.", icon: Link2 },
  { name: "Coinbase Wallet", description: "Connect directly from the Coinbase app.", icon: Shield },
  { name: "Rainbow", description: "A beautifully designed wallet for Ethereum.", icon: Smartphone },
  { name: "Trust Wallet", description: "Multi-chain support with a simple interface.", icon: WalletIcon },
  { name: "Ledger", description: "Hardware-level security for your assets.", icon: HardDrive },
];

const MOCK_WALLET_ADDRESS = "0x9e4f8a12b0d3c56a77f0e2a9b83c4d11f2a98b7c";

type CopyStatus = "idle" | "copied" | "error";

export function Wallet() {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");

  const handleCopyAddress = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(MOCK_WALLET_ADDRESS);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = MOCK_WALLET_ADDRESS;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopyStatus("copied");
      window.setTimeout(() => setCopyStatus("idle"), 2000);
    } catch {
      setCopyStatus("error");
      window.setTimeout(() => setCopyStatus("idle"), 2000);
    }
  };

  return (
    <>
      {/* Page Hero */}
      <SectionContainer>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-black/60 text-base mb-4">Your Dashboard</p>
          <h1
            className="text-5xl md:text-6xl font-medium text-black leading-tight mb-6"
            style={{ letterSpacing: "-0.04em" }}
          >
            Open Wallet
          </h1>
          <p className="text-black/70 text-lg leading-relaxed mb-10">
            Connect your wallet to deposit stablecoins, track your balance, and
            start earning rewards — all in one place.
          </p>
          <CTAButton label="Connect Wallet" variant="with-arrow" />
        </div>
      </SectionContainer>

      {/* Wallet Preview */}
      <SectionContainer py="py-12">
        <div className="bg-[#2B2644] rounded-2xl p-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <p className="text-white/60 text-base mb-2">Balance</p>
              <p
                className="text-white text-5xl md:text-6xl font-medium leading-tight"
                style={{ letterSpacing: "-0.04em" }}
              >
                $0.00
              </p>
              <div className="mt-6">
                <p className="text-white/60 text-sm mb-2">Wallet address</p>
                <p className="text-white/60 text-base leading-relaxed max-w-md break-all">
                  {MOCK_WALLET_ADDRESS}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-8">
              <div>
                <p className="text-white/60 text-base mb-2">Rewards earned</p>
                <p
                  className="text-white text-2xl font-medium"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  $0.00
                </p>
                <button
                  onClick={handleCopyAddress}
                  className="mt-5 bg-white text-black text-base font-medium px-7 py-2.5 rounded-full hover:bg-white/90 transition-colors duration-200"
                >
                  Copy address
                </button>
                <p className="text-white/60 text-sm mt-3">
                  {copyStatus === "copied"
                    ? "Address copied."
                    : copyStatus === "error"
                      ? "Copy failed."
                      : ""}
                </p>
              </div>
              <button className="bg-white text-black text-base font-medium px-7 py-2.5 rounded-full hover:bg-white/90 transition-colors duration-200">
                Deposit
              </button>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Supported Wallets */}
      <SectionContainer>
        <h2
          className="text-4xl md:text-5xl font-medium text-black leading-tight mb-12"
          style={{ letterSpacing: "-0.03em" }}
        >
          Connect with ease.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wallets.map((w) => (
            <div key={w.name} className="bg-white rounded-2xl p-7">
              <w.icon className="w-6 h-6 text-black/50 mb-4" />
              <h3
                className="text-2xl font-medium text-black leading-tight mb-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                {w.name}
              </h3>
              <p className="text-black/70 text-base leading-relaxed">
                {w.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Security Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2
              className="text-4xl md:text-5xl font-medium text-black leading-tight mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              Your keys, your coins.
            </h2>
            <p className="text-black/70 text-lg leading-relaxed max-w-lg">
              USD Halo never takes custody of your funds. Every transaction is
              signed locally — your private keys stay on your device, where they
              belong.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-[#2B2644] rounded-2xl p-7 min-h-40 flex flex-col justify-end">
              <h3
                className="text-2xl font-medium text-white leading-tight mb-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                Non-custodial
              </h3>
              <p className="text-white/60 text-base leading-relaxed">
                You hold your keys at all times — we never have access to move
                or freeze your assets.
              </p>
            </div>
            <div className="bg-[#2B2644] rounded-2xl p-7 min-h-40 flex flex-col justify-end">
              <h3
                className="text-2xl font-medium text-white leading-tight mb-2"
                style={{ letterSpacing: "-0.02em" }}
              >
                Audited contracts
              </h3>
              <p className="text-white/60 text-base leading-relaxed">
                Every smart contract is independently audited and verified
                on-chain before deployment.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Bottom CTA */}
      <SectionContainer>
        <div className="text-center">
          <h2
            className="text-4xl md:text-5xl font-medium text-black leading-tight mb-8"
            style={{ letterSpacing: "-0.03em" }}
          >
            Get started
          </h2>
          <CTAButton label="Join USD Halo" variant="with-arrow" to="/join" />
        </div>
      </SectionContainer>
    </>
  );
}
