import { beforeEach, describe } from "vitest";
import Hero from "./Hero";
import { cleanup, render } from "@testing-library/react";

describe("the UI", () => {
  beforeEach(() => {
    render(<Hero />);
  });
  beforeEach(() => {
    cleanup();
  });

  it.todo("should display a central message");
  it.todo("should be displayed with high contrast");
});
