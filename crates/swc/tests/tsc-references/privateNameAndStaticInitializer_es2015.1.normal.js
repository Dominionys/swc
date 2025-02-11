function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _classPrivateFieldInit(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
var _foo = new WeakMap(), _prop = new WeakMap();
// @target: esnext, es2022, es2015
class A {
    constructor(){
        _classPrivateFieldInit(this, _foo, {
            writable: true,
            value: 1
        });
        _classPrivateFieldInit(this, _prop, {
            writable: true,
            value: 2
        });
    }
}
A.inst = new A();
