import { CreateUserUseCase } from '../../user/domain/usecases/createUser'
import { GetUserListUseCase } from '../../user/domain/usecases/getUserList'
import { IView } from './IView'

export class Presenter {
    private readonly getUserListUseCase: GetUserListUseCase
    private readonly createUserUseCase: CreateUserUseCase
    private readonly view: IView

    constructor({
        getUserListUseCase,
        createUserUseCase,
        view,
    }: {
        getUserListUseCase: GetUserListUseCase
        createUserUseCase: CreateUserUseCase
        view: IView
    }) {
        this.getUserListUseCase = getUserListUseCase
        this.createUserUseCase = createUserUseCase
        this.view = view
    }
    handleFormSubmit(result: { [x: string]: {} }, err: Error | null) {
        const response = this.createUserUseCase.execute({
            name: result.name as string,
            email: result.email as string,
            password: result.password as string,
        })

        response?.fold(
            (e) => {
                this.view.showError(e?.message)
            },
            () => {
                const userList = this.getUserListUseCase.execute()
                this.view.showUserList(userList)
                this.view.showCreateUserForm(
                    ['name', 'email', 'password'],
                    this.handleFormSubmit.bind(this)
                )
            }
        )
    }
    init() {
        this.view.initialPrompt()
        this.view.showCreateUserForm(
            ['name', 'email', 'password'],
            this.handleFormSubmit.bind(this)
        )
    }
}
