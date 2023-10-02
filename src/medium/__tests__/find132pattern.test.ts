import { find132pattern } from '../find132pattern'

describe('find132pattern', () => {
  it('should return false if array is empty or has less than 3 values', () => {
    const emptyNums: number[] = []
    const numsWithOneValue = [1]

    expect(find132pattern(emptyNums)).toBe(false)
    expect(find132pattern(numsWithOneValue)).toBe(false)
  })

  it('should return true if array has a 132 pattern', () => {
    const test1 = [1, 2, 3, 4]
    const test2 = [3, 1, 4, 2]
    const test3 = [-1, 3, 2, 0]

    expect(find132pattern(test1)).toBe(false)
    expect(find132pattern(test2)).toBe(true)
    expect(find132pattern(test3)).toBe(true)
  })
})
