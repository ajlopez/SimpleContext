
var simplecontext = require('..'),
    assert = require('assert');
    
// createSpace as function

assert.ok(simplecontext.createSpace);
assert.equal(typeof simplecontext.createSpace, 'function');

// create context space

var space = simplecontext.createSpace();
assert.ok(space);

// retrieve unknown context

var result = space.retrieve({ country: 'UK' });
assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 0);


