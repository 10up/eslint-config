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
		'react/jsx-filename-extension': 0, // no need to enforce .jsx extension
	},
};
