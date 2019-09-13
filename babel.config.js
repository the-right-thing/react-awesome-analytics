module.exports = {
    presets: ['@babel/react', '@babel/env'],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        'emotion',
    ],
    comments: false,
};