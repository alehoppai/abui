import { Size, Appearance, Variant } from '../../enums'
import { Theme } from '../../theme'

export interface StyleProps {
  size: Size
  variant: Variant
  appearance: Appearance 
}

export interface StylePropsWithTheme extends StyleProps {
  theme: Theme
}
