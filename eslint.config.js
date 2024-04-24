import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


export default [
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    ...pluginVue.configs["flat/recommended"],
    {
        rules: {
            semi: ["error", "always"],
            quotes: ["error", "double"],
            indent: ["error", 4],
            "comma-spacing": ["error", { before: false, after: true }],
        }
    },
];