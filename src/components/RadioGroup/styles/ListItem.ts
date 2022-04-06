import styled from 'styled-components'
import { StylePropsWithTheme, ListDirection } from '../types'
import { Appearance } from '../../../enums'

type Props = Pick<StylePropsWithTheme, 'theme' | 'listDirection' | 'appearance'>

const getBorderColor = (props: Props) =>
  props.appearance === Appearance.Primary
    ? props.theme.color.primary.main
    : props.theme.color.secondary.main

const getBorderStyle = (props: Props) =>
  props.listDirection === ListDirection.Horizontal
    ? 'solid'
    : 'none'  

const getHorizontalMargin = (props: Props) =>
  props.listDirection === ListDirection.Horizontal
    ? '5px'
    : '0'

export const ListItem = styled.label<Props>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 200px;
  margin: 5px ${props => getHorizontalMargin(props)};

  border-color: ${props => getBorderColor(props)};
  border-width: 2px;
  border-right-style: ${props => getBorderStyle(props)};
`
