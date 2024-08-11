import { resolvePkgPath, getPackageJson, getBaseRollupPlugins } from './utils';
import generatePackageJson from 'rollup-plugin-generate-package-json';

const { name, module } = getPackageJson('react');
// react 包的路径
const inputPath = resolvePkgPath(name);
// react 包的输出路径
const outputPath = resolvePkgPath(name, true);
export default [
	// react
	{
		input: `${inputPath}/${module}`,
		output: {
			file: `${outputPath}/index.js`,
			format: 'umd',
			name: 'React'
		},
		plugins: [
			...getBaseRollupPlugins(),
			generatePackageJson({
				inputFolder: inputPath,
				outputFolder: outputPath,
				baseContents: ({ name, version, description }) => ({
					name,
					version,
					description,
					main: 'index.js'
				})
			})
		]
	},
	// jsx-runtime
	{
		input: `${inputPath}/src/jsx.ts`,
		output: [
			// jsx-runtime
			{
				file: `${outputPath}/jsx-runtime.js`,
				format: 'umd',
				name: 'jsx-runtime'
			},
			// jsx-dev-runtime
			{
				file: `${outputPath}/jsx-dev-runtime.js`,
				format: 'umd',
				name: 'jsx-dev-runtime'
			}
		],
		plugins: getBaseRollupPlugins()
	}
];
