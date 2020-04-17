const getConfigFile = () => {
	const configArgs = process.argv.filter((arg) => arg.includes('--config-file'));

	if (!configArgs || configArgs.length < 1) {
		return './index';
	}

	return configArgs[0].replace('--config-file=', '');
};

const countResults = (results) =>
	results.reduce(
		(counts, file) => ({
			errors: counts.errors + file.errorCount,
			warnings: counts.warnings + file.warningCount,
			files: counts.files + 1,
		}),
		{
			errors: 0,
			warnings: 0,
			files: 0,
		},
	);

module.exports = {
	getConfigFile,
	countResults,
};
