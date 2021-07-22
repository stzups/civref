import {nodeResolve} from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import {terser} from "rollup-plugin-terser";

export default {
    input: 'src/index.tsx',
    output: {
        file: 'build/index.js',
        format: 'esnext'
    },
    plugins: [
        nodeResolve(),
        typescript(),
        terser()
    ]
}