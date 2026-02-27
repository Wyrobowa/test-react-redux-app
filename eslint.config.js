import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';
import js from '@eslint/js';

export default [
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.es2021,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: '19.0.0',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off',
    },
  },
];
