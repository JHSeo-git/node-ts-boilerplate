import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  platform: "node",
  target: "node18",
  outDir: "dist",
  name: "playwright-mcp-docker",
  tsconfig: "tsconfig.json",
  clean: true,
  dts: true,
  treeshake: true,
  minify: true,
})
