
var simplecontext = require('..'),
    assert = require('assert');
    
var space = simplecontext.createSpace();

// remove unknown context

space.remove({ country: 'UK' });
var result = space.retrieve({ country: 'UK' });
assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 0);

// assert and remove context

space.assert('foo', { country: 'UK', category: 'Beverages' });
space.assert('bar', { category: 'Beverages', country: 'UK' });
space.remove({ category: 'Beverages', country: 'UK' });

var result = space.retrieve({ category: 'Beverages', country: 'UK' });
assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 0);

