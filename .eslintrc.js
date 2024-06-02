module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'i18next',
        'react-hooks',
        'artem-plugin',
        'unused-imports',
    ],
    rules: {
        'unused-imports/no-unused-imports': 'error',
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'react/display-name': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extension': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no_underscore-dangle': 'off',
        'react/no-deprecated': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        'artem-plugin/path-checker': ['error', { alias: '@' }],
        'artem-plugin/layer-imports': [
            'off',
            {
                alias: '@',
                ignoreImportPatterns: [
                    '**/StoreProvider',
                    '**/testing',
                    '**/StoreDecorator.tsx',
                    '**/ThemeDecorator.tsx',
                    '**/RouteDecorator.tsx',
                ],
            },
        ],
        'artem-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/*.story.*',
                    '**/StoreDecorator.tsx',
                    '**/ThemeDecorator.tsx',
                    '**/RouteDecorator.tsx',
                ],
            },
        ],
    },
    globals: {
        __IS_DEV_: true,
        __API__: true,
        __PROJECT__: true,
    },
};
