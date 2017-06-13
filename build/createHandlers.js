"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createHandlers(routes) {
    var tree = new Map();
    function recurse(node) {
        var name = node.name, children = node.children, handler = node.handler;
        if (handler) {
            tree.set(name, handler);
        }
        children.forEach(function (child) { return recurse(child); });
    }
    recurse(routes);
    return tree;
}
exports.default = createHandlers;