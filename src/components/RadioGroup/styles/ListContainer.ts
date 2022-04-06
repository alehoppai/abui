import styled from 'styled-components'

import { StylePropsWithTheme, ListDirection } from '../types'

type ListProps = Pick<StylePropsWithTheme, 'listDirection'>

const getListDirection = (props: ListProps) =>
  props.listDirection === ListDirection.Horizontal
    ? 'row'
    : 'column'

const getJustifyContent = (props: ListProps) =>
  props.listDirection === ListDirection.Horizontal
    ? 'flex-start'
    : 'center'

export const ListContainer = styled.div<ListProps>`
  display: flex;
  flex-direction: ${props => getListDirection(props)};
  justify-content: ${props => getJustifyContent(props)};
  align-items: flex-start;
`
