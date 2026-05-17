import { Component, type ErrorInfo, type ReactNode } from "react";
import { CTAButton } from "./CTAButton";
import { SectionContainer } from "./SectionContainer";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(_error: Error, _errorInfo: ErrorInfo): void {
    // Reserved for future error reporting integration.
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col bg-[#F5F5F5] min-h-screen">
          <SectionContainer>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-black/60 text-sm mb-2 block">
                Unexpected error
              </span>
              <h1
                className="text-black text-5xl md:text-6xl font-medium leading-tight mb-6"
                style={{ letterSpacing: "-0.04em" }}
              >
                Something went wrong.
              </h1>
              <p className="text-black/70 text-base md:text-lg leading-relaxed max-w-md mx-auto mb-8">
                The page could not be rendered. Return home and continue with a
                clean state.
              </p>
              <CTAButton label="Back home" variant="with-arrow" to="/" />
            </div>
          </SectionContainer>
        </div>
      );
    }

    return this.props.children;
  }
}
