import { isPalindromeNumber } from '../isPalindromeNumber'

describe('isPalindromeNumber', () => {
  it('returns a boolean is given numbers are palindrome or not', () => {
    expect(isPalindromeNumber(121)).toBe(true)
    expect(isPalindromeNumber(-121)).toBe(false)
    expect(isPalindromeNumber(10)).toBe(false)
    expect(isPalindromeNumber(11)).toBe(true)
    expect(isPalindromeNumber(-101)).toBe(false)
  })

  it('returns true if there is only one given positive number', () => {
    expect(isPalindromeNumber(-5)).toBe(false)
    expect(isPalindromeNumber(0)).toBe(true)
    expect(isPalindromeNumber(9)).toBe(true)
  })
})
