import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';

export default [
    {
        input: 'src/index.ts',
        output: {
            name: 'index',
            file: pkg.browser,
            format: 'umd'
        },
        plugins: [
            babel({
                exclude: 'node_modules/**'
            }),
            resolve(),
            commonjs(),
            typescript()
        ]
    },
    {
        input: 'src/index.ts',
        plugins: [
            babel({
                exclude: 'node_modules/**'
            }),
            resolve(),
            typescript()
        ],
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ]
    }
];