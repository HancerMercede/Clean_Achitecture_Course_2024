import type { User } from '../entities/user'

export interface IUserRepository {
    createUser(user: User): void
    getUserList(): User[]
}
