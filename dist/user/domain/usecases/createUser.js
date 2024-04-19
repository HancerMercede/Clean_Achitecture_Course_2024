"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const user_1 = require("../entities/user");
const either_1 = require("../../../utils/either");
class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute(user) {
        try {
            const newUser = new user_1.User(user);
            const duplicatedUser = this.userRepository
                .getUserList()
                .filter((userItem) => userItem.email.isEqual(newUser.email));
            if ((duplicatedUser === null || duplicatedUser === void 0 ? void 0 : duplicatedUser.length) > 0) {
                throw new Error(`User email ${newUser.email.value} already exists`);
            }
            this.userRepository.createUser(newUser);
            return either_1.Either.right(newUser);
        }
        catch (error) {
            return either_1.Either.left(error);
        }
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
