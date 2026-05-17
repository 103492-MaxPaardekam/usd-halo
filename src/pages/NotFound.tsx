import { CTAButton } from "../components/CTAButton";
import { SectionContainer } from "../components/SectionContainer";

export function NotFound() {
  return (
    <SectionContainer>
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-black/60 text-sm mb-2 block">404</span>
        <h1
          className="text-black text-5xl md:text-6xl font-medium leading-tight mb-6"
          style={{ letterSpacing: "-0.04em" }}
        >
          Page not found.
        </h1>
        <p className="text-black/70 text-base md:text-lg leading-relaxed max-w-md mx-auto mb-8">
          This route does not exist. Return to the main experience.
        </p>
        <CTAButton label="Go home" variant="with-arrow" to="/" />
      </div>
    </SectionContainer>
  );
}
