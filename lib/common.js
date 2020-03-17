module.exports = {
	env: {
		browser: true,
		es6: true,
	},
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
		indent: [2, 'tab', { SwitchCase: 1 }], // 10up historically prefers tabs over spaces.
	},
};
