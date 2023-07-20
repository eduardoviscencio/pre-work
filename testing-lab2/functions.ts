export const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const multiply = (a: number, b: number): number => {
  return a * b
}

export const reverse = (word: string): string => {
  if (!word) return ''
  return reverse(word.slice(1)) + word.charAt(0)
}
