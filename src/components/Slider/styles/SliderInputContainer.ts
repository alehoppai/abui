import styled from 'styled-components'
import { StylePropsWithTheme } from '../types'
import { getThemedInputSize } from '../../../helpers'
import { Appearance } from '../../../enums'

const getColor = (
  appearance: StylePropsWithTheme['appearance'],
  theme: StylePropsWithTheme['theme'],
  fade = true,
) => appearance === Appearance.Primary
  ? fade ? theme.color.primary.mainFade50 : theme.color.primary.main
  : fade ? theme.color.secondary.mainFade50 : theme.color.secondary.main

const SliderInputContainer = styled.div<StylePropsWithTheme>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: ${({ size, theme }) => getThemedInputSize(size, theme)}px;

  >input {
    width: 100%;
    appearance: none;
    height: ${({ size, theme }) => getThemedInputSize(size, theme) / 10 / 2}px;
    background-color: ${({ appearance, theme }) => getColor(
    appearance, theme)};

    &::-webkit-slider-thumb {
      appearance: none;
      border-radius: 50%;
      height: ${({ size, theme }) => getThemedInputSize(size, theme) / 2}px;
      width: ${({ size, theme }) => getThemedInputSize(size, theme) / 2}px;
      background-color: ${({ appearance, theme }) => getColor(
    appearance, theme, false)};
      cursor: pointer;
    }

    &::-moz-range-thumb {
      border-radius: 50%;
      height: ${({ size, theme }) => getThemedInputSize(size, theme) / 2}px;
      width: ${({ size, theme }) => getThemedInputSize(size, theme) / 2}px;
      background-color: ${({ appearance, theme }) => getColor(
    appearance, theme, false)};
      cursor: pointer;
    }
  }
` 

export { SliderInputContainer }
