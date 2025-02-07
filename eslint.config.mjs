import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", // Next.js best practices
    "next/typescript", // TypeScript support
    "eslint:recommended", // Standard ESLint rules
    "plugin:@typescript-eslint/recommended", // TypeScript linting
    "plugin:react/recommended", // React best practices
    "plugin:react-hooks/recommended", // React hooks best practices
    "prettier", // Disable conflicting rules
  ),
  {
    plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
    rules: {
      "prettier/prettier": "error", // Enforce Prettier formatting
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Warn for unused variables but ignore prefixed with '_'
      "react-hooks/exhaustive-deps": "warn", // Ensure effect dependencies are correct
      "no-console": "warn", // Warn against console logs
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

export default eslintConfig;
