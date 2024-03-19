module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "i18next"
    ],
    "rules": {
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "indent": [2, 4],
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".tsx"] }],
        "import/no-unresolved": 'off',
        "import/prefer-defaul-export": "off",
        'no-unused-vars': 'warn',
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-props-no-spreading": "warn",
        "react/function-component-definition": "off",
        "no-shadow" : "off",
        "import/extension": "off",
        "import/no-extraneous-dependencies": "off",
        "no_underscore-dangle": "off",
        "react/no-deprecated": "off",
    },
    globals: {
        '__IS_DEV_': true,
    }
}
