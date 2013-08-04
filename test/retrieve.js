
var simplecontext = require('..'),
    assert = require('assert');
    
// createContext as function

assert.ok(simplecontext.createContext);
assert.equal(typeof simplecontext.createContext, 'function');

