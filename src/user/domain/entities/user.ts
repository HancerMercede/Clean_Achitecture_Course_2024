import { GenerateId } from '../../../utils/GenerateIds'
import { Email } from '../value_objects/email'
import { Password } from '../value_objects/password'

export type UserInfo = {
    name: string
    email: string
    password: string
    id?: string
}

export class User {
    readonly name: string
    readonly email: Email
    readonly password: Password
    readonly id?: string

    constructor({ name, email, password }: UserInfo) {
        this.name = name
        this.email = new Email(email)
        this.password = new Password(password)
        this.id = GenerateId()
    }

    isEqual(user: User) {
        return user.id === this.id
    }
}
