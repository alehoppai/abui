import styled from 'styled-components'
import { StylePropsWithTheme } from '../types'
import { Appearance } from '../../../enums'
import { getContainerHeight } from './shared'

const getBackgroundSize = (props: StylePropsWithTheme) =>
  props.active
    ? '100%'
    : '0'

const getBackgroundOpacity = (props: StylePropsWithTheme) =>
  props.active
    ? '1'
    : '0'

const getContainerBackgroundColor = (props: StylePropsWithTheme) =>
  props.appearance === Appearance.Primary
    ? props.theme.color.primary.mainFade25
    : props.theme.color.secondary.mainFade25

export const SwitchFill = styled.div<StylePropsWithTheme>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: ${props => getBackgroundSize(props)};
  height: ${props => getContainerHeight(props)}px;
  border-radius: 50px;
  transition: ease-in-out .3s;
  background-color: ${props => getContainerBackgroundColor(props)};
  opacity: ${props => getBackgroundOpacity(props)};
`
