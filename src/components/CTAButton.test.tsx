import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { CTAButton } from "./CTAButton";

describe("CTAButton", () => {
  it("renders router link when to is provided", () => {
    render(
      <MemoryRouter>
        <CTAButton label="Open Wallet" to="/wallet" />
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: "Open Wallet" });
    expect(link).toHaveAttribute("href", "/wallet");
  });

  it("calls onClick for button variant", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<CTAButton label="Join" onClick={onClick} />);

    await user.click(screen.getByRole("button", { name: "Join" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
