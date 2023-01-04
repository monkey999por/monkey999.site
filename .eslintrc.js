module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "unused-imports"],
  rules: {
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "(useRecoilCallback|useRecoilTransaction_UNSTABLE)",
      },
    ],
    "no-duplicate-imports": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/button-has-type": "warn",
    "react/no-access-state-in-setstate": "error",
    "react/jsx-boolean-value": "warn",
    "react/jsx-equals-spacing": ["warn", "never"],
    "react/jsx-fragments": "warn",
    "react/self-closing-comp": ["warn", { component: true, html: true }],
    "react/void-dom-elements-no-children": "error",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "sort-imports": [
      "error",
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["sibling", "parent"],
          "object",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
          {
            pattern: ".*/UI/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "./*.module.css",
            group: "index",
            position: "after",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "unused-imports/no-unused-imports": "error",
  },
};
