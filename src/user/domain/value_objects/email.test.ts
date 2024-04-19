import { Email } from './email.js'

test('Should create a valid email', () => {
    const email = new Email('test@email.com')
    expect(email.value).toBe('test@email.com')
})

test('Should throw a exception for invalid email format', () => {
    expect(() => {
        new Email('testemail.com')
    }).toThrow()

    expect(() => {
        new Email('teste@maicom')
    }).toThrow()
})

test('Should be equal to another email of the same value', () => {
    const email1 = new Email('test@email.com')
    const email2 = new Email('test@email.com')
    const email3 = new Email('test@eml.com')
    expect(email1.isEqual(email2)).toBeTruthy()
    expect(email1.isEqual(email3)).toBeFalsy()
})
