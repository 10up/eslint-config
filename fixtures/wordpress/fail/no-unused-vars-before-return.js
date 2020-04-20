/* eslint-disable no-unused-vars */

function example(number) {
	// eslint-disable-next-line no-undef
	const foo = doSomeCostlyOperation();
	if (number > 10) {
		return number + 1;
	}

	return number + foo;
}
