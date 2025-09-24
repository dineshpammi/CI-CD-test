// eslint.config.js (ESLint flat config)
import js from '@eslint/js'
import unicorn from 'eslint-plugin-unicorn'

export default [
  // Ignore non-source stuff
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      'public/**',
      '.github/**',
      'README.md',
      'LICENSE',
      'index.html',
      'vite.config.*',
      'postcss.config.*',
      'tailwind.config.*',
      'eslint.*',
    ],
  },

  // Base JS rules
  js.configs.recommended,

  // Enforce camelCase file names
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    _languageOptions: {                     // <-- add
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { unicorn },
    rules: {
      // STRICT: only camelCase (e.g., formatDate.js). `Home.jsx` and `TEST.jsx` will both FAIL.
      'unicorn/filename-case': ['error', { cases: { camelCase: true } }],
    },
  },

  // ── If you prefer allowing React component files in PascalCase (e.g., Home.jsx),
  //     uncomment this block and remove the one above.
  // {
  //   files: ['**/*.{js,jsx,ts,tsx}'],
  //   plugins: { unicorn },
  //   rules: {
  //     // camelCase for utils, PascalCase for components; `TEST.jsx` (ALL CAPS) still FAILS
  //     'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true } }],
  //   },
  // },
]
