export const stringToNumber = (str) => {
  const trimmed = str.trim()
  if (trimmed === '') throw Error("Error converting an empty string to a number!")

  if (trimmed === 'NaN') return NaN

  const num = Number(trimmed)

  if (Number.isNaN(num) === false) return num

  throw Error(`Error converting string '${trimmed}' to number!`)
}