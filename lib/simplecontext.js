
function Space() {
    var values = { };
    
    this.retrieve = function (context) {
        var key = getKey(context);
        var data = values[key];
        
        if (data)
            return data;
            
        return [];
    }
    
    this.assert = function (data, context) {
        var key = getKey(context);
        
        if (!values[key])
            values[key] = [];
            
        values[key].push(data);
    }
}

function getKey(context) {
    var keys = Object.keys(context);
    keys.sort();
    var key = '';
    
    for (var n in keys)
        key += keys[n] + ':' + context[keys[n]];
    
    return key;
}

function createSpace() {
    return new Space();
};

module.exports = {
    createSpace: createSpace
};

