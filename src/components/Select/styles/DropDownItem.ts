
import styled from 'styled-components'
import { getThemedInputSize } from '../../../helpers'
import { StylePropsWithTheme } from '../types'

interface Props extends StylePropsWithTheme {
  selected: boolean
}

const DropDownItem = styled.div<Props>`
  width: 100%;
  min-height: ${({ size, theme }) => getThemedInputSize(size, theme)}px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding: 0 10px;

  cursor: pointer;

  transition: ease-in-out .3s;

  &:hover {
    padding-left: 20px;
    background-color: #ececec;
  }
`

export { DropDownItem }
