export interface RadioItem {
  label: string
  value: number
}

export enum LabelPosition {
  Right = 'right',
  Left = 'left',
}

export enum ListDirection {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

import { 
  Theme,
} from '../../theme'

import {
  Size,
  Appearance,
} from '../../enums'

export interface StyleProps {
  listDirection: ListDirection
  size: Size
  appearance: Appearance
  selected: boolean
}

export interface StylePropsWithTheme extends StyleProps {
  theme: Theme
}
