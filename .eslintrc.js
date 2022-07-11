module.exports = {
  plugins: ['@typescript-eslint', 'formatjs'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    // https://eslint.org/docs/rules/
    'no-empty': 'off',
    // https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // https://palantir.github.io/tslint/rules/
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'formatjs/no-offset': 'error',
    'formatjs/no-emoji': 'error',
    'formatjs/enforce-default-message': ['error', 'literal'],
    'import/order': 'warn',
    'import/newline-after-import': 'warn',
    'import/first': 'warn',
    'import/no-mutable-exports': 'warn',
    'import/no-cycle': 'warn',
    'import/no-unresolved': 'error',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'warn',
  },
};
