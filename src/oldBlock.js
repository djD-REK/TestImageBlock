import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  const classes = StyleSheet.create(getStyles(props))
  const { image, imageWithPlaceholder, text } = props
  console.log(JSON.stringify(image))
  return (
    <React.Fragment>
      {image.uriBase && (
        <img
          src={image.uriBase + image.imagePath}
          alt={image.altText}
          width={image.width}
          height={image.height}
        />
      )}
      {!image.uriBase && <hr />}
      <img
        src={imageWithPlaceholder.uriBase + imageWithPlaceholder.imagePath}
        alt={imageWithPlaceholder.altText}
        width={imageWithPlaceholder.width}
        height={imageWithPlaceholder.height}
      />
      <h1 className={css(classes.example)}>{text}</h1>
    </React.Fragment>
  )
}

Block.defaultProps = defaultConfig

export default Block
