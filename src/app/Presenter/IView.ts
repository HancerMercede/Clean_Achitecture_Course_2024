import { User } from '../../user/domain/entities/user'

export interface IView {
    initialPrompt(): void
    showUserList(users: User[]): void
    showCreateUserForm(
        formFields: string[],
        onFinish: (result: { [x: string]: {} }, err: Error | null) => void
    ): void
    showError(error: string): void
}
