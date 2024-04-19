"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImpl = void 0;
class UserRepositoryImpl {
    constructor() {
        this.users = [];
    }
    createUser(user) {
        this.users.push(user);
    }
    getUserList() {
        return this.users;
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
