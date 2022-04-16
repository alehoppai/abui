import React, { useState } from 'react'
import { StyleProps } from './types'
import { InputContainer, InputLabelText, InputRow } from './styles'
import { Size, Variant } from '../../enums'

interface Props extends StyleProps {
  value: string 
  label?: string
  placeholder?: string
  onChange: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

function Input({
  value,
  label,
  placeholder,
  onChange,
  onFocus,
  onBlur,

  variant = Variant.Filled,
  size = Size.Medium,
}: Props) {
  const [ focus, setFocus ] = useState(false)

  const onFocusInput = () => {
    setFocus(true)

    if (onFocus != null) {
      onFocus()
    }
  }

  const onBlurInput = () => {
    setFocus(false)

    if (onBlur != null) {
      onBlur()
    }
  }

  return (<InputRow
    variant={variant}    
    size={size}
  >
    { label != null ? (<InputLabelText
      variant={variant}
      size={size}
    >{label}</InputLabelText>) : null }
    <InputContainer 
      variant={variant}
      size={size}
      focus={focus}
    >
      <input
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        value={value}
        onChange={
          (event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event.target.value)
        }
        placeholder={placeholder}
        type="text"
      />  
    </InputContainer> 
  </InputRow>)
}

export { Input }
