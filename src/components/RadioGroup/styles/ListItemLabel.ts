import styled from 'styled-components'
import { Size } from '../../../enums'

import { StylePropsWithTheme } from '../types'

type Props = Pick<StylePropsWithTheme, 'theme' | 'size'>

const getFontSize = (props: Props) => {
  switch (props.size) {
  case Size.Large:
    return props.theme.fontSizes.large
  case Size.Medium:
    return props.theme.fontSizes.medium
  case Size.Small:
    return props.theme.fontSizes.small
  }
}

/**
 * FIXME: This one should inherit <Text /> styled component
 * which is not implemented yet
 */
export const ListItemLabel = styled.span<Props>`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => getFontSize(props)}px;
  margin: 0px 5px;
`
