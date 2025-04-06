import globals from "globals";
import js from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin-js";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "module",
            globals: {
                ...globals.node
            },
            ecmaVersion: "latest"
        },

        plugins: {
            "@stylistic/js": stylisticJs
        },
        rules: {
            ...js.configs.recommended.rules,
            "@stylistic/js/indent": ["error", 4],
            "@stylistic/js/semi": ["error", "always"],
            "@stylistic/js/comma-dangle": ["error", "never"],
            "@stylistic/js/comma-spacing": ["error", { "after": true }],
            "@stylistic/js/jsx-quotes": ["error", "prefer-double"],
            "@stylistic/js/quotes": ["error", "double", {
                "allowTemplateLiterals": "always"
            }],
            "eqeqeq": ["error", "always"],
            "@stylistic/js/object-curly-spacing": ["error", "always"],
            "@stylistic/js/arrow-spacing": ["error", { "before": true, "after": true }],
            "no-console": "off",
            "no-unused-vars": "off"
        }
    },
    {
        ignores: ["dist/**", "build/**"]
    }
];