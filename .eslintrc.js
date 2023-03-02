module.exports = {
    env: {
        browser: true
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json',
            },
            alias: {
                map: [
                    // ['@', './src'],
                    // ['@config', './src/config'],
                ],
                extensions: ['.ts', '.js', '.jsx', '.json']
            },
        },
    },

    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': 'error',
        'sort-imports': 'error',
        'object-curly-spacing': ['error', 'always'],
        'prefer-template': 'error',


        'require-await': ['error'],
        'no-return-await': ['error'],
        'no-await-in-loop': ['error'],
        'require-atomic-updates': ['error'],

        '@typescript-eslint/no-this-alias': 'off',

        'import/prefer-default-export': 'off',

        '@typescript-eslint/member-delimiter-style': ['error'],

        '@typescript-eslint/no-empty-function': 'off',

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],

        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],

        'no-spaced-func': 'off',
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': 'error',


        'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'max-len': ['error', {
            code: 120,
            tabWidth: 2,
            ignorePattern: '^import .*',
            ignoreComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
        }],

        'array-element-newline': ['error', {
            ArrayExpression: 'consistent',
            ArrayPattern: { minItems: 3 },
        }],

        'array-bracket-newline': ['error', 'consistent'],

        'object-curly-newline': ['error', {
            multiline: true,
            consistent: true,
        }],

        'no-param-reassign': ['error', { props: false }],
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 5 }],

    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'eslint:recommended',
                'plugin:react/recommended',
                'plugin:react/jsx-runtime',
                'plugin:react-hooks/recommended'
            ],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                jsx: true,
                project: ['./tsconfig.json'], // Specify it only for TypeScript files
            },
        },
    ],
}


// OOOOOLLLLDDDD
// const globals = require('globals')
//
// module.exports = {
//     parser: '@typescript-eslint/parser',
//     plugins: ["react", "@typescript-eslint"],
//     overrides: [
//         {
//             files: ['*.ts', '*.tsx'],
//             env: {
//                 node: true,
//                 es2021: true
//             },
//             extends: [
//                 'plugin:@typescript-eslint/recommended',
//                 'eslint:recommended',
//                 'plugin:react/recommended',
//                 'plugin:react/jsx-runtime',
//                 'plugin:react-hooks/recommended'
//             ],
//             globals: {
//                 ...globals.browser
//             },
//             parserOptions: {
//                 ecmaVersion: 'latest',
//                 sourceType: 'module',
//                 jsx: true,
//                 project: ['./tsconfig.json'], // Specify it only for TypeScript files
//             },
//             rules: {
//                 'react/jsx-uses-react': 'error',
//                 'react/jsx-uses-vars': 'error',
//                 'no-multi-spaces': 'error',
//                 'no-multiple-empty-lines': 'error',
//                 'sort-imports': 'error',
//                 'object-curly-spacing': ['error', 'always'],
//                 'prefer-template': 'error',
//             },
//         },
//     ],
//
// }
