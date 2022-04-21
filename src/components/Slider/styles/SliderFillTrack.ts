import styled from 'styled-components'
import { Appearance } from '../../../enums'
import { getThemedInputSize } from '../../../helpers'
import { Theme } from '../../../theme'
import { StylePropsWithTheme } from '../types'

const getColor = (appearance: Appearance, theme: Theme) =>
  appearance === Appearance.Primary
    ? theme.color.primary.main
    : theme.color.secondary.main

type Props = Pick<StylePropsWithTheme, 'appearance' | 'theme' | 'size'> & {
  width: number
}

const SliderFillTrack = styled.div<Props>`
  position: absolute;
  left: 0;
  height: ${({ size, theme }) => getThemedInputSize(size, theme) / 10}px;
  width: ${({ width }) => width}%;
  background-color: ${({ appearance, theme }) =>
    getColor(appearance, theme)};
  transition: ease-in-out .1s;
`

export { SliderFillTrack }
