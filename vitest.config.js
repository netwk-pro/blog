import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Enable global variables
    environment: "jsdom", // Use jsdom for browser-like testing
    setupFiles: ["./setupTests.js"], // Load the setupTests.js file
    coverage: {
      provider: "v8", // Use V8 as the coverage provider
      reporter: ["text", "html"], // Generate text and HTML coverage reports
    },
  },
});
