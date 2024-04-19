"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_js_1 = require("./createUser.js");
const userRepositoryImpl_js_1 = require("../repositories/userRepositoryImpl.js");
const user_js_1 = require("../entities/user.js");
const globals_1 = require("@jest/globals");
// Mock the UserRepository
globals_1.jest.mock('../repositories/userRepositoryImpl');
describe('CreateUserUseCase', () => {
    let userRepository;
    let createUserUseCase;
    beforeEach(() => {
        // Create an instance of the mocked UserRepository
        userRepository =
            new userRepositoryImpl_js_1.UserRepositoryImpl();
        createUserUseCase = new createUser_js_1.CreateUserUseCase(userRepository);
    });
    test('Should create a new user', () => {
        const user = {
            name: 'Test',
            email: 'test@test.com',
            password: '123Abcdef',
            id: '1',
        };
        const result = createUserUseCase.execute(user);
        expect(result.fold(() => { }, (createdUser) => {
            expect(createdUser).toBeInstanceOf(user_js_1.User);
            expect(createdUser.name).toBe('Test');
            expect(createdUser.email.value).toBe('test@test.com');
            expect(createdUser.password.value).toBe('123Abcdef');
        }));
    });
    test('Should throw an error if user email already exists', () => {
        const existingUser = {
            name: 'Existing User',
            email: 'test@test.com',
            password: '123Abcdef',
            id: '2',
        };
        const user = {
            name: 'Test',
            email: 'test@test.com',
            password: '123Abcdef',
            id: '1',
        };
        const result = createUserUseCase.execute(user);
        expect(result.fold((error) => {
            expect(error.message);
        }, (user) => {
            expect(user).toBeTruthy();
        }));
        const result2 = createUserUseCase.execute(existingUser);
        expect(result2.fold((error) => {
            expect(error.message);
        }, (user) => {
            expect(user).toBeFalsy();
        }));
    });
});
