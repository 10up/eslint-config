module.exports = {
	extends: ['./react', 'plugin:@wordpress/eslint-plugin/custom'],
	globals: {
		window: true,
		document: true,
		wp: 'readonly',
	},
};
