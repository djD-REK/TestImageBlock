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

export const configSchema = {
  arrayOfShapes: {
    label: "Array of Links",
    type: ElementPropTypes.arrayOf(
      ElementPropTypes.shape({
        text: { label: "Text", type: ElementPropTypes.string },
        url: { label: "Link", type: ElementPropTypes.string },
      })
    ),
  },
}

export const configSchema = {
  oneOf: {
    label: "Dropdown Menu for Text Alignment",
    type: ElementPropTypes.oneOf(["left", "center", "right"]),
  },
}

import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  readOnly: {
    label: "",
    type: ElementPropTypes.readOnly,
  },
}

export const defaultConfig = {
  readOnly: "Text when this Block is edited in VOLT's Site Designer",
}

export const configSchema = {
  sectionHeader: {
    type: ElementPropTypes.sectionHeader,
  },
}

export const defaultConfig = {
  sectionHeader: "Heading when this Block is edited in VOLT's Site Designer",
}

export const configSchema = {
  privateString: {
    label: "Won't be shown to merchants, but agency accounts can see it",
    type: ElementPropTypes.string,
    isPrivate: true,
  },
}