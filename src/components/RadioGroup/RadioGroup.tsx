import React from 'react'

import {
  StyleProps,
  RadioItem,
  LabelPosition,
  ListDirection,
} from './types'

import {
  ListTitle,
  ListContainer,
  ListItem,
  ListItemLabel,
  ListItemRadio,
} from './styles'
import { Appearance, Size } from '../../enums'

interface Props extends Partial<StyleProps> {
  title?: string
  labelPosition?: LabelPosition
  listDirection?: ListDirection
  options: RadioItem[]
  selectedOption: number | null
  onSelect: (option: number) => void
}

function RadioGroup({
  title,
  labelPosition = LabelPosition.Right,
  listDirection = ListDirection.Vertical,
  options = [],
  selectedOption = null,
  size = Size.Medium,
  appearance = Appearance.Primary,
  onSelect,
}: Props) {
  return (<>
    { title?.length && <ListTitle>{title}</ListTitle> || null }
    <ListContainer listDirection={listDirection}>
      {options.map(({label, value}) => <ListItem
        key={`${label.trim()}-${value}`}
        htmlFor={`${label.trim()}-${value}`}
        listDirection={listDirection}
        appearance={appearance}
      >
        {labelPosition === LabelPosition.Left ? (<ListItemLabel size={size}>
          {label}
        </ListItemLabel>) : null}

        <ListItemRadio
          selected={selectedOption === value}
          size={size}
          appearance={appearance}
        />

        {labelPosition === LabelPosition.Right ? (<ListItemLabel size={size}>
          {label}
        </ListItemLabel>) : null}

        <input
          type="radio"
          id={`${label.trim()}-${value}`}
          name={`${title?.trim().replaceAll(' ', '-') ?? 'RadioGroup'}`}
          value={value}
          onChange={event => onSelect(+event.target.value)}
          hidden
        />
      </ListItem>)}
    </ListContainer>
  </>)
}

export { RadioGroup }
