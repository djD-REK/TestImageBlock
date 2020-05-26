export const getStyles = (blockConfig) => ({
  example: {
    fontSize: "2rem",
  },
})

export const getStyles = (blockConfig) => {
  const { bool } = blockConfig
  return {
    example: {
      fontWeight: bool ? "bold" : "normal",
    },
  }
}

export const getStyles = (blockConfig) => {
  const { number } = blockConfig
  return {
    example: {
      fontSize: `${number}rem`,
    },
  }
}
