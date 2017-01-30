module.exports = {
	rules: {
		'accessor-pairs': 'off',
		'block-scoped-var': 'error',
		'complexity': ['off', 11],
		'class-methods-use-this': 'error',
		'consistent-return': 'error',
		'curly': ['error', 'all'],
		'default-case': ['error', { commentPattern: '^no default$' }],
		'dot-notation': ['error', { allowKeywords: true }],
		'dot-location': ['error', 'property'],
		'eqeqeq': ['error', 'always'],
		'guard-for-in': 'off',
		'no-alert': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'error',
		'no-div-regex': 'error',
		'no-else-return': 'error',
		'no-empty-function': ['error', {
			allow: ['arrowFunctions', 'functions', 'methods']
		}],
		'no-empty-pattern': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-fallthrough': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': ['error', {exceptions: []}],
		'no-implicit-coercion': ['off', {
			boolean: true,
			number: true,
			string: true,
			allow: []
		}],
		'no-implicit-globals': 'off',
		'no-implied-eval': 'error',
		'no-invalid-this': 'off',
		'no-iterator': 'error',
		'no-labels': ['error', {
			allowLoop: false,
			allowSwitch: false
		}],
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': ['off', {
			ignore: [],
			ignoreArrayIndexes: true,
			enforceConst: true,
			detectObjects: false,
		}],
		'no-multi-str': 'error',
		'no-native-reassign': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': ['error', {
			props: true
		}],
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-restricted-properties': ['error', {
			object: 'arguments',
			property: 'callee',
			message: 'arguments.callee is deprecated',
		}, {
			property: '__defineGetter__',
			message: 'Please use Object.defineProperty instead.',
		}, {
			property: '__defineSetter__',
			message: 'Please use Object.defineProperty instead.',
		}, {
			object: 'Math',
			property: 'pow',
			message: 'Use the exponentiation operator (**) instead.',
		}],
		'no-return-assign': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': ['error', {
			allowShortCircuit: false,
			allowTernary: false
		}],
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-with': 'error',
		'radix': 'error',
		'require-await': 'off',
		'vars-on-top': 'error',
		'wrap-iife': ['error', 'any', {
			functionPrototypeMethods: false
		}],
		'yoda': ['error', 'always']
	}
};