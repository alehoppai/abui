import styled from 'styled-components'
import { StylePropsWithTheme } from '../types'

const InputRow = styled.div<StylePropsWithTheme>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  
  min-width: 150px;
  width: 100%;
`

export { InputRow }
