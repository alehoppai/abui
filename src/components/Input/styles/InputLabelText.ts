import styled from 'styled-components'
import { StylePropsWithTheme } from '../types'
import { getThemedFontSize } from '../../../helpers'


const InputLabelText = styled.div<StylePropsWithTheme>`
  width: 100%;
  font-size: ${props => getThemedFontSize(props.size, props.theme)}px;

  margin-bottom: 5px;
`

export { InputLabelText }
