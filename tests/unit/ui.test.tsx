import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

describe("UI primitives", () => {
  it("renders a button with accessible name", () => {
    render(<Button>Donate Now</Button>);
    expect(screen.getByRole("button", { name: "Donate Now" })).toBeInTheDocument();
  });

  it("renders a badge label", () => {
    render(<Badge>80G</Badge>);
    expect(screen.getByText("80G")).toBeInTheDocument();
  });
});
