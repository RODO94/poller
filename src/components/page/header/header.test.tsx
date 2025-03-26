import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Header from "./header";
import "@testing-library/jest-dom/vitest";

describe("the UI", () => {
  beforeEach(() => {
    render(<Header />);
  });
  afterEach(() => {
    cleanup();
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
  beforeEach(() => {
    render(<Header />);
  });
  afterEach(() => {
    cleanup();
  });
  it("a user can copy the email", async () => {
    const user = userEvent.setup();
    const emailText = "rory.doak@gmail.com";
    const clipboardSpy = vi.spyOn(navigator.clipboard, "writeText");

    const emailLink = screen.getByText(emailText);
    await user.click(emailLink);

    expect(clipboardSpy).toBeCalledWith(emailText);
  });

  it("a user can copy the github link", async () => {
    const user = userEvent.setup();
    const profileText = "Github profile";
    const clipboardSpy = vi.spyOn(navigator.clipboard, "writeText");

    const profileLink = screen.getByText(profileText);
    await user.click(profileLink);

    expect(clipboardSpy).toBeCalledWith("https://github.com/RODO94");
  });

  it.todo("a user can copy the repo link", async () => {
    const user = userEvent.setup();
    const repoText = "Project repo";
    const clipboardSpy = vi.spyOn(navigator.clipboard, "writeText");

    const repoLink = screen.getByText(repoText);
    await user.click(repoLink);

    expect(clipboardSpy).toBeCalledWith("https://github.com/RODO94/poller");
  });
});
