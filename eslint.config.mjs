import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		ignores: ['dist/**', 'node_modules/**', '.husky']
	}
	// {
	// 	extends: [
	// 		'eslint:recommended',
	// 		'plugin:@typescript-eslint/recommended',
	// 		'prettier',
	// 		'plugin:prettier/recommended'
	// 	],
	// 	parser: '@typescript-eslint/parser',
	// 	parserOptions: {
	// 		ecmaVersion: 'latest',
	// 		sourceType: 'module'
	// 	},
	// 	plugins: ['@typescript-eslint', 'prettier'],
	// 	rules: {
	// 		'prettier/prettier': 'error',
	// 		'no-case-declarations': 'off',
	// 		'no-constant-condition': 'off',
	// 		'@typescript-eslint/ban-ts-comment': 'off'
	// 	}
	// }
];
