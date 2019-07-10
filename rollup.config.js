import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import { terser } from "rollup-plugin-terser";

export default {
  plugins: [
    svelte(),
    resolve(),
    commonjs()
    //, terser()
  ],
  input: ["src/index.js"],
  output: {
    sourcemap: true,
    format: "cjs",
    name: "acssemble",
    file: "dist/index.js"
  }
};
