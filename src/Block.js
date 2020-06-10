import React from "react"
import { defaultConfig } from "./configs"

const Block = (props) => {
  // Destructure the image from the Block props:
  const { image } = props

  // Build the <img> tag to output:
  const outputImage = (
    <img
      src={image.uriBase + image.imagePath}
      alt={image.altText}
      width={image.width}
      height={image.height}
      style={{ border: "1px solid black" }} // For demonstration purposes only
      // data-vol-skip-lazy // Uncomment to skip lazy loading for this image
    />
  )

  // Alternatively, with optional Cloudinary transforms:
  /* const outputImage = (
    <img
      src={image.uriBase + "w_200,h_200,c_limit/" + image.imagePath}
      alt={image.altText}
      style={{ border: "1px solid black" }} // For demonstration purposes only
    />
  ) */

  // Return an image only if there is an image (image.uriBase is not undefined)
  return image.uriBase ? outputImage : null
  // Returning null will render an empty Block with no content
}

Block.defaultProps = defaultConfig

export default Block
