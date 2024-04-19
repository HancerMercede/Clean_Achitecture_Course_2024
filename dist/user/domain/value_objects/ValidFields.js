"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidField = void 0;
class ValidField {
    constructor(param) {
        if (param === '')
            throw new Error('The name is required.');
        this._name = param;
    }
}
exports.ValidField = ValidField;
