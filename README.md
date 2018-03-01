# workshop-functional-js-2

Workshop (number 2) to learn basic functional programming in JavaScript.

## Commands

### Installation

Please install dependencies first.

	npm install

### Tests & lint

To launch the tests.

	npm test

To lint sources.

	npm run lint

### Start

To start program.

	npm start

### Exercise 1

Implement the function +partition(collection, predicate)+ in file **_src/exercise1.js_** where the first input is an array, the second a function predicate to split values into two arrays.

You don't understand what you need to do ?

Don't stress tests are written in file **_test/exercise1.test.js_** to explain the behaviour of the function.

To implement the function, you should do in a functional way WITHOUT using Lodash.

All tests should pass with success.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 1"

### Exercise 2

The function +reverseYolo(input)+ in file **_src/exercise2.js_** has been implemented by an another developper and the test is present in **_test/exercise2.js_**, but he forgot to commit the input to pass the test ...

Could you guess the input "whereIsMyMind" please ? Becareful only this input should change.

The test should pass with success.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 2"

### Exercise 3

Implement the function +injectStar(input)+ in file **_src/exercise3.js_** where the input is a string, the output the same string but with * when a pair is found.

You don't understand what you need to do ?

All tests are written in file **_test/exercise3.test.js_** and they should pass with success.

To implement the function, you should do in a RECURSIVE WAY.

:point_right: [split](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split) could help you.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 3"

### Exercise 4

Implement the function +asyncYolo()+ in file **_src/exercise4.js_**, the output is always the same, input is not required.

The difficulty is to use the promises defined before to return the result.

All tests are written in file **_test/exercise4.test.js_** and they should pass with success.

After finish this exercise, please commit all your files.

	git add .

	git commit -m "Exercise 4"