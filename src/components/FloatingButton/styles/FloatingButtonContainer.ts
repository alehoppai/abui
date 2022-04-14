import styled from 'styled-components'
import { ButtonContainer } from '../../Button/styles'
import { getThemedInputSize } from '../../../helpers'

const FloatingButtonContainer = styled(ButtonContainer)`
  width: ${props => getThemedInputSize(props.size, props.theme)}px;
  height: ${props => getThemedInputSize(props.size, props.theme)}px;

  border-radius: 50%;
  max-width: initial;
  min-width: initial;
`

export { FloatingButtonContainer }
