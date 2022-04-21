import styled from 'styled-components'
import { Size } from '../../../enums'
import { getThemedFontSize } from '../../../helpers'

interface Props {
  size: Size
}

// TODO: replace with Text typography component in future
const Text = styled.p<Props>`
  font-size: ${({ size, theme }) => getThemedFontSize(size, theme)}px;
  margin: 0 5px;
`

export { Text }
