import { isValidInput } from './ValidationUtils'

describe('ValidationUtils', () => {
  it.each(['singapore', 'united states', 'u.s.'])(
    'should return true when input is valid',
    (input) => {
      const result = isValidInput(input)
      expect(result).toBe(true)
    },
  )

  it.each(['sing1apore', 'unit2 states1', '123'])(
    'should return false when input is invalid',
    (input) => {
      const result = isValidInput(input)
      expect(result).toBe(false)
    },
  )
})
