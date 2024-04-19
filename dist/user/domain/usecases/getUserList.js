"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserListUseCase = void 0;
class GetUserListUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    execute() {
        const userList = this.userRepository.getUserList();
        return userList;
    }
}
exports.GetUserListUseCase = GetUserListUseCase;
