# Nested or Nothing

A utility function that helps you find deeply nested values in your objects when you don't know for sure if they are present. If any intermediate key is missing, the function returns `undefined`.

## Installing

Install it with NPM as usual:

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

Since the function uses strings for keys, your code may break when using static code minifiers like Google Closure Compiler in advanced mode. It is recommended to use other patterns in the browser, such as:

```js
(((object.a || {}).b || {}).c || {});
// same as:
non(object, 'a', 'b', 'c');
```
