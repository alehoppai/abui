import styled from 'styled-components'
import { Appearance, Size } from '../../../enums'
import { Theme } from '../../../theme'
import { getThemedFontSize, getThemedInputSize } from '../../../helpers'

const getColor = (appearance: Appearance, theme: Theme) =>
  appearance === Appearance.Primary
    ? theme.color.primary.main
    : theme.color.secondary.main


interface Props {
  size: Size
  offsetLeft: number
  appearance: Appearance
  visible: boolean
}

const SliderValueTooltip = styled.div<Props>`
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};

  position: absolute;
  left: ${({ offsetLeft }) => offsetLeft}%;
  top: ${({ size, theme }) => getThemedInputSize(size, theme) - 5}px;

  padding: 10px 20px;

  transform: translateX(-50%);

  width: ${({ size, theme }) => getThemedInputSize(size, theme) / 2}px;
  height: ${({ size, theme }) => getThemedInputSize(size, theme) / 2}px;

  background-color: ${({ appearance, theme }) => getColor(appearance, theme)};

  font-size: ${({ size, theme }) => getThemedFontSize(size, theme)}px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: ease-in-out .3s;
`

export { SliderValueTooltip }
