import styled from 'styled-components'
import { StylePropsWithTheme } from '../types'
import { getThemedInputSize } from '../../../helpers'
import { Variant } from '../../../enums'
import { Theme } from '../../../theme'
import { getThemedFontSize } from '../../../helpers'

const getFocusedColor = (focus = false, { color: { primary } }: Theme) =>
  focus ? primary.main : primary.mainFade50

const getInputBackgroundColor = (
  variant: Variant,
  { color: { primary: { mainFade15 } } }: Theme,
) => variant === Variant.Filled ? mainFade15 : 'none'

const getDecorativeLineColor = (
  focus = false,
  { color: { primary: { main, mainFade50 } } }: Theme,
) => focus ? main : mainFade50

const getBorder = (
  variant: Variant,
  theme: Theme,
  focus = false,
) =>
  variant === Variant.Outlined
    ? `1px solid ${getFocusedColor(focus, theme)}`
    : 'none'

const InputContainer = styled.div<StylePropsWithTheme & { focus: boolean }>`
  width: 100%;
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;

    height: 1px;

    bottom: 10px;
    left: 10px;
    right: 10px;

    background-color: ${props => getDecorativeLineColor(
    props.focus, props.theme)};
  }

  >input {
    height: ${props => getThemedInputSize(props.size, props.theme)}px;
    border: ${props => getBorder(props.variant, props.theme)};

    outline: none;
    padding: 0 10px;
    width: 100%;

    transition: ease-in-out .3s;

    font-size: ${props => getThemedFontSize(props.size, props.theme)}px;

    background-color: ${props => getInputBackgroundColor(
    props.variant, props.theme)};

    &:focus {
      border: ${props => getBorder(props.variant, props.theme, true)};
    }
    &::placeholder {
      color: ${props => props.theme.color.primary.mainFade50};
    }
    
  }
`

export { InputContainer }
