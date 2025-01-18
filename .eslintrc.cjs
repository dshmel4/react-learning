module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'eslint-plugin-import',
    'eslint-plugin-prefer-arrow',
    'eslint-plugin-import',
  ],
  rules: {
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal'],
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'external',
            'position': 'before',
          },
          {
            'pattern': 'react',
            'group': 'internal',
            'position': 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': ['react'],
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true,
        },
      },
    ],
    // "import/order": [
    //   "error",
    //   {
    //     "groups": ["builtin", "internal", "external", "parent", "sibling", "index", "object", "type"],
    //     "pathGroupsExcludedImportTypes": ["react"],
    //     "alphabetize": {
    //       "order": "asc",
    //       "caseInsensitive": true
    //     }
    //   }
    // ],
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public'
      }
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'static-field',
          'instance-field',
          'static-method',
          'private-instance-method',
          'protected-instance-method',
          'public-instance-method'
        ]
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'class',
        format: ['PascalCase']
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false
        }
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: ['classProperty', 'classMethod'],
        format: ['camelCase']
      }
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: {
            message: 'Use {} instead.'
          },
          String: {
            message: "Use 'string' instead."
          },
          Number: {
            message: "Use 'number' instead."
          },
          Boolean: {
            message: "Use 'boolean' instead."
          },
          Function: {
            message: "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
          }
        }
      }
    ],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple'
      }
    ],
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/no-namespace': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    eqeqeq: ['error', 'always'],
    curly: 'error',
    'no-cond-assign': 'error',
    'prefer-arrow/prefer-arrow-functions': 'error',
    'no-return-await': 'error',
    'no-await-in-loop': 'error',
    'id-length': [
      'error',
      {
        min: 1,
        max: 48,
        exceptions: ['_', 'i', 'j', 'k', 'cb', 'fn', 'ms', 'id', 'x', 'y']
      }
    ],
    'no-useless-return': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-else-return': 'error',
    'no-lonely-if': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    quotes: ['error', 'single', { 'avoidEscape': true }],
    'no-new-wrappers': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-explicit-any': 'off',
  }
}
