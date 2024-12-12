import { defineConfig } from "orval";

export default defineConfig({
  auth: {
    input: "./openapi.json",
    output: {
      mode: "single",
      target: "./output.ts",
      indexFiles: false,
      client: "fetch",
    },
  },
});
