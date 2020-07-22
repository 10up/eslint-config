module.exports = {
	parser: 'babel-eslint',
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
		'no-new': 1,
		// no-plus-plus--
		'no-plus-plus': 0,
		// Disable prefer-destructing for arrays as it can lead to weird and confusing syntax
		'prefer-destructuring': [2, { array: false, object: true }],
		// this rule is good bt annoying
		'import/prefer-default-export': 0,
		// an import is valid as long as it's a dependency somewhere,
		// it's up to developer make sure dev dependencies aren't used in the production bundle
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: true, optionalDependencies: true, peerDependencies: true },
		],
		// with ES6 the name of the function can be inferred most of the times.
		'func-names': [0, 'as-needed'],
		// this is hard to follow when the backend does not follow camelcase conventions when sending data.
		camelcase: 0,
	},
};
