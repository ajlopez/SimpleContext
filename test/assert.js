
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




