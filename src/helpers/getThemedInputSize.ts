import { Size } from '../enums'
import { Theme } from '../theme'

export function getThemedInputSize(
  size: Size,
  theme: Theme,
): number {
  switch (size) {
  case Size.Large:
    return theme.inputs.large
  case Size.Medium:
    return theme.inputs.medium
  case Size.Small:
    return theme.inputs.small
  }
} 
