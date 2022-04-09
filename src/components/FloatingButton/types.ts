import { Variant, Size, Appearance } from '../../enums'
import { Theme } from '../../theme'

export enum FloatingButtonVariant {
  Filled = Variant.Filled,
  Outlined = Variant.Outlined,
}

export interface StyleProps {
  variant: FloatingButtonVariant
  size: Size
  appearance: Appearance
}

export interface StylePropsWithTheme extends StyleProps {
  theme: Theme
}

