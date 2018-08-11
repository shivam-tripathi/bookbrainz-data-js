/* eslint-disable import/unambiguous, import/no-commonjs, no-magic-numbers */
/* eslint-disable no-inline-comments */


const options = {
	env: {
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:flowtype/recommended',
		'plugin:import/recommended'
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			generators: true,
			modules: false
		},
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [
		'import',
		'flowtype',
		'babel'
	]
};


// Generally, don't change TRANSITION_* severities unless you're LordSputnik ;)
const ERROR = 2;
const TRANSITION_WARNING = 1; // warnings that should be reviewed soon
const WARNING = 1; // warnings that should stay warnings
const TRANSITION_IGNORE = 0; // ignores that should be reviewed soon

// These should not be removed at all.
const possibleErrorsRules = {
	'no-await-in-loop': ERROR,
	'no-console': ERROR,
	'no-extra-parens': [
		ERROR,
		'all',
		{
			enforceForArrowConditionals: false,
			ignoreJSX: 'multi-line',
			nestedBinaryExpressions: false,
			returnAssign: false
		}
	],
	'no-prototype-builtins': ERROR,
	'no-template-curly-in-string': ERROR,
	'valid-jsdoc': [
		ERROR,
		{
			prefer: {
				return: 'returns'
			},
			requireReturn: false
		}
	]
};

// These should probably not be removed at all.
const bestPracticesRules = {
	'accessor-pairs': ERROR,
	'array-callback-return': ERROR,
	'block-scoped-var': ERROR,
	'class-methods-use-this': TRANSITION_IGNORE,
	complexity: ERROR,
	'consistent-return': ERROR,
	curly: ERROR,
	'default-case': ERROR,
	'dot-location': [
		ERROR,
		'property'
	],
	'dot-notation': ERROR,
	eqeqeq: [
		ERROR,
		'allow-null'
	],
	'guard-for-in': ERROR,
	'no-alert': ERROR,
	'no-caller': ERROR,
	'no-div-regex': ERROR,
	'no-else-return': ERROR,
	'no-empty-function': ERROR,
	'no-eq-null': ERROR,
	'no-eval': ERROR,
	'no-extend-native': ERROR,
	'no-extra-bind': ERROR,
	'no-extra-label': ERROR,
	'no-floating-decimal': ERROR,
	'no-implicit-coercion': ERROR,
	'no-implicit-globals': ERROR,
	'no-implied-eval': ERROR,
	'no-iterator': ERROR,
	'no-labels': ERROR,
	'no-lone-blocks': ERROR,
	'no-loop-func': ERROR,
	'no-magic-numbers': [
		TRANSITION_IGNORE,
		{
			detectObjects: true,
			enforceConst: true,
			ignore: [
				0,
				1,
				2,
				3,
				10
			],
			ignoreArrayIndexes: true
		}
	],
	'no-multi-spaces': ERROR,
	'no-multi-str': ERROR,
	'no-new': ERROR,
	'no-new-func': ERROR,
	'no-new-wrappers': ERROR,
	'no-octal-escape': ERROR,
	'no-param-reassign': ERROR,
	'no-proto': ERROR,
	'no-return-assign': ERROR,
	'no-return-await': ERROR,
	'no-script-url': ERROR,
	'no-self-compare': ERROR,
	'no-sequences': ERROR,
	'no-throw-literal': ERROR,
	'no-unmodified-loop-condition': ERROR,
	'no-unused-expressions': TRANSITION_WARNING,
	'no-useless-call': ERROR,
	'no-useless-concat': ERROR,
	'no-useless-return': ERROR,
	'no-void': ERROR,
	'no-warning-comments': WARNING,
	'no-with': ERROR,
	'prefer-promise-reject-errors': ERROR,
	radix: ERROR,
	'require-await': ERROR,
	'vars-on-top': ERROR,
	'wrap-iife': [
		ERROR,
		'any'
	],
	yoda: ERROR
};

const strictModeRules = {
	strict: [
		ERROR,
		'global'
	]
};

const variablesRules = {
	'init-declarations': TRANSITION_IGNORE,
	'no-catch-shadow': ERROR,
	'no-label-var': ERROR,
	'no-shadow': ERROR,
	'no-shadow-restricted-names': ERROR,
	'no-undef-init': ERROR,
	'no-undefined': WARNING,
	'no-unused-vars': WARNING,
	'no-use-before-define': ERROR
};

const nodeAndCommonJSRules = {
	'callback-return': [
		ERROR,
		[
			'callback',
			'cb',
			'next',
			'done'
		]
	],
	'global-require': ERROR,
	'handle-callback-err': ERROR,
	'no-mixed-requires': ERROR,
	'no-new-require': ERROR,
	'no-path-concat': ERROR,
	'no-process-env': TRANSITION_WARNING,
	'no-process-exit': ERROR,
	'no-sync': ERROR
};

// Agreement of all project leads needed before changing these.
const stylisticIssuesRules = {
	'array-bracket-newline': [
		ERROR,
		'consistent'
	],
	'array-bracket-spacing': ERROR,
	'block-spacing': ERROR,
	'brace-style': [
		ERROR,
		'stroustrup',
		{
			allowSingleLine: true
		}
	],
	camelcase: [
		ERROR,
		{
			properties: 'always'
		}
	],
	'comma-dangle': ERROR,
	'comma-spacing': ERROR,
	'comma-style': ERROR,
	'computed-property-spacing': ERROR,
	'consistent-this': [
		ERROR,
		'self'
	],
	'eol-last': ERROR,
	'func-call-spacing': ERROR,
	'func-name-matching': ERROR,
	'func-names': ERROR,
	'func-style': [
		ERROR,
		'declaration'
	],
	'function-paren-newline': [
		TRANSITION_WARNING,
		'consistent'
	],
	'id-length': [
		ERROR,
		{
			exceptions: [
				'x',
				'i',
				'_',
				'$',
				'a',
				'b',
				'q'
			]
		}
	],
	indent: [
		ERROR,
		'tab',
		{
			SwitchCase: 1,
			VariableDeclarator: 1
		}
	],
	'jsx-quotes': [
		ERROR,
		'prefer-double'
	],
	'key-spacing': ERROR,
	'keyword-spacing': ERROR,
	'linebreak-style': ERROR,
	'lines-around-comment': [
		ERROR,
		{
			allowBlockStart: true,
			beforeBlockComment: true
		}
	],
	'lines-between-class-members': ERROR,
	'max-depth': [
		ERROR,
		6
	],
	'max-len': [
		ERROR,
		{
			code: 80,
			ignoreUrls: true,
			tabWidth: 4
		}
	],
	'max-lines': TRANSITION_IGNORE,
	'max-nested-callbacks': [
		ERROR,
		5
	],
	'max-params': [
		TRANSITION_IGNORE,
		4
	],
	'max-statements': [
		TRANSITION_IGNORE,
		15
	],
	'new-parens': ERROR,
	'no-array-constructor': ERROR,
	'no-bitwise': ERROR,
	'no-continue': ERROR,
	'no-inline-comments': ERROR,
	'no-lonely-if': ERROR,
	'no-mixed-spaces-and-tabs': [
		ERROR,
		'smart-tabs'
	],
	'no-multiple-empty-lines': ERROR,
	'no-nested-ternary': ERROR,
	'no-new-object': TRANSITION_IGNORE,
	'no-trailing-spaces': ERROR,
	'no-unneeded-ternary': ERROR,
	'no-whitespace-before-property': ERROR,
	'object-curly-newline': ERROR,
	'one-var': [
		ERROR,
		'never'
	],
	'operator-assignment': ERROR,
	'operator-linebreak': [
		ERROR,
		'after'
	],
	'padded-blocks': [
		ERROR,
		'never'
	],
	'prefer-object-spread': ERROR,
	'quote-props': [
		ERROR,
		'as-needed'
	],
	quotes: [
		ERROR,
		'single',
		'avoid-escape'
	],
	'require-jsdoc': TRANSITION_IGNORE,
	'semi-spacing': [
		ERROR,
		{
			after: true,
			before: false
		}
	],
	'sort-keys': ERROR,
	'sort-vars': ERROR,
	'space-before-blocks': ERROR,
	'space-before-function-paren': [
		ERROR,
		{
			named: 'never'
		}
	],
	'space-in-parens': ERROR,
	'space-infix-ops': ERROR,
	'space-unary-ops': ERROR,
	'spaced-comment': ERROR,
	'unicode-bom': ERROR,
	'wrap-regex': ERROR
};

const ecmaScript6Rules = {
	'arrow-body-style': ERROR,
	'arrow-spacing': ERROR,
	'generator-star-spacing': [
		ERROR,
		{
			after: true,
			before: false
		}
	],
	'no-confusing-arrow': [
		ERROR,
		{
			allowParens: true
		}
	],
	'no-duplicate-imports': ERROR,
	'no-useless-computed-key': ERROR,
	'no-useless-constructor': ERROR,
	'no-useless-rename': ERROR,
	'no-var': ERROR,
	'object-shorthand': ERROR,
	'prefer-arrow-callback': ERROR,
	'prefer-const': WARNING,
	'prefer-destructuring': [
		ERROR,
		{
			array: false,
			object: true
		}
	],
	'prefer-numeric-literals': ERROR,
	'prefer-template': ERROR,
	'rest-spread-spacing': ERROR,
	'sort-imports': ERROR,
	'template-curly-spacing': ERROR,
	'yield-star-spacing': ERROR
};

const babelRules = {
	'babel/new-cap': [
		ERROR,
		{
			capIsNew: false
		}
	],
	'babel/no-invalid-this': ERROR,
	'babel/object-curly-spacing': ERROR,
	'babel/semi': ERROR
};

const flowTypeRules = {
	'flowtype/semi': ERROR
};

/* eslint-disable-next-line no-unused-vars */
const reactRules = {
	'react/boolean-prop-naming': ERROR,
	'react/button-has-type': ERROR,
	'react/default-props-match-prop-types': ERROR,
	'react/forbid-component-props': TRANSITION_IGNORE,
	'react/forbid-foreign-prop-types': ERROR,
	'react/jsx-boolean-value': ERROR,
	'react/jsx-closing-bracket-location': [
		ERROR,
		'tag-aligned'
	],
	'react/jsx-closing-tag-location': ERROR,
	'react/jsx-curly-brace-presence': ERROR,
	'react/jsx-curly-spacing': [
		ERROR,
		{
			children: true
		}
	],
	'react/jsx-equals-spacing': ERROR,
	'react/jsx-first-prop-new-line': ERROR,
	'react/jsx-handler-names': ERROR,
	'react/jsx-indent-props': [
		ERROR,
		'tab'
	],
	'react/jsx-no-bind': [
		ERROR,
		{
			ignoreRefs: true
		}
	],
	'react/jsx-no-literals': TRANSITION_IGNORE,
	'react/jsx-one-expression-per-line': TRANSITION_IGNORE,
	'react/jsx-pascal-case': ERROR,
	'react/jsx-sort-props': [
		ERROR,
		{
			callbacksLast: true,
			ignoreCase: false,
			shorthandFirst: true
		}
	],
	'react/jsx-tag-spacing': [
		ERROR,
		{
			beforeSelfClosing: 'never'
		}
	],
	'react/jsx-wrap-multilines': ERROR,
	'react/no-access-state-in-setstate': ERROR,
	'react/no-array-index-key': TRANSITION_WARNING,
	'react/no-danger': TRANSITION_WARNING,
	'react/no-did-mount-set-state': ERROR,
	'react/no-did-update-set-state': ERROR,
	'react/no-direct-mutation-state': ERROR,
	'react/no-multi-comp': [
		ERROR,
		{
			ignoreStateless: true
		}
	],
	'react/no-redundant-should-component-update': ERROR,
	'react/no-set-state': TRANSITION_IGNORE,
	'react/no-typos': ERROR,
	'react/no-unused-prop-types': ERROR,
	'react/no-unused-state': TRANSITION_WARNING,
	'react/no-will-update-set-state': ERROR,
	'react/prefer-es6-class': [
		ERROR,
		'always'
	],
	'react/prefer-stateless-function': ERROR,
	'react/require-default-props': [
		ERROR,
		{
			forbidDefaultForRequired: true
		}
	],
	'react/self-closing-comp': ERROR,
	'react/sort-comp': ERROR,
	'react/sort-prop-types': [
		ERROR,
		{
			callbacksLast: false,
			ignoreCase: false,
			requiredFirst: false,
			sortShapeProp: true
		}
	],
	'react/style-prop-object': ERROR,
	'react/void-dom-elements-no-children': ERROR
};

const es6ImportRules = {
	'import/first': ERROR,
	'import/newline-after-import': [
		ERROR,
		{
			count: 2
		}
	],
	'import/no-absolute-path': ERROR,
	'import/no-amd': ERROR,
	'import/no-commonjs': ERROR,
	'import/no-duplicates': ERROR,
	'import/no-dynamic-require': TRANSITION_WARNING,
	'import/no-extraneous-dependencies': ERROR,
	'import/no-internal-modules': [
		ERROR,
		{
			allow: [
				'**/src/**',
				'**/lib/**',
				'**/data/**',
				'**/config/**',
				'**/test/**',
				'react-dom/server'
			]
		}
	],
	'import/no-mutable-exports': ERROR,
	'import/no-named-as-default': ERROR,
	'import/no-named-as-default-member': ERROR,
	'import/no-named-default': ERROR,
	'import/no-unassigned-import': ERROR
};

/* eslint-disable-next-line prefer-object-spread */
options.rules = Object.assign(
	{},
	possibleErrorsRules,
	bestPracticesRules,
	strictModeRules,
	variablesRules,
	nodeAndCommonJSRules,
	stylisticIssuesRules,
	ecmaScript6Rules,
	babelRules,
	flowTypeRules,
	es6ImportRules
);


module.exports = options;
