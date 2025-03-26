import { beforeAll, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./header";
import "@testing-library/jest-dom/vitest";

// Mock clipboard API
const mockClipboard = {
  writeText: vi.fn(),
};

Object.defineProperty(navigator, "clipboard", {
  value: mockClipboard,
  writable: true,
});

describe("the UI", () => {
  beforeAll(() => {
    render(<Header />);
  });
  it("shows a header with my name", () => {
    const nameHeader = screen.getByText("Rory Doak");
    expect(nameHeader).toBeInTheDocument();
  });

  it("shows relevant links to my work", () => {
    const emailHeader = screen.getByText("rory.doak@gmail.com");
    const repoHeader = screen.getByText("Project repo");
    const profileHeader = screen.getByText("Github profile");

    expect(emailHeader).toBeInTheDocument();
    expect(repoHeader).toBeInTheDocument();
    expect(profileHeader).toBeInTheDocument();
  });
});

describe("the header interactions", () => {
  it.todo("a user can copy the email", () => {});

  it.todo("a user can copy the github link", () => {});

  it.todo("a user can copy the repo link");
});
