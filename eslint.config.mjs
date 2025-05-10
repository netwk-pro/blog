/* ==========================================================================
eslint.config.mjs

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================== */

import js from "@eslint/js"; // Provides ESLint core rules and recommended config
import json from "@eslint/json";
import eslintConfigPrettier from "eslint-config-prettier"; // Prettier config to disable conflicting ESLint rules
import { defineConfig } from "eslint/config";
import globals from "globals";

const GLOBALS = {
  ...globals.browser,
  ...globals.node,
  self: "readonly",
  location: "readonly",
  indexedDB: "readonly",
};

// Define general ESLint rules (non-Svelte-specific)
const ESLINT_RULES = {
  indent: "off", // Turn off the 'indent' rule, managed by Prettier
  quotes: "off", // Turn off the 'quotes' rule, managed by Prettier
  semi: "off", // Turn off the 'semi' rule, managed by Prettier
};

export default defineConfig([
  // Global ignores
  {
    ignores: [
      ".*", // Hidden files
      "*.xml", // XML files
      "**/.cache/**", // Cache directories
      "**/.vscode/**", // VSCode-specific files
      "**/coverage/**", // Coverage reports
      "**/build/**", // Distribution files
      "package.json", // NPM package manifest
      "package-lock.json", // NPM lockfile
      "node_modules/", // Node.js dependencies
      ".vite/", // Vite-specific cache directory
      "*.lock", // Lock files
    ],
  },

  // JavaScript/Node.js configuration
  {
    files: ["**/*.{mjs,js}"],
    plugins: { js },
    languageOptions: {
      globals: GLOBALS,
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module",
    },
    extends: ["js/recommended"],
    rules: {
      ...js.configs.recommended.rules, // ESLint's core recommended rules (scoped)
      ...eslintConfigPrettier.rules, // Prettier config to disable conflicting ESLint rules (scoped)
      ...ESLINT_RULES, // Additional custom rules
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // Ignore unused variables starting with an underscore
    },
  },

  // JSON configuration
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },

  // JSONC configuration
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },
]);
