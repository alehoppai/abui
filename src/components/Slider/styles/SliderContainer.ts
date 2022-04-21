import styled from 'styled-components'
import { Size } from '../../../enums'
import { getThemedInputSize } from '../../../helpers'
import { Theme } from '../../../theme'

interface Props {
  size: Size
  theme: Theme
}

const SliderContainer = styled.div<Props>`
  width: 100%;
  height: ${({ size, theme }) => getThemedInputSize(size, theme)}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export { SliderContainer }
