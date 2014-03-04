# Nested or Nothing

A utility function that helps you find deeply nested values in your objects when you don't know for sure if they are present. If any intermediate key is missing, the function returns `undefined`.

## Installation

```shell
npm install nested-or-nothing
```

## Usage

```js
var non = require('nested-or-nothing');

var object = {
  a: {
    b: {
      c: 1
    }
  }
};

non(object, 'a', 'b');      // returns {c: 1}
non(object, 'a', 'b', 'c'); // returns 1

non(object, 'a', 'd', 'c'); // returns undefined
```

## Caution

Since the function uses strings for keys, your code may break when using static code optimizers like Google Closure Compiler in advanced mode. In such cases it is recommended to use safer patterns:

```js
((object.a || {}).b || {}).c;
// same as:
non(object, 'a', 'b', 'c');
```
