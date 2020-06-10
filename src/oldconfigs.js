import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  image: {
    label: "Image",
    type: ElementPropTypes.image,
  },
  imageWithPlaceholder: {
    label: "Image With Default",
    type: ElementPropTypes.image,
  },
}

export const defaultConfig = {
  text: "Example text",
  image: ElementPropTypes.image.default,
  imageWithPlaceholder: {
    uriBase: "http://d21ivvgspl06jm.cloudfront.net/",
    imagePath: "element-block-assets/slideshow/slide2.jpg",
    altText: "Monument Valley",
    width: 1600,
    height: 500,
  },
}
