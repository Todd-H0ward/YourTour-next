import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**'],
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroups: [
            {
              pattern: '{components/**,**/components/**}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '{hooks/**,**/hooks/**}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '{utils/**,**/utils/**}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '{stubs/**,**/stubs/**,constants/**,**/constants/**}',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '*.+(scss)',
              group: 'index',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
];

export default eslintConfig;
