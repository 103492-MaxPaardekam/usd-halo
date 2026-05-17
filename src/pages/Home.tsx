import { CTAButton } from "../components/CTAButton";
import { Marquee } from "../components/Marquee";
import { heroPartners, backerPartners } from "../components/marqueeData";
import { SectionContainer } from "../components/SectionContainer";

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="h-screen flex flex-col overflow-hidden relative">
        <div className="flex-1 px-6 pt-20 pb-6 flex items-end max-w-[88rem] mx-auto w-full">
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ height: "calc(100vh - 96px)" }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover absolute inset-0 w-full h-full"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
                type="video/mp4"
              />
            </video>

            <div className="relative z-10 flex flex-col items-start justify-start h-full p-12 pt-36">
              <h1
                className="text-black text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4"
                style={{ letterSpacing: "-0.04em" }}
              >
                Your Wealth
                <br />
                Works
              </h1>

              <p
                className="text-black/70 text-base md:text-lg max-w-md mb-8 leading-relaxed"
                style={{
                  fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
                }}
              >
                An automated, reward-powered digital dollar built for native
                passive earnings and effortless connection into DeFi.
              </p>

              <CTAButton label="Join us" variant="with-arrow" responsive to="/join" />

              <div className="mt-24 w-full max-w-md">
                <Marquee
                  brands={heroPartners}
                  speed={22}
                  opacity={60}
                  gap="mx-7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2
              className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              Meet USD Halo.
            </h2>
            <CTAButton label="Discover it" variant="with-arrow" to="/about" />
          </div>
          <div>
            <p className="text-black/70 text-2xl md:text-3xl leading-relaxed">
              USD Halo is a reward-earning dollar coin that lets your savings
              grow while remaining tied to the U.S. dollar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            className="lg:col-span-2 rounded-2xl p-7 min-h-80 flex flex-col justify-between"
            style={{
              backgroundImage:
                "url(https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png&w=1280&q=85)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3
              className="text-black text-2xl font-medium leading-snug"
              style={{ letterSpacing: "-0.02em" }}
            >
              Savings that bloom
            </h3>
            <p className="text-black/70 text-base max-w-xs">
              Gain steady returns as your dollar tokens are routed into
              top-performing DeFi strategies.
            </p>
          </div>

          <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3 className="text-white text-2xl font-medium whitespace-pre-line">
              Always fluid,{"\n"}always pegged.
            </h3>
            <p className="text-white/60 text-base">
              Keep fully dollar-anchored with on-demand access to funds — no
              lockups or waits.
            </p>
          </div>

          <div className="bg-[#2B2644] rounded-2xl p-7 min-h-80 flex flex-col justify-between">
            <h3 className="text-white text-2xl font-medium whitespace-pre-line">
              Fully{"\n"}automated
            </h3>
            <p className="text-white/60 text-base">
              Skip the task of tuning positions yourself. USD Halo runs in the
              background for you.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Backed By Section */}
      <SectionContainer py="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          <div className="md:col-span-1">
            <p className="text-black/70 text-base leading-relaxed whitespace-pre-line">
              Funded by premier partners{"\n"}and forward-thinking leaders.
            </p>
          </div>
          <div className="md:col-span-3">
            <Marquee
              brands={backerPartners}
              speed={30}
              opacity={50}
              gap="mx-10"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Use Cases Section */}
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="md:pr-12 md:pt-2">
            <span className="text-black/60 text-sm mb-2 block">
              USD Halo in Practice
            </span>
            <h2
              className="text-5xl md:text-6xl font-medium leading-none mb-6"
              style={{ letterSpacing: "-0.04em" }}
            >
              Use modes
            </h2>
            <p className="text-black/60 text-base leading-relaxed max-w-sm">
              USD Halo powers a wide range of modes for builders, companies and
              treasuries wanting safe and rewarding stablecoin integrations plus
              more
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden min-h-[720px] w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover absolute inset-0 w-full h-full"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4"
                type="video/mp4"
              />
            </video>

            <div className="relative z-10 p-10 md:p-12 h-full flex flex-col justify-end">
              <h3
                className="text-black text-4xl md:text-5xl font-medium leading-tight mb-5"
                style={{ letterSpacing: "-0.03em" }}
              >
                Commerce
              </h3>
              <p className="text-black/70 text-base max-w-md mb-8 leading-relaxed">
                Lift customer retention by offering USD Halo, a trusted
                dollar-backed stablecoin with strong yields, letting your
                patrons earn with zero effort on your platform.
              </p>

              <div>
                <CTAButton label="Know more" variant="text-link" to="/commerce" />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
