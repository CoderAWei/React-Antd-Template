module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	parser: '@typescript-eslint/parser', // 解析器
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'airbnb',
		'airbnb/hooks'
	], // 扩展
	plugins: ['react-hooks', 'react', '@typescript-eslint'], // 插件
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		NodeJS: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		jsxPragma: 'React',
		ecmaFeatures: {
			jsx: true
		}
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
				moduleDirectory: ['node_modules', 'src/']
			}
		},
		'import/extensions': 0
	},
	rules: {
		'linebreak-style': 0,
		'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.ts', '.jsx', '.js'] }],
		'react/jsx-uses-react': 2,
		'import/extensions': 'off',
		'react/jsx-indent': ['warn', 'tab'],
		'react/jsx-indent-props': ['warn', 'tab'],

		// eslint (http://eslint.cn/docs/rules)
		'no-var': 'error', // 要求使用 let 或 const 而不是 var
		'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
		'no-use-before-define': 'off', // 禁止在 函数/类/变量 定义之前使用它们
		'prefer-const': 'off', // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
		'no-irregular-whitespace': 'off', // 禁止不规则的空白
		'space-infix-ops': ['warn', { int32Hint: false }],
		indent: ['warn', 'tab'], // 缩进为4个
		semi: ['warn', 'never'], // 禁止分号
		eqeqeq: 'error', // 必须用=== 和 !==
		'no-else-return': 'error', // 禁止 if 语句中有 return 之后有 else
		'keyword-spacing': 'warn', // 强制在关键字前后使用一致的空格
		'object-curly-spacing': ['warn', 'always'], // 强制在大括号中前后都有空格
		'comma-dangle': ['warn', 'never'], // 禁止在行尾加逗号
		'no-debugger': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'no-trailing-spaces': 'warn', // 禁止行尾空格
		'block-spacing': 'warn',
		'no-tabs': 'off',
		'no-unused-expressions': ['off', { allowShortCircuit: true, allowTernary: true }], // 允许三元表达式和短路运算
		'no-param-reassign': ['off', { props: false }], // 允许给函数参数重新赋值
		'import/no-unresolved': 'off',
		'max-len': 'off',
		'global-require': 'off',
		'jsx-a11y/click-events-have-key-events': 'off', // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/f0d2ddb65f21278ad29be43fb167a1092287b4b1/docs/rules/click-events-have-key-events.md
		'jsx-a11y/no-static-element-interactions': 'off', // 不需要给节点添加role https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/f0d2ddb65f21278ad29be43fb167a1092287b4b1/docs/rules/no-static-element-interactions.md
		'no-shadow': 'off', // 取消函数参数与其他变量同名的规则
		'react/function-component-definition': 'off',
		'jsx-a11y/img-redundant-alt': 'off',
		'import/no-extraneous-dependencies': 'off',
		'react/no-unstable-nested-components': 'off',
		'no-console': 'off',
		'import/prefer-default-export': 'off',
		'implicit-arrow-linebreak': 'off',
		'no-unused-vars': 'off',
		'react/destructuring-assignment': 'off', // 必须使用解构
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'react/prop-types': 'off',
		'react/jsx-props-no-spreading': 'off',
		'no-undef': 'off',

		// typeScript (https://typescript-eslint.io/rules)
		'@typescript-eslint/no-unused-vars': 'warn', // 禁止定义未使用的变量
		'@typescript-eslint/no-inferrable-types': 'off', // 可以轻松推断的显式类型可能会增加不必要的冗长
		'@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
		'@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
		'@typescript-eslint/ban-ts-ignore': 'off', // 禁止使用 @ts-ignore
		'@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
		'@typescript-eslint/explicit-function-return-type': 'off', // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
		'@typescript-eslint/no-var-requires': 'off', // 不允许在 import 语句中使用 require 语句
		'@typescript-eslint/no-empty-function': 'off', // 禁止空函数
		'@typescript-eslint/no-use-before-define': 'off', // 禁止在变量定义之前使用它们
		'@typescript-eslint/ban-ts-comment': 'off', // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
		'@typescript-eslint/no-non-null-assertion': 'off', // 不允许使用后缀运算符的非空断言(!)
		'@typescript-eslint/explicit-module-boundary-types': 'off', // 要求导出函数和类的公共类方法的显式返回和参数类型

		// react (https://github.com/jsx-eslint/eslint-plugin-react)
		'react-hooks/rules-of-hooks': 'off',
		'react-hooks/exhaustive-deps': 'off'
	}
}
