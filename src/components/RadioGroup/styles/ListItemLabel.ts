import styled from 'styled-components'
import { getThemedFontSize } from '../../../helpers'

import { StylePropsWithTheme } from '../types'

type Props = Pick<StylePropsWithTheme, 'theme' | 'size'>


/**
 * FIXME: This one should inherit <Text /> styled component
 * which is not implemented yet
 */
export const ListItemLabel = styled.span<Props>`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${props => getThemedFontSize(props.size, props.theme)}px;
  margin: 0px 5px;
`
