
var simplecontext = require('..'),
    assert = require('assert');
    
// createSpace as function

assert.ok(simplecontext.createSpace);
assert.equal(typeof simplecontext.createSpace, 'function');

// create context space

var space = simplecontext.createSpace();
assert.ok(space);
