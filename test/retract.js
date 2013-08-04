
var simplecontext = require('..'),
    assert = require('assert');
    
var space = simplecontext.createSpace();

// retract unknown fact in context

space.retract('bar', { country: 'UK' });

var result = space.retrieve({ country: 'UK' });
assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 0);

// assert two data, retract and retrieve context

space.assert('foo', { country: 'UK' });
space.assert('bar', { country: 'UK' });
space.assert('spam', { country: 'UK' });
space.retract('bar', { country: 'UK' });

var result = space.retrieve({ country: 'UK' });
assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 2);
assert.equal(result[0], 'foo');
assert.equal(result[1], 'spam');

