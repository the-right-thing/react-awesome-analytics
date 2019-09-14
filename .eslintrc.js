module.exports = {
    root: true,
    extends: ['airbnb', 'prettier', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript', 'prettier/react'],
    parser: '@typescript-eslint/parser',
    parserOptions:  {
        sourceType:  'module',  // Allows for the use of imports
    },
    settings:  {
        react:  {
            version:  'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    plugins: ['prettier', 'react-hooks', 'tangerine'],
    rules: {
        // http://eslint.org/docs/rules/no-duplicate-imports
        // handled by import/no-duplicate rule
        'no-duplicate-imports': 'off',
        // Superfluous because of the tangerine import order rule
        'import/order': 'off',
        // Superfluous because of the tangerine import order rule
        'import/first': 'off',

        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tx", ".tsx"] }],

        // just annoying
        '@typescript-eslint/explicit-function-return-type': 'off',

        // https://github.com/prettier/eslint-plugin-prettier
        // enforce code formatting according to prettier
        'prettier/prettier': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
        // Ensure named imports correspond to named exports in the remote file
        'import/named': 'error',

        // enforce default import names
        'tangerine/import/default-import-names': [
            'error',
            [
                { source: 'react', name: 'React' },
                { source: 'prop-types', name: 'PropTypes' },
            ],
        ],

        // enforce defined order of imports
        'tangerine/import/order': ['error', {
            moduleImports: [
                [
                    /^react$/,

                    // test libraries
                    /^sinon$/,
                    /^enzyme$/,
                    /^@storybook/,

                    // "view" libraries
                    /^prop-types$/,
                    /^react/,
                    /^styled-components$/,
                    /^@atlaskit/,

                    // "state" libraries
                    /^redux/,
                    /^rxjs$/,
                    /^reselect$/,
                    /^icepick$/,

                    /^lodash/,

                    // catch all, otherwise would fall into a seperate group
                    /./,
                ],
            ],

            absoluteImports: [[/^common\//]],

            relativeImports: [/^common$/, /^(?!index)/, /^index/],

            simpleFormattingCount: 3,
        }],
    }
};
