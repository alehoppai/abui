import React from 'react'

import {
  SwitchContainer,
  SwitchFill,
  SwitchIndicator,
  StyleProps
} from './styles'

import {
  Size,
  Appearance,
} from '../../enums'

interface Props extends StyleProps {
  id: string
  active: boolean
  onChange: (changeValue: boolean) => void
}

function Switch({
  id = 'switch-no-set-id',
  size = Size.Medium,
  appearance = Appearance.Primary,

  active = false,
  onChange,
}: Props) {
  return (<SwitchContainer
    size={size}
    appearance={appearance}
    active={active}
    htmlFor={id}
  >
    <SwitchFill
      size={size}
      appearance={appearance}
      active={active}
    />
    <SwitchIndicator
      size={size}
      appearance={appearance}
      active={active}
    />
    <input
      id={id}
      type="checkbox"
      value={active ? 1 : 0}
      onChange={event => onChange(Boolean(+event.target.value))}
      hidden
    />
  </SwitchContainer>)
}

export { Switch }
