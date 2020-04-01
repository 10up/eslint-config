module.exports = {
	extends: ['plugin:@wordpress/eslint-plugin/custom', './react'],
	globals: {
		window: true,
		document: true,
		wp: 'readonly',
	},
	rules: {
		'react/react-in-jsx-scope': 0,
		'import/no-unresolved': [2, { ignore: ['^@wordpress/'] }],
	},
};
