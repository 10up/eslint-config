module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	plugins: ['jsdoc', 'prettier'],
	extends: [
		'airbnb-base',
		require.resolve('./rules/whitespace'),
		require.resolve('./rules/prettier'),
		require.resolve('./rules/jsdoc'),
		'prettier',
		'plugin:prettier/recommended',
	],
	rules: {
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
	},
};
