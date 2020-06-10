import { ElementPropTypes } from "@volusion/element-proptypes"

export const configSchema = {
  image: {
    label: "Image",
    type: ElementPropTypes.image,
  },
}

export const defaultConfig = {
  image: {
    uriBase: "https://res.cloudinary.com/dyx4yhvoq/image/upload/",
    imagePath: "v1545428185/images/tcp-no-image.jpg",
    altText: "Placeholder Image",
    width: 360, // pixels
    height: 270, // pixels
  },
  // Alternative default image configuration without a placeholder image:
  // image: ElementPropTypes.image.default,
}
