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

const Block = (props) => {
  const { string } = props
  return <div>{string}</div>
}

const Block = (props) => {
  const { date } = props
  return <div>{date.toLocaleDateString()}</div>
}

const Block = (props) => {
  const { dateRange } = props
  const [startDate, endDate] = dateRange
  const now = new Date()
  return now > startDate || now < endDate ? (
    <div>During the sale</div>
  ) : (
    <div>Not during the sale</div>
  )
}

const Block = (props) => {
  const { editorFull } = props // Rich text (HTML)
  const outputAsMarkup = { __html: editorFull }
  return <div dangerouslySetInnerHTML={outputAsMarkup}></div>
}

const Block = (props) => {
  const { editorMinimal } = props // Rich text (HTML)
  const outputAsMarkup = { __html: editorMinimal }
  return <div dangerouslySetInnerHTML={outputAsMarkup}></div>
}

const Block = (props) => {
  const { data } = props
  const products = data.items
  return (
    <ul>{products && products.map((product) => <li>{product.name}</li>)}</ul>
  )
}

const Block = (props) => {
  const { data } = props
  const product = data
  return <div>{product.name}</div>
}

const Block = (props) => {
  const { arrayOfShapes } = props
  return (
    <ul>
      {arrayOfShapes.map((link) => (
        <li>
          <a href={link.url}>{link.text}</a>
        </li>
      ))}
    </ul>
  )
}