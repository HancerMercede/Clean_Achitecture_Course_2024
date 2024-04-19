import prompt from 'prompt'
import { User } from '../../user/domain/entities/user.js'
import { IView } from './IView.js'

export class View implements IView {
    constructor() {}
    initialPrompt() {
        console.log('Hola! Esta es la lista de usuarios')
    }
    showUserList(users: User[]) {
        console.log('Estos son los usuarios que hay en la lista: ', users)
    }
    showCreateUserForm(
        formFields: string[],
        onFinish: (result: { [x: string]: {} }, err: Error | null) => void
    ) {
        prompt.get(formFields, function (err, result) {
            onFinish(result, err)
        })
    }
    showError(error: string) {
        console.log('Ha habido un error: ', error)
    }
}
