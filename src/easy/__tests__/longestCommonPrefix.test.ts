import { longestCommonPrefix } from '../longestCommonPrefix'

describe('longestCommonPrefix', () => {
  it('returns the common prefix in the string array', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
  })

  it("returns empty string if there aren't any common prefix", () => {
    // --
  })
})
