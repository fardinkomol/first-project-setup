// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";

// export default [
//   {
//     languageOptions: { globals: globals.browser },
//     ignores: ["**/node_modules/", ".dist/"],
//     rules: {
//       // "@typescript-eslint/no-unused-vars": "error",
//       "no-unused-vars": "error",
//       "no-unused-expressions": "error",
//       "prefer-const": "error",
//       "no-undef": "error",
//       "no-console": "warn"
//     }
//   },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
// ];

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['**/node_modules/', '.dist/'],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly',
      },
    },

    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
// 'extends'[
//   ('eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier')
// ];
