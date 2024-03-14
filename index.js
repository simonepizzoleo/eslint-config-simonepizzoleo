/*

    This ESLint configuration takes advantage
    of all the rules coming from the default
    ESLint, and some rules coming from the
    plugin suggested from ESLint's website,
    Stylistic, which can be included and
    installed in the project via "npm".

    Required dependencies to install in order
    for this ESLint file to work properly are:

    [1] eslint
    [2] @stylistic/eslint-plugin

*/

module.exports = {

    "extends": ["eslint:recommended"],

    // Environments in which
    // we are operating
    "env": {

        "browser": true,
        "es6": true

    },

    // Plugins to use
    "plugins": ["@stylistic"],

    // Options for the parser
    "parserOptions": {

        // Use the "modules" architecture
        "sourceType": "module",

        // Use the latest ES version
        "ecmaVersion": "latest"
        
    },

    // Rules
    "rules": {





        /*

            Rules to prevent possible common
            issues while writing the actual code

        */
        
        // Prevent variables to be
        // accessed before being defined
        "no-use-before-define": ["error", { "functions": false }],

        // Force the presence of a "return"
        // while using callback functions
        "array-callback-return": "error",

        // Prevent duplicated imports
        // to appear twice in the code
        "no-duplicate-imports": "error",

        // Prevent variables to be
        // checked against themselves
        "no-self-assign": "error",

        // Disallow loop conditions within
        // which the iterator doesn't update
        "no-unmodified-loop-condition": "error",

        // Enforce the use of semi-colons
        // at the end of each statement
        "@stylistic/semi": "error",

        // Enforce the semi-colons to be
        // written at the end of each line
        "@stylistic/semi-style": ["error", "last"],

        // Enforce the statements to be
        // separated via a line break
        "@stylistic/semi-spacing": ["error", {

            "before": false,
            "after": true

        }],

        // Prevent the writing of more than one
        // semi-colon at the end of statements
        "@stylistic/no-extra-semi": "error",

        // Enforce the use of consistent spacing
        // before and after an arrow function
        "@stylistic/arrow-spacing": ["error", {

            "before": true,
            "after": true

        }],

        // Enforce the use of a space
        // after writing a comma
        "@stylistic/comma-spacing": ["error", { "after": true }],

        // Prevent a space to be inserted
        // before parenthesis of functions
        "@stylistic/function-call-spacing": ["error", "never"],

        "@stylistic/lines-around-comment": ["error", {

            "beforeBlockComment": true,
            "beforeLineComment": true,

            "allowBlockStart": false,
            "allowClassStart": false,
            "allowObjectStart": false,
            "allowArrayStart": false

        }],

        // Ensure consisteng spacing
        // between all the comments
        "@stylistic/spaced-comment": ["error", "always"],

        // Prevent the use of trailing commas
        "@stylistic/comma-dangle": ["error", "never"],

        // Prevent the writing of
        // confusing arrow functions
        "@stylistic/no-confusing-arrow": ["error", {

            "allowParens": true,
            "onlyOneSimpleParam": true

        }],

        // Prevent multi-spaces to be written
        "@stylistic/no-multi-spaces": ["error", { "ignoreEOLComments": true }],
        "@stylistic/eol-last": ["error", "never"],

        // Define what quotes should
        // be used as a default option
        "@stylistic/quotes": ["error", "single", {
            
            "avoidEscape": true,
            "allowTemplateLiterals": true

        }],





        /*

            Rules and suggestions used while
            declaring variables, using statements,
            conditions and expressions in general

        */

        // Enforce the use of "===" and "!=="
        "eqeqeq": "error",

        // Enforce the function names to match
        // the variable name which contains them
        "func-name-matching": "error",

        // Enforce the use of basilar
        // function declarations
        "func-style": ["error", "declaration"],

        // Disallow leaving blocks with
        // no code inside themselves
        "no-empty-function": "error",
        "no-empty": "error",

        // Disallow the use of some
        // generic variable names
        "id-blacklist": ["error", "data", "getData", "err", "e", "cb"],

        // Enforce developers to initialize
        // all declared variables
        "init-declarations": ["error", "always"],

        // Prevent the code from
        // becoming too deep
        "max-depth": ["error", { "max": 4 }],
        "max-nested-callbacks": ["error", { "max": 3 }],

        // Prevent the functions from
        // accepting too many parameters
        "max-params": ["error", { "max": 3 }],

        // Enforce a specific commenting style
        "multiline-comment-style": ["error", "separate-lines"],

        // Prevent an "else" condition to
        // immediately follow an "if" one
        // containing a "return" statement
        "no-else-return": "error",

        // Disallow inline comments on the
        // same row of declared expressions
        "no-inline-comments": "error",

        // Disallow the use of "this"
        // whenever it might be undefined
        "no-invalid-this": "error",

        // Disallow the use of labels which
        // share the same name as variables
        "no-label-var": "error",

        // Disallow lone blocks
        "no-lone-blocks": "error",

        // Disallow lonely "if" when they are the
        // only block inside an "else" condition
        "no-lonely-if": "error",

        // Disallow the use of "magic numbers"
        // which meaning may not be clear
        "no-magic-numbers": ["error", {

            "ignore": [0, 1, -1],
            "ignoreDefaultValues": true 
            
        }],

        // Disallow inizializing a string
        // on more than just one line
        "no-multi-str": "error",

        // Disallow negating variables in the
        // "if" condition when there is an "else"
        "no-negated-condition": "error",

        // Disallow multiple nested
        // ternary operations
        "no-nested-ternary": "error",

        // Disallow ternary operations
        // when simpler alternatives exist
        "no-unneeded-ternary": "error",

        // Disallow re-declaring variables
        "no-redeclare": "error",

        // Disallow using "throw" with
        // non-classes or primitive values
        "no-throw-literal": "error",

        // Prevent unused expressions
        // to be sent in production
        "no-unused-expressions": "error",

        // Prevent the writing of computed
        // keys when they are not necessary
        "no-useless-computed-key": "error",

        // Prevent useless string concatenations
        "no-useless-concat": "error",

        // Disallow renaming an import to
        // re-use its same original name
        "no-useless-rename": "error",

        // Disallow useless returns
        "no-useless-return": "error",

        // Disallow the use of "var"
        // to declare new variables
        "no-var": "error",

        // Report the variables which don't get
        // re-assigned which may become a constant
        "prefer-const": "error",

        // Prefer the use of destructuring
        // instead of a manual assignment
        "prefer-destructuring": "error",

        // Disallow declaring functions with the "async"
        // keyword if they don't contain an "await" statement
        "require-await": "error",

        // Disallow the "yoda" conditions
        "yoda": ["error"],





        /*

            Handle the layout and formatting
            of the code inside the codebase
        
        */

        "line-comment-position": ["error", { "position": "above" }],

        // Determine how much the
        // code should be indented
        "indent": ["error", 4],





        /*

            Rules disabled are stored
            all below this heading
            for convenience reasons

        */

        "no-unused-vars": "off"




        
    }

};