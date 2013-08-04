
var simplecontext = require('..'),
    assert = require('assert');
    
var space = simplecontext.createSpace();

// assert and retrieve context

space.assert('foo', { country: 'UK' });
var result = space.retrieve({ country: 'UK' });
assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 1);
assert.equal(result[0], 'foo');

// assert another item and retrieve context

space.assert('bar', { country: 'UK' });
var result = space.retrieve({ country: 'UK' });
assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 2);
assert.equal(result[0], 'foo');
assert.equal(result[1], 'bar');

// assert item on two key context

space.assert('spam', { country: 'Japan', category: 'Beverages' });
var result = space.retrieve({ country: 'Japan', category: 'Beverages' });
assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 1);
assert.equal(result[0], 'spam');

// then retrieve with other order in context properties

var result = space.retrieve({ category: 'Beverages', country: 'Japan' });
assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 1);
assert.equal(result[0], 'spam');


