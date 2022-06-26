export const stringToNumber = (str) => {
  const trimmed = str.trim()
  if (trimmed === '') throw SyntaxError("Error converting an empty string to a number!")

  if (trimmed === 'NaN') return NaN

  const num = Number(trimmed)

  if (Number.isNaN(num) === false) return num

  throw SyntaxError(`Error converting string '${trimmed}' to number!`)
}