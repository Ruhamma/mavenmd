const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'simple-import-sort',
    'unused-imports',
    'sort-keys-fix',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next/core-web-vitals',
  ],
  rules: {
    'prettier/prettier': 'error',

    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',

    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'error',

    eqeqeq: ['error', 'always'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

export default config;
