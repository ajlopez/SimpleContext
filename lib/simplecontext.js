
function Space() {
    var values = { };
    
    this.retrieve = function (context) {
        var result = simpleRetrieve(context);
        
        var parents = getContextParents(context);
        
        for (var n in parents) {
            var newresult = this.retrieve(parents[n]);
            
            for (var m in newresult) {
                var newitem = newresult[m];
                if (result.indexOf(newitem) < 0)
                    result.push(newitem);
            }
        }
        
        return result;
    }
    
    function simpleRetrieve(context) {
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
    };
    
    this.remove = function (context) {
        var key = getKey(context);
        
        delete values[key];
    };
    
    this.retract = function (data, context) {
        var key = getKey(context);
        var items = values[key];
        
        if (!items)
            return;
            
        var position = items.indexOf(data);
        
        if (position < 0)
            return;
            
        items.splice(1, position);
    };
}

function getKey(context) {
    var keys = Object.keys(context);
    keys.sort();
    var key = '';
    
    for (var n in keys)
        key += keys[n] + ':' + context[keys[n]];
    
    return key;
}

function getContextParents(context) {
    var result = [];
    
    for (var n in context) {
        var clone = cloneContext(context);
        delete clone[n];
        result.push(clone);
    }
    
    return result;
}

function cloneContext(context) {
    var newcontext = { };
    
    for (var n in context)
        newcontext[n] = context[n];
    
    return newcontext;
}

function createSpace() {
    return new Space();
};

module.exports = {
    createSpace: createSpace
};

