"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const GenerateIds_1 = require("../../../utils/GenerateIds");
const email_1 = require("../value_objects/email");
const password_1 = require("../value_objects/password");
class User {
    constructor({ name, email, password }) {
        this.name = name;
        this.email = new email_1.Email(email);
        this.password = new password_1.Password(password);
        this.id = (0, GenerateIds_1.GenerateId)();
    }
    isEqual(user) {
        return user.id === this.id;
    }
}
exports.User = User;
