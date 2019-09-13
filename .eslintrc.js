module.exports = {
    root: true,
    extends: ['airbnb-base', 'prettier', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
    parser: '@typescript-eslint/parser',
    parserOptions:  {
        sourceType:  'module',  // Allows for the use of imports
    },
    plugins: ['prettier'],
    rules: {
        // http://eslint.org/docs/rules/no-duplicate-imports
        // handled by import/no-duplicate rule
        'no-duplicate-imports': 'off',
        // Superfluous because of the tangerine import order rule
        'import/order': 'off',
        // Superfluous because of the tangerine import order rule
        'import/first': 'off',

        // https://github.com/prettier/eslint-plugin-prettier
        // enforce code formatting according to prettier
        'prettier/prettier': 'error',

        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
        // Ensure named imports correspond to named exports in the remote file
        'import/named': 'error',
    }
};
