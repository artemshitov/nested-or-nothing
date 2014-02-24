# Nested or nothing

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
