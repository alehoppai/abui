import styled from 'styled-components'
import { StylePropsWithTheme } from '../types'
import { Appearance, Size } from '../../../enums'

type ListItemRadioProps = Pick<StylePropsWithTheme, 'theme' | 'size' | 'selected' | 'appearance'>

const getMainColor = (props: ListItemRadioProps) => 
  props.appearance === Appearance.Primary
    ? props.theme.color.primary.main
    : props.theme.color.secondary.main

const getFillColor = (props: ListItemRadioProps) =>
  props.selected
    ? props.appearance === Appearance.Primary
      ? props.theme.color.primary.mainFade15
      : props.theme.color.secondary.mainFade15
    : 'transparent'

const getSize = (props: ListItemRadioProps) => {
  switch (props.size) {
  case Size.Large:
    return props.theme.radioInputs.large
  case Size.Medium:
    return props.theme.radioInputs.medium
  case Size.Small:
    return props.theme.radioInputs.small
  }
}

const getIndicatorSize = (props: ListItemRadioProps) =>
  getSize(props) - 7

const getHoverFillColor = (props: ListItemRadioProps) =>
  props.appearance === Appearance.Primary
    ? props.theme.color.primary.mainFade15
    : props.theme.color.primary.mainFade15

const getGapSize = (props: ListItemRadioProps) => {
  const size = getSize(props)
  const indicatorSize = getIndicatorSize(props)

  return (size / 2) - (indicatorSize / 2)
}

export const ListItemRadio = styled.div<ListItemRadioProps>`
  background-color: ${props => getFillColor(props)};
  border: 2px solid ${props => getMainColor(props)};

  width: ${props => getSize(props)}px;
  height: ${props => getSize(props)}px;
  border-radius: 50%;
  position: relative;

  margin: 0 5px;

  transition: ease-in-out .3s;

  &:hover {
    background-color: ${props => getHoverFillColor(props)};
  }

  &:after {
    content: "";
    display: ${props => props.selected ? 'block' : 'none'};

    position: absolute;
    top: ${props => getGapSize(props)}px;
    left: ${props => getGapSize(props)}px;

    width: ${props => getIndicatorSize(props)}px;
    height: ${props => getIndicatorSize(props)}px;
    border-radius: 50%;

    background-color: ${props => getMainColor(props)}
  }
`