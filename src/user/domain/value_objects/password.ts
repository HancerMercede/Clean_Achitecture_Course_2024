export class Password {
    readonly value: string

    constructor(val: string) {
        const isValidPassword = (str: string) => {
            const passwordRegex =
                /(?=[A-Za-z0-9]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/

            return passwordRegex.test(str)
        }

        if (!isValidPassword(val))
            throw new Error('Password should have at least 8 characters')

        this.value = val
    }

    isEqual(val: Password) {
        if (val.value === this.value) return true
        return false
    }
}
