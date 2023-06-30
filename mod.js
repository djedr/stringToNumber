export const stringToNumber = (str) => {
  const trimmed = str.trim()
  if (trimmed === '') throw SyntaxError("Error converting an empty string to a number!")

  if (trimmed === 'NaN') return NaN

  // note: this allows underscores anywhere, including consecutive ones
  const num = Number(trimmed.replaceAll('_', ''))

  if (Number.isNaN(num) === false) return num

  throw SyntaxError(`Error converting string '${trimmed}' to number!`)
}