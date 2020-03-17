module.exports = {
	extends: [
		'./react',
		'plugin:@wordpress/eslint-plugin/custom',
		'prettier',
		'prettier/react',
		'plugin:prettier/recommended',
	],
	globals: {
		window: true,
		document: true,
		wp: 'readonly',
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
	},
};
