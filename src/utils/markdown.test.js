import { describe, expect, it } from "vitest";
import { processMarkdown } from "./markdown";

describe("Markdown Utility", () => {
  it("should trim and convert Markdown to uppercase", () => {
    const input = "  hello world  ";
    const result = processMarkdown(input);
    expect(result).toBe("HELLO WORLD");
  });
});
