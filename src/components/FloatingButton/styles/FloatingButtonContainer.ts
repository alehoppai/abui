import styled from 'styled-components'
import { ButtonContainer } from '../../Button/styles'
import { getThemedSize } from '../../../helpers'

const FloatingButtonContainer = styled(ButtonContainer)`
  width: ${props => getThemedSize(props.size, props.theme)}px;
  height: ${props => getThemedSize(props.size, props.theme)}px;

  border-radius: 50%;
  max-width: initial;
  min-width: initial;
`

export { FloatingButtonContainer }
