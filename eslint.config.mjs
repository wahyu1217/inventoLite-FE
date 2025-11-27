// eslint.config.mjs
import { defineConfig } from 'eslint/config'
import next from 'eslint-config-next'
import prettier from 'eslint-config-prettier'

export default defineConfig([
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'build/**', 'public/**']
  },

  ...next, // ← Next.js config must be spread, NOT called

  prettier, // ← Prettier config block

  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error',
      eqeqeq: ['error', 'always'],
      'no-duplicate-imports': 'error',
      'react/react-in-jsx-scope': 'off'
    }
  }
])
