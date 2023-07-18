function calculateSum (num1: number, num2: number): number {
  return num1 + num2
}

function isEven (num: number): boolean {
  return num % 2 == 0
}

function reverseString (str: string): string {
  if (!str) return ''

  return reverseString(str.slice(1)) + str[0]
}

function calculateAverage (nums: number[]): number {
  let sum: number = 0

  nums.forEach((num: number) => (sum += num))

  return sum / nums.length
}

type MathOperation = (num1: number, num2: number) => number

const multiply: MathOperation = (num1: number, num2: number): number =>
  num1 * num2

// calculateSum
console.log(calculateSum(10, 20))
console.log(calculateSum(4, 5))
console.log(calculateSum(10.5, 5))

// isEven
console.log(isEven(10))
console.log(isEven(11))
console.log(isEven(4))

// reverseString
console.log(reverseString('Eduardo'))
console.log(reverseString('Iron Hack'))
console.log(reverseString('Digital@FEMSA'))

// calculateAverage
console.log(calculateAverage([10, 12, 14]))
console.log(calculateAverage([1, 7, 10]))
console.log(calculateAverage([3, 7, 25]))

// multiply
console.log(multiply(4, 3))
console.log(multiply(7, 5))
console.log(multiply(12, 30))
