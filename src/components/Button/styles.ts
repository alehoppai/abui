import styled from 'styled-components'
import {
  Size,
  Variant,
  Appearance,
} from './enums'
import { Theme } from '../../theme'

export interface StyleProps {
  size: Size
  variant: Variant
  appearance: Appearance 
  theme: Theme
}

const getButtonHeight = (props: StyleProps) => {
  switch (props.size) {
  case Size.Large:
    return props.theme.inputs.large
  case Size.Medium:
    return props.theme.inputs.medium
  case Size.Small:
    return props.theme.inputs.small
  }
} 

const getButtonPadding = (props: StyleProps) => {
  switch (props.size) {
  case Size.Large:
    return props.theme.paddings.large
  case Size.Medium:
    return props.theme.paddings.medium
  case Size.Small:
    return props.theme.paddings.small
  } 
}

const getButtonFontSize = (props: StyleProps) => {
  switch (props.size) {
  case Size.Large:
    return props.theme.fontSizes.large
  case Size.Medium:
    return props.theme.fontSizes.medium
  case Size.Small:
    return props.theme.fontSizes.small
  } 
}

const getAppearanceColor = (props: StyleProps) => {
  switch (props.appearance) {
  case Appearance.Primary:
    return props.theme.color.primary.main
  case Appearance.Secondary:
    return props.theme.color.secondary.main
  }
}

const getBorder = (props: StyleProps) => 
  props.variant === Variant.Outlined
    ? `1px solid ${getAppearanceColor(props)}` 
    : 'none'

const getTextColor = (props: StyleProps) => {
  if (props.variant === Variant.Filled) {
    return props.appearance === Appearance.Primary
      ? props.theme.color.primary.text
      : props.theme.color.secondary.text 
  }

  return props.appearance === Appearance.Primary
    ? props.theme.color.primary.main
    : props.theme.color.secondary.main 
}

const getBackgroundColor = (props: StyleProps) =>
  props.variant === Variant.Filled
    ? props.appearance === Appearance.Primary
      ? props.theme.color.primary.main
      : props.theme.color.secondary.main
    : 'transparent'

const getHoverBackgroundColor = (props: StyleProps) => {
  if (props.appearance === Appearance.Primary) {
    switch (props.variant) {
    case Variant.Filled:
      return props.theme.color.primary.mainFade80
    case Variant.Outlined:
      return props.theme.color.primary.mainFade25
    case Variant.Text:
      return props.theme.color.primary.mainFade15
    }
  } else if (props.appearance === Appearance.Secondary) {
    switch (props.variant) {
    case Variant.Filled:
      return props.theme.color.secondary.mainFade80
    case Variant.Outlined:
      return props.theme.color.secondary.mainFade25
    case Variant.Text:
      return props.theme.color.secondary.mainFade15 
    }
  }
}

const ButtonContainer = styled.button<StyleProps>`
  width: auto;
  height: ${props => getButtonHeight(props as StyleProps)};
  border: ${props => getBorder(props as StyleProps)};
  color: ${props => getTextColor(props as StyleProps)};
  padding-right: ${props => getButtonPadding(props as StyleProps)};
  padding-left: ${props => getButtonPadding(props as StyleProps)};
  
  font-size: ${props => getButtonFontSize(props as StyleProps)};
  
  background-color: ${props => getBackgroundColor(props as StyleProps)};
  cursor: pointer;

  transition: ease-out .3s;

  &:hover {
    background-color: ${props => getHoverBackgroundColor(props as StyleProps)};
  }
`

export { ButtonContainer }
