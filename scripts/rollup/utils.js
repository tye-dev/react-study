import path from 'path';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';

const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules/');
// 打包路径和源文件路径解析
export function resolvePkgPath(packageName, isDist) {
	if (isDist) {
		return `${distPath}/${packageName}`;
	}
	return `${pkgPath}/${packageName}`;
}
// 解析包路径下的package.json
export function getPackageJson(packageName) {
	// packages包路径
	const basePath = `${resolvePkgPath(packageName)}/package.json`;
	const config = fs.readFileSync(basePath, { encoding: 'utf-8' });
	return JSON.parse(config);
}

export function getBaseRollupPlugins({ typescript = {} } = {}) {
	return [cjs(), ts(typescript)];
}
