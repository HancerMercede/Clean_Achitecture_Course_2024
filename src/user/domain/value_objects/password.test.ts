import { Password } from './password.js'

test('Should create a valid password', () => {
    const password = new Password('Ahola23456')
    expect(password.value).toBe('Ahola23456')
})

test('Should throw a exception for invalid password format', () => {
    expect(() => {
        new Password('a')
    }).toThrow()

    expect(() => {
        new Password('a1A')
    }).toThrow()

    expect(() => {
        new Password('aaaaaaaaaa')
    }).toThrow()
})

test('Should be equal to another password of the same value', () => {
    const pwd1 = new Password('Aab12345')
    const pwd2 = new Password('Aab12345')
    const pwd3 = new Password('Aab123456')
    expect(pwd1.isEqual(pwd2)).toBeTruthy()
    expect(pwd1.isEqual(pwd3)).toBeFalsy()
})
