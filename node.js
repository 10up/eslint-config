module.exports = {
	env: {
		node: true,
		es6: true,
	},
	extends: './index',
	rules: {
		'no-path-concat': 2,
		'no-process-exit': 2,
		'global-require': 2,
		'no-new-require': 2,
	},
};
