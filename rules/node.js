module.exports = {
	env: {
		node: true
	},

	rules: {
		'callback-return': ['error', ['callback', 'cb', 'next']],
		'global-require': 'error',
		'handle-callback-err': ['error', '^err(or)?$'],
		'no-mixed-requires': ['off', false],
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'no-process-env': 'error',
		'no-process-exit': 'off',
		'no-restricted-modules': 'off',
		'no-sync': 'off',
	}
};