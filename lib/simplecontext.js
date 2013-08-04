
function Space() {
    this.retrieve = function () {
        return [];
    }
}

function createSpace() {
    return new Space();
};

module.exports = {
    createSpace: createSpace
};