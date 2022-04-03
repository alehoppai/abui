import styled from 'styled-components'
import {
  Size,
  Appearance,
} from '../../enums'
import { Theme } from '../../theme'

export interface StyleProps {
  size: Size
  appearance: Appearance 
}

interface StylePropsWithTheme extends StyleProps {
  theme: Theme
  active: boolean
}

const getMainColor = (props: StylePropsWithTheme) =>
  props.appearance === Appearance.Primary
    ? props.theme.color.primary.main
    : props.theme.color.secondary.main

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

const getContainerHeight = (props: StylePropsWithTheme) => {
  switch (props.size) {
  case Size.Large:
    return props.theme.checkInputs.height.large
  case Size.Medium:
    return props.theme.checkInputs.height.medium
  case Size.Small:
    return props.theme.checkInputs.height.small
  }
}

export const SwitchContainer = styled.label<StylePropsWithTheme>`
  display: block;
  position: relative;
  width: ${props => getContainerWidth(props)};
  height: ${props => getContainerHeight(props)};
  border-radius: 50px;
  border: 2px solid ${props => getMainColor(props)};
`

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
  height: ${props => getContainerHeight(props)};
  border-radius: 50px;
  transition: ease-in-out .3s;
  background-color: ${props => getContainerBackgroundColor(props)};
  opacity: ${props => getBackgroundOpacity(props)};
`

const getIndicatorSize = (props: StylePropsWithTheme) => {
  switch (props.size) {
  case Size.Large:
    return `${+props.theme.checkInputs.height.large.slice(0, 2) - 6}px`
  case Size.Medium:
    return `${+props.theme.checkInputs.height.medium.slice(0, 2) - 6}px`
  case Size.Small:
    return `${+props.theme.checkInputs.height.small.slice(0, 2) - 6}px`
  }
}

export const SwitchIndicator = styled.div<StylePropsWithTheme>`
  position: absolute;
  z-index: 2;
  top: 3px;
  left: ${props => props.active ? '24px' : '3px'};

  width: ${props => getIndicatorSize(props)};
  height: ${props => getIndicatorSize(props)};

  border-radius: 50%;
  background-color: ${props => getMainColor(props)};

  transition: ease-in-out .3s
`
