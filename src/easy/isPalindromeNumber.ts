/**
 * Given an integer `x`, return `true` if `x` is a __palindrome__, and `false` otherwise.
 */

export function isPalindromeNumber(x: number): boolean {
  const y = String(x)
  const reversed = y.split('').reverse().join('')

  if (y === reversed) {
    return true
  }

  return false
}
