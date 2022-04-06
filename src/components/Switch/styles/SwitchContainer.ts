import styled from 'styled-components'
import { StylePropsWithTheme } from '../types'
import { Size } from '../../../enums'
import { getContainerHeight, getMainColor } from './shared'

const getContainerWidth = (props: StylePropsWithTheme) => {
  switch (props.size) {
  case Size.Large:
    return props.theme.checkInputs.width.large
  case Size.Medium:
    return props.theme.checkInputs.width.medium
  case Size.Small:
    return props.theme.checkInputs.width.small
  }
}

export const SwitchContainer = styled.label<StylePropsWithTheme>`
  display: block;
  position: relative;
  width: ${props => getContainerWidth(props)}px;
  height: ${props => getContainerHeight(props)}px;
  border-radius: 50px;
  border: 2px solid ${props => getMainColor(props)};
`
