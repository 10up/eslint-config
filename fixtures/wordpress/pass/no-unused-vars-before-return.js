/* eslint-disable no-unused-vars */

function example(number) {
	if (number > 10) {
		return number + 1;
	}

	// eslint-disable-next-line no-undef
	const foo = doSomeCostlyOperation();
	return number + foo;
}
