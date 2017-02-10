module.exports = {
	rules: {
		'array-bracket-spacing': ['error', 'never'],
		'brace-style': ['error', '1tbs', { allowSingleLine: false }],
		'camelcase': ['error', { properties: 'always' }],
		'capitalized-comments': ['error', 'always', {
			line: {
				ignorePattern: '.*',
				ignoreInlineComments: false,
				ignoreConsecutiveComments: true,
			},
			block: {
				ignorePattern: '.*',
				ignoreInlineComments: false,
				ignoreConsecutiveComments: true,
			},
		}],
		'comma-spacing': ['error', { before: false, after: true }],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': ['error', 'never'],
		'consistent-this': ['error', 'self'],
		'eol-last': ['error', 'always'],
		'func-call-spacing': ['error', 'never'],
		'func-name-matching': ['error', 'always'],
		'func-names': 'warn',
		'func-style': ['warn', 'expression'],
		'id-blacklist': ['error', 'data', 'err', 'callback'],
		'id-length': 'off',
		'id-match': 'off',
		'indent': ['error', 'tab'],
		'jsx-quotes': ['error', 'prefer-double'],
		'key-spacing': ['error', { beforeColon: false, afterColon: true }],
		'keyword-spacing': ['error', {
			before: true,
			after: true,
			overrides: {
				return: { after: true },
				throw: { after: true },
				case: { after: true }
			}
		}],
		'line-comment-position': ['off', {
			position: 'above',
			ignorePattern: '',
			applyDefaultPatterns: true,
		}],
		'linebreak-style': ['error', 'unix'],
		'lines-around-comment': 'off',
		'lines-around-directive': ['error', {
			before: 'always',
			after: 'always',
		}],
		'max-depth': ['error', 6],
		'max-len': ['error', 100, 4, {
			ignoreUrls: true,
			ignoreComments: false,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
		}],
		'max-lines': 'off',
		'max-nested-callbacks': 'off',
		'max-params': ['error', 3],
		'max-statements': ['off', 10],
		'max-statements-per-line': ['error', { max: 1 }],
		'multiline-ternary': ['off', 'never'],
		'new-cap': ['error', {
			newIsCap: true,
			newIsCapExceptions: [],
			capIsNew: false
		}],
		'new-parens': 'error',
		'newline-after-var': ['error', 'always'],
		'newline-before-return': 'error',
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-continue': 'error',
		'no-inline-comments': 'off',
		'no-lonely-if': 'error',
		'no-mixed-operators': ['error', {
			groups: [
				['+', '-', '*', '/', '%', '**'],
				['&', '|', '^', '~', '<<', '>>', '>>>'],
				['==', '!=', '===', '!==', '>', '>=', '<', '<='],
				['&&', '||'],
				['in', 'instanceof']
			],
			allowSamePrecedence: false
		}],
		'no-mixed-spaces-and-tabs': 'error',
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'off',
		'no-nested-ternary': 'off',
		'no-new-object': 'error',
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		'no-spaced-func': 'error',
		'no-ternary': 'off',
		'no-trailing-spaces': ['error', { skipBlankLines: true }],
		'no-unneeded-ternary': ['error', { defaultAssignment: false }],
		'no-whitespace-before-property': 'error',
		'object-curly-spacing': ['error', 'never'],
		'object-curly-newline': ['error', { multiline: true }],
		'object-property-newline': 'error',
		'one-var': ['error', 'always'],
		'one-var-declaration-per-line': ['error', 'always'],
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': 'off',
		'padded-blocks': ['error', 'never'],
		'quote-props': ['error', 'as-needed', {
			keywords: false,
			unnecessary: true,
			numbers: false
		}],
		'quotes': ['error', 'single', { avoidEscape: true }],
		'require-jsdoc': ['error', {
			'require': {
				'FunctionDeclaration': true,
				'MethodDefinition': true,
				'ClassDeclaration': true,
				'ArrowFunctionExpression': true
			}
		}],
		'semi': ['error', 'always'],
		'semi-spacing': ['error', {
			before: false,
			after: true
		}],
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': 'error',
		'space-before-function-paren': ['error', 'never'],
		'space-in-parens': ['error', 'always'],
		'space-infix-ops': 'error',
		'space-unary-ops': ['error', {
			words: true,
			nonwords: false,
		}],
		'spaced-comment': ['error', 'always', {
			line: {
				exceptions: ['-', '+'],
				markers: ['=', '!'],
			},
			block: {
				exceptions: ['-', '+'],
				markers: ['=', '!'],
				balanced: false,
			}
		}],
		'unicode-bom': ['error', 'never'],
		'wrap-regex': 'error'
	}
};
