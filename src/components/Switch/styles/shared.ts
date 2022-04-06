import { Appearance, Size } from '../../../enums'
import { StylePropsWithTheme } from '../types'

export const getMainColor = (props: StylePropsWithTheme) =>
  props.appearance === Appearance.Primary
    ? props.theme.color.primary.main
    : props.theme.color.secondary.main

export const getContainerHeight = (props: StylePropsWithTheme) => {
  switch (props.size) {
  case Size.Large:
    return props.theme.checkInputs.height.large
  case Size.Medium:
    return props.theme.checkInputs.height.medium
  case Size.Small:
    return props.theme.checkInputs.height.small
  }
}
