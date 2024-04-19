import type { IUserRepository } from './userRepository'
import type { User } from '../entities/user'

export class UserRepositoryImpl implements IUserRepository {
    private users: User[] = []

    createUser(user: User): void {
        this.users.push(user)
    }

    getUserList(): User[] {
        return this.users
    }
}
