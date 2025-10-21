// vitest.config.js
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "json", "json-summary"],
      thresholds: {
        lines: 69,
        statements: 69,
        functions: 23,
        branches: 70,
      },      
    },
  },
});
