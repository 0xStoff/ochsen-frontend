const react = require('eslint-plugin-react');
const globals = require('globals');

module.exports = [
    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        plugins: {
            react,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            'react/jsx-uses-react': 'error',
            'react/jsx-uses-vars': 'error',
            'no-multi-spaces': 'error',
            'object-curly-spacing': 'always'
        },
        extends: [
            'eslint:recommended',
            "plugin:react/recommended",
            'plugin:react/jsx-runtime',
            'plugin:react-hooks/recommended'
        ]
    },
];