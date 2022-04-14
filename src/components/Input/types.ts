import { Variant, Size } from '../../enums'
import { Theme } from '../../theme'

export interface StyleProps {
  variant: Variant
  size: Size
}

export interface StylePropsWithTheme extends StyleProps {
  theme: Theme
}
