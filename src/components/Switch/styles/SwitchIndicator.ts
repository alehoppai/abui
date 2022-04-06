import styled from 'styled-components'
import { StylePropsWithTheme } from '../types'
import { Size } from '../../../enums'
import { getMainColor } from './shared'

const getIndicatorSize = (props: StylePropsWithTheme) => {
  switch (props.size) {
  case Size.Large:
    return props.theme.checkInputs.height.large
  case Size.Medium:
    return props.theme.checkInputs.height.medium
  case Size.Small:
    return props.theme.checkInputs.height.small
  }
}

export const SwitchIndicator = styled.div<StylePropsWithTheme>`
  position: absolute;
  z-index: 2;
  top: 2px;
  left: ${props => props.active ? '24px' : '3px'};

  width: ${props => getIndicatorSize(props) - 5}px;
  height: ${props => getIndicatorSize(props) - 5}px;

  border-radius: 50%;
  background-color: ${props => getMainColor(props)};

  transition: ease-in-out .3s
`
