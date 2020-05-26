import React from "react"
import { css, StyleSheet } from "aphrodite/no-important"
import { getStyles } from "./getStyles"
import { defaultConfig } from "./configs"

const Block = (props) => {
  const { image } = props
  return (
    <img
      src={image.uriBase + image.imagePath}
      alt={image.altText}
      width={image.width}
      height={image.height}
    />
  )
}

Block.defaultProps = defaultConfig

export default Block

const Block = (props) => {
  const { bool } = props
  return (
    <div>
      {bool && <p>It was true</p>}
      {!bool && <p>It was false</p>}
    </div>
  )
}

const Block = (props) => {
  const { number } = props
  return <div>{number} is a terrific number</div>
}
