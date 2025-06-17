import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import ts from "typescript-eslint"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    ignores: ["node_modules/", "dist/", "prettier.config.*"],
  },

  ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),

  js.configs.recommended,
  ...ts.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

  eslintConfigPrettier,
]

export default eslintConfig
