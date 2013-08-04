
var simplecontext = require('..'),
    assert = require('assert');
    
var space = simplecontext.createSpace();

// assert in three context, retrieve with inheritance

space.assert('foo', { country: 'UK' });
space.assert('bar', { category: 'Beverages' });
space.assert('spam', { country: 'UK', category: 'Beverages' });

var result = space.retrieve({ country: 'UK', category: 'Beverages' });
assert.ok(result);
assert.ok(Array.isArray(result));
assert.equal(result.length, 3);
assert.ok(result.indexOf('foo') >= 0);
assert.ok(result.indexOf('bar') >= 0);
assert.ok(result.indexOf('spam') >= 0);

