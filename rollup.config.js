import { rollup } from "rollup";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
 
export default {
  input: "index.absolute.js",
  plugins: [
    nodeResolve(),
    terser({ compress: { passes: 10 }, ecma: 2015, format: {ecma: 2015, comments: false, indent_level: 0} })
  ],
  output: {
    file: 'index.mjs',
    name: 'preact',
    format: 'es'
  }
};
