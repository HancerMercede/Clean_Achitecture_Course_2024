"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_js_1 = require("./email.js");
test('Should create a valid email', () => {
    const email = new email_js_1.Email('test@email.com');
    expect(email.value).toBe('test@email.com');
});
test('Should throw a exception for invalid email format', () => {
    expect(() => {
        new email_js_1.Email('testemail.com');
    }).toThrow();
    expect(() => {
        new email_js_1.Email('teste@maicom');
    }).toThrow();
});
test('Should be equal to another email of the same value', () => {
    const email1 = new email_js_1.Email('test@email.com');
    const email2 = new email_js_1.Email('test@email.com');
    const email3 = new email_js_1.Email('test@eml.com');
    expect(email1.isEqual(email2)).toBeTruthy();
    expect(email1.isEqual(email3)).toBeFalsy();
});
