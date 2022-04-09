import styled from 'styled-components'
import { Size, Appearance, Variant } from '../../../enums'
import { StylePropsWithTheme } from '../types'
import { getThemedSize } from '../../../helpers'

const getButtonPadding = (props: StylePropsWithTheme) => {
  switch (props.size) {
  case Size.Large:
    return props.theme.paddings.large
  case Size.Medium:
    return props.theme.paddings.medium
  case Size.Small:
    return props.theme.paddings.small
  } 
}

const getButtonFontSize = (props: StylePropsWithTheme) => {
  switch (props.size) {
  case Size.Large:
    return props.theme.fontSizes.large
  case Size.Medium:
    return props.theme.fontSizes.medium
  case Size.Small:
    return props.theme.fontSizes.small
  } 
}

const getAppearanceColor = (props: StylePropsWithTheme) => {
  switch (props.appearance) {
  case Appearance.Primary:
    return props.theme.color.primary.main
  case Appearance.Secondary:
    return props.theme.color.secondary.main
  }
}

const getBorder = (props: StylePropsWithTheme) => 
  props.variant === Variant.Outlined
    ? `1px solid ${getAppearanceColor(props)}` 
    : 'none'

const getTextColor = (props: StylePropsWithTheme) => {
  if (props.variant === Variant.Filled) {
    return props.appearance === Appearance.Primary
      ? props.theme.color.primary.text
      : props.theme.color.secondary.text 
  }

  return props.appearance === Appearance.Primary
    ? props.theme.color.primary.main
    : props.theme.color.secondary.main 
}

const getBackgroundColor = (props: StylePropsWithTheme) =>
  props.variant === Variant.Filled
    ? props.appearance === Appearance.Primary
      ? props.theme.color.primary.main
      : props.theme.color.secondary.main
    : 'transparent'

const getHoverBackgroundColor = (props: StylePropsWithTheme) => {
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

const ButtonContainer = styled.button<StylePropsWithTheme>`
  width: auto;
  min-width: 150px;
  height: ${props => getThemedSize(props.size, props.theme)}px;
  border: ${props => getBorder(props)};
  color: ${props => getTextColor(props)};
  padding-right: ${props => getButtonPadding(props)}px;
  padding-left: ${props => getButtonPadding(props)}px;
  
  font-size: ${props => getButtonFontSize(props)}px;
  
  background-color: ${props => getBackgroundColor(props)};
  cursor: pointer;

  transition: ease-out .3s;

  &:hover {
    background-color: ${props => getHoverBackgroundColor(props)};
  }
`

export { ButtonContainer }
