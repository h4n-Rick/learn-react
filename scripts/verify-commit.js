import { readFileSync } from "node:fs";
import path from "node:path";
import pico from "picocolors";

const msgPath = path.resolve(".git/COMMIT_EDITMSG");
const msg = readFileSync(msgPath, "utf-8").trim();

// feat: 表示这是一个新功能的添加（Feature）
// fix: 表示这是一个对现有代码的修复（Fix）
// docs: 表示这是一个文档的更新（Documentation）
// dx: 通常用来表示对开发者体验（Developer Experience）的改进
// style: 表示这是一个不影响代码逻辑的代码风格更新，比如空格、缩进等（Style）
// refactor: 表示这是一个对现有代码的重构，不添加新功能也不修复bug（Refactor）
// perf: 表示这是一个对性能的优化（Performance）
// test: 表示这是一个测试代码的添加或更新（Test）
// workflow: 表示这是一个对工作流程的改进，比如CI/CD流程（Workflow）
// build: 表示这是一个对构建系统或依赖项的更新（Build）
// ci: 表示这是一个对持续集成配置的更新（Continuous Integration）
// chore: 表示这是一个对构建过程或辅助工具的更新，不直接影响代码逻辑（Chores）
// types: 表示这是一个对类型定义的更新，特别是在使用TypeScript等语言时（Types）
// wip: 表示这是一个正在进行中（Work In Progress）的提交，通常用于提醒这不是一个完成的提交
// release: 表示这是一个发布版本（Release）

const commitRE =
	/^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
	console.log();
	console.error(
		`  ${pico.white(pico.bgRed(" ERROR "))} ${pico.red(
			`invalid commit message format.`,
		)}\n\n` +
			pico.red(
				`  Proper commit message format is required for automated changelog generation. Examples:\n\n`,
			) +
			`    ${pico.green(`feat(evm): 实现了 evm 某某功能`)}\n` +
			`    ${pico.green(`fix(bug): 修复了某一 bug`)}\n\n` +
			pico.red(`  See README.md for more details.\n`),
	);
	process.exit(1);
}
