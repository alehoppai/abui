import React, { useState, useCallback } from 'react'
import { Size, Variant } from '../../enums'
import { StyleProps } from './types'
import { Input } from '../Input'
import {
  SelectContainer,
  DropDownContainer,
  DropDownItem,
} from './styles'

interface Props extends StyleProps {
  label?: string
  itemsVisible?: number,
  selectedValue: string 
  values: string[]
  onSelectValue: (id: string) => void
}

const createLoopKey = (index: number, value: string) =>
  `0${index}_${(value.toLocaleLowerCase().trim()).replaceAll(' ', '-')}`

function Select({
  label,
  itemsVisible = 3,
  variant = Variant.Filled,
  size = Size.Medium,

  selectedValue = '',
  values = [],
  onSelectValue,
}: Props) {
  const [ filter, setFilter ] = useState(selectedValue)
  const [ focus, setFocus ] = useState(true)

  const onFocus = useCallback(() => setFocus(true), [ focus ])
  const onBlur = useCallback(() => setFocus(false), [ focus ])

  const filteredValues = values.filter(value => value.includes(filter))

  return (<SelectContainer>
    <Input
      label={label}
      variant={variant}
      size={size}
      value={filter}
      onChange={setFilter}

      onFocus={onFocus}
      onBlur={onBlur}
    /> 

    <DropDownContainer
      focus={focus}
      variant={variant}
      size={size}
      itemsVisible={itemsVisible}
      itemsNum={filteredValues.length}
    >
      {filteredValues
        .map((value, index) => (
          <DropDownItem
            key={createLoopKey(index, value)}
            selected={value === selectedValue}
            size={size}
            variant={variant}
            onClick={() => onSelectValue(value)}
          >
            {value}
          </DropDownItem>)
        )
      }
    </DropDownContainer>
  </SelectContainer>)
}

export { Select }
