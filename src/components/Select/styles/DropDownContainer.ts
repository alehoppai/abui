import styled from 'styled-components'
import { StylePropsWithTheme } from '../types'
import { getThemedInputSize } from '../../../helpers'
import { Variant } from '../../../enums'
import { Theme } from '../../../theme'

// TODO: Same thing used in Input component, extract to shared helpers
const getInputBackgroundColor = (
  variant: Variant,
  { color: { primary: { mainFade15 } } }: Theme,
) => variant === Variant.Filled ? mainFade15 : 'transparent'

// TODO: Same thing used in Input component, extract to shared helpers
const getFocusedColor = (focus = false, { color: { primary } }: Theme) =>
  focus ? primary.main : primary.mainFade50

interface Props extends StylePropsWithTheme {
  focus: boolean
  itemsVisible: number
  itemsNum: number
}

const DropDownContainer = styled.div<Props>`
  visibility: ${({ focus }) => focus ? 'visible' : 'hidden'};
  opacity: ${({ focus }) => focus ? 1 : 0};
  background-color: ${({ variant, theme }) =>
    getInputBackgroundColor(variant, theme)};
  
  border-width: 1px;
  border-style: ${({ variant }) =>
    variant === Variant.Outlined ? 'solid' : 'none'};
  border-color: ${({ focus, theme }) => getFocusedColor(focus, theme)};

  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ size, theme, itemsVisible, focus, itemsNum }) =>
    focus
      ? itemsNum < 3
        ? getThemedInputSize(size, theme) * itemsNum
        : getThemedInputSize(size, theme) * itemsVisible
      : 0}px;

  overflow-y: auto;

  transition: ease-in-out .3s;
`

export { DropDownContainer }
