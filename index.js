module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	plugins: ['jsdoc'],
	extends: ['airbnb-base'],
	rules: {
		'func-style': 0, // disables for now, 7.1 needs more thinking.
		'class-methods-use-this': 0, // sometimes it makes sense to have instance methods not using this.
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		], // allowing ForOf.
		'no-tabs': 0,
		indent: ['error', 'tab', { SwitchCase: 1 }], // 10up historically prefers tabs over spaces.

		// jsdoc rules
		'jsdoc/check-alignment': 1,
		'jsdoc/check-examples': 1,
		'jsdoc/check-indentation': 1,
		'jsdoc/check-param-names': 1,
		'jsdoc/check-tag-names': 1,
		'jsdoc/check-types': 1,
		'jsdoc/match-description': 1,
		'jsdoc/newline-after-description': 1,
		'jsdoc/no-undefined-types': 1,
		'jsdoc/require-description': 1,
		'jsdoc/require-jsdoc': [
			1, {
				publicOnly: true,
				exemptEmptyFunctions: true,
				require: {
					ArrowFunctionExpression: true,
					ClassDeclaration: true,
					ClassExpression: true,
					FunctionDeclaration: true,
					FunctionExpression: true,
					MethodDefinition: true,
				}
			}
		],
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
