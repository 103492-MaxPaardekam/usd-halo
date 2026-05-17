import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { Join } from "./Join";

describe("Join page", () => {
  it("shows success message for valid email", async () => {
    const user = userEvent.setup();
    localStorage.clear();

    render(
      <MemoryRouter>
        <Join />
      </MemoryRouter>,
    );

    await user.type(screen.getByLabelText("Email address"), "user@example.com");
    await user.click(screen.getByRole("button", { name: "Join waitlist" }));

    expect(
      await screen.findByText(
        "You're on the waitlist. We'll send updates soon.",
      ),
    ).toBeInTheDocument();
  });
});
