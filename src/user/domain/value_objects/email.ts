export class Email {
    readonly value: string

    constructor(val: string) {
        const isValidEmail = (str: string) => {
            const emailRegex =
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return emailRegex.test(String(str).toLowerCase())
        }

        if (!isValidEmail(val)) throw new Error('Invalid email')

        this.value = val
    }

    isEqual(val: Email) {
        if (val.value === this.value) return true
        return false
    }
}

//const email = new Email('hola@ha.com')
