
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



