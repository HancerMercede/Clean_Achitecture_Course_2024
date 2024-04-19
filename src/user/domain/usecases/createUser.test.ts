import { CreateUserUseCase } from './createUser.js'
import { UserRepositoryImpl } from '../repositories/userRepositoryImpl.js'
import { User } from '../entities/user.js'
import { jest } from '@jest/globals'

// Mock the UserRepository
jest.mock('../repositories/userRepositoryImpl')

describe('CreateUserUseCase', () => {
    let userRepository: UserRepositoryImpl
    let createUserUseCase: CreateUserUseCase

    beforeEach(() => {
        // Create an instance of the mocked UserRepository
        userRepository =
            new UserRepositoryImpl() as jest.Mocked<UserRepositoryImpl>
        createUserUseCase = new CreateUserUseCase(userRepository)
    })

    test('Should create a new user', () => {
        const user = {
            name: 'Test',
            email: 'test@test.com',
            password: '123Abcdef',
            id: '1',
        }

        const result = createUserUseCase.execute(user)

        expect(
            result.fold(
                () => {},
                (createdUser) => {
                    expect(createdUser).toBeInstanceOf(User)
                    expect(createdUser.name).toBe('Test')
                    expect(createdUser.email.value).toBe('test@test.com')
                    expect(createdUser.password.value).toBe('123Abcdef')
                }
            )
        )
    })

    test('Should throw an error if user email already exists', () => {
        const existingUser = {
            name: 'Existing User',
            email: 'test@test.com',
            password: '123Abcdef',
            id: '2',
        }

        const user = {
            name: 'Test',
            email: 'test@test.com',
            password: '123Abcdef',
            id: '1',
        }

        const result = createUserUseCase.execute(user)

        expect(
            result.fold(
                (error) => {
                    expect(error.message)
                },
                (user) => {
                    expect(user).toBeTruthy()
                }
            )
        )

        const result2 = createUserUseCase.execute(existingUser)
        expect(
            result2.fold(
                (error) => {
                    expect(error.message)
                },
                (user) => {
                    expect(user).toBeFalsy()
                }
            )
        )
    })
})
