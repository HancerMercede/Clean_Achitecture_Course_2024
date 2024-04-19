import type { IUserRepository } from '../repositories/userRepository'
import { User, UserInfo } from '../entities/user'
import { Either } from '../../../utils/either'

export class CreateUserUseCase {
    private userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository
    }

    execute(user: UserInfo): Either<Error, User> {
        try {
            const newUser = new User(user)

            const duplicatedUser = this.userRepository
                .getUserList()
                .filter((userItem) => userItem.email.isEqual(newUser.email))

            if (duplicatedUser?.length > 0) {
                throw new Error(
                    `User email ${newUser.email.value} already exists`
                )
            }

            this.userRepository.createUser(newUser)

            return Either.right(newUser)
        } catch (error) {
            return Either.left(error as Error)
        }
    }
}
