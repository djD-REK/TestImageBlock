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

export const getStyles = (blockConfig) => {
  const { string } = blockConfig
  return {
    example: {
      fontSize: string,
    },
  }
}

export const getStyles = (blockConfig) => {
  const { color } = blockConfig
  return {
    example: {
      color: color,
    },
  }
}

export const getStyles = (blockConfig) => {
  const { slider } = blockConfig
  const sliderValue = slider.selectedValue

  return {
    example: {
      fontSize: `${sliderValue}rem`,
    },
  }
}
