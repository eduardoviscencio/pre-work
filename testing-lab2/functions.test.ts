import { capitalize, multiply, reverse } from './functions'
import { test, expect } from '@jest/globals'

test('capitalize function capitalizes the first letter of a word', () => {
  expect(capitalize('hello')).toBe('Hello')
})

test('multiply function multiplies two numbers correctly', () => {
  expect(multiply(2, 3)).toBe(6)
})

test('reverse the string correctly', () => {
  let wordToRevers: string = 'ironhack'
  expect(reverse(wordToRevers)).not.toBe('kcahnoir')
  expect(reverse(wordToRevers)).toBe('kcahnori')
})
