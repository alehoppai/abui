import { Theme } from '../theme'
import { Size } from '../enums'

const getThemedFontSize = (
  size: Size,
  { fontSizes }: Theme,
) => {
  switch (size) {
  case Size.Large:
    return fontSizes.large
  case Size.Medium:
    return fontSizes.medium
  case Size.Small:
    return fontSizes.small
  }
}

export { getThemedFontSize }
