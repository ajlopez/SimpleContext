# SimpleContext

Associate arbitrary data with a context (a simple plain JavaScript object).

## Installation

Via npm on Node:

```
npm install simplecontext
```


## Usage

Reference in your program:

```js
var sc = require('simplecontext');
```

Create an space to store the data and contexts:
```js
var space = sc.createSpace();
```

Add an item to a context:
```js
space.assert('John', { country: 'UK' });
space.assert('Mary', { country: 'UK' });
space.assert('Ann', { country: 'UK', category: 'Beverages' });
```
A context is a simple JavaScript object, like `{ country: 'UK' }` or `{ country: 'UK', category: 'Dairy' }`.
Internally, `{ country: 'UK', category: 'Dairy' }` and `{ category: 'Dairy', country: 'UK' }` are the
same context.

Retrieve the items associated to a context:
```js
var result = space.retrieve({ country: 'UK' }); // [ 'John', 'Mary' ]
var result = space.retrieve({ country: 'Japan' }); // [ ]
var result = space.retrieve({ country: 'UK', category: 'Beverages' }); // [ 'John', 'Mary', 'Ann' ]
```
Notice the use of inheritance in the last retrieve.

Retract an item from a context:
```js
space.retract('John', { country: 'UK' });
```

Remove a context:
```js
space.remove({ category: 'Beverages', country: 'UK' });
```

## Development

```
git clone git://github.com/ajlopez/SimpleContext.git
cd SimpleContext
npm install
npm test
```

## Samples

TBD

## References

TBD

## Contribution

Feel free to [file issues](https://github.com/ajlopez/SimpleContext) and submit
[pull requests](https://github.com/ajlopez/SimpleContext/pulls) — contributions are
welcome<

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.

