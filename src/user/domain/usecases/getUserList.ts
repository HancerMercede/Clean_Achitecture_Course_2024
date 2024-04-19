import type { IUserRepository } from '../repositories/userRepository'
import type { User } from '../entities/user'

export class GetUserListUseCase {
    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository
    }

    execute(): User[] {
        const userList = this.userRepository.getUserList()
        return userList
    }
}
