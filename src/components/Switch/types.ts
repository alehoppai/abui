import {
  Size,
  Appearance,
} from '../../enums'
import { Theme } from '../../theme'

export interface StyleProps {
  size: Size
  appearance: Appearance 
}

export interface StylePropsWithTheme extends StyleProps {
  theme: Theme
  active: boolean
}
