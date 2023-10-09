/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

export function longestCommonPrefix(strs: string[]) {
  let prefix = ''
  let i = 0
  let char = strs[0][i]

  while (char) {
    if (strs.every((str) => str[i] === char)) {
      prefix += char
      i++
      char = strs[0][i]
    } else {
      break
    }
  }

  return prefix
}
