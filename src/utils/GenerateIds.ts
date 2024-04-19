import { v4 as uuid } from 'uuid'

export const GenerateId = (): string => {
    const id = uuid()

    return id.toString()
}
