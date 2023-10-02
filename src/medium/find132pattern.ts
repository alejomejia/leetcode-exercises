export function find132pattern(nums: number[]): boolean {
  // We can't have a 132 pattern if we have less than 3 numbers
  if (nums.length < 3) {
    return false
  }

  let has132pattern = false

  for (const [index, n1] of nums.entries()) {
    // Break for loop if there are not enough values to compare
    if (index >= nums.length - 2) {
      break
    }

    const n2 = nums[index + 1]
    const n3 = nums[index + 2]

    has132pattern = n1 < n2 && n2 > n3

    // Break for loop if already found a 132 pattern
    if (has132pattern) {
      break
    }
  }

  return has132pattern
}
