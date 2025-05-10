import { describe, expect, it } from "vitest";
import { add, subtract } from "./math";

describe("Math Functions", () => {
  it("should add two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, -1)).toBe(-2);
  });

  it("should subtract two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(10, 15)).toBe(-5);
  });
});
