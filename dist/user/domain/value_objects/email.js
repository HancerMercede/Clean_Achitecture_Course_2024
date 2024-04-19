"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor(val) {
        const isValidEmail = (str) => {
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailRegex.test(String(str).toLowerCase());
        };
        if (!isValidEmail(val))
            throw new Error('Invalid email');
        this.value = val;
    }
    isEqual(val) {
        if (val.value === this.value)
            return true;
        return false;
    }
}
exports.Email = Email;
//const email = new Email('hola@ha.com')
