import { add, subtract, multiply, divide } from '../calculator'
import { describe, expect, test } from '@jest/globals'

describe('test arithmetic operations', () => {
  test('add two numbers correctly', () => {
    let num1: number = 5
    let num2: number = 17

    let result: number = add(num1, num2)

    expect(result).toBe(22)
  })

  test('substract two numbers correctly', () => {
    let num1: number = 34
    let num2: number = 17

    let result: number = subtract(num1, num2)

    expect(result).toBe(17)
  })

  test('multiply two numbers correctly', () => {
    let num1: number = 2.5
    let num2: number = 4

    let result: number = multiply(num1, num2)

    expect(result).toBe(10)
  })

  test('divide two numbers correctly', () => {
    let num1: number = 51
    let num2: number = 17

    let result: number = divide(num1, num2)

    expect(result).toBe(3)
  })

  test('throw an error whem dividing by 0', () => {
    let num1: number = 6
    let num2: number = 0

    expect(() => divide(num1, num2)).toThrow(Error('Infinity'))
  })
})
