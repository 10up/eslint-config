module.exports = {
	env: {
		node: true,
		es6: true,
	},
	extends: './index',
	rules: {
		'no-path-concat': ['error'],
		'no-process-exit': ['error'],
		'global-require': ['error'],
		'no-new-require': ['error'],
	},
};
