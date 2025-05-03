import { ESLint } from 'eslint';
import reactPlugin from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    languageOptions: {
      parser: '@babel/eslint-parser', // Use Babel parser
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // Allow JSX
        },
      },
    },
    plugins: {
      react: reactPlugin,
      'jsx-a11y': jsxA11yPlugin,
      import: importPlugin,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the react version
      },
    },
    rules: {
      // Custom rules
    },
    files: ['*.jsx', '*.tsx'], // Apply specific rules for these file types
  },
];
