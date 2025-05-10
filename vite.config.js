import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true, // Enable global variables for tests
    environment: "jsdom", // Use jsdom for testing browser-like environments
  },
});
