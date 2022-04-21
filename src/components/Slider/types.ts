import { Appearance, Size } from '../../enums'
import { Theme } from '../../theme'

export interface StyleProps {
  appearance: Appearance
  size: Size
}

export interface StylePropsWithTheme extends StyleProps {
  theme: Theme
}
