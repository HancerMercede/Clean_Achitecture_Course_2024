"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
class Password {
    constructor(val) {
        const isValidPassword = (str) => {
            const passwordRegex = /(?=[A-Za-z0-9]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/;
            return passwordRegex.test(str);
        };
        if (!isValidPassword(val))
            throw new Error('Password should have at least 8 characters');
        this.value = val;
    }
    isEqual(val) {
        if (val.value === this.value)
            return true;
        return false;
    }
}
exports.Password = Password;
