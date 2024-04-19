"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const password_js_1 = require("./password.js");
test('Should create a valid password', () => {
    const password = new password_js_1.Password('Ahola23456');
    expect(password.value).toBe('Ahola23456');
});
test('Should throw a exception for invalid password format', () => {
    expect(() => {
        new password_js_1.Password('a');
    }).toThrow();
    expect(() => {
        new password_js_1.Password('a1A');
    }).toThrow();
    expect(() => {
        new password_js_1.Password('aaaaaaaaaa');
    }).toThrow();
});
test('Should be equal to another password of the same value', () => {
    const pwd1 = new password_js_1.Password('Aab12345');
    const pwd2 = new password_js_1.Password('Aab12345');
    const pwd3 = new password_js_1.Password('Aab123456');
    expect(pwd1.isEqual(pwd2)).toBeTruthy();
    expect(pwd1.isEqual(pwd3)).toBeFalsy();
});
