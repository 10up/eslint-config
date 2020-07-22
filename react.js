module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'./index',
		'prettier',
		'prettier/react',
		'plugin:prettier/recommended',
	],
	rules: {
		'react/jsx-filename-extension': 0,
		// prop spreading is dangerous but has its use cases
		'jsx-props-no-spreading': 1,
	},
};
