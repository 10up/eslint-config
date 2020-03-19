module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	plugins: ['jsdoc', 'prettier'],
	extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': [
			2,
			{
				useTabs: true,
				tabWidth: 4,
				printWidth: 100,
				singleQuote: true,
				trailingComma: 'all',
				bracketSpacing: true,
				parenSpacing: false,
				jsxBracketSameLine: true,
				semi: true,
				arrowParens: 'always',
			},
			{
				usePrettierrc: false,
			},
		],
		'class-methods-use-this': 0,
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message:
					'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message:
					'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		], // allowing ForOf.
		'no-tabs': 0,
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'jsdoc/check-alignment': 1,
		'jsdoc/check-examples': 1,
		'jsdoc/check-indentation': 1,
		'jsdoc/check-param-names': 1,
		'jsdoc/check-tag-names': 1,
		'jsdoc/check-types': 1,
		'jsdoc/newline-after-description': 1,
		'jsdoc/no-undefined-types': 1,
		'jsdoc/require-description': 1,
		'jsdoc/require-jsdoc': [
			0,
			{
				publicOnly: true,
				exemptEmptyFunctions: true,
			},
		], // disabling for now because eslint --fix is adding empty jsdoc blocks.
		'jsdoc/require-param': 1,
		'jsdoc/require-param-description': 1,
		'jsdoc/require-param-name': 1,
		'jsdoc/require-param-type': 1,
		'jsdoc/require-returns': 1,
		'jsdoc/require-returns-check': 1,
		'jsdoc/require-returns-type': 1,
		'jsdoc/valid-types': 1,
	},
};
