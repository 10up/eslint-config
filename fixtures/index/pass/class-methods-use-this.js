class A {
	constructor() {
		this.a = 'hi';
	}

	print() {
		console.log(this.a); // eslint-disable-line no-console
	}

	sayHi() {
		console.log('hi'); // eslint-disable-line no-console
	}
}

export default A;
