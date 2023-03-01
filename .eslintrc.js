const globals = require('globals')

module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ["react", "@typescript-eslint"],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            env: {
                node: true,
                es2021: true
            },
            extends: [
                'plugin:@typescript-eslint/recommended',
                'eslint:recommended',
                'plugin:react/recommended',
                'plugin:react/jsx-runtime',
                'plugin:react-hooks/recommended'
            ],
            globals: {
                ...globals.browser
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                jsx: true,
                project: ['./tsconfig.json'], // Specify it only for TypeScript files
            },
            rules: {
                'react/jsx-uses-react': 'error',
                'react/jsx-uses-vars': 'error',
                'no-multi-spaces': 'error',
                'no-multiple-empty-lines': 'error',
                'sort-imports': 'error',
                'object-curly-spacing': ['error', 'always'],
                'prefer-template': 'error',
            },
        },
    ],

}
