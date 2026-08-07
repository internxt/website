import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier/flat';

export default tseslint.config(
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**', 'out/**', 'coverage/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...next,
  prettier,
  {
    rules: {
      'no-console': 'off',
      'max-len': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@next/next/inline-script-id': 'off',
      'react/jsx-key': 'off',
      'no-async-promise-executor': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      'no-prototype-builtins': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@next/next/no-before-interactive-script-outside-document': 'off',
      'prefer-const': 'warn',
    },
  },
);
