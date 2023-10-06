import { twoSum } from '../twoSum'

describe('twoSum', () => {
  it('should return the indices of two numbers that add up are equal to target', () => {
    const test1 = [2, 7, 11, 15]
    const test2 = [3, 2, 4]
    const test3 = [3, 3]
    const test4 = [3, 2, 3]

    expect(twoSum(test1, 9)).toStrictEqual([0, 1])
    expect(twoSum(test2, 6)).toStrictEqual([1, 2])
    expect(twoSum(test3, 6)).toStrictEqual([0, 1])
    expect(twoSum(test4, 6)).toStrictEqual([0, 2])
  })
})
