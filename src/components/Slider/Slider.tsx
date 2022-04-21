import React, { useState } from 'react'
import { StyleProps } from './types'

import {
  SliderInputContainer,
  SliderFillTrack,
  SliderContainer,
  Text,
  SliderValueTooltip,
} from './styles'

interface Props extends StyleProps {
  min: number
  max: number
  step: number
  value: number
  label?: string
  onChange: (value: number) => void
}

function Slider({
  min = 0,
  max = 100,
  step = 10,
  label,
  value,
  onChange,

  appearance,
  size,
}: Props) {
  const [ focused, setFocused ] = useState(false)

  const fillPosition = Math.round((value * 100 / max) / 10) * 10

  return (<>
    {(label && label.length) ? (<span>{label}</span>) : null}
    <SliderContainer size={size}>
      <Text size={size}>{min}</Text>
      <SliderInputContainer
        appearance={appearance}
        size={size}
      >
        <SliderFillTrack
          width={fillPosition}
          appearance={appearance}
          size={size}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={event => onChange(+event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <SliderValueTooltip
          visible={focused}
          size={size}
          offsetLeft={fillPosition}
          appearance={appearance}
        >
          {value}
        </SliderValueTooltip>
      </SliderInputContainer>
      <Text size={size}>{max}</Text>
    </SliderContainer>
  </>)
}

export { Slider }
