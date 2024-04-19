"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_js_1 = require("./user.js");
test('Should create a valid user', () => {
    const user = new user_js_1.User({
        name: 'Mark',
        email: 'test@test.com',
        password: '123Abcdef',
    });
    expect(user.name).toBe('Mark');
    expect(user.email.value).toBe('test@test.com');
    expect(user.password.value).toBe('123Abcdef');
});
test('Should return false if two users have same id', () => {
    const user1 = new user_js_1.User({
        name: 'Test',
        email: 'test@test.com',
        password: '123Abcdef',
        id: '1',
    });
    const user2 = new user_js_1.User({
        name: 'Test',
        email: 'test@test.com',
        password: '123Abcdef',
        id: '2',
    });
    expect(user1.isEqual(user2)).toBeFalsy();
});
test('Should return true if two users have same email', () => {
    const user1 = new user_js_1.User({
        name: 'Test',
        email: 'test@test.com',
        password: '123Abcdef',
        id: '1',
    });
    const user2 = new user_js_1.User({
        name: 'Test',
        email: 'test@test.com',
        password: '123Abcdef',
        id: '2',
    });
    const user3 = new user_js_1.User({
        name: 'Test',
        email: 'test@st.com',
        password: '1Abcdsdsdsef',
        id: '3',
    });
    expect(user1.email.isEqual(user2.email)).toBeTruthy();
    expect(user1.email.isEqual(user3.email)).toBeFalsy();
    expect(user2.email.isEqual(user3.email)).toBeFalsy();
});
