export const isValidInput = (value: string) => {
  const nonNumberRegex = /^([^0-9])*$/
  const allWhitespaceRegex = /^(\s)+$/
  return !allWhitespaceRegex.test(value) && nonNumberRegex.test(value)
}
