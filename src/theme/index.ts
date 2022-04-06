export { DayTheme } from './day'
export { NightTheme } from './night'

interface TextConfig {
  main: string
  text: string
  mainFade80: string
  mainFade25: string
  mainFade15: string
}

interface ThemeColors {
  primary: TextConfig
  secondary: TextConfig
}

interface ThemeSizings {
  small: number
  medium: number
  large: number
}

interface CheckInputsSizings {
  width: ThemeSizings
  height: ThemeSizings
}

export interface Theme {
  color: ThemeColors
  inputs: ThemeSizings
  checkInputs: CheckInputsSizings
  radioInputs: ThemeSizings
  paddings: ThemeSizings
  fontSizes: ThemeSizings
}
