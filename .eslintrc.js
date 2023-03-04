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
    globals: {
        process: "readonly",
        google: "readonly",
        JSX: true,
        React: true,
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
                project: ['./tsconfig.json'],
            },
            rules: {
                'react/jsx-uses-react': 'error',
                'react/jsx-uses-vars': 'error',
                'no-multi-spaces': 'error',
                'no-multiple-empty-lines': 'error',
                'sort-imports': 'warn',
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

                // 'no-unused-vars': 'off',
                // '@typescript-eslint/no-unused-vars': ['warn'],

                "import/named": "off",
                "import/namespace": "off",
                "import/default": "off",
                "import/export": "off",
                "import/no-named-as-default": "off",
                "import/no-named-as-default-member": "off",
                // "@typescript-eslint/no-unused-vars": [
                //     "error",
                //     {
                //         "varsIgnorePattern": "^React$",
                //         "argsIgnorePattern": "^_"
                //     }
                // ],
                // "@typescript-eslint/no-unused-vars-experimental": [
                //     "error",
                //     {
                //         "ignoreArgsIfArgsAfterAreUsed": true,
                //         "ignoredNamesRegex": "^_"
                //     }
                // ],
                "@typescript-eslint/consistent-type-imports": ["error", { "prefer": "type-imports" }],


                'no-spaced-func': 'off',
                'func-call-spacing': 'off',
                '@typescript-eslint/func-call-spacing': 'error',


                "react/jsx-boolean-value": ["error", "never"],
                "react/jsx-curly-brace-presence": ["error", {"props": "never", "children": "never"}],
                "react/jsx-filename-extension": ["error", {"extensions": [".tsx", ".jsx"]}],
                "react/jsx-fragments": ["error", "syntax"],
                "react/jsx-key": "error",
                "react/jsx-max-depth": ["error", {"max": 4}],
                "react/jsx-no-bind": ["error", {"allowArrowFunctions": true}],
                "react/jsx-no-constructed-context-values": "error",
                "react/jsx-no-duplicate-props": ["error", {"ignoreCase": true}],
                "react/jsx-no-script-url": "error",
                "react/jsx-no-useless-fragment": "error",
                "react/jsx-pascal-case": "error",
                "react/jsx-props-no-spreading": ["error", {"exceptions": ["Component", "ComponentChild"]}],
                "react/jsx-sort-props": ["error", {"shorthandFirst": true}],
                "react/jsx-tag-spacing": ["error", {
                    "closingSlash": "never",
                    "beforeSelfClosing": "always",
                    "afterOpening": "never",
                    "beforeClosing": "allow",
                }],
                "react/jsx-wrap-multilines": ["error", {
                    "declaration": "parens-new-line",
                    "assignment": "parens-new-line",
                    "return": "parens-new-line",
                    "arrow": "parens-new-line",
                    "condition": "ignore",
                    "logical": "ignore",
                    "prop": "ignore"
                }],
                "react/prop-types": "off",
                "react-hooks/rules-of-hooks": "error",
                "react-hooks/exhaustive-deps": "warn",


                // 'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
                // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
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
                    ArrayPattern: {minItems: 3},
                }],

                'array-bracket-newline': ['error', 'consistent'],

                'object-curly-newline': ['error', {
                    multiline: true,
                    consistent: true,
                }],

                'no-param-reassign': ['error', {props: false}],
                'newline-per-chained-call': ['error', {ignoreChainWithDepth: 5}],

            },
        },
    ],
}

