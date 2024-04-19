import { GetUserListUseCase } from '../../user/domain/usecases/getUserList'
import { UserRepositoryImpl } from '../../user/domain/repositories/userRepositoryImpl.js'
import { CreateUserUseCase } from '../../user/domain/usecases/createUser.js'
import { Presenter } from './presenter'
import { View } from './view'

export class ServiceLocator {
    userRepository: UserRepositoryImpl
    createUserUseCase: CreateUserUseCase
    getUserListUseCase: GetUserListUseCase
    presenter?: Presenter
    view: View

    constructor() {
        this.userRepository = new UserRepositoryImpl()
        this.createUserUseCase = new CreateUserUseCase(this.userRepository)
        this.getUserListUseCase = new GetUserListUseCase(this.userRepository)
        this.view = new View()
        this.presenter = undefined
    }
    init() {
        this.presenter = new Presenter({
            getUserListUseCase: this.getUserListUseCase,
            createUserUseCase: this.createUserUseCase,
            view: this.view,
        })
        this.presenter.init()
    }
}
