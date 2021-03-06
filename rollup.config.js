import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";

const plugins = [
    babel({
        exclude: "node_modules/**",
        presets: [
            ["@babel/env", { modules: false }]
        ]
    }),
    uglify()
];

export default [{
    input: "./index.js",
    output: {
        name: "Kookie",
        file: "dist/kookie.min.js",
        format: "iife",
    },
    plugins,
}];