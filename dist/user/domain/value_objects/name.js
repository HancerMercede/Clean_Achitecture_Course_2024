"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
class Name {
    constructor(param) {
        if (param === '' || typeof !String)
            throw new Error('The name is required.');
        this._name = param;
    }
}
exports.Name = Name;
