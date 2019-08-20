module.exports = {
    env: {
        browser: true,
        es6: true,
        // For require() and define(),
        amd: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'react',
        'lodash',
        'jasmine'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'lodash/callback-binding': 'error',
        'lodash/no-extra-args': 'error',
        'lodash/no-unbound-this': 'error',
        'no-empty': 'off',
        'no-console': 'off',
        'block-scoped-var': 'error',
        'curly': 'error',
        'no-extra-bind': 'error',
        'no-implicit-globals': 'error',
        'no-lone-blocks': 'error',
        'no-unused-expressions': 'error',
        'no-shadow': 'error',
        'semi': ['error', 'always'],
        'no-duplicate-imports': 'error',
    }
};
