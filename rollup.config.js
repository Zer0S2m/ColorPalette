import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';


export default {
	input: ['./src/js/app.js'],
	plugins: [
		babel ({
			exclude: 'node_modules/**',
			presets: ['@babel/preset-env'],
			babelHelpers: 'bundled'
		}),
		terser()
	],
	output: {
		file: './app/js/app.js',
		format: 'cjs'
	}
}
