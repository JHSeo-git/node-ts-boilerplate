import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  platform: "node",
  target: "node18",
  outDir: "dist",
  name: "your-package-name",
  tsconfig: "tsconfig.json",
  clean: true,
  dts: true,
  treeshake: true,
  minify: true,
})
